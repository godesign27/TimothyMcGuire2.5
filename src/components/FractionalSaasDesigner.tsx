import React from 'react';
import { ChevronRight, BarChart3, Layers, GitBranch, Component, Workflow, ScanSearch, Sparkles, Combine, Network } from 'lucide-react';

interface FractionalSaasDesignerProps {
  setCurrentPage: (page: string) => void;
}

function DashboardMockup() {
  const rows = [
    { name: 'User Onboarding Flow', status: 'Completed', priority: 'High', progress: 100 },
    { name: 'Settings Restructure', status: 'In Progress', priority: 'High', progress: 68 },
    { name: 'Navigation Audit', status: 'In Progress', priority: 'Medium', progress: 45 },
    { name: 'Component Library v2', status: 'Planned', priority: 'Medium', progress: 12 },
    { name: 'Dashboard Redesign', status: 'Planned', priority: 'Low', progress: 0 },
  ];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
      <div className="flex">
        <div className="w-52 border-r border-gray-100 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/80 p-4 hidden md:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-6 h-6 rounded-md bg-slate-800 dark:bg-slate-300" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">IG5 Platform</span>
          </div>
          <nav className="space-y-1">
            {['Dashboard', 'Projects', 'Components', 'Analytics', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-md text-sm ${
                  i === 0
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow-sm border border-gray-100 dark:border-gray-700'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex-1 p-5 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">UX Improvement Backlog</h3>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">5 initiatives tracked</p>
            </div>
            <div className="flex space-x-2">
              <div className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">Filter</div>
              <div className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">Sort</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider pb-3 border-b border-gray-100 dark:border-gray-700 px-1">
            <div className="col-span-5">Initiative</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 hidden sm:block">Priority</div>
            <div className="col-span-3">Progress</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-12 gap-3 items-center py-3.5 border-b border-gray-50 dark:border-gray-700/50 px-1 last:border-0"
            >
              <div className="col-span-5 text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
                {row.name}
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-block px-2 py-0.5 text-xs rounded-full font-medium ${
                    row.status === 'Completed'
                      ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400'
                      : row.status === 'In Progress'
                      ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <div className="col-span-2 hidden sm:block">
                <span className={`text-xs font-medium ${
                  row.priority === 'High' ? 'text-amber-600 dark:text-amber-400' : row.priority === 'Medium' ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {row.priority}
                </span>
              </div>
              <div className="col-span-3 flex items-center space-x-2">
                <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      row.progress === 100 ? 'bg-emerald-500' : row.progress > 0 ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
                    }`}
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 w-8 text-right">{row.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const steps = [
    { label: 'Audit', desc: 'Workflow analysis', active: false, done: true },
    { label: 'Map', desc: 'User flows', active: false, done: true },
    { label: 'Design', desc: 'UI patterns', active: true, done: false },
    { label: 'Validate', desc: 'Usability test', active: false, done: false },
    { label: 'Ship', desc: 'Engineering handoff', active: false, done: false },
  ];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Design Sprint Workflow</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Current iteration: Navigation Redesign</p>
      </div>
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                  step.done
                    ? 'bg-emerald-500 text-white'
                    : step.active
                    ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-gray-900 ring-4 ring-slate-100 dark:ring-slate-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                }`}
              >
                {step.done ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-xs mt-2 font-medium ${step.active ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                {step.label}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 hidden sm:block">{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 ${step.done ? 'bg-emerald-300 dark:bg-emerald-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-gray-50 dark:bg-gray-900/60 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-gray-900 dark:text-white">Design Phase</div>
          <span className="text-xs bg-slate-800 dark:bg-slate-200 text-white dark:text-gray-900 px-2.5 py-1 rounded-full">Active</span>
        </div>
        <div className="space-y-3">
          {[
            { task: 'Simplify navigation hierarchy', done: true },
            { task: 'Reduce sidebar items from 14 to 8', done: true },
            { task: 'Introduce contextual secondary nav', done: false },
            { task: 'Update breadcrumb patterns', done: false },
          ].map((task) => (
            <div key={task.task} className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center ${
                  task.done ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {task.done && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${task.done ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                {task.task}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignSystemMockup() {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Design System</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Standardized component library</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-2">Primary</div>
          <div className="space-y-1.5">
            {['bg-slate-900', 'bg-slate-700', 'bg-slate-500', 'bg-slate-300'].map((color) => (
              <div key={color} className={`h-6 rounded ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-2">Accent</div>
          <div className="space-y-1.5">
            {['bg-blue-600', 'bg-blue-500', 'bg-blue-400', 'bg-blue-200'].map((color) => (
              <div key={color} className={`h-6 rounded ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-2">Success</div>
          <div className="space-y-1.5">
            {['bg-emerald-600', 'bg-emerald-500', 'bg-emerald-400', 'bg-emerald-200'].map((color) => (
              <div key={color} className={`h-6 rounded ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-2">Neutral</div>
          <div className="space-y-1.5">
            {['bg-gray-700', 'bg-gray-400', 'bg-gray-200', 'bg-gray-100'].map((color) => (
              <div key={color} className={`h-6 rounded ${color}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
        <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-3">Components</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-gray-50 dark:bg-gray-900/60 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
            <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-2">Button</div>
            <div className="space-y-2">
              <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-gray-900 text-xs font-medium px-3 py-1.5 rounded-md text-center">Primary</div>
              <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md text-center border border-gray-200 dark:border-gray-600">Secondary</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/60 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
            <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-2">Input</div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-800 text-xs text-gray-400 dark:text-gray-500 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-600">Placeholder text</div>
              <div className="bg-white dark:bg-gray-800 text-xs text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-md border-2 border-blue-500">Active state</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/60 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
            <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-2">Badge</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">Active</span>
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">Pending</span>
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Draft</span>
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400">Error</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-700 pt-5 mt-5">
        <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-3">Typography Scale</div>
        <div className="space-y-2">
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 w-12">H1</span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Page Title</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 w-12">H2</span>
            <span className="text-base font-medium text-gray-900 dark:text-white">Section Header</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 w-12">Body</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Standard paragraph text</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 w-12">Caption</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">Metadata and labels</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FractionalSaasDesigner: React.FC<FractionalSaasDesignerProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Breadcrumb */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200 dark:from-slate-900 dark:via-sky-900 dark:to-blue-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li className="text-gray-900 dark:text-white font-medium">Fractional SaaS Designer</li>
            </ol>
          </nav>

          <div className="py-16">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white mb-6">
              Fractional SaaS Designer<br />
              Embedded With Your Team
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              SaaS teams don't usually have a product problem — they have a UX and system evolution problem. Through a flexible, embedded model, I work directly with product and engineering teams to simplify workflows, improve usability, and evolve the product experience in a way that compounds over time.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* The Common Problem */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">The Problem</p>
              <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug">
                Products grow. UX often doesn't keep up.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-8">
                Many SaaS products reach a point where the product is strong — but the user experience starts to lag behind. As features are added over time, teams often run into the same challenges:
              </p>
              <ul className="space-y-4">
                {[
                  'Workflows become more complex and harder to navigate',
                  'Information architecture becomes fragmented across the product',
                  'UI patterns drift and become inconsistent',
                  'The overall look and feel starts to feel outdated',
                  'Design systems exist, but are not actively evolving',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                    <span className="text-[16px] leading-[1.65] text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mt-8">
                The product continues to grow — but usability, clarity, and consistency begin to erode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* The Approach */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">The Approach</p>
            <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-5">
              Lightweight. Embedded. Incremental.
            </h2>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400">
              Instead of a full redesign or heavy process, I work in a lightweight, embedded model alongside product and engineering teams. The focus is on identifying high-impact improvements and implementing them incrementally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: BarChart3, title: 'Analyze workflows', body: 'Identify friction and inefficiencies in core user paths' },
              { icon: Layers, title: 'Simplify navigation', body: 'Reduce cognitive load through clearer task flows' },
              { icon: GitBranch, title: 'Refine architecture', body: 'Improve information clarity across the product' },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
              >
                <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold text-gray-950 dark:text-white mb-2">{title}</h3>
                <p className="text-[14px] leading-[1.6] text-gray-500 dark:text-gray-400">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mt-12 max-w-[640px]">
            This approach prioritizes progress over perfection — small improvements that compound into meaningful change.
          </p>
        </div>
      </section>

      {/* Dashboard Visual */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <DashboardMockup />
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">Impact</p>
            <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-4">
              Measurable improvements across the product.
            </h2>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400">
              Applied in partnership with Agate Software, a SaaS company building government-focused products including the IG5 platform. The product had strong functionality and domain depth, but the experience had become more complex and less cohesive over time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { metric: '~30%', label: 'UX improvement' },
              { metric: 'Faster', label: 'Task completion' },
              { metric: 'Clearer', label: 'Navigation & flow' },
              { metric: 'Stronger', label: 'Design-to-business alignment' },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="text-[28px] md:text-[32px] font-semibold text-gray-950 dark:text-white leading-none mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400 mt-10 max-w-[640px]">
            Just as importantly, the product established a stronger foundation for continued evolution.
          </p>
        </div>
      </section>

      {/* Workflow Section (split) */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">Process</p>
              <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-6">
                Structured sprints. Clear deliverables.
              </h2>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-6">
                Each improvement goes through a focused design sprint: audit existing patterns, map user flows, design refined interactions, validate with users, and hand off to engineering.
              </p>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400">
                This keeps the work scoped, measurable, and directly integrated with the team's delivery cadence.
              </p>
            </div>
            <div className="md:col-span-7">
              <WorkflowMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Design System Visual */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <DesignSystemMockup />
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">Design System</p>
              <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-6">
                Evolve the system. Don't replace it.
              </h2>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-6">
                A key part of this work is evolving the existing design system rather than replacing it.
              </p>
              <ul className="space-y-3">
                {[
                  'Standardize UI patterns across key areas of the product',
                  'Improve consistency in components and interactions',
                  'Create a more scalable foundation for future features',
                  'Modernize the overall look and feel incrementally',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                    <span className="text-[15px] leading-[1.65] text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mt-6">
                This avoids the cost and disruption of a full system rebuild while still moving the product forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* How I Work */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">Engagement</p>
              <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug">
                How I work.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-8">
                I operate as a fractional, embedded product design partner.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Part-time engagement', desc: 'Aligned to team needs and capacity, not fixed overhead.' },
                  { title: 'Direct collaboration', desc: 'Working alongside product and engineering, not in isolation.' },
                  { title: 'No heavy process', desc: 'No unnecessary overhead or disruption to existing workflows.' },
                  { title: 'High-impact focus', desc: 'Targeted improvements rather than broad redesigns.' },
                ].map((item) => (
                  <div key={item.title} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                    <h3 className="text-[15px] font-semibold text-gray-950 dark:text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mt-8">
                This model works well for teams that need senior design support without committing to a full-time hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* The Work */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">The Work</p>
            <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-5">
              The work takes different forms.
            </h2>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400">
              Depending on where the product is, I draw on these services to improve experience, consistency, and velocity—without disrupting what's already working.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Component, title: 'Evolve design system', body: 'Standardize patterns and modernize components without a full rebuild' },
              { icon: Workflow, title: 'Redesign key flows', body: 'Rethink high-friction workflows end-to-end for clarity and speed' },
              { icon: ScanSearch, title: 'Audit UI consistency', body: 'Identify and resolve pattern drift across the product' },
              { icon: Sparkles, title: 'Modernize visual layer', body: 'Update the look and feel to match current SaaS expectations' },
              { icon: Combine, title: 'Align design + engineering', body: 'Bridge the gap between design intent and implementation' },
              { icon: Network, title: 'Map information architecture', body: 'Restructure how content and features are organized across the product' },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
              >
                <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold text-gray-950 dark:text-white mb-2">{title}</h3>
                <p className="text-[14px] leading-[1.6] text-gray-500 dark:text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* Forward-Looking */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[720px]">
            <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 uppercase mb-3">Looking Ahead</p>
            <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-950 dark:text-white leading-snug mb-6">
              Building a foundation for what's next.
            </h2>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-6">
              Beyond immediate improvements, the work positioned the product for what's next:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'A more flexible and scalable design system',
                'A modernized product experience aligned with current SaaS expectations',
                'A foundation that can support AI-assisted features where appropriate',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                  <span className="text-[16px] leading-[1.65] text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400">
              The focus was on practical decisions that support long-term product growth.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-950 dark:text-white leading-snug mb-6">
              Small, focused improvements — applied consistently — can significantly improve both user experience and product velocity.
            </h2>
            <p className="text-[16px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-10">
              For SaaS teams in a similar position — where the product is strong but UX and systems need to catch up — this type of embedded, incremental approach provides a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Start a conversation
              </button>
              <a
                href="https://cal.com/timothy-mcguire-27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FractionalSaasDesigner;