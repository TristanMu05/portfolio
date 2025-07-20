'use client';

import { useState, useEffect } from 'react';
import Badge from '@/components/ui/Badge';

const SkillProgressBar = ({ percentage, isVisible }) => (
  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
    <div 
      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
      style={{
        width: isVisible ? `${percentage}%` : '0%'
      }}
    />
  </div>
);

const SkillItem = ({ 
  skill, 
  proficiency = 85, 
  showProgress = false, 
  variant = 'default',
  isVisible = true 
}) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isVisible && !animationTriggered) {
      const timer = setTimeout(() => {
        setAnimationTriggered(true);
      }, Math.random() * 500); // Random delay for staggered animation

      return () => clearTimeout(timer);
    }
  }, [isVisible, animationTriggered]);

  const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 90) return { level: 'Expert', color: 'success' };
    if (proficiency >= 75) return { level: 'Advanced', color: 'primary' };
    if (proficiency >= 60) return { level: 'Intermediate', color: 'warning' };
    return { level: 'Beginner', color: 'default' };
  };

  const { level, color } = getProficiencyLevel(proficiency);

  if (showProgress) {
    return (
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
            {skill}
          </span>
          <div className="flex items-center gap-2">
            <Badge variant={color} size="sm">
              {level}
            </Badge>
            <span className="text-sm text-gray-400">
              {proficiency}%
            </span>
          </div>
        </div>
        <SkillProgressBar percentage={proficiency} isVisible={animationTriggered} />
      </div>
    );
  }

  return (
    <Badge
      variant={variant}
      className={`
        transition-all duration-300 transform cursor-pointer
        hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
        ${animationTriggered 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-4 opacity-0'
        }
      `}
    >
      {skill}
    </Badge>
  );
};

const SkillCategory = ({ title, skills, showProgress = false, icon }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`skill-category-${title.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [title]);

  return (
    <div 
      id={`skill-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      {showProgress ? (
        <div className="space-y-4">
          {Array.isArray(skills) ? (
            skills.map((skill, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillItem
                  skill={typeof skill === 'string' ? skill : skill.name}
                  proficiency={typeof skill === 'object' ? skill.proficiency : 75 + Math.random() * 20}
                  showProgress={true}
                  isVisible={isVisible}
                />
              </div>
            ))
          ) : (
            <SkillItem
              skill={skills}
              proficiency={85}
              showProgress={true}
              isVisible={isVisible}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {Array.isArray(skills) ? (
            skills.map((skill, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SkillItem
                  skill={typeof skill === 'string' ? skill : skill.name}
                  variant="tech"
                  isVisible={isVisible}
                />
              </div>
            ))
          ) : (
            <SkillItem
              skill={skills}
              variant="tech"
              isVisible={isVisible}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SkillItem;
export { SkillCategory }; 