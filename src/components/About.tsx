import React from 'react';
import { Brain, Users, Lightbulb, Sparkles, Heart, Award, TrendingUp, MessageSquare } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Transforming Ideas into Digital Experiences
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              Welcome, where creativity and strategy come together to transform ideas into seamless digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                I'm Timothy McGuire, an Experience Designer with over 12 years of experience helping businesses solve complex challenges through thoughtful, user-centered design.
              </p>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                I believe great design is about more than just aesthetics—it's about creating solutions that resonate with users, simplify workflows, and deliver measurable results. From redesigning SaaS platforms to crafting mobile-first experiences, I've worked with businesses of all sizes to turn their vision into reality.
              </p>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                What sets me apart is my process. I dive deep into understanding your unique goals, leveraging research, data-driven insights, and innovative design principles to create impactful solutions.
              </p>
              <p className="text-muted dark:text-neutral-400 leading-relaxed">
                Whether you're looking to reimagine a digital product, enhance your brand's online presence, or tackle a new challenge, I'm here to help you create designs that inspire and succeed.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://img1.wsimg.com/isteam/ip/8750adee-7fef-47ca-9c3a-3982c0b9d811/Timothy-McGuire.png/:/rs=w:740,cg:true,m"
                alt="Timothy McGuire"
                className="w-full rounded-none border border-[#D9D9D9] dark:border-white/[0.1]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Design Leadership</h2>
          <p className="text-muted dark:text-neutral-400 mb-12 max-w-3xl">
            Throughout my career I've led design functions, mentored junior designers, and built the processes that let cross-functional teams move faster without losing quality.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Award className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Principal & Lead Experience</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Served as Principal UX Designer and Design Manager at multiple organizations, owning end-to-end design strategy from discovery through delivery.
              </p>
            </div>
            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Cross-Functional Alignment</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Experienced at aligning product, engineering, data science, and executive stakeholders on design direction.
              </p>
            </div>
            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Mentorship & Culture</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Committed to building design cultures where craft is celebrated and junior designers grow through mentorship and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Core Values</h2>
          <p className="text-muted dark:text-neutral-400 mb-12 max-w-3xl">
            Every project starts with a simple question: How can we make this better for the user? This guiding principle drives my approach to design.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Brain, title: 'Human-Centered', description: 'We prioritize understanding the people behind the screens.' },
              { icon: Users, title: 'Collaboration', description: 'Great ideas are born from teamwork with clients and stakeholders.' },
              { icon: Lightbulb, title: 'Impact', description: "Good design isn't just about aesthetics—it's about results." },
              { icon: Sparkles, title: 'Simplicity', description: 'Focusing on what matters creates experiences that are easy to use.' },
              { icon: Heart, title: 'Accessibility', description: 'Design should be for everyone, inclusive and welcoming.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
                  <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="text-xl italic text-muted dark:text-neutral-400">
              "I'm not just creating digital products; I'm crafting experiences that connect, inspire, and endure."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Want to work together?
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's discuss your project and see how I can help.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
