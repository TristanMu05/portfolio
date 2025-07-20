'use client';

import { useState, useEffect } from 'react';
import { experience, skills, education, certifications, personalInfo } from '@/lib/constants';
import { SkillCategory } from '@/components/SkillItem';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';


const ExperienceItem = ({ item, index, isVisible }) => (
  <div className={`
    relative transition-all duration-1000 transform
    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
  `} style={{ animationDelay: `${index * 200}ms` }}>
    {/* Timeline dot */}
    <div className="absolute left-0 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
    
    {/* Timeline line */}
    {index < experience.length - 1 && (
      <div className="absolute left-2 top-10 w-0.5 h-full bg-gray-700"></div>
    )}
    
    {/* Content */}
    <div className="ml-8">
      <Card className="group hover:shadow-xl hover:shadow-blue-500/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-blue-400 font-medium">{item.company}</p>
            <p className="text-gray-400 text-sm">{item.location}</p>
          </div>
          <Badge variant="outline" className="mt-2 sm:mt-0">
            {item.duration}
          </Badge>
        </div>
        
        <ul className="space-y-2 mb-4">
          {item.description.map((desc, idx) => (
            <li key={idx} className="text-gray-300 text-sm flex items-start">
              <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
              {desc}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, idx) => (
            <Badge key={idx} variant="tech" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const EducationItem = ({ item, isVisible }) => (
  <Card className={`
    group transition-all duration-1000 transform
    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
  `}>
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
          {item.degree}
        </h3>
        <p className="text-blue-400 font-medium">{item.school}</p>
        <p className="text-gray-400 text-sm">{item.location}</p>
      </div>
      <div className="text-right">
        <Badge variant="outline">{item.year}</Badge>
        {item.gpa && (
          <p className="text-sm text-gray-400 mt-1">GPA: {item.gpa}</p>
        )}
      </div>
    </div>
    
    {item.coursework && (
      <div>
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</h4>
        <div className="flex flex-wrap gap-1">
          {item.coursework.map((course, idx) => (
            <Badge key={idx} variant="default" size="sm">
              {course}
            </Badge>
          ))}
        </div>
      </div>
    )}
  </Card>
);

const CertificationItem = ({ item, index, isVisible }) => (
  <Card className={`
    group transition-all duration-1000 transform
    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
  `} style={{ animationDelay: `${index * 150}ms` }}>
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
          {item.name}
        </h3>
        <p className="text-blue-400 font-medium">{item.issuer}</p>
        {item.credentialId && (
          <p className="text-gray-400 text-xs mt-1">ID: {item.credentialId}</p>
        )}
      </div>
      <Badge 
        variant={item.year === 'In Progress' ? 'warning' : 'success'}
      >
        {item.year}
      </Badge>
    </div>
  </Card>
);

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('resume');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);



  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
  ];

  return (
    <section id="resume" className="relative py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resume & Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, technical skills, 
            and educational background in software development.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`
          flex justify-center mb-12 transition-all duration-1000 delay-300 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          {/* Desktop Tab Navigation */}
          <div className="hidden sm:flex bg-gray-900 rounded-lg p-1 border border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Tab Navigation - Stacked */}
          <div className="sm:hidden w-full max-w-xs">
            <div className="grid grid-cols-2 gap-2 bg-gray-900 rounded-lg p-2 border border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex flex-col items-center px-2 py-3 rounded-md text-xs font-medium transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  <span className="text-lg mb-1">{tab.icon}</span>
                  <span className="text-center leading-tight">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`
          transition-all duration-1000 delay-500 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="relative">
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <ExperienceItem
                    key={item.id}
                    item={item}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              {/* Core Skills - Featured Section */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      ⭐ Core Skills
                    </span>
                  </h3>
                  <p className="text-gray-400">My primary expertise and most frequently used technologies</p>
                </div>
                <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/30 shadow-lg shadow-blue-500/20">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.core.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="tech" 
                        size="md"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              {/* All Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory
                  title="Frontend Development"
                  skills={skills.frontend}
                  icon="🎨"
                />
                <SkillCategory
                  title="Backend Development"
                  skills={skills.backend}
                  icon="⚙️"
                />
                <SkillCategory
                  title="AI & Machine Learning"
                  skills={skills.ai_ml}
                  icon="🤖"
                />
                <SkillCategory
                  title="Programming Languages"
                  skills={skills.languages}
                  icon="💻"
                />
                <SkillCategory
                  title="Tools & Technologies"
                  skills={skills.tools}
                  icon="🛠️"
                />
                {skills.trading && (
                  <SkillCategory
                    title="Trading & Finance"
                    skills={skills.trading}
                    icon="📈"
                  />
                )}
                {skills.bioinformatics && (
                  <SkillCategory
                    title="Bioinformatics"
                    skills={skills.bioinformatics}
                    icon="🧬"
                  />
                )}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {education.map((item, index) => (
                  <EducationItem
                    key={item.id}
                    item={item}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((item, index) => (
                  <CertificationItem
                    key={item.id}
                    item={item}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className={`
          mt-16 transition-all duration-1000 delay-700 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Users Served</div>
            </div>
          </div>
                 </div>

         {/* Bottom Gradient */}
         <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-gray-900/20"></div>
       </div>
     </section>
   );
 };
 
 export default Resume; 