'use client';

import { useState, useEffect } from 'react';
import { projects } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  // Extract unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  const popularTechnologies = allTechnologies.slice(0, 8); // Show top 8 technologies

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleFilter = (technology) => {
    setActiveFilter(technology);
    
    if (technology === 'all') {
      setFilteredProjects(projects);
    } else if (technology === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(technology.toLowerCase())
          )
        )
      );
    }
  };



  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`
          flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <Button
            onClick={() => handleFilter('all')}
            variant={activeFilter === 'all' ? 'primary' : 'ghost'}
            size="sm"
            className="mb-2"
          >
            <span className="mr-1">🔍</span>
            All Projects ({projects.length})
          </Button>
          
          <Button
            onClick={() => handleFilter('featured')}
            variant={activeFilter === 'featured' ? 'primary' : 'ghost'}
            size="sm"
            className="mb-2"
          >
            <span className="mr-1">⭐</span>
            Featured ({projects.filter(p => p.featured).length})
          </Button>

          {popularTechnologies.map((tech) => (
            <Button
              key={tech}
              onClick={() => handleFilter(tech)}
              variant={activeFilter === tech ? 'primary' : 'ghost'}
              size="sm"
              className="mb-2"
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Count & Active Filter */}
        <div className={`
          text-center mb-8 transition-all duration-1000 delay-500 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400">
            <span>
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {activeFilter !== 'all' && (
                <Badge variant="outline" size="sm" className="ml-2">
                  {activeFilter === 'featured' ? 'Featured' : activeFilter}
                </Badge>
              )}
            </span>
            {activeFilter !== 'all' && (
              <Button
                onClick={() => handleFilter('all')}
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300"
              >
                Clear Filter ✕
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`
          transition-all duration-1000 delay-700 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="transition-all duration-500 transform hover:scale-105 h-full"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <ProjectCard
                    project={project}
                    featured={project.featured}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">
                No projects match the current filter. Try selecting a different technology or view all projects.
              </p>
              <Button
                onClick={() => handleFilter('all')}
                variant="outline"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`
          text-center mt-16 transition-all duration-1000 delay-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="group"
              >
                <span className="mr-2">💬</span>
                Get In Touch
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
              <Button
                onClick={() => window.open('https://github.com/TristanMu05', '_blank')}
                variant="outline"
                size="lg"
                className="group"
              >
                <span className="mr-2">💻</span>
                View GitHub
                <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 