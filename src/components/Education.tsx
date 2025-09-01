import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    
    if (!section || !timeline) return;

    // Simple fade-in animations without GSAP
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    const title = section.querySelector('.education-title');
    const items = timeline.querySelectorAll('.education-item');
    
    if (title) observer.observe(title);
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: 'Bachelor of Engineering (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'RL Jalappa Institute of Technology',
      location: 'Karnataka, India',
      period: '2020 - 2024',
      grade: 'CGPA: 7.18',
      description: 'Specialized in Software Engineering, Data Structures, Algorithms, and Web Technologies.'
    },
    {
      degree: 'Board of Intermediate Education',
      field: 'MPC (Maths,Physics, Chemistry)',
      institution: 'Krishna Reddy Siddartha Junior college',
      location: 'Andhra Pradesh, India',
      period: '2018 - 2020',
      grade: 'CGPA: 7.98',
      description: 'Focused on Mathematics, Physics and Chemistry.'
    },
    {
      degree: 'Board of Secondary Education',
      field: 'All Subjects',
      institution: 'Mother Meera EM High School',
      location: 'Andhra Pradesh, India',
      period: '2018',
      grade: 'CGPA: 9.5',
      description: 'Completed secondary education with excellent academic performance across all subjects including Mathematics, Science, English, and Social Studies.'
    }
  ];

  return (
    <section 
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="education-title text-4xl md:text-5xl font-bold text-center text-white mb-4 opacity-0 transform translate-y-8 transition-all duration-1000">
          Educational
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-3">
            Background
          </span>
        </h2>
        
        <p className="text-center text-slate-400 text-lg mb-16 max-w-3xl mx-auto">
          Strong academic foundation in computer science with hands-on experience in 
          modern technologies and software development practices.
        </p>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 h-full"></div>
          <div className="md:hidden absolute left-4 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 h-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`education-item flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 opacity-0 transform transition-all duration-800 ${
                  index % 2 === 0 ? 'md:flex-row md:translate-x-8' : 'md:flex-row-reverse md:-translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-full">
                        <GraduationCap size={24} className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white text-left">{edu.degree}</h3>
                        <p className="text-blue-300 font-medium text-left">{edu.field}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin size={16} className="text-cyan-400" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar size={16} className="text-green-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Award size={16} className="text-yellow-400" />
                        <span className="font-semibold text-yellow-300">{edu.grade}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-2 md:mb-4 leading-relaxed text-left">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop only */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Education;
