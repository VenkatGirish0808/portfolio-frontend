import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import ThreeDCube from './components/ThreeDCube';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add smooth scrolling to all anchor links
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName === 'A') {
        handleSmoothScroll(e);
      }
    });

    // Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
      transition: transform 0.1s ease-out;
    `;
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', updateCursor);

    // Optimize performance by refreshing ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Education />
      <ThreeDCube />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;