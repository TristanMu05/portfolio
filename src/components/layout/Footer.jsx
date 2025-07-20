'use client';

import { useState } from 'react';
import { personalInfo, navigationItems, socialLinks } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';
import Button from '@/components/ui/Button';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      smoothScrollTo(href);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'About', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog', disabled: true },
    { name: 'GitHub', href: 'https://github.com/TristanMu05' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-murad-5466532b4' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Back to Top Button */}
      <div className="relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                {personalInfo.bio}
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span className="mr-2">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    aria-label={`Visit ${link.name}`}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  {link.disabled ? (
                    <span className="text-gray-500 text-sm cursor-not-allowed">
                      {link.name} <span className="text-xs">(Soon)</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about new projects and blog posts (coming soon).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled
              />
              <Button size="sm" disabled className="opacity-50 cursor-not-allowed">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-xs mt-2">Coming soon!</p>
          </div>
        </div>

        {/* Availability Status */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/50 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400 font-medium text-sm">
              Available for new projects
            </span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <button
                onClick={() => handleNavClick('#home')}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Tech Badge */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <span>Made with</span>
            <span className="text-red-400">❤️</span>
            <span>using</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Next.js</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
            <span className="bg-gray-800 px-2 py-1 rounded">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 