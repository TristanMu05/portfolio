'use client';

import { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '@/lib/constants';

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      href: null,
      description: 'Based in'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Methods */}
      <Card>
        <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                <span className="text-xl">{method.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{method.label}</h4>
                <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-gray-300">{method.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Social Links */}
      <Card>
        <h3 className="text-xl font-bold text-white mb-6">Connect with Me</h3>
        <div className="space-y-3">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              onClick={() => window.open(link.href, '_blank')}
              variant="ghost"
              className="w-full group justify-start text-left p-4 h-auto"
            >
              <span className="text-xl mr-3">{link.icon}</span>
              <div>
                <div className="text-white group-hover:text-blue-400 transition-colors duration-200">
                  {link.name}
                </div>
                <div className="text-gray-400 text-xs">
                  {link.name === 'Email' ? 'Send a message' : `Visit my ${link.name}`}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Contact = () => {
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <>
      {/* Visual Transition */}
      <div className="h-20 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, a project idea, or just want to say hello, 
            I'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className={`
          max-w-4xl mx-auto transition-all duration-1000 delay-300 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          {/* Contact Information */}
          <ContactInfo />
        </div>

        {/* Availability Status */}
        <div className={`
          mt-16 text-center transition-all duration-1000 delay-700 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-500/50 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-medium">
              Currently available for new projects
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`
          mt-16 text-center transition-all duration-1000 delay-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and see how we can bring them to life. 
              I'm here to help you build something amazing.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => window.open(`mailto:${personalInfo.email}?subject=Let's Work Together`, '_blank')}
                size="lg"
                className="group"
              >
                <span className="mr-2">📧</span>
                Email Me
                <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className={`
          mt-8 text-center transition-all duration-1000 delay-1200 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <p className="text-gray-500 text-sm">
            ⏱️ I typically respond within 24 hours
          </p>
                 </div>
       </div>
     </section>
   </>
   );
 };
 
 export default Contact; 