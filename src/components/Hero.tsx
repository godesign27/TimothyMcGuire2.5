import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const ASCII_TOP    = `╔══════════════════════════════════════════╗`;
const ASCII_TITLE  = `║  ▪ Platform              [●] [●] [×]    ║`;
const ASCII_DIV1   = `╠════════════╦═════════════════════════════╣`;
const ASCII_ROW1   = `║            ║  Overview             Q  ↺  ║`;
const ASCII_HOME   = `║  ◉  Home   ╠═════════════════════════════╣`;
const ASCII_BLANK1 = `║            ║                             ║`;
const ASCII_DATA   = `║  ≡  Data   ║  ┌──────────┐  ┌────────┐  ║`;
const ASCII_STAT1  = `║            ║  │  47,291  │  │  82%   │  ║`;
const ASCII_AI     = `║  ◈  AI     ║  │  Members │  │ Active │  ║`;
const ASCII_STAT2  = `║            ║  └──────────┘  └────────┘  ║`;
const ASCII_DOCS   = `║  ⊞  Docs   ║                             ║`;
const ASCII_RISK   = `║            ║  Risk Score                 ║`;
const ASCII_ADMIN  = `║  ↑  Admin  ║  ██████████░░░  74%         ║`;
const ASCII_BLANK2 = `║            ║                             ║`;
const ASCII_ALERT  = `║            ║  ▲ AI flagged 3 records     ║`;
const ASCII_BOT    = `╚════════════╩═════════════════════════════╝`;

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <section
      className="relative pt-16 min-h-[100dvh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F3EFE7 0%, #ffffff 55%, #e8f0fe 100%)',
      }}
    >
      {/* Subtle blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue hidden dark:block" style={{ background: '#2563EB' }} />

      {/* Dark mode override */}
      <div className="absolute inset-0 bg-neutral-950 dark:block hidden" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Hero copy */}
          <div>
            <p className="text-sm font-medium text-blue dark:text-lavender mb-6 tracking-wide uppercase">
              Experience Design
            </p>

            <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-semibold text-ink dark:text-tan-500 tracking-tight leading-[1.05] mb-8">
              Human-Centered Design, Built for Results.
            </h1>

            <p className="text-lg md:text-xl text-muted dark:text-neutral-400 max-w-xl leading-relaxed mb-10">
              I specialize in experience design for enterprise SaaS, AI-native products, and complex digital platforms. Bringing human-centered thinking, creative problem-solving, and technology together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('contact')}
                className="btn-primary btn-lg inline-flex items-center gap-2"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('solutions')}
                className="btn-secondary btn-lg"
              >
                View Work
              </button>
            </div>
          </div>

          {/* Right: ASCII wireframe */}
          <div className="hidden lg:flex items-center justify-end">
            <pre
              className="font-mono select-none leading-snug"
              style={{ fontSize: '11.5px', color: 'rgba(17,17,17,0.18)' }}
              aria-hidden="true"
            >
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_TOP}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_TITLE}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_DIV1}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_ROW1}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_HOME}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_BLANK1}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_DATA}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_STAT1}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_AI}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_STAT2}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_DOCS}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_RISK}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_ADMIN}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_BLANK2}</span>
              <span style={{ color: 'rgba(37,99,235,0.45)' }} className="dark:text-blue/40 block">{ASCII_ALERT}</span>
              <span className="dark:text-white/[0.12] text-inherit block">{ASCII_BOT}</span>
            </pre>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-line dark:bg-white/10" />
    </section>
  );
};

export default Hero;
