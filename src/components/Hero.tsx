import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { useTheme } from 'next-themes';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const LightHero = () => (
  <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(190, 205, 255)"
    gradientBackgroundEnd="rgb(255, 195, 215)"
    firstColor="80, 125, 255"
    secondColor="200, 80, 255"
    thirdColor="75, 125, 255"
    fourthColor="110, 135, 255"
    fifthColor="120, 155, 255"
    blendingValue="soft-light"
    size="90%"
    interactive={false}
    containerClassName="absolute inset-0"
  />
);

const DarkHero = () => (
  <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(30, 0, 60)"
    gradientBackgroundEnd="rgb(60, 0, 80)"
    firstColor="115, 70, 255"
    secondColor="195, 105, 255"
    thirdColor="90, 40, 200"
    fourthColor="115, 70, 255"
    fifthColor="195, 105, 255"
    blendingValue="soft-light"
    size="90%"
    interactive={false}
    containerClassName="absolute inset-0"
  />
);

const Hero: React.FC<HeroProps> = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative pt-16 overflow-hidden">
      {resolvedTheme === 'dark' ? <DarkHero /> : <LightHero />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-black dark:text-white tracking-tight leading-[1.1]">
              Human-Centered Design, Built for Results.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted dark:text-white/80 max-w-2xl leading-relaxed">
              I specialize in experience design for enterprise SaaS, AI-native products, and complex digital platforms. Bringing human-centered thinking, creative problem-solving, and technology together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
