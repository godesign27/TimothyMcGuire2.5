import React, { useState, useEffect, useMemo } from 'react';
import { BarChart3, Users, Eye, Clock, Globe, Monitor, ArrowUp, ArrowDown, Minus, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PageView {
  id: number;
  page: string;
  path: string;
  referrer: string;
  user_agent: string;
  screen_width: number;
  screen_height: number;
  language: string;
  session_id: string;
  created_at: string;
}

type DateRange = '24h' | '7d' | '30d' | '90d' | 'all';

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  about: 'About',
  contact: 'Contact',
  services: 'Services',
  'marketing-web-design': 'Marketing Web Design',
  'saas-product-design': 'SaaS Product Design',
  'mobile-web-design': 'Mobile & Web Design',
  'fractional-saas-designer': 'Fractional SaaS Designer',
  resume: 'Resume',
  solutions: 'Solutions',
  analytics: 'Analytics',
};

function getRangeStart(range: DateRange): Date | null {
  const now = new Date();
  switch (range) {
    case '24h': return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case '7d': return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case '30d': return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case '90d': return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    case 'all': return null;
  }
}

function getPreviousRangeStart(range: DateRange): Date | null {
  const now = new Date();
  switch (range) {
    case '24h': return new Date(now.getTime() - 48 * 60 * 60 * 1000);
    case '7d': return new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    case '30d': return new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
    case '90d': return new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
    case 'all': return null;
  }
}

function parseBrowser(ua: string): string {
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Other';
}

function parseDevice(width: number): string {
  if (width < 768) return 'Mobile';
  if (width < 1024) return 'Tablet';
  return 'Desktop';
}

function formatDomain(referrer: string): string {
  if (!referrer) return 'Direct';
  try {
    return new URL(referrer).hostname.replace('www.', '');
  } catch {
    return referrer;
  }
}

function ChangeIndicator({ current, previous }: { current: number; previous: number }) {
  if (previous === 0 && current === 0) return <span className="text-xs text-gray-400">--</span>;
  if (previous === 0) return <span className="text-xs text-emerald-500 flex items-center gap-0.5"><ArrowUp className="w-3 h-3" /> New</span>;

  const pct = Math.round(((current - previous) / previous) * 100);
  if (pct > 0) return <span className="text-xs text-emerald-500 flex items-center gap-0.5"><ArrowUp className="w-3 h-3" />+{pct}%</span>;
  if (pct < 0) return <span className="text-xs text-rose-500 flex items-center gap-0.5"><ArrowDown className="w-3 h-3" />{pct}%</span>;
  return <span className="text-xs text-gray-400 flex items-center gap-0.5"><Minus className="w-3 h-3" />0%</span>;
}

