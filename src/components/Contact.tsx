import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    
    if (!section || !form) return;

    gsap.fromTo(section.querySelector('.contact-title'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%'
        }
      }
    );

    const formElements = form.querySelectorAll('.form-element');
    formElements.forEach((element, index) => {
      gsap.fromTo(element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 80%'
          }
        }
      );
    });

    const contactInfo = section.querySelectorAll('.contact-info-item');
    contactInfo.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%'
          }
        }
      );
    });

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);

      gsap.fromTo('.success-message',
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  type ContactInfoItem = {
    icon: React.ElementType;
    label: string;
    value: string;
    link?: string | null;
  };

  const contactInfo: ContactInfoItem[] = [
    { icon: Mail, label: 'Email', value: 'venkatgirish007@gmail.com', link: null },
    { icon: Phone, label: 'Phone', value: '+91 7032314933', link: null },
    { icon: MapPin, label: 'Location', value: 'India', link: null }
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="contact-title text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Let's
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2 sm:ml-3">
            Connect
          </span>
        </h2>
        
        <p className="text-center text-slate-400 text-base sm:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto">
          Ready to discuss your next project? I'm available for full-time remote positions 
          and freelance opportunities. 
        </p>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-6">
            {isSubmitted ? (
              <div className="success-message text-center py-12">
                <CheckCircle size={60} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="form-element">
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-3.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="form-element">
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-3.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Company */}
                <div className="form-element">
                  <label htmlFor="company" className="block text-slate-300 text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Message */}
                <div className="form-element">
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 sm:py-3.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-element w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Get in Touch</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                I'm always interested in hearing about new opportunities, especially those involving 
                innovative technologies and remote collaboration. Whether you're looking for a 
                full-time developer or need help with a specific project, let's discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.label} className="contact-info-item flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <IconComponent size={22} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs sm:text-sm">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white font-medium hover:text-blue-400 transition-colors text-sm sm:text-base">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 sm:pt-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Entry level developer with a passion for Learning and Growth
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Can communicate in | English | Telugu | Hindi |
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Flexible with global time zones
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Fast learner and AI-adaptable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Contact;
