import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, Building, CheckCircle, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verifyUrl: string;
  image: string;
  category: string;
}

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Web Development',
      issuer: 'TechCiti Software Consulting Pvt Ltd',
      date: '23-08-2023 to 23-09-2023',
      credentialId: 'TSCPL/2023-2024/HRD/INT6010',
      description: 'Developed an Online Game Store platform enabling users to browse, purchase, and play video games through a secure card payment system.',
      skills: ['HTML','CSS','JavaScript','Web Development'],
      verifyUrl: 'https://drive.google.com/file/d/1K7i02mtI2YdzyL_qXV2nEg7l-1GBzM0P/view?usp=drivesdk',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Internship'
    },
    {
      id: 2,
      title: 'Data Analytics',
      issuer: 'Career School HR Solutions',
      date: 'june 2024 to November 2024',
      credentialId: ' - ',
      description: 'Completed a data analytics course covering Excel, SQL, and Power BI for data visualization, reporting, and insights generation.',
      skills: ['Excel', 'PowerBI', 'SQL', 'Data Visualization'],
      verifyUrl: 'https://drive.google.com/file/d/1RfoKBE2Ula2oT1WTQlbACZhcDdB_MD_u/view?usp=drivesdk',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Course'
    },
    {
      id: 3,
      title: 'AI Tools, Generative Adversarial Network (GAN) and YOLO',
      issuer: 'FDP (Faculty Development Program)',
      date: 'November 2023',
      credentialId: ' -',
      description: ' Completed your faculty development program on AI tools focusing on general AI to Adversarial networks (GAN) and YOLO for computer vision applications. ',
      skills: ['AI', 'GAN', 'YOLO', 'Computer Vision','Deep Learning'],
      verifyUrl: 'https://drive.google.com/file/d/1aSAtG5afyLhXfS22dojOvixJGh_lQt4Q/view?usp=drivesdk',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'AI'
    },
    {
      id: 4,
      title: 'Certificate of  Appreciation',
      issuer: 'RL JALAPPA INSTITUTE OF TECHNOLOGY',
      date: 'May 2024',
      credentialId: ' - ',
      description: 'Published a research paper titled Heart Disease Prediction using Machine Learning in the International Journal of Scientific Research in Computer Science, Engineering, and Information Technology (Vol. 10, pp. 167–172).',
      skills: [],
      verifyUrl: 'https://drive.google.com/file/d/1N5c1BtMS7M657tygxFWqa8rOdYebPyar/view?usp=drivesdk',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Accomplishments'
    },
    {
      id: 5,
      title: 'Journal Publiction of Final Year Project',
      issuer: 'International Journal of Scientific Research in Computer Science Engineering and Information Technology',
      date: 'May 2024',
      credentialId: '10/Issue 3/CSEIT2410321',
      description: 'Published a research paper titled Heart Disease Prediction Using Machine Learning in the International Journals of Scientific Research in Computer Science Engineering and Information Technology',
      skills: [],
      verifyUrl: 'https://drive.google.com/file/d/1C75BULXRtf7Du7sl3wTByAwYSuvxgiJu/view?usp=drivesdk',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Accomplishments'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const categories = ['All', 'Internship', 'Course', 'AI', 'Accomplishments'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <>
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .fade-in-up-delay-1 { animation-delay: 0.2s; }
        .fade-in-up-delay-2 { animation-delay: 0.4s; }
        .fade-in-up-delay-3 { animation-delay: 0.6s; }
        .fade-in-up-delay-4 { animation-delay: 0.8s; }

        .modal-enter { animation: modalEnter 0.3s ease-out forwards; }
        .modal-content-enter { animation: modalContentEnter 0.4s ease-out forwards; }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalEnter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalContentEnter {
          from { opacity: 0; transform: scale(0.9) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .cert-card { transition: all 0.3s ease; }
        .cert-card:hover { transform: scale(1.05); }
      `}</style>

      <section 
        id="certificates"
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 ${isVisible ? 'fade-in-up' : ''}`}>
            Professional
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2">
              Certificates
            </span>
          </h2>
          
          <p className={`text-center text-slate-400 text-base sm:text-lg mb-12 max-w-3xl mx-auto ${isVisible ? 'fade-in-up fade-in-up-delay-1' : ''}`}>
            Industry-recognized certifications demonstrating expertise in cutting-edge technologies 
            and commitment to continuous learning and professional development.
          </p>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 ${isVisible ? 'fade-in-up fade-in-up-delay-2' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${isVisible ? 'fade-in-up fade-in-up-delay-3' : ''}`}>
            {filteredCertificates.map((cert, index) => (
              <div 
                key={cert.id}
                className="cert-card group cursor-pointer"
                onClick={() => openModal(cert)}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-3 right-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full p-1.5 sm:p-2">
                      <CheckCircle size={18} className="text-green-400" />
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs sm:text-sm text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                        {cert.category}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400">{cert.date}</span>
                    </div>
                    
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Building size={14} className="text-cyan-400" />
                      <span className="text-slate-300 text-sm">{cert.issuer}</span>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center gap-1 sm:gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.verifyUrl, '_blank');
                        }}
                      >
                        <ExternalLink size={14} />
                        Verify
                      </button>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Award size={14} className="text-yellow-400" />
                        <span className="text-slate-400 text-xs sm:text-sm">Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 modal-enter">
          <div className="bg-slate-800 rounded-2xl w-full max-w-lg sm:max-w-4xl max-h-[90vh] overflow-y-auto modal-content-enter">
            <div className="relative">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full p-1.5 sm:p-2">
                <CheckCircle size={20} className="text-green-400" />
              </div>
            </div>
            
            <div className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building size={18} className="text-cyan-400" />
                      <span className="font-medium text-sm sm:text-base">{selectedCert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-green-400" />
                      <span className="text-sm sm:text-base">{selectedCert.date}</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full">
                  {selectedCert.category}
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                  {selectedCert.description}
                </p>
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4">
                  <p className="text-slate-400 text-xs sm:text-sm">
                    <strong>Credential ID:</strong> {selectedCert.credentialId}
                  </p>
                </div>
              </div>
              
              {selectedCert.skills.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs sm:text-sm text-blue-300 bg-blue-500/20 px-2 sm:px-3 py-1 rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => window.open(selectedCert.verifyUrl, '_blank')}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all"
                >
                  <ExternalLink size={18} />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;