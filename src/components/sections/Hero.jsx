'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';
import Button from '@/components/ui/Button';

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
  </div>
);

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToProjects = () => {
    smoothScrollTo('#projects');
  };

  const handleScrollToContact = () => {
    smoothScrollTo('#contact');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className={`
            mb-8 transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className={`
            mb-6 transition-all duration-1000 delay-300 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-6">
              <TypewriterText text={personalInfo.title} speed={80} />
            </h2>
          </div>

          {/* Bio */}
          <div className={`
            mb-8 transition-all duration-1000 delay-500 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Location and Contact Info */}
          <div className={`
            mb-10 transition-all duration-1000 delay-700 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`
            flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="group"
            >
              <span className="mr-2">💼</span>
              View Projects
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Button>
            
            <Button
              onClick={handleScrollToContact}
              variant="secondary"
              size="lg"
              className="group"
            >
              <span className="mr-2">💬</span>
              Contact Me
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">✨</span>
            </Button>
          </div>


        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
    </section>
  );
};

export default Hero; 