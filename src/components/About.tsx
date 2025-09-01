import React, { useEffect, useRef, useState } from 'react';
import { Code, Globe, Zap, Users, Brain, Rocket, Briefcase, Video, Edit3, FileText, Search, Database, Cloud, Smartphone, ArrowLeft, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    main: false,
    services: false,
    technical: false,
    research: false
  });
  const [activeService, setActiveService] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const technicalRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement | null>(document.getElementById('contact'));
  
  // =========================================================================
  // FIX: The path has been updated to reference a file in the `public` folder.
  // ACTION REQUIRED: You must place your 'profile.jpg' file inside the `public` folder of your project.
  // For example, in a project created with Create React App, this would be `myportfolio/public/profile.jpg`.
  // =========================================================================
  const profileImage = '/profile.jpg'; // Corrected path

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === sectionRef.current) {
              setIsVisible(prev => ({ ...prev, main: true }));
            } else if (target === servicesRef.current) {
              setIsVisible(prev => ({ ...prev, services: true }));
            } else if (target === technicalRef.current) {
              setIsVisible(prev => ({ ...prev, technical: true }));
            } else if (target === researchRef.current) {
              setIsVisible(prev => ({ ...prev, research: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const refs = [sectionRef, servicesRef, technicalRef, researchRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleGetInTouch = () => {
    // Find the contact section dynamically
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { icon: Code, name: 'Full-Stack Development', color: 'text-blue-400' },
    { icon: Globe, name: 'Remote Collaboration', color: 'text-green-400' },
    { icon: Brain, name: 'AI Integration', color: 'text-purple-400' },
    { icon: Zap, name: 'Performance Optimization', color: 'text-yellow-400' },
    { icon: Users, name: 'Team Leadership', color: 'text-pink-400' },
    { icon: Rocket, name: 'Rapid Deployment', color: 'text-cyan-400' }
  ];

  const services = [
    {
      id: 'freelancer',
      icon: Briefcase,
      title: 'Freelancer',
      description: 'Independent full-stack development projects with custom solutions for diverse clients.',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/50'
    },
    {
      id: 'youtube-editor',
      icon: Video,
      title: 'YouTube Channel Editor',
      description: 'Video editing, thumbnail design, and content optimization for engaging YouTube channels.',
      color: 'text-red-400',
      borderColor: 'border-red-500/50'
    },
    {
      id: 'content-writer',
      icon: Edit3,
      title: 'Content Writer',
      description: 'Story Writing --- Horror, Comedy, Trillers and more.',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/50'
    },
    {
      id: 'blog-writer',
      icon: FileText,
      title: 'Blog Writer',
      description: 'The things which i explored mostly on them.',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/50'
    }
  ];

  const serviceDetails = {
    freelancer: {
      title: 'Freelance Development',
      description: 'As a freelance full-stack developer, I specialize in creating custom web applications and digital solutions for clients across various industries. My approach combines cutting-edge technology with user-centered design to deliver exceptional results.',
      skills: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'AWS & Cloud Deployment', 'API Development', 'UI/UX Design'],
      projects: [
        {
          name: 'E-commerce Platform',
          client: 'Retail Startup',
          duration: '3 months',
          description: 'Built a complete e-commerce solution with inventory management, payment integration, and admin dashboard.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
          status: 'Completed'
        },
        {
          name: 'SaaS Dashboard',
          client: 'Tech Company',
          duration: '2 months',
          description: 'Developed a real-time analytics dashboard with data visualization and user management features.',
          technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
          status: 'Completed'
        },
        {
          name: 'Mobile App Backend',
          client: 'Healthcare Startup',
          duration: '4 months',
          description: 'Created RESTful APIs and database architecture for a healthcare mobile application.',
          technologies: ['Express.js', 'MongoDB', 'JWT Auth', 'AWS S3'],
          status: 'In Progress'
        }
      ]
    },
    'youtube-editor': {
      title: 'YouTube Channel Editor',
      description: 'I help content creators bring their vision to life through professional video editing, engaging thumbnails, and strategic content optimization. My editing style focuses on maintaining viewer engagement while preserving the creator\'s unique voice.',
      skills: ['DaVinci Resolve', 'After Effects', 'Photoshop', 'Color Grading', 'Motion Graphics', 'YouTube SEO'],
      projects: null
    },
    'content-writer': {
      title: 'Content Writing',
      description: 'I specialize in imaginative storytelling across formats — cartoon scripts, horror tales, fantasy worlds, and movie screenplays. Not related to technical writing.',
      skills: ['Scriptwriting', 'Creative Writing', 'World-Building', 'Character Development', 'Plotting'],
      projects: null
    },
    'blog-writer': {
      title: 'Blog Writer',
      description: 'I write on topics that spark my curiosity — anything from tech to life, opinions, experiences, or abstract thoughts. There are no topic boundaries.',
      skills: ['Technical Writing', 'Creative Writing', 'Research', 'SEO Optimization', 'Audience Engagement'],
      projects: null
    }
  };

  const technicalSkills = [
    { name: 'Frontend', level: 90, icon: 'bg-blue-500', skills: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'JavaScript','Tailwind CSS'] },
    { name: 'Backend', level: 85, icon: 'bg-green-500', skills: ['Node.js', 'Express', 'API Development','Rest API'] },
    { name: 'Database', level: 80, icon: 'bg-yellow-500', skills: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { name: 'Business Intelligence', level: 75, icon: 'bg-purple-500', skills: ['Excel', 'Power BI', 'Data Analysis', 'Data Visualization'] },
    { name: 'Cloud & DevOps', level: 70, icon: 'bg-cyan-500', skills: ['AWS', 'Docker', 'Vercel'] }
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring LLMs, computer vision, and AI integration in web applications.',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      title: 'Web Performance',
      description: 'Research on optimization techniques and modern web architecture patterns.',
      color: 'text-green-400'
    },
    {
      icon: Search,
      title: 'Archaeological Temples',
      description: 'Exploring ancient temple architecture, construction techniques, and historical significance.',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Ancient Mysteries',
      description: 'Research into unexplained historical phenomena and ancient civilizations.',
      color: 'text-cyan-400'
    }
  ];

  const handleServiceClick = (serviceId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveService(serviceId);
    
    // Scroll to the top of the About section to show the detailed view properly
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleBackClick = () => {
    setActiveService(null);
    // Stay in the About section when going back
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (activeService) {
    const serviceDetail = serviceDetails[activeService as keyof typeof serviceDetails];
    const service = services.find(s => s.id === activeService);

    return (
      <section
        id="about"
        ref={sectionRef}
        className="py-12 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="mb-6 md:mb-8">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 group text-sm md:text-base"
            >
              <ArrowLeft size={16} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
            </div>

          <div className="space-y-8 md:space-y-12">
            {/* Service Header */}
            <div className="text-center space-y-3 md:space-y-4">
              <div className="flex justify-center mb-4 md:mb-6">
                {service && <service.icon size={48} className={`md:w-16 md:h-16 ${service.color}`} />}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {serviceDetail.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {serviceDetail.description}
              </p>
            </div>

            {/* Skills */}
            <div className="bg-slate-800/50 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">Key Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {serviceDetail.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="text-slate-300 text-xs sm:text-sm font-medium break-words leading-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 md:p-8 border border-blue-500/20 mx-2 sm:mx-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Interested in working together?
              </h3>
              <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base px-2 sm:px-0">
                Let's discuss how I can help bring your project to life with my {serviceDetail.title.toLowerCase()} expertise.
              </p>
              <button
                onClick={handleGetInTouch}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto text-sm md:text-base"
              >
                Get In Touch
                <ExternalLink size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className={`about-content space-y-12 md:space-y-16 transition-all duration-1000 ${isVisible.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main About Content */}
          <div className="space-y-8 md:space-y-12">
            <div className="text-center px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                About
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2 md:ml-3">
                  Me
                </span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto">
                Get to know more about my skills and experience
              </p>
            </div>

            {/* Enhanced Profile Picture Section - Mobile Optimized */}
            <div className="w-full bg-slate-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 mb-6 md:mb-8 flex flex-col items-center gap-4 sm:gap-6 md:flex-row">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1 relative flex-shrink-0">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center text-slate-400">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => { e.currentTarget.src = 'profile.jpg'; }}
                  />
                </div>
              </div>
              <div className="text-center md:text-left space-y-2 px-2 sm:px-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">S VenkatGirish</h3>
                <p className="text-blue-400 font-medium text-base sm:text-lg leading-relaxed">
                  | Full-Stack Developer | AI Integrator | Data Analyst |
                </p>
              </div>
            </div>

            {/* Separated Text and Skills Section - Mobile Enhanced */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* About Text */}
              <div className="space-y-4 md:space-y-6 text-slate-300 text-base md:text-lg px-2 sm:px-0">
                <p className="leading-relaxed md:leading-loose">
                  I'm an <span className="text-blue-400 font-semibold">Entry Level</span> Full-Stack Developer at a fast-growing startup in India, where I build scalable, user-centric web applications from the ground up. I thrive on experimenting with the latest technologies—especially <span className="text-blue-400 font-semibold">AI</span> to turn ambitious ideas into practical solutions.
                </p>
                <p className="leading-relaxed md:leading-loose">
                  My passion lies in creating <span className="text-green-400 font-semibold">innovative solutions</span> that solve real-world problems while maintaining exceptional code quality and user experience. What sets me apart is my ability to <span className="text-cyan-400 font-semibold">adapt rapidly</span> to emerging technologies, especially in the AI space.
                </p>
              </div>
              {/* Skills Grid Section - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`skill-icon flex flex-col items-center text-center p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${isVisible.main ? `opacity-100 scale-100 animate-slide-up-fade-in` : 'opacity-0 scale-75'}`}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <IconComponent size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 ${skill.color} mb-2`} />
                      <span className="text-slate-300 text-xs sm:text-sm font-medium leading-tight text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interests Section - Mobile Enhanced */}
          <div ref={servicesRef} className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center px-4 sm:px-0">
              My <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Interests</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`service-card p-4 sm:p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border ${service.borderColor} hover:scale-105 transition-all duration-500 cursor-pointer group ${isVisible.services ? `opacity-100 translate-x-0` : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                    onClick={(e) => handleServiceClick(service.id, e)}
                  >
                    <IconComponent size={40} className={`sm:w-12 sm:h-12 ${service.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Know More <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 ml-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Skills Section - Mobile Enhanced */}
          <div ref={technicalRef} className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible.technical ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center px-4 sm:px-0">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-2 sm:px-0">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-slate-800/50 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 ${isVisible.technical ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`h-2 w-8 sm:w-10 ${skill.icon} rounded-full mr-3 sm:mr-4 animate-glow`}></div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h4>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="h-2 w-full bg-slate-700 rounded-full">
                      <div
                        className={`h-full ${skill.icon} rounded-full transition-all duration-1000 ease-out animate-pulse-progress`}
                        style={{ width: isVisible.technical ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-slate-400 text-sm font-mono flex-shrink-0">{skill.level}%</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((subSkill) => (
                      <span
                        key={subSkill}
                        className="px-2.5 sm:px-3 py-1 bg-slate-700/50 rounded-full text-xs sm:text-sm text-slate-300 border border-slate-600/50"
                      >
                        {subSkill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Areas - Mobile Enhanced */}
          <div ref={researchRef} className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible.research ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center px-4 sm:px-0">
              Research <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Interests</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-4 sm:p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
                  >
                    <IconComponent size={40} className={`sm:w-12 sm:h-12 ${area.color} mx-auto mb-3 sm:mb-4`} />
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{area.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes slide-up-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-fade-in {
          animation: slide-up-fade-in 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 2px var(--tw-bg-opacity, 1) #3b82f6); }
          50% { filter: drop-shadow(0 0 6px var(--tw-bg-opacity, 1) #3b82f6); }
          100% { filter: drop-shadow(0 0 2px var(--tw-bg-opacity, 1) #3b82f6); }
        }
        .animate-glow {
          animation: glow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes pulse-progress {
          0%, 100% { transform: scaleX(0.95); opacity: 0.8; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        .animate-pulse-progress {
          transform-origin: left;
          animation: pulse-progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        `}
      </style>
    </section>
  );
};

export default About;