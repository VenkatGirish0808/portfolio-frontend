import React, { useEffect, useRef } from 'react';
import { Globe, Cpu, Zap, Code } from 'lucide-react';

const ThreeDCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 30;
      const rotateY = (x - 0.5) * 30;

      const cube = container.querySelector('.cube') as HTMLElement;
      if (cube) {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Future-Ready <span className="text-cyan-400">Technology</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Interactive 3D visualization of modern development ecosystem
          </p>
        </div>

        {/* On mobile: stack vertically, on large screens: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D CUBE */}
          <div
            ref={containerRef}
            className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center [perspective:1000px]"
          >
            <div className="cube-container w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative transform-style-preserve-3d">
              <div className="cube w-full h-full absolute transform-style-preserve-3d transition-transform duration-300 ease-out">
                {/* Front */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-cyan-400/10 border border-cyan-500 text-cyan-300"
                  style={{ transform: 'rotateY(0deg) translateZ(96px)' }}>
                  <Code className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                {/* Back */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-green-400/10 border border-green-500 text-green-300"
                  style={{ transform: 'rotateY(180deg) translateZ(96px)' }}>
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                {/* Right */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-purple-400/10 border border-purple-500 text-purple-300"
                  style={{ transform: 'rotateY(90deg) translateZ(96px)' }}>
                  <Cpu className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                {/* Left */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-orange-400/10 border border-orange-500 text-orange-300"
                  style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}>
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                {/* Top */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-indigo-400/10 border border-indigo-500 text-indigo-300"
                  style={{ transform: 'rotateX(90deg) translateZ(96px)' }}>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full animate-pulse" />
                </div>
                {/* Bottom */}
                <div className="cube-face absolute w-full h-full flex items-center justify-center bg-teal-400/10 border border-teal-500 text-teal-300"
                  style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-400 rounded-full animate-ping" />
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interactive Development Ecosystem
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                Hover over the cube to explore different aspects of modern development. 
                Each face represents a core area of expertise that drives innovation in today's tech landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Clean Code</h4>
                    <p className="text-gray-400 text-sm">Maintainable & Scalable</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-400/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Global Reach</h4>
                    <p className="text-gray-400 text-sm">Remote Collaboration</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">AI Integration</h4>
                    <p className="text-gray-400 text-sm">Smart Solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Performance</h4>
                    <p className="text-gray-400 text-sm">Optimized & Fast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDCube;
