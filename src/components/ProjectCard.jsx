'use client';

import Image from 'next/image';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { truncateText } from '@/lib/utils';

const ProjectCard = ({ project, featured = false, onViewDetails }) => {
  const handleLiveClick = () => {
    // Special case for Portfolio project - show humorous popup
    if (project.id === 5) {
      alert('Where do you think you are...? 🤔\n\nYou\'re already viewing the live demo! 😄');
      return;
    }
    
    // Special case for VYRL project - redirect to YouTube demo
    if (project.id === 1) {
      window.open('https://youtu.be/yzPnpCxAbdY', '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Special case for STONKS project - show coming soon
    if (project.id === 2) {
      alert('🚧 Coming Soon!\n\nThis project is currently in development.');
      return;
    }
    
    // Special case for SynTact project - show coming soon
    if (project.id === 3) {
      alert('🚧 Coming Soon!\n\nThis research project is currently in development.');
      return;
    }
    
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCodeClick = () => {
    // Special case for VYRL project - redirect to govyrl.tech
    if (project.id === 1) {
      window.open('https://govyrl.tech', '_blank', 'noopener,noreferrer');
      return;
    }
    
    if (project.codeUrl) {
      window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDetailsClick = () => {
    // Navigate to individual project page
    const projectRoutes = {
      1: '/projects/vyrl',
      2: '/projects/stonks', 
      3: '/projects/syntact',
      4: '/projects/meal-prep-ai',
      5: '/projects/portfolio'
    };
    
    const route = projectRoutes[project.id];
    if (route) {
      window.location.href = route;
    }
  };

  return (
    <Card 
      className={`
        group relative overflow-hidden h-full flex flex-col
        ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
      `}
      padding="none"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="primary" size="sm">
            ⭐ Featured
          </Badge>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <Button
              onClick={handleLiveClick}
              size="sm"
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span className="mr-1">🚀</span>
              Live Demo
            </Button>
            <Button
              onClick={handleCodeClick}
              variant="outline"
              size="sm"
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            >
              <span className="mr-1">💻</span>
              Code
            </Button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 min-h-[3.5rem] flex items-center">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {truncateText(project.description, 120)}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem] items-start">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              variant="tech"
              size="sm"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="default" size="sm" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button
            onClick={handleDetailsClick}
            variant="ghost"
            size="sm"
            className="flex-1 group/btn"
          >
            <span className="mr-1">📖</span>
            Read More
            <span className="ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
          </Button>
          
          <div className="flex gap-1">
            <Button
              onClick={handleLiveClick}
              size="sm"
              className="group/btn"
              title="View Live Demo"
            >
              <span className="transform group-hover/btn:scale-110 transition-transform duration-200">🔗</span>
            </Button>
            <Button
              onClick={handleCodeClick}
              variant="outline"
              size="sm"
              className="group/btn"
              title="View Source Code"
            >
              <span className="transform group-hover/btn:scale-110 transition-transform duration-200">💻</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Glow Effect for Featured Projects */}
      {featured && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl rounded-xl transform scale-105"></div>
      )}
    </Card>
  );
};

export default ProjectCard; 