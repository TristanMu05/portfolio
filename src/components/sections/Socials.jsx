'use client';

import { useState, useEffect } from 'react';
import { socialLinks, additionalSocials } from '@/lib/constants';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const SocialCard = ({ social, index, isVisible }) => {
  const handleClick = () => {
    window.open(social.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className={`
        group cursor-pointer transition-all duration-500 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25
      `}
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={handleClick}
    >
      <div className="text-center">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {social.icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {social.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-200">
          {social.description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="group-hover:border-blue-500 group-hover:text-blue-400 transition-all duration-200"
        >
          Visit
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Button>
      </div>
    </Card>
  );
};

const PlatformStats = ({ isVisible }) => {
  const stats = [
    { platform: 'GitHub', count: '4+', label: 'Repositories' },
    { platform: 'Instagram', count: '500+', label: 'Personal Posts' },
    { platform: 'Social Media', count: '5K+', label: 'Followers Across Platforms' },
  ];

  return (
    <div className={`
      grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 transform
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
    `}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
            {stat.count}
          </div>
          <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
          <Badge variant="outline" size="sm">
            {stat.platform}
          </Badge>
        </div>
      ))}
    </div>
  );
};

const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('socials');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const allSocials = [...socialLinks, ...additionalSocials];

  return (
    <>
      {/* Visual Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              <div className="px-8 py-3 bg-gray-700 rounded-full border border-gray-600 shadow-lg shadow-blue-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  <span className="text-gray-200 font-medium">Connect & Follow</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <section id="socials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect With Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Follow my journey across different platforms - from coding tutorials and 
            algorithm solutions to behind-the-scenes development content.
          </p>
        </div>

        {/* Platform Statistics */}
        <PlatformStats isVisible={isVisible} />

        {/* Main Social Links */}
        <div className={`
          mb-16 transition-all duration-1000 delay-300 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialLinks.map((social, index) => (
              <SocialCard
                key={index}
                social={social}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Additional Social Links */}
        <div className={`
          mb-16 transition-all duration-1000 delay-700 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Content & Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalSocials.map((social, index) => (
              <SocialCard
                key={index}
                social={social}
                index={index + socialLinks.length}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className={`
          text-center transition-all duration-1000 delay-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Follow My Coding Journey
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              From algorithm tutorials on YouTube to personal life updates on Instagram, 
              I share my passion for programming and life across multiple platforms. Join me as I explore 
              the latest in AI, full-stack development, and share my personal journey!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open('https://github.com/TristanMu05', '_blank')}
                size="lg"
                className="group"
              >
                <span className="mr-2">💻</span>
                View GitHub
                <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
              </Button>
              
              <Button
                onClick={() => window.open('https://www.youtube.com/@Eleetcodeer', '_blank')}
                variant="outline"
                size="lg"
                className="group"
              >
                <span className="mr-2">📺</span>
                Watch Tutorials
                <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={`
          mt-12 text-center transition-all duration-1000 delay-1200 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="flex flex-wrap justify-center gap-2">
            {allSocials.map((social, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
                onClick={() => window.open(social.href, '_blank')}
              >
                {social.icon} {social.name}
              </Badge>
            ))}
          </div>
                 </div>
       </div>
     </section>
   </>
   );
 };
 
 export default Socials; 