function BarChartSimple({ data, maxValue }: { data: { label: string; value: number }[]; maxValue: number }) {
  return (
    <div className="space-y-2">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-sm text-gray-600 dark:text-gray-400 w-32 truncate text-right">{item.label}</span>
          <div className="flex-1 h-7 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-teal-500 dark:bg-teal-400 rounded transition-all duration-500"
              style={{ width: maxValue > 0 ? `${(item.value / maxValue) * 100}%` : '0%' }}
            />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function TimelineChart({ views, range }: { views: PageView[]; range: DateRange }) {
  const buckets = useMemo(() => {
    const now = new Date();
    let bucketCount: number;
    let bucketMs: number;
    let labelFn: (d: Date) => string;

    switch (range) {
      case '24h':
        bucketCount = 24;
        bucketMs = 60 * 60 * 1000;
        labelFn = (d) => `${d.getHours().toString().padStart(2, '0')}:00`;
        break;
      case '7d':
        bucketCount = 7;
        bucketMs = 24 * 60 * 60 * 1000;
        labelFn = (d) => d.toLocaleDateString('en-US', { weekday: 'short' });
        break;
      case '30d':
        bucketCount = 30;
        bucketMs = 24 * 60 * 60 * 1000;
        labelFn = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
        break;
      case '90d':
        bucketCount = 12;
        bucketMs = 7.5 * 24 * 60 * 60 * 1000;
        labelFn = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
        break;
      default:
        bucketCount = 30;
        bucketMs = 24 * 60 * 60 * 1000;
        labelFn = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
    }

    const result: { label: string; count: number }[] = [];
    for (let i = bucketCount - 1; i >= 0; i--) {
      const start = new Date(now.getTime() - (i + 1) * bucketMs);
      const end = new Date(now.getTime() - i * bucketMs);
      const count = views.filter((v) => {
        const t = new Date(v.created_at).getTime();
        return t >= start.getTime() && t < end.getTime();
      }).length;
      result.push({ label: labelFn(end), count });
    }
    return result;
  }, [views, range]);

  const maxCount = Math.max(...buckets.map((b) => b.count), 1);

  return (
    <div className="flex items-end gap-1 h-40">
      {buckets.map((bucket, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            {bucket.count} views
          </div>
          <div
            className="w-full bg-teal-500 dark:bg-teal-400 rounded-t transition-all duration-500 min-h-[2px]"
            style={{ height: `${(bucket.count / maxCount) * 100}%` }}
          />
          <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate w-full text-center">
            {i % Math.max(1, Math.floor(buckets.length / 8)) === 0 ? bucket.label : ''}
          </span>
        </div>
      ))}
    </div>
  );
}

const Analytics: React.FC = () => {
  const [views, setViews] = useState<PageView[]>([]);
  const [previousViews, setPreviousViews] = useState<PageView[]>([]);
  const [range, setRange] = useState<DateRange>('7d');
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const fetchData = async () => {
    setLoading(true);
    const rangeStart = getRangeStart(range);
    const prevStart = getPreviousRangeStart(range);

    let query = supabase.from('page_views').select('*').order('created_at', { ascending: false });
    if (rangeStart) {
      query = query.gte('created_at', rangeStart.toISOString());
    }

    const { data } = await query;
    setViews(data ?? []);

    if (rangeStart && prevStart) {
      const { data: prev } = await supabase
        .from('page_views')
        .select('*')
        .gte('created_at', prevStart.toISOString())
        .lt('created_at', rangeStart.toISOString());
      setPreviousViews(prev ?? []);
    } else {
      setPreviousViews([]);
    }

    setLoading(false);
    setLastRefresh(new Date());
  };

  useEffect(() => {
    fetchData();
  }, [range]);

  const stats = useMemo(() => {
    const totalViews = views.length;
    const uniqueSessions = new Set(views.map((v) => v.session_id)).size;
    const prevTotalViews = previousViews.length;
    const prevUniqueSessions = new Set(previousViews.map((v) => v.session_id)).size;

    const pageMap = new Map<string, number>();
    views.forEach((v) => {
      pageMap.set(v.page, (pageMap.get(v.page) || 0) + 1);
    });
    const topPages = [...pageMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([page, count]) => ({ label: PAGE_LABELS[page] || page, value: count }));

    const browserMap = new Map<string, number>();
    views.forEach((v) => {
      const browser = parseBrowser(v.user_agent);
      browserMap.set(browser, (browserMap.get(browser) || 0) + 1);
    });
    const browsers = [...browserMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ label: name, value: count }));

    const deviceMap = new Map<string, number>();
    views.forEach((v) => {
      const device = parseDevice(v.screen_width);
      deviceMap.set(device, (deviceMap.get(device) || 0) + 1);
    });
    const devices = [...deviceMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ label: name, value: count }));

    const refMap = new Map<string, number>();
    views.forEach((v) => {
      const ref = formatDomain(v.referrer);
      refMap.set(ref, (refMap.get(ref) || 0) + 1);
    });
    const referrers = [...refMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name, count]) => ({ label: name, value: count }));

    const langMap = new Map<string, number>();
    views.forEach((v) => {
      const lang = v.language?.split('-')[0] || 'unknown';
      langMap.set(lang, (langMap.get(lang) || 0) + 1);
    });
    const languages = [...langMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({ label: name.toUpperCase(), value: count }));

    const sessionPages = new Map<string, Set<string>>();
    views.forEach((v) => {
      if (!sessionPages.has(v.session_id)) sessionPages.set(v.session_id, new Set());
      sessionPages.get(v.session_id)!.add(v.page);
    });
    const avgPagesPerSession = uniqueSessions > 0
      ? (totalViews / uniqueSessions).toFixed(1)
      : '0';
    const prevAvgPages = prevUniqueSessions > 0
      ? (prevTotalViews / prevUniqueSessions).toFixed(1)
      : '0';

    return {
      totalViews,
      uniqueSessions,
      prevTotalViews,
      prevUniqueSessions,
      topPages,
      browsers,
      devices,
      referrers,
      languages,
      avgPagesPerSession,
      prevAvgPages,
    };
  }, [views, previousViews]);

  const rangeLabels: Record<DateRange, string> = {
    '24h': 'Last 24 Hours',
    '7d': 'Last 7 Days',
    '30d': 'Last 30 Days',
    '90d': 'Last 90 Days',
    all: 'All Time',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Site Analytics</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Last updated {lastRefresh.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {(Object.keys(rangeLabels) as DateRange[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    range === r
                      ? 'bg-teal-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {r === 'all' ? 'All' : r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Total Page Views</span>
                  <Eye className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalViews.toLocaleString()}</div>
                <ChangeIndicator current={stats.totalViews} previous={stats.prevTotalViews} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Unique Visitors</span>
                  <Users className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.uniqueSessions.toLocaleString()}</div>
                <ChangeIndicator current={stats.uniqueSessions} previous={stats.prevUniqueSessions} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Pages / Session</span>
                  <BarChart3 className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.avgPagesPerSession}</div>
                <ChangeIndicator current={parseFloat(stats.avgPagesPerSession)} previous={parseFloat(stats.prevAvgPages)} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Top Page</span>
                  <Clock className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                  {stats.topPages[0]?.label || '--'}
                </div>
                <span className="text-xs text-gray-400">{stats.topPages[0]?.value || 0} views</span>
              </div>
            </div>

            {/* Timeline Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Page Views Over Time</h2>
              <TimelineChart views={views} range={range} />
            </div>

            {/* Two-column breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Top Pages */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pages</h2>
                {stats.topPages.length > 0 ? (
                  <BarChartSimple data={stats.topPages} maxValue={stats.topPages[0]?.value || 1} />
                ) : (
                  <p className="text-gray-400 text-sm">No data yet</p>
                )}
              </div>

              {/* Referrers */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-teal-500" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Referrers</h2>
                </div>
                {stats.referrers.length > 0 ? (
                  <BarChartSimple data={stats.referrers} maxValue={stats.referrers[0]?.value || 1} />
                ) : (
                  <p className="text-gray-400 text-sm">No data yet</p>
                )}
              </div>
            </div>

            {/* Three-column breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Browsers */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-teal-500" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Browsers</h2>
                </div>
                <div className="space-y-3">
                  {stats.browsers.map((b) => (
                    <div key={b.label} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{b.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{b.value}</span>
                        <span className="text-xs text-gray-400">
                          ({stats.totalViews > 0 ? Math.round((b.value / stats.totalViews) * 100) : 0}%)
                        </span>
                      </div>
                    </div>
                  ))}
                  {stats.browsers.length === 0 && <p className="text-gray-400 text-sm">No data yet</p>}
                </div>
              </div>

              {/* Devices */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="w-5 h-5 text-teal-500" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Devices</h2>
                </div>
                <div className="space-y-3">
                  {stats.devices.map((d) => (
                    <div key={d.label} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{d.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{d.value}</span>
                        <span className="text-xs text-gray-400">
                          ({stats.totalViews > 0 ? Math.round((d.value / stats.totalViews) * 100) : 0}%)
                        </span>
                      </div>
                    </div>
                  ))}
                  {stats.devices.length === 0 && <p className="text-gray-400 text-sm">No data yet</p>}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-teal-500" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Languages</h2>
                </div>
                <div className="space-y-3">
                  {stats.languages.map((l) => (
                    <div key={l.label} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{l.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{l.value}</span>
                        <span className="text-xs text-gray-400">
                          ({stats.totalViews > 0 ? Math.round((l.value / stats.totalViews) * 100) : 0}%)
                        </span>
                      </div>
                    </div>
                  ))}
                  {stats.languages.length === 0 && <p className="text-gray-400 text-sm">No data yet</p>}
                </div>
              </div>
            </div>

            {/* Recent Views Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Page Views</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase px-6 py-3">Page</th>
                      <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase px-6 py-3">Referrer</th>
                      <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase px-6 py-3">Browser</th>
                      <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase px-6 py-3">Device</th>
                      <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase px-6 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {views.slice(0, 50).map((v) => (
                      <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-3 text-sm text-gray-900 dark:text-white">{PAGE_LABELS[v.page] || v.page}</td>
                        <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{formatDomain(v.referrer)}</td>
                        <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-400">{parseBrowser(v.user_agent)}</td>
                        <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-400">{parseDevice(v.screen_width)}</td>
                        <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          {new Date(v.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    {views.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                          No page views recorded yet. Visit some pages and check back.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;
