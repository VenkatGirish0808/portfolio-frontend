import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  // GSAP animation for the text content
  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate "Future-Ready" heading with a more dynamic effect
    timeline.fromTo(headingRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      skewY: 5,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewY: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power4.out',
    });

    // Animate "Full-Stack Developer" span with a similar dynamic effect
    timeline.fromTo(developerRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      skewY: 5,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewY: 0,
      duration: 1.5,
      ease: 'power4.out',
    }, '-=1.2'); // Overlap with the previous animation for a fluid look

    // Animate the tagline
    timeline.from(taglineRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8');

    // Animate the descriptive paragraph
    timeline.from(descRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8');

    // Animate the social links
    timeline.from(socialsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8');

  }, { scope: heroRef });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });

    const shapes: THREE.Mesh[] = [];
    // Only reduce shapes on mobile for performance, keep original count on desktop
    const shapeCount = window.innerWidth < 768 ? 10 : 15;
    for (let i = 0; i < shapeCount; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(mesh);
      shapes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0x06b6d4, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(ambientLight, directionalLight);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1);
        shape.rotation.y += 0.005 * (index % 3 === 0 ? 1 : -1);
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-0" />

      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
            <span ref={headingRef}>Future-Ready</span>
            <br />
            <span ref={developerRef} className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          <p ref={taglineRef} className="text-xl md:text-2xl text-blue-100 font-medium drop-shadow-lg">
            | AI-Adaptable | Global Ready |
          </p>

          <p ref={descRef} className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Full-Stack Developer from India with expertise in modern web technologies,
            AI integration, and Remote Collaboration.
          </p>

          {/* Social Links */}
          <div ref={socialsRef} className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/VenkatGirish0808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition duration-300"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-venkat-girish-77b167276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition duration-300"
            >
              <Linkedin size={30} />
            </a>
            
            <a
              href="mailto:venkatgirish007@gmail.com"
              className="text-blue-300 hover:text-white transition duration-300"
            >
              <Mail size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;