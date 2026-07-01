import React, { useState } from 'react';
import {
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  Check, X, AlertCircle, Info,
  Menu, Moon, Sun, ChevronDown, ChevronRight,
  Bot, Globe, Box, Smartphone, Building2, Palette, Heart,
  BarChart3, RefreshCcw, BookOpen, Workflow, PenLine, Mic2, Target,
  Users, Layers, GitBranch, Component, ScanSearch, Sparkles, Combine, Network,
  Eye, Shield, SlidersHorizontal, Zap, Brain, Lightbulb, Award, TrendingUp, MessageSquare,
  FileDown, Briefcase, GraduationCap, Wrench, ExternalLink,
  Mail, Clock, Calendar, ClipboardList, LayoutGrid, Monitor, Minus,
  RefreshCw, LucideIcon,
} from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="border-t border-line dark:border-white/10 py-16">
    <div className="mb-10">
      <div className="w-8 h-[3px] bg-blue mb-4" />
      <h2 className="text-2xl font-semibold text-ink dark:text-white">{title}</h2>
    </div>
    {children}
  </section>
);

const Swatch: React.FC<{ bg: string; label: string; hex: string; light?: boolean }> = ({ bg, label, hex, light }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-20 w-full border border-line dark:border-white/10 ${bg}`} />
    <p className="text-sm font-medium text-ink dark:text-white">{label}</p>
    <p className="text-xs text-muted font-mono">{hex}</p>
    {light && <p className="text-xs text-muted">Dark mode accent</p>}
  </div>
);

const DesignLibrary: React.FC = () => {
  const [darkSample, setDarkSample] = useState(false);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Header */}
      <div className="bg-ink text-white py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Internal Only</p>
          <h1 className="text-4xl font-semibold">Design Library</h1>
          <p className="text-white/60 mt-2 text-sm">
            Tokens, components, and patterns for timothymcguire.com. Not linked from navigation.
          </p>
          <div className="mt-4 flex gap-2 text-xs">
            <span className="px-2 py-1 bg-white/10 font-mono">VARIANCE: 6</span>
            <span className="px-2 py-1 bg-white/10 font-mono">MOTION: 3</span>
            <span className="px-2 py-1 bg-white/10 font-mono">DENSITY: 3</span>
            <span className="px-2 py-1 bg-blue font-mono">Editorial. Minimal. Explainable.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Design Direction */}
        <Section title="Design Direction">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left: identity + description */}
            <div>
              <h2 className="text-5xl font-semibold text-ink dark:text-white leading-tight mb-4">
                Editorial. Minimal.<br />Explainable.
              </h2>
              <div className="w-8 h-[3px] bg-blue mb-6" />
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
                A clean, editorial design system that communicates expertise, clarity, and trust. Inspired by design systems like Material, Apple, and IBM Carbon. The UI is typography-forward, content-led, and intentionally minimal.
              </p>
              <div className="p-6 bg-tan border border-line">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">Overall Feel</p>
                <p className="text-base font-semibold text-ink">Confident. Professional. Intelligent. Timeless.</p>
                <p className="text-sm text-muted mt-1">An editorial experience that reinforces expertise and builds trust.</p>
              </div>
            </div>

            {/* Right: principles */}
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Principles</p>
              <div className="space-y-px">
                {[
                  { icon: <Eye size={18} />, title: 'Clarity', body: 'Make the complex easy to understand.' },
                  { icon: <AlertCircle size={18} />, title: 'Explainability', body: 'Surface what matters. Show the why.' },
                  { icon: <Shield size={18} />, title: 'Trust', body: 'Design for confidence, safety, and reliability.' },
                  { icon: <SlidersHorizontal size={18} />, title: 'Control', body: 'Give users the right level of agency.' },
                  { icon: <Layers size={18} />, title: 'Simplicity', body: 'Remove noise. Focus on what counts.' },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 -mt-px">
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-400">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink dark:text-white">{title}</p>
                      <p className="text-sm text-muted dark:text-neutral-400 mt-0.5">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Colors */}
        <Section title="Color Tokens">

          {/* Brand tokens */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Brand Tokens</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 mb-10">
            <Swatch bg="bg-ink" label="ink" hex="#111111" />
            <Swatch bg="bg-muted" label="muted" hex="#666666" />
            <Swatch bg="bg-line border border-line" label="line" hex="#D9D9D9" />
            <Swatch bg="bg-tan border border-line" label="tan" hex="#F3EFE7" />
            <Swatch bg="bg-blue" label="blue" hex="#2563EB" />
            <Swatch bg="bg-lavender" label="lavender" hex="#A29BFE" light />
            <Swatch bg="bg-white border border-line" label="white" hex="#FFFFFF" />
          </div>

          {/* Blue variant scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Blue Accent Scale</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-10">
            {[
              { cls: 'bg-blue-50', hex: '#EFF6FF', step: '50' },
              { cls: 'bg-blue-100', hex: '#DBEAFE', step: '100' },
              { cls: 'bg-blue-200', hex: '#BFDBFE', step: '200' },
              { cls: 'bg-blue-300', hex: '#93C5FD', step: '300' },
              { cls: 'bg-blue-400', hex: '#60A5FA', step: '400' },
              { cls: 'bg-blue-500', hex: '#3B82F6', step: '500' },
              { cls: 'bg-blue-600', hex: '#2563EB', step: '600 ✦' },
              { cls: 'bg-blue-700', hex: '#1D4ED8', step: '700' },
              { cls: 'bg-blue-800', hex: '#1E40AF', step: '800' },
              { cls: 'bg-blue-900', hex: '#1E3A8A', step: '900' },
            ].map(({ cls, hex, step }) => (
              <div key={step} className="flex flex-col gap-1">
                <div className={`h-10 w-full ${cls} ${step.includes('50') || step.includes('100') || step.includes('200') ? 'border border-line' : ''}`} />
                <p className="text-[10px] font-mono text-muted leading-tight">{step}</p>
                <p className="text-[9px] font-mono text-muted/70 leading-tight hidden sm:block">{hex}</p>
              </div>
            ))}
          </div>

          {/* Lavender variant scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Lavender Scale (Dark Mode Accent)</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-10">
            {[
              { cls: 'bg-violet-50', hex: '#F5F3FF', step: '50' },
              { cls: 'bg-violet-100', hex: '#EDE9FE', step: '100' },
              { cls: 'bg-violet-200', hex: '#DDD6FE', step: '200' },
              { cls: 'bg-violet-300', hex: '#C4B5FD', step: '300' },
              { cls: 'bg-violet-400', hex: '#A29BFE', step: '400 ✦' },
              { cls: 'bg-violet-500', hex: '#8B5CF6', step: '500' },
              { cls: 'bg-violet-600', hex: '#7C3AED', step: '600' },
              { cls: 'bg-violet-700', hex: '#6D28D9', step: '700' },
              { cls: 'bg-violet-800', hex: '#5B21B6', step: '800' },
              { cls: 'bg-violet-900', hex: '#4C1D95', step: '900' },
            ].map(({ cls, hex, step }) => (
              <div key={step} className="flex flex-col gap-1">
                <div className={`h-10 w-full ${cls} ${step.includes('50') || step.includes('100') || step.includes('200') ? 'border border-line' : ''}`} />
                <p className="text-[10px] font-mono text-muted leading-tight">{step}</p>
                <p className="text-[9px] font-mono text-muted/70 leading-tight hidden sm:block">{hex}</p>
              </div>
            ))}
          </div>

          {/* Tan variant scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Tan Scale (Warm Surface Token)</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4">
            {[
              { hex: '#FDFCFB', step: '50' },
              { hex: '#FAF8F4', step: '100' },
              { hex: '#F6F1EB', step: '200' },
              { hex: '#F3EFE7', step: '300 ✦' },
              { hex: '#EAE3D6', step: '400' },
              { hex: '#DDD5C4', step: '500' },
              { hex: '#CEC3AE', step: '600' },
              { hex: '#B8A893', step: '700' },
              { hex: '#9E8E79', step: '800' },
              { hex: '#7D6E5D', step: '900' },
            ].map(({ hex, step }) => (
              <div key={step} className="flex flex-col gap-1">
                <div
                  className={`h-10 w-full ${step.includes('50') || step.includes('100') || step.includes('200') ? 'border border-line' : ''}`}
                  style={{ background: hex }}
                />
                <p className="text-[10px] font-mono text-muted leading-tight">{step}</p>
                <p className="text-[9px] font-mono text-muted/70 leading-tight hidden sm:block">{hex}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-tan border border-line text-xs text-muted mb-10">
            <strong className="text-ink">Note:</strong> Tan is a custom token — it does not map to a Tailwind built-in scale. Use <code className="font-mono bg-white border border-line px-1">bg-tan</code> for the primary surface token (300). Lighter stops are available via inline <code className="font-mono bg-white border border-line px-1">style</code> when needed for gradient callouts. Darker stops are reference only — prefer <code className="font-mono bg-white border border-line px-1">text-muted</code> or <code className="font-mono bg-white border border-line px-1">text-ink</code> for text on tan surfaces.
          </div>

          {/* Neutral scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Neutral Scale (UI Surfaces)</p>
          <div className="grid grid-cols-5 sm:grid-cols-11 gap-2 mb-8">
            {[
              { cls: 'bg-white border border-line', hex: '#FFFFFF', step: 'white' },
              { cls: 'bg-neutral-50', hex: '#FAFAFA', step: '50' },
              { cls: 'bg-neutral-100', hex: '#F5F5F5', step: '100' },
              { cls: 'bg-neutral-200', hex: '#E5E5E5', step: '200' },
              { cls: 'bg-neutral-300', hex: '#D4D4D4', step: '300' },
              { cls: 'bg-neutral-400', hex: '#A3A3A3', step: '400' },
              { cls: 'bg-neutral-500', hex: '#737373', step: '500' },
              { cls: 'bg-neutral-600', hex: '#525252', step: '600' },
              { cls: 'bg-neutral-700', hex: '#404040', step: '700' },
              { cls: 'bg-neutral-800', hex: '#262626', step: '800' },
              { cls: 'bg-neutral-950', hex: '#0A0A0A', step: '950 ✦' },
            ].map(({ cls, hex, step }) => (
              <div key={step} className="flex flex-col gap-1">
                <div className={`h-10 w-full ${cls}`} />
                <p className="text-[10px] font-mono text-muted leading-tight">{step}</p>
                <p className="text-[9px] font-mono text-muted/70 leading-tight hidden sm:block">{hex}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-tan border border-line text-sm text-muted leading-relaxed">
            <strong className="text-ink">Rules:</strong> One accent color per section. Blue in light mode, Lavender (violet-400) in dark.
            Section backgrounds rotate white &rarr; tan &rarr; white &rarr; ink. Dark backgrounds use neutral-950. &#10022; marks the active token.
          </div>

          {/* 60-30-10 rule */}
          <div className="mt-8 border border-line dark:border-white/10">
            <div className="px-6 py-4 bg-neutral-50 dark:bg-white/[0.03] border-b border-line dark:border-white/10">
              <p className="text-xs font-semibold text-ink dark:text-white uppercase tracking-widest">60 – 30 – 10 Color Usage Rule</p>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line dark:divide-white/10">
              <div className="p-6">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-semibold text-ink dark:text-white">60%</span>
                  <div className="w-8 h-8 mb-1 border border-line" style={{ background: '#F3EFE7' }} />
                </div>
                <p className="text-sm font-semibold text-ink dark:text-white mb-1">Tan — Surfaces &amp; Backgrounds</p>
                <p className="text-sm text-muted leading-relaxed">Dominant tone. Section backgrounds, callout cards, large surface areas. Creates the warm editorial baseline.</p>
              </div>
              <div className="p-6">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-semibold text-ink dark:text-white">30%</span>
                  <div className="w-8 h-8 mb-1 border border-line" style={{ background: '#FFFFFF' }} />
                </div>
                <p className="text-sm font-semibold text-ink dark:text-white mb-1">White — Cards &amp; Content</p>
                <p className="text-sm text-muted leading-relaxed">Secondary tone. Card backgrounds, content wells, reading surfaces. Creates contrast against tan.</p>
              </div>
              <div className="p-6">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-semibold text-ink dark:text-white">10%</span>
                  <div className="w-8 h-8 mb-1 bg-ink" />
                </div>
                <p className="text-sm font-semibold text-ink dark:text-white mb-1">Black — Text &amp; Key Elements</p>
                <p className="text-sm text-muted leading-relaxed">Accent tone. Headlines, body text, CTA buttons, critical UI elements. High contrast for readability.</p>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-line dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03]">
              <p className="text-sm text-muted">
                <strong className="text-ink dark:text-white">Plus:</strong> Primary Blue <span className="font-mono text-xs text-blue">#2563EB</span> for actions, links, and focus states. Secondary Lavender <span className="font-mono text-xs text-lavender">#A29BFE</span> for subtle support and dark-mode accent.
              </p>
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography">

          {/* Font stack */}
          <div className="p-6 bg-tan border border-line mb-10">
            <p className="text-xs text-muted mb-1 font-mono uppercase tracking-widest">Font stack</p>
            <p className="text-base text-ink font-semibold mt-2">Instrument Sans</p>
            <p className="text-sm text-muted font-mono mt-1">Weights: 400 · 500 · 600 · 700 · 400i · 500i</p>
            <p className="text-sm text-muted mt-2">No serifs. No mixed families. <code className="font-mono text-xs bg-white border border-line px-1">font-semibold</code> (600) for all display text.</p>
          </div>

          {/* Named type scale from spec */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Named Type Scale (Spec)</p>
          <div className="border border-line dark:border-white/10 mb-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-line dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-28">Level</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-28">Size / Line-h</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-40">Tailwind class</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Usage</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Live example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line dark:divide-white/10">
                <tr>
                  <td className="px-6 py-4 text-xs font-semibold text-ink dark:text-white">H1</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">72 / 80</td>
                  <td className="px-6 py-4 font-mono text-xs text-blue dark:text-lavender">text-7xl leading-[80px]</td>
                  <td className="px-6 py-4 text-sm text-muted">Headlines / Hero</td>
                  <td className="px-6 py-4"><span className="text-4xl font-semibold text-ink dark:text-white leading-tight">Aa</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-xs font-semibold text-ink dark:text-white">H2</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">48 / 56</td>
                  <td className="px-6 py-4 font-mono text-xs text-blue dark:text-lavender">text-5xl leading-[56px]</td>
                  <td className="px-6 py-4 text-sm text-muted">Section Headlines</td>
                  <td className="px-6 py-4"><span className="text-3xl font-semibold text-ink dark:text-white">Aa</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-xs font-semibold text-ink dark:text-white">H3</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">28 / 36</td>
                  <td className="px-6 py-4 font-mono text-xs text-blue dark:text-lavender">text-[28px] leading-9</td>
                  <td className="px-6 py-4 text-sm text-muted">Subsection Headlines</td>
                  <td className="px-6 py-4"><span className="text-xl font-semibold text-ink dark:text-white">Aa</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-xs font-semibold text-ink dark:text-white">Body</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">16 / 24</td>
                  <td className="px-6 py-4 font-mono text-xs text-blue dark:text-lavender">text-base leading-6</td>
                  <td className="px-6 py-4 text-sm text-muted">Body Copy</td>
                  <td className="px-6 py-4"><span className="text-base text-muted leading-relaxed">Aa body text</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-xs font-semibold text-ink dark:text-white">Caption</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">12 / 16</td>
                  <td className="px-6 py-4 font-mono text-xs text-blue dark:text-lavender">text-xs leading-4</td>
                  <td className="px-6 py-4 text-sm text-muted">Labels, Metadata</td>
                  <td className="px-6 py-4"><span className="text-xs text-muted">Aa caption</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Type usage rules */}
          <div className="p-6 bg-tan border border-line mb-10">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Type Usage Rules</p>
            <ul className="space-y-1.5 text-sm text-ink dark:text-white">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />High contrast for readability — text-ink on light, text-white on dark.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Use the scale to create a clear hierarchy — never skip more than one level.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Avoid using more than 2 font weights in a single section (400 + 600 preferred).</li>
            </ul>
          </div>

          {/* Full Tailwind size scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Full Tailwind Size Scale</p>
          <div className="border border-line dark:border-white/10 mb-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-32">Class</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-28">Size</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-20">Line-h</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Role on this site</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-16">Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line dark:divide-white/10">
                {[
                  { cls: 'text-xs', size: '12px / 0.75rem', lh: '1rem', role: 'Eyebrow labels, badge tags, nav section headers, table labels', used: true },
                  { cls: 'text-sm', size: '14px / 0.875rem', lh: '1.25rem', role: 'Body captions, button labels, meta text, timeline dates', used: true },
                  { cls: 'text-base', size: '16px / 1rem', lh: '1.5rem', role: 'Body copy, card body, form labels', used: true },
                  { cls: 'text-lg', size: '18px / 1.125rem', lh: '1.75rem', role: 'Large body, subheadings in dense sections', used: false },
                  { cls: 'text-xl', size: '20px / 1.25rem', lh: '1.75rem', role: 'Navbar brand name, medium pull quotes', used: true },
                  { cls: 'text-2xl', size: '24px / 1.5rem', lh: '2rem', role: 'Card featured headings, design library H2', used: true },
                  { cls: 'text-3xl', size: '30px / 1.875rem', lh: '2.25rem', role: 'Section H2 (ValueProposition, CTA, Testimonials)', used: true },
                  { cls: 'text-4xl', size: '36px / 2.25rem', lh: '2.5rem', role: 'Resume H1 (base), large section headings', used: true },
                  { cls: 'text-5xl', size: '48px / 3rem', lh: '1', role: 'Spec H2 size, Resume H1 (sm+)', used: true },
                  { cls: 'text-6xl', size: '60px / 3.75rem', lh: '1', role: 'Hero H1 (md+)', used: true },
                  { cls: 'text-7xl', size: '72px / 4.5rem', lh: '1', role: 'Spec H1 size — campaigns and large hero displays', used: false },
                  { cls: 'text-8xl', size: '96px / 6rem', lh: '1', role: 'Not currently used', used: false },
                ].map(({ cls, size, lh, role, used }) => (
                  <tr key={cls} className={`${!used ? 'opacity-40' : ''}`}>
                    <td className="px-4 py-3 font-mono text-xs text-blue dark:text-lavender">{cls}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted">{size}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted">{lh}</td>
                    <td className="px-4 py-3 text-sm text-muted">{role}</td>
                    <td className="px-4 py-3 text-center">
                      {used ? <span className="inline-block w-2 h-2 bg-blue" /> : <span className="inline-block w-2 h-2 bg-line" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Semantic type roles */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Semantic Roles</p>
          <div className="space-y-8">
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Display H1<br/>text-4xl→text-6xl<br/>font-semibold<br/>tracking-tight</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink dark:text-tan-500 leading-tight">
                Human-Centered Design, Built for Results.
              </h1>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Section H2<br/>text-3xl→text-4xl<br/>font-semibold</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">
                Big Ideas. One Designer. Better Outcomes.
              </h2>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Card H3<br/>text-base<br/>font-semibold</p>
              <h3 className="text-base font-semibold text-ink dark:text-white">Personalized Attention</h3>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Eyebrow<br/>text-xs<br/>font-semibold<br/>tracking-widest<br/>uppercase<br/>text-blue</p>
              <p className="text-xs font-semibold text-blue tracking-widest uppercase">Experience Design</p>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Body<br/>text-base<br/>text-muted<br/>leading-relaxed<br/>max-w-[65ch]</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
                Senior and Principal UX Designer with 15+ years of experience leading end-to-end product
                design for enterprise SaaS, data-intensive platforms, and AI-driven systems. Deep expertise
                in AI-native UX, agentic workflows, and LLM-integrated decision support.
              </p>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline border-b border-line dark:border-white/10 pb-8">
              <p className="text-xs text-muted font-mono self-start pt-1">Nav label<br/>text-sm<br/>font-medium</p>
              <p className="text-sm font-medium text-ink dark:text-white">Services</p>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline">
              <p className="text-xs text-muted font-mono self-start pt-1">Caption / Meta<br/>text-sm<br/>text-muted</p>
              <p className="text-sm text-muted dark:text-neutral-500">Jun 2023 – Jun 2025 · Remote</p>
            </div>
          </div>
        </Section>

        {/* Iconography */}
        <Section title="Iconography">

          {/* Library + rules */}
          <div className="p-6 bg-tan border border-line mb-10">
            <p className="text-xs text-muted mb-1 font-mono uppercase tracking-widest">Library</p>
            <p className="text-base text-ink font-semibold mt-2">lucide-react</p>
            <p className="text-sm text-muted font-mono mt-1">strokeWidth default (1.5 unless overridden)</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm text-muted">
              <div><strong className="text-ink block mb-1">One family only</strong>Never mix Lucide with Heroicons, Phosphor, or hand-rolled SVGs in the same component tree.</div>
              <div><strong className="text-ink block mb-1">currentColor</strong>Always inherits text color. Set color via <code className="font-mono text-xs bg-white border border-line px-1">text-*</code> on the parent or the icon itself.</div>
              <div><strong className="text-ink block mb-1">No decorative icons</strong>If an icon doesn't add meaning, remove it. Every icon needs a clear semantic reason.</div>
            </div>
          </div>

          {/* Size scale */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Size Scale</p>
          <div className="border border-line dark:border-white/10 mb-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Size prop / class</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">px</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Example</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Used for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line dark:divide-white/10">
                {([
                  { prop: 'size={12} / w-3 h-3', px: '12px', icon: <ExternalLink size={12} />, use: 'Inline superscript (external link next to text)' },
                  { prop: 'size={16} / w-4 h-4', px: '16px', icon: <ArrowRight size={16} />, use: 'Button icons, inline text-level icons, small badges' },
                  { prop: 'size={18} / w-[18px]', px: '18px', icon: <Sparkles size={18} />, use: 'Section header icon containers (w-9 h-9 box), primary default' },
                  { prop: 'size={20} / w-5 h-5', px: '20px', icon: <Bot size={20} />, use: 'Card feature icons, nav dropdown icons' },
                  { prop: 'w-6 h-6', px: '24px', icon: <BarChart3 className="w-6 h-6" />, use: 'Mid-size feature icons, service list items' },
                  { prop: 'w-10 h-10', px: '40px', icon: <Brain className="w-10 h-10" />, use: 'Large feature card icons, hero supporting icons' },
                  { prop: 'w-12 h-12', px: '48px', icon: <Lightbulb className="w-12 h-12" />, use: 'XL feature blocks, section illustration icons' },
                ] as { prop: string; px: string; icon: React.ReactNode; use: string }[]).map(({ prop, px, icon, use }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-blue dark:text-lavender">{prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted">{px}</td>
                    <td className="px-4 py-3 text-ink dark:text-white">{icon}</td>
                    <td className="px-4 py-3 text-sm text-muted">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Icon catalog by category */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Icon Catalog (Active on Site)</p>

          {([
            {
              category: 'Navigation & UI',
              icons: [
                { icon: <Menu size={20} />, name: 'Menu', use: 'Mobile nav toggle' },
                { icon: <X size={20} />, name: 'X', use: 'Close / dismiss' },
                { icon: <ChevronDown size={20} />, name: 'ChevronDown', use: 'Dropdown indicator' },
                { icon: <ChevronRight size={20} />, name: 'ChevronRight', use: 'List / breadcrumb forward' },
                { icon: <ArrowRight size={20} />, name: 'ArrowRight', use: 'CTA buttons, inline links' },
                { icon: <ArrowLeft size={20} />, name: 'ArrowLeft', use: 'Back navigation' },
                { icon: <ArrowUp size={20} />, name: 'ArrowUp', use: 'Analytics trend positive' },
                { icon: <ArrowDown size={20} />, name: 'ArrowDown', use: 'Analytics trend negative' },
                { icon: <Minus size={20} />, name: 'Minus', use: 'Analytics trend neutral' },
                { icon: <Moon size={20} />, name: 'Moon', use: 'Dark mode toggle' },
                { icon: <Sun size={20} />, name: 'Sun', use: 'Light mode toggle' },
                { icon: <ExternalLink size={20} />, name: 'ExternalLink', use: 'External link indicator' },
              ],
            },
            {
              category: 'Services & Expertise',
              icons: [
                { icon: <Bot size={20} />, name: 'Bot', use: 'Agentic / AI experience' },
                { icon: <Globe size={20} />, name: 'Globe', use: 'Marketing web design' },
                { icon: <Box size={20} />, name: 'Box', use: 'SaaS product design' },
                { icon: <Smartphone size={20} />, name: 'Smartphone', use: 'Mobile & web design' },
                { icon: <Building2 size={20} />, name: 'Building2', use: 'Enterprise UX consulting' },
                { icon: <Palette size={20} />, name: 'Palette', use: 'Design systems / brand' },
                { icon: <Heart size={20} />, name: 'Heart', use: 'Healthcare UX' },
                { icon: <BarChart3 size={20} />, name: 'BarChart3', use: 'Analytics / fintech UX' },
                { icon: <RefreshCcw size={20} />, name: 'RefreshCcw', use: 'Product modernization' },
                { icon: <Target size={20} />, name: 'Target', use: 'Strategy sessions' },
                { icon: <Mic2 size={20} />, name: 'Mic2', use: 'Speaking & workshops' },
                { icon: <ClipboardList size={20} />, name: 'ClipboardList', use: 'Work with me' },
              ],
            },
            {
              category: 'Perspectives & Content',
              icons: [
                { icon: <BookOpen size={20} />, name: 'BookOpen', use: 'Writing / perspectives' },
                { icon: <Workflow size={20} />, name: 'Workflow', use: 'How I work / process' },
                { icon: <PenLine size={20} />, name: 'PenLine', use: 'Editorial / writing' },
                { icon: <Brain size={20} />, name: 'Brain', use: 'Philosophy / thinking' },
                { icon: <Lightbulb size={20} />, name: 'Lightbulb', use: 'Ideas / insights' },
                { icon: <MessageSquare size={20} />, name: 'MessageSquare', use: 'Testimonials / quotes' },
                { icon: <TrendingUp size={20} />, name: 'TrendingUp', use: 'Growth / outcomes' },
                { icon: <Award size={20} />, name: 'Award', use: 'Recognition / credibility' },
              ],
            },
            {
              category: 'Solutions & Systems',
              icons: [
                { icon: <Layers size={20} />, name: 'Layers', use: 'Design systems / layered architecture' },
                { icon: <GitBranch size={20} />, name: 'GitBranch', use: 'Branching / decision flows' },
                { icon: <Component size={20} />, name: 'Component', use: 'Component libraries' },
                { icon: <ScanSearch size={20} />, name: 'ScanSearch', use: 'Research / discovery' },
                { icon: <Combine size={20} />, name: 'Combine', use: 'Consolidation / merging' },
                { icon: <Network size={20} />, name: 'Network', use: 'Systems / connected data' },
                { icon: <Eye size={20} />, name: 'Eye', use: 'Human-in-the-loop / oversight' },
                { icon: <Shield size={20} />, name: 'Shield', use: 'Trust / compliance / safety' },
                { icon: <SlidersHorizontal size={20} />, name: 'SlidersHorizontal', use: 'Controls / configurability' },
                { icon: <Zap size={20} />, name: 'Zap', use: 'Speed / automation' },
                { icon: <Monitor size={20} />, name: 'Monitor', use: 'Analytics dashboard' },
                { icon: <LayoutGrid size={20} />, name: 'LayoutGrid', use: 'Grid / layout patterns' },
              ],
            },
            {
              category: 'Resume & Contact',
              icons: [
                { icon: <Briefcase size={20} />, name: 'Briefcase', use: 'Professional experience section' },
                { icon: <GraduationCap size={20} />, name: 'GraduationCap', use: 'Education section' },
                { icon: <Wrench size={20} />, name: 'Wrench', use: 'Tools & technologies section' },
                { icon: <Sparkles size={20} />, name: 'Sparkles', use: 'Core competencies section' },
                { icon: <FileDown size={20} />, name: 'FileDown', use: 'Download PDF button' },
                { icon: <Mail size={20} />, name: 'Mail', use: 'Contact email' },
                { icon: <Clock size={20} />, name: 'Clock', use: 'Response time / availability' },
                { icon: <Calendar size={20} />, name: 'Calendar', use: 'Scheduling / booking' },
                { icon: <Users size={20} />, name: 'Users', use: 'Team / collaboration' },
                { icon: <Check size={20} />, name: 'Check', use: 'Confirmation / success state' },
                { icon: <AlertCircle size={20} />, name: 'AlertCircle', use: 'Warning / error state' },
                { icon: <RefreshCw size={20} />, name: 'RefreshCw', use: 'Analytics refresh' },
              ],
            },
          ] as { category: string; icons: { icon: React.ReactNode; name: string; use: string }[] }[]).map(({ category, icons }) => (
            <div key={category} className="mb-10">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">{category}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
                {icons.map(({ icon, name, use }) => (
                  <div key={name} className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors">
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-white/[0.08] text-ink dark:text-white mt-0.5">
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-blue dark:text-lavender truncate">{name}</p>
                      <p className="text-xs text-muted mt-0.5 leading-snug">{use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Color usage */}
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Color Usage</p>
          <div className="grid sm:grid-cols-4 gap-px bg-line dark:bg-white/10 mb-6">
            {[
              { bg: 'bg-white dark:bg-neutral-950', iconCls: 'text-ink dark:text-white', label: 'Default', note: 'Inherits text-ink. Used in nav, section icons, UI chrome.' },
              { bg: 'bg-white dark:bg-neutral-950', iconCls: 'text-muted dark:text-neutral-400', label: 'Muted', note: 'Section header icon containers. Subtle, not primary focus.' },
              { bg: 'bg-white dark:bg-neutral-950', iconCls: 'text-blue dark:text-lavender', label: 'Accent', note: 'Active state, hover state, links. Blue in light, Lavender in dark.' },
              { bg: 'bg-ink', iconCls: 'text-white', label: 'On Dark', note: 'White icons on ink/dark backgrounds (CTA section, mobile nav).' },
            ].map(({ bg, iconCls, label, note }) => (
              <div key={label} className={`p-6 ${bg}`}>
                <div className={`flex items-center gap-3 mb-3 ${iconCls}`}>
                  <Bot size={20} />
                  <ArrowRight size={20} />
                  <Sparkles size={20} />
                </div>
                <p className={`text-xs font-semibold mb-1 ${bg.includes('ink') ? 'text-white' : 'text-ink dark:text-white'}`}>{label}</p>
                <p className={`text-xs leading-relaxed ${bg.includes('ink') ? 'text-white/50' : 'text-muted'}`}>{note}</p>
              </div>
            ))}
          </div>

        </Section>

        {/* Buttons */}
        <Section title="Buttons & Links">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 border border-line text-ink text-sm font-medium hover:bg-tan transition-colors dark:border-white/20 dark:text-white">
              View Work
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:underline">
              All services <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue transition-colors">
              Learn more →
            </button>
          </div>
          <div className="p-6 bg-ink">
            <p className="text-xs text-white/40 mb-4 font-mono">On dark background</p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors">
                Make Contact <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                View Work
              </button>
            </div>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badges & Tags">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 text-sm bg-blue/10 text-blue border border-blue/30">
              AI-Native UX
            </span>
            <span className="px-3 py-1.5 text-sm bg-blue/10 text-blue border border-blue/30">
              Enterprise SaaS
            </span>
            <span className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-300 border border-line dark:border-white/10">
              Figma
            </span>
            <span className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-300 border border-line dark:border-white/10">
              Case Study
            </span>
          </div>
        </Section>

        {/* Divider Grid */}
        <Section title="Divider Grid Pattern">
          <p className="text-sm text-muted mb-6">Used in ValueProposition, SpecializedExpertise. <code className="font-mono text-xs bg-neutral-100 px-1">gap-px bg-line</code> on parent, white/tan bg on cells.</p>
          <div className="grid sm:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {['Personalized Attention', 'Agility and Speed', 'Direct Collaboration', 'Focused Expertise', 'Cost-Effective', 'Creative Flexibility'].map((label) => (
              <div key={label} className="p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors">
                <h3 className="text-base font-semibold text-ink dark:text-white mb-2">{label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400">Supporting detail goes here in one to two sentences, no more.</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Blue Accent Bar */}
        <Section title="Blue Accent Bar">
          <p className="text-sm text-muted mb-6">Precedes all major section headings. 32px wide, 3px tall.</p>
          <div className="space-y-6 max-w-lg">
            <div>
              <div className="w-8 h-[3px] bg-blue mb-6" />
              <h2 className="text-3xl font-semibold text-ink dark:text-white">Section Heading</h2>
              <p className="mt-3 text-base text-muted dark:text-neutral-400 leading-relaxed">Supporting body copy that explains the section in one or two sentences.</p>
            </div>
          </div>
        </Section>

        {/* Featured Callout */}
        <Section title="Featured Callout Card">
          <p className="text-sm text-muted mb-6">Used in ValueProposition (sticky left), Testimonials (large feature). Tan gradient background.</p>
          <div className="max-w-xl p-10 border border-line dark:border-white/10" style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }}>
            <div className="w-8 h-[3px] bg-blue mb-8" />
            <h2 className="text-3xl font-semibold text-ink leading-tight mb-4">
              Big Ideas. One Designer. Better Outcomes.
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Work directly with a seasoned UX strategist who brings over 15 years of experience delivering clarity, creativity, and results.
            </p>
          </div>
        </Section>

        {/* CTA Dark Section */}
        <Section title="CTA Section (Dark)">
          <div className="bg-ink dark:bg-neutral-900 p-16 border-t border-white/10">
            <div className="max-w-xl">
              <div className="w-8 h-[3px] bg-blue mb-8" />
              <h2 className="text-3xl font-semibold text-white mb-4 leading-tight">
                Let's create something meaningful.
              </h2>
              <p className="text-base text-white/60 mb-10 leading-relaxed">
                I'd love to learn about your project and how I can help your business.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors">
                Make Contact <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Section>

        {/* Logo Mark */}
        <Section title="Logo Mark">
          <p className="text-sm text-muted mb-6">Inline SVG — never load from external URL. Sharp corners, inverts in dark mode.</p>
          <div className="flex gap-8 items-start">
            <div className="flex flex-col items-center gap-3">
              <div className="p-6 bg-white border border-line">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" fill="#111111" />
                  <rect x="7" y="9" width="18" height="3.5" fill="white" />
                  <rect x="14.25" y="9" width="3.5" height="16" fill="white" />
                  <rect x="14.25" y="22" width="3.5" height="3" fill="#2563EB" />
                </svg>
              </div>
              <p className="text-xs text-muted">Light mode</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-6 bg-neutral-950 border border-white/10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" fill="white" />
                  <rect x="7" y="9" width="18" height="3.5" fill="#111111" />
                  <rect x="14.25" y="9" width="3.5" height="16" fill="#111111" />
                  <rect x="14.25" y="22" width="3.5" height="3" fill="#2563EB" />
                </svg>
              </div>
              <p className="text-xs text-muted">Dark mode</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-6 bg-ink border border-white/10 flex items-center gap-3">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" fill="white" />
                  <rect x="7" y="9" width="18" height="3.5" fill="#111111" />
                  <rect x="14.25" y="9" width="3.5" height="16" fill="#111111" />
                  <rect x="14.25" y="22" width="3.5" height="3" fill="#2563EB" />
                </svg>
                <span className="text-xl font-semibold text-white">Timothy McGuire</span>
              </div>
              <p className="text-xs text-muted">In navbar (dark)</p>
            </div>
          </div>
        </Section>

        {/* Section Background Sequence */}
        <Section title="Section Background Sequence">
          <p className="text-sm text-muted mb-6">Home page rotation. Never two identical backgrounds adjacent.</p>
          <div className="space-y-2">
            {[
              { bg: 'bg-white border border-line', label: '1. Hero', note: 'tan→white gradient' },
              { bg: 'bg-white border border-line', label: '2. Partners', note: 'white' },
              { bg: 'bg-white border border-line', label: '3. ValueProposition', note: 'white' },
              { bg: 'bg-tan border border-line', label: '4. SuccessStories', note: 'tan' },
              { bg: 'bg-white border border-line', label: '5. SpecializedExpertise', note: 'white' },
              { bg: 'bg-tan border border-line', label: '6. Testimonials', note: 'tan' },
              { bg: 'bg-ink', label: '7. CTA', note: 'ink (dark)' },
            ].map(({ bg, label, note }) => (
              <div key={label} className={`px-6 py-4 flex items-center justify-between ${bg}`}>
                <span className={`text-sm font-medium ${bg.includes('ink') ? 'text-white' : 'text-ink'}`}>{label}</span>
                <span className={`text-xs font-mono ${bg.includes('ink') ? 'text-white/40' : 'text-muted'}`}>{note}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Spacing */}
        <Section title="Spacing & Layout">
          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <h3 className="font-semibold text-ink dark:text-white">Section Padding</h3>
              <div className="space-y-1 font-mono text-xs text-muted">
                <p>Section vertical: <code>py-24</code></p>
                <p>Section large: <code>py-32</code></p>
                <p>Container: <code>max-w-7xl mx-auto px-4 sm:px-6 lg:px-8</code></p>
                <p>Card padding: <code>p-8</code> / <code>p-10</code></p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-ink dark:text-white">Grid</h3>
              <div className="space-y-1 font-mono text-xs text-muted">
                <p>2-col: <code>grid lg:grid-cols-2 gap-16</code></p>
                <p>3-col: <code>grid lg:grid-cols-3 gap-px bg-line</code></p>
                <p>Feature: <code>grid sm:grid-cols-2 gap-px bg-line</code></p>
                <p>Never: <code>w-[calc(33%-1rem)]</code></p>
              </div>
            </div>
          </div>
        </Section>

        {/* Gradient Style */}
        <Section title="Gradient Style">
          <p className="text-sm text-muted mb-8 leading-relaxed max-w-2xl">Subtle gradients used sparingly — only for backgrounds, highlights, and data visualizations. Never used on text or interactive elements.</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="h-32 mb-3" style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }} />
              <p className="text-xs font-mono text-muted">#F3EFE7 → #FFFFFF</p>
              <p className="text-xs text-muted mt-1">Tan to White — featured callout cards, hero section background</p>
            </div>
            <div>
              <div className="h-32 mb-3" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #EFF6FF 50%, #DBEAFE 100%)' }} />
              <p className="text-xs font-mono text-muted">#FFFFFF → #EFF6FF → #DBEAFE</p>
              <p className="text-xs text-muted mt-1">White to Blue-50 — hero section, soft focus highlights</p>
            </div>
            <div>
              <div className="h-32 mb-3" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #2563EB 100%)' }} />
              <p className="text-xs font-mono text-muted">#FFFFFF → #2563EB</p>
              <p className="text-xs text-muted mt-1">White to Primary Blue — data visualizations, chart fills, accent elements</p>
            </div>
          </div>
          <div className="p-6 bg-tan border border-line">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Rules</p>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Always use <code className="font-mono text-xs bg-white border border-line px-1">135deg</code> direction for consistency.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Gradients are background-only. Never apply to text, borders, or buttons.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Limit to one gradient element per section. Overuse kills the editorial feel.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue flex-shrink-0" />Applied via inline <code className="font-mono text-xs bg-white border border-line px-1">style</code> prop — Tailwind gradient utilities produce less precise results.</li>
            </ul>
          </div>
        </Section>

        {/* Layout Patterns */}
        <Section title="Layout Patterns">
          <p className="text-sm text-muted mb-8 leading-relaxed max-w-2xl">Three core layout patterns used across all pages. Use generous whitespace and consistent grids. Align all content to an 8px spacing system.</p>
          <div className="grid sm:grid-cols-3 gap-px bg-line dark:bg-white/10 mb-8">

            {/* Hero / Intro */}
            <div className="p-8 bg-white dark:bg-neutral-950">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Hero / Intro</p>
              <div className="space-y-2 mb-6">
                <div className="w-6 h-0.5 bg-blue" />
                <div className="h-4 bg-ink dark:bg-white w-3/4" />
                <div className="h-3 bg-ink dark:bg-white w-full opacity-80" />
                <div className="h-3 bg-ink dark:bg-white w-5/6 opacity-60" />
                <div className="h-3 bg-muted w-full opacity-30 mt-2" />
                <div className="h-3 bg-muted w-4/5 opacity-30" />
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-24 bg-ink dark:bg-white" />
                  <div className="h-8 w-20 border border-line" />
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">Left-aligned. Eyebrow + H1 + body + 2 CTAs. Full-viewport height (<code className="font-mono">min-h-[100dvh]</code>). Tan-to-white gradient background.</p>
            </div>

            {/* Two Column */}
            <div className="p-8 bg-white dark:bg-neutral-950">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Two Column</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="space-y-2">
                  <div className="w-4 h-0.5 bg-blue" />
                  <div className="h-3 bg-ink dark:bg-white w-full opacity-80" />
                  <div className="h-3 bg-ink dark:bg-white w-5/6 opacity-80" />
                  <div className="h-2 bg-muted w-full opacity-30 mt-2" />
                  <div className="h-2 bg-muted w-4/5 opacity-30" />
                  <div className="h-2 bg-muted w-full opacity-30" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 bg-line w-full" />
                  <div className="h-2 bg-line w-full" />
                  <div className="h-2 bg-line w-full" />
                  <div className="h-2 bg-line w-full" />
                  <div className="h-2 bg-line w-full" />
                  <div className="h-2 bg-line w-full" />
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">Asymmetric 2-col (<code className="font-mono">lg:grid-cols-2 gap-16</code>). Sticky featured callout left, scrollable content right. Used in ValueProposition, case studies.</p>
            </div>

            {/* Grid Cards */}
            <div className="p-8 bg-white dark:bg-neutral-950">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Grid Cards</p>
              <div className="grid grid-cols-2 gap-px bg-line mb-6">
                {[0,1,2,3].map(i => (
                  <div key={i} className="p-3 bg-white dark:bg-neutral-950 space-y-1.5">
                    <div className="h-2 bg-ink dark:bg-white w-3/4 opacity-80" />
                    <div className="h-1.5 bg-muted w-full opacity-30" />
                    <div className="h-1.5 bg-muted w-5/6 opacity-30" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted leading-relaxed">Divider grid: <code className="font-mono">gap-px bg-line</code> on parent, white bg on cells. No shadows or card borders. Used in SpecializedExpertise, ValueProposition.</p>
            </div>
          </div>

          <div className="p-6 bg-tan border border-line">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Spacing System</p>
            <p className="text-sm text-ink leading-relaxed">All spacing uses the <strong>8px base unit</strong>. Section padding: <code className="font-mono text-xs bg-white border border-line px-1">py-24</code> (96px) standard, <code className="font-mono text-xs bg-white border border-line px-1">py-32</code> (128px) hero. Gap between sections: <code className="font-mono text-xs bg-white border border-line px-1">gap-16</code> (64px) for 2-col, <code className="font-mono text-xs bg-white border border-line px-1">gap-px</code> for divider grids. Use generous whitespace — never compress sections.</p>
          </div>
        </Section>

        {/* Illustration Style */}
        <Section title="Illustration Style">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">Minimal line illustrations with technical clarity. Clean, precise strokes with intentional whitespace. Blue is the only accent color used in illustrations.</p>
              <div className="space-y-4">
                {[
                  { rule: 'Stroke weight', detail: '1.5px consistent stroke — matches icon strokeWidth default' },
                  { rule: 'Color palette', detail: 'Ink (#111111) for lines, Blue (#2563EB) for accent elements only' },
                  { rule: 'Fill', detail: 'Minimal fills — use opacity or tan for background shapes' },
                  { rule: 'Style', detail: 'Technical/diagrammatic over decorative. Charts, flows, UI mockups preferred' },
                  { rule: 'Background', detail: 'Always on white or tan — never on ink backgrounds' },
                  { rule: 'Scale', detail: 'Illustrations supplement content — never replace it' },
                ].map(({ rule, detail }) => (
                  <div key={rule} className="flex gap-4 pb-4 border-b border-line dark:border-white/10 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold text-ink dark:text-white w-32 flex-shrink-0">{rule}</p>
                    <p className="text-sm text-muted dark:text-neutral-400">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 border border-line dark:border-white/10 bg-tan flex items-center justify-center min-h-[280px]">
              <svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
                {/* Simple editorial illustration: person at a chart/data UI */}
                <rect x="40" y="20" width="120" height="90" rx="0" fill="white" stroke="#D9D9D9" strokeWidth="1.5"/>
                <line x1="40" y1="38" x2="160" y2="38" stroke="#D9D9D9" strokeWidth="1"/>
                <rect x="48" y="28" width="6" height="6" rx="0" fill="#111111"/>
                <rect x="58" y="28" width="6" height="6" rx="0" fill="#D9D9D9"/>
                <rect x="68" y="28" width="6" height="6" rx="0" fill="#D9D9D9"/>
                <line x1="56" y1="55" x2="56" y2="100" stroke="#D9D9D9" strokeWidth="1"/>
                <line x1="48" y1="100" x2="155" y2="100" stroke="#D9D9D9" strokeWidth="1"/>
                <rect x="62" y="75" width="12" height="25" fill="#2563EB" opacity="0.8"/>
                <rect x="80" y="60" width="12" height="40" fill="#2563EB"/>
                <rect x="98" y="70" width="12" height="30" fill="#2563EB" opacity="0.6"/>
                <rect x="116" y="50" width="12" height="50" fill="#2563EB" opacity="0.9"/>
                <rect x="134" y="65" width="12" height="35" fill="#2563EB" opacity="0.5"/>
                <circle cx="96" cy="130" r="14" fill="white" stroke="#D9D9D9" strokeWidth="1.5"/>
                <line x1="96" y1="120" x2="96" y2="125" stroke="#111111" strokeWidth="1.5"/>
                <line x1="91" y1="122" x2="96" y2="120" stroke="#111111" strokeWidth="1.5"/>
                <line x1="101" y1="122" x2="96" y2="120" stroke="#111111" strokeWidth="1.5"/>
                <line x1="82" y1="144" x2="96" y2="144" stroke="#111111" strokeWidth="1.5"/>
                <line x1="96" y1="144" x2="110" y2="144" stroke="#111111" strokeWidth="1.5"/>
                <line x1="82" y1="144" x2="78" y2="152" stroke="#111111" strokeWidth="1.5"/>
                <line x1="110" y1="144" x2="114" y2="152" stroke="#111111" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </Section>

        {/* Do / Don't */}
        <Section title="Do / Don't">
          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            <div className="p-8 bg-white dark:bg-neutral-950">
              <div className="flex items-center gap-2 mb-6">
                <Check size={16} className="text-blue" />
                <p className="text-sm font-semibold text-ink dark:text-white uppercase tracking-wider">Do</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Use typography to create hierarchy — size and weight, not color',
                  'Use whitespace generously — sections breathe at py-24 minimum',
                  'Use blue for actions, links, accent bars, and focus states',
                  'Keep layouts clean and focused — one primary action per section',
                  'Design for clarity and comprehension — editorial, not decorative',
                  'Follow the 60-30-10 color rule for surface distribution',
                  'Use the divider grid pattern instead of shadow-based cards',
                  'Always pair light-mode classes with dark-mode equivalents',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted dark:text-neutral-400 leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white dark:bg-neutral-950">
              <div className="flex items-center gap-2 mb-6">
                <X size={16} className="text-red-400" />
                <p className="text-sm font-semibold text-ink dark:text-white uppercase tracking-wider">Don't</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Don't use heavy shadows or effects — no shadow-* classes anywhere",
                  "Don't overcrowd the UI — remove elements that don't earn their space",
                  "Don't use multiple accent colors — blue (and lavender in dark) only",
                  "Don't add decorative elements for visual interest alone",
                  "Don't compromise readability for aesthetic reasons",
                  "Don't use rounded corners — all-sharp everywhere, no exceptions",
                  "Don't use font-light or font-bold for headlines — font-semibold only",
                  "Don't use em-dashes, exclamation points, or vague filler language",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted dark:text-neutral-400 leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-red-300 dark:bg-red-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Reusable Components — NEW in Phase 1 */}
        <Section title="Reusable Components">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-2 py-1 text-xs font-semibold bg-blue text-white uppercase tracking-wider">New — Phase 1</span>
            <p className="text-sm text-muted">Three shared components added to support the editorial platform expansion. Use these instead of copy-pasting patterns.</p>
          </div>

          {/* PageBreadcrumb */}
          <div className="border border-line dark:border-white/10 mb-8">
            <div className="px-6 py-4 bg-neutral-50 dark:bg-white/[0.03] border-b border-line dark:border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">PageBreadcrumb</p>
                <p className="text-xs font-mono text-muted mt-0.5">src/components/PageBreadcrumb.tsx</p>
              </div>
              <span className="px-2 py-0.5 text-xs font-mono bg-blue/10 text-blue border border-blue/30">NEW</span>
            </div>
            <div className="p-8">
              <p className="text-sm text-muted mb-6">Chapter/section label shown above the H1 on every inner page hero. Renders a clickable breadcrumb trail with the current page highlighted in blue.</p>
              <div className="mb-6 p-6 bg-tan border border-line">
                <nav aria-label="Breadcrumb demo">
                  <ol className="flex items-center gap-1.5">
                    <li><span className="text-xs font-medium text-muted uppercase tracking-wider">Perspectives</span></li>
                    <ChevronRight className="w-3.5 h-3.5 text-line" aria-hidden="true" />
                    <li><span className="text-xs font-medium text-blue uppercase tracking-wider">My Philosophy</span></li>
                  </ol>
                </nav>
              </div>
              <div className="bg-neutral-950 p-4 overflow-x-auto">
                <pre className="text-xs text-neutral-300 font-mono">{`import PageBreadcrumb from './PageBreadcrumb';

<PageBreadcrumb
  items={[
    { label: 'Perspectives', pageId: 'perspectives' },
    { label: 'My Philosophy' },
  ]}
  setCurrentPage={setCurrentPage}
/>`}</pre>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold text-ink dark:text-white">items</span> <span className="font-mono text-xs text-muted">BreadcrumbItem[]</span> — array of label + optional pageId</div>
                <div><span className="font-semibold text-ink dark:text-white">setCurrentPage</span> <span className="font-mono text-xs text-muted">optional</span> — enables navigation on non-last items</div>
              </div>
            </div>
          </div>

          {/* RelatedContent */}
          <div className="border border-line dark:border-white/10 mb-8">
            <div className="px-6 py-4 bg-neutral-50 dark:bg-white/[0.03] border-b border-line dark:border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">RelatedContent</p>
                <p className="text-xs font-mono text-muted mt-0.5">src/components/RelatedContent.tsx</p>
              </div>
              <span className="px-2 py-0.5 text-xs font-mono bg-blue/10 text-blue border border-blue/30">NEW</span>
            </div>
            <div className="p-8">
              <p className="text-sm text-muted mb-6">Cross-link grid placed at the bottom of every page before the CTA section. Uses the standard divider grid pattern. Accepts 2-3 items; renders in 2-col or 3-col depending on count.</p>
              <div className="mb-6">
                <div className="grid sm:grid-cols-3 gap-px bg-line dark:bg-white/10">
                  {[
                    { eyebrow: 'Perspectives', label: 'How I Work', description: 'My process, tools, and collaboration style.' },
                    { eyebrow: 'Solutions', label: 'AI-Native Products', description: 'Designing products where AI is foundational.' },
                    { eyebrow: 'Services', label: 'Strategy Sessions', description: 'Focused time with a senior design mind.' },
                  ].map((item) => (
                    <div key={item.label} className="p-6 bg-white dark:bg-neutral-950">
                      <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-3">{item.eyebrow}</p>
                      <p className="text-base font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                      <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-4">{item.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">Read more <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-950 p-4 overflow-x-auto">
                <pre className="text-xs text-neutral-300 font-mono">{`import RelatedContent from './RelatedContent';

<RelatedContent
  heading="Related"
  setCurrentPage={setCurrentPage}
  items={[
    { id: 'perspectives-how-i-work', label: 'How I Work',
      description: 'My process and tools.', eyebrow: 'Perspectives' },
    { id: 'solutions-ai-native-products', label: 'AI-Native Products',
      description: 'Designing where AI is foundational.', eyebrow: 'Solutions' },
  ]}
/>`}</pre>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                <div><span className="font-semibold text-ink dark:text-white">items</span> <span className="font-mono text-xs text-muted">RelatedItem[]</span> — id, label, description, optional eyebrow</div>
                <div><span className="font-semibold text-ink dark:text-white">heading</span> <span className="font-mono text-xs text-muted">string</span> — defaults to "Related"</div>
                <div><span className="font-semibold text-ink dark:text-white">setCurrentPage</span> <span className="font-mono text-xs text-muted">required</span> — navigation handler</div>
              </div>
            </div>
          </div>

          {/* SectionCTA */}
          <div className="border border-line dark:border-white/10">
            <div className="px-6 py-4 bg-neutral-50 dark:bg-white/[0.03] border-b border-line dark:border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">SectionCTA</p>
                <p className="text-xs font-mono text-muted mt-0.5">src/components/SectionCTA.tsx</p>
              </div>
              <span className="px-2 py-0.5 text-xs font-mono bg-blue/10 text-blue border border-blue/30">NEW</span>
            </div>
            <div className="p-8">
              <p className="text-sm text-muted mb-6">Standardized dark ink CTA block used at the bottom of every inner page. Replaces the copy-pasted CTA sections scattered across 15+ components. Accepts optional secondary button.</p>
              <div className="mb-6 bg-ink p-12">
                <div className="max-w-md">
                  <div className="w-8 h-[3px] bg-blue mb-6" />
                  <h2 className="text-2xl font-semibold text-white mb-3 leading-tight">Let's create something meaningful.</h2>
                  <p className="text-sm text-white/60 mb-8 leading-relaxed">I'd love to learn about your project and how I can help your organization.</p>
                  <div className="flex gap-3">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink text-sm font-medium">Let's Talk <ArrowRight className="w-4 h-4" /></span>
                    <span className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-medium">View Work</span>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-950 p-4 overflow-x-auto">
                <pre className="text-xs text-neutral-300 font-mono">{`import SectionCTA from './SectionCTA';

// Minimal (primary only)
<SectionCTA setCurrentPage={setCurrentPage} />

// Custom copy + secondary button
<SectionCTA
  heading="Ready to modernize your product?"
  body="Let's talk through your challenges and map a path forward."
  primaryLabel="Let's Talk"
  primaryPage="contact"
  secondaryLabel="View Work"
  secondaryPage="solutions"
  setCurrentPage={setCurrentPage}
/>`}</pre>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1.5">
                  <div><span className="font-semibold text-ink dark:text-white">heading</span> — defaults to "Let's create something meaningful."</div>
                  <div><span className="font-semibold text-ink dark:text-white">body</span> — defaults to standard supporting copy</div>
                  <div><span className="font-semibold text-ink dark:text-white">primaryLabel</span> — defaults to "Let's Talk"</div>
                </div>
                <div className="space-y-1.5">
                  <div><span className="font-semibold text-ink dark:text-white">primaryPage</span> — defaults to "contact"</div>
                  <div><span className="font-semibold text-ink dark:text-white">secondaryLabel</span> — optional; shows second button if set</div>
                  <div><span className="font-semibold text-ink dark:text-white">secondaryPage</span> — required when secondaryLabel is set</div>
                </div>
              </div>
            </div>
          </div>

        </Section>

        {/* Bottom note */}
        <div className="border-t border-line dark:border-white/10 py-10 mb-8">
          <p className="text-xs text-muted font-mono">
            Access: navigate to <code className="bg-neutral-100 dark:bg-white/10 px-1">/__design__</code> or set currentPage to '__design__' in App.tsx.
            This page is not linked from Navbar or Footer. For internal reference only.
          </p>
        </div>

      </div>
    </main>
  );
};

export default DesignLibrary;
