'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function PortfolioProject() {
  const project = projects.find(p => p.id === 5); // Portfolio project

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="group">
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          
          {/* Technology Stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="tech" size="md">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.open(project.liveUrl, '_blank')}
              size="lg"
              className="group"
            >
              <span className="mr-2">🚀</span>
              View Live Site
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
            </Button>
            
            <Button
              onClick={() => window.open(project.codeUrl, '_blank')}
              variant="outline"
              size="lg"
              className="group"
            >
              <span className="mr-2">💻</span>
              View Code
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
            </Button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-64 sm:h-80 mb-12 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Overview */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </Card>

          {/* Design Features */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Design Features</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Modern, dark-themed design with gradient accents and smooth animations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Fully responsive layout optimized for all device sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Interactive project cards with hover effects and technology badges</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Smooth scrolling navigation with active section highlighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Comprehensive social media and professional platform integration</span>
              </li>
            </ul>
          </Card>

          {/* Technical Implementation */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Frontend Framework</h3>
                <p>Built with Next.js 15 and React for optimal performance, SEO, and static site generation. TypeScript ensures type safety and enhanced development experience with strict type checking.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Styling & Design System</h3>
                <p>Tailwind CSS provides utility-first styling with custom component library including reusable UI components like Cards, Buttons, and Badges. Responsive design ensures perfect display across all devices.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance & Deployment</h3>
                <p>Optimized with Next.js Image component for automatic image optimization, efficient code splitting, and fast loading times. Deployed with modern hosting solutions for global CDN distribution.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Interactive Features</h3>
                <p>Smooth scrolling navigation, interactive project cards with hover effects, responsive contact forms, and seamless integration with professional platforms and social media.</p>
              </div>
            </div>
          </Card>

          {/* Portfolio Sections */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Portfolio Sections</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">Projects</div>
                <div className="text-gray-400 text-sm">Showcase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Resume</div>
                <div className="text-gray-400 text-sm">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Socials</div>
                <div className="text-gray-400 text-sm">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Contact</div>
                <div className="text-gray-400 text-sm">Connect</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 text-center">
          <Link href="/#projects">
            <Button variant="outline" size="lg" className="group">
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Back to All Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 