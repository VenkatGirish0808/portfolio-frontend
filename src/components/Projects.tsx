import React, { useEffect, useRef, useState } from 'react';
import { Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  category: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Online Game Store',
      description: 'Developed an Online Game Store platform enabling users to browse, purchase, and play video games through a secure card payment system.',
      longDescription: 'Implemented user authentication, intuitive game selection, and dynamic pricing features to enhance the shopping experience. Integrated secure payment processing and streamlined navigation for seamless gameplay access.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WebDevelopment'],
      githubUrl: 'https://github.com/VenkatGirish0808/online-game-store-',
      category: 'Frontend',
      featured: true
    },
    {
      id: 2,
      title: 'Prediction of Heart Disease Using Machine Learning',
      description: 'Developed a machine learning model to predict heart disease risk by analyzing medical data, enabling early detection and proactive healthcare decisions.',
      longDescription: 'Developed a final-year project that applies basic machine learning algorithms to evaluate heart disease risk using selected health parameters. Focused on data preprocessing, model training, and simple evaluation techniques to demonstrate the potential of predictive analytics in healthcare.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['python', 'Pycharm', 'Numpy', 'Pandas', 'Data Processing Libraries '],
      githubUrl: 'https://github.com/VenkatGirish0808/Prediction-of-Heart-Disease-Using-Machine-Learning',
      category: 'Machine Learning',
      featured: true
    },
    {
      id: 3,
      title: 'Power BI Dashboard Project',
      description: 'Created an interactive Power BI dashboard to visualize and analyze data, delivering clear and actionable insights.',
      longDescription: 'Designed and developed a Power BI dashboard project as part of a data analytics course. Focused on transforming raw data into meaningful visual reports for easy interpretation.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PowerBI'],
      githubUrl: 'https://github.com/VenkatGirish0808/PowerBI-Dashboard01',
      category: 'Data Visualization',
      featured: true
    },
    {
      id: 4,
      title: 'Badminton Court Management System',
      description: 'Developed a badminton court management system using SQL and PHP to handle bookings and court availability efficiently.',
      longDescription: 'Built a database-driven badminton court management system using SQL and PHP to manage court bookings, track availability, and store user details. The project streamlined the reservation process, ensuring accurate scheduling and reducing manual errors.',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SQL','PHP'],
      category: 'DBMS',
      featured: true
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    
    if (!section || !grid) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const title = section.querySelector('.projects-title');
    const projectCards = grid.querySelectorAll('.project-card');
    
    if (title) observer.observe(title);
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <style>{`
        .projects-title, .project-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .projects-title.animate-in,
        .project-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .project-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .project-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .project-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        .project-card:nth-child(4).animate-in { transition-delay: 0.4s; }
        .modal-overlay { animation: modalFadeIn 0.3s ease-out; }
        .modal-content { animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <section 
        id="projects"
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-slate-900 to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="projects-title text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-3">
              Projects
            </span>
          </h2>
          
          <p className="text-center text-slate-400 text-lg mb-12 max-w-3xl mx-auto px-2 sm:px-0">
            "Have a look at these projects—they'll show you what I'm capable of."
          </p>

          {/* Responsive grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h3 className="text-white font-semibold text-lg sm:text-xl group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <button 
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github size={16} />
                          Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - responsive */}
      {selectedProject && (
        <div className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="modal-content bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-40 sm:h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                <span className="text-xs sm:text-sm text-slate-400 bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                {selectedProject.githubUrl && (
                  <button 
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base"
                  >
                    <Github size={20} />
                    View Code
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
