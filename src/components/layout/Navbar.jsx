'use client';

import { useState, useEffect } from 'react';
import { cn, smoothScrollTo, getActiveSection } from '@/lib/utils';
import { navigationItems, externalLinks } from '@/lib/constants';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setActiveSection(getActiveSection());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      smoothScrollTo(href);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tristan Murad
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                    'hover:bg-gray-800 hover:text-blue-400',
                    activeSection === item.href.replace('#', '')
                      ? 'bg-gray-800 text-blue-400 shadow-md'
                      : 'text-gray-300'
                  )}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </button>
              ))}
              
              {/* External Links */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-700">
                {externalLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => !link.disabled && handleNavClick(link.href)}
                    disabled={link.disabled}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      link.disabled
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                    )}
                    title={link.disabled ? 'Coming Soon' : `Visit ${link.name}`}
                  >
                    <span className="mr-1">{link.icon}</span>
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden transition-all duration-300 ease-in-out',
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                'block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                'hover:bg-gray-800 hover:text-blue-400',
                activeSection === item.href.replace('#', '')
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-300'
              )}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
          
          <div className="pt-4 border-t border-gray-700">
            {externalLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => !link.disabled && handleNavClick(link.href)}
                disabled={link.disabled}
                className={cn(
                  'block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                  link.disabled
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                )}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
                {link.disabled && <span className="text-xs ml-2">(Coming Soon)</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 