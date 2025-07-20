'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function MealPrepAiProject() {
  const project = projects.find(p => p.id === 4); // AI Meal Prep project

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="group" onClick={() => {}}>
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
              <Badge key={index} variant="tech" size="md" className="">
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
              View Live Demo
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
          <Card className="">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </Card>

          {/* Key Features */}
          <Card className="">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Personalized meal planning using Google Generative AI technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Modern React 19 interface with cutting-edge Next.js 15 features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Secure user authentication with Supabase and NextAuth.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Optimized performance with Turbopack and static site generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Responsive design with Tailwind CSS 4 utility-first styling</span>
              </li>
            </ul>
          </Card>

          {/* Technical Implementation */}
          <Card className="">
            <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Frontend Architecture</h3>
                <p>Built with the latest React 19 and Next.js 15 using App Router for optimal performance. Turbopack provides lightning-fast development builds.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
                <p>Google Generative AI powers the intelligent meal planning system, providing personalized recommendations based on dietary preferences and nutritional goals.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend Services</h3>
                <p>Supabase provides comprehensive backend services including database, authentication, and real-time features with seamless NextAuth.js integration.</p>
              </div>
            </div>
          </Card>

          {/* Technology Highlights */}
          <Card className="">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">React 19</div>
                <div className="text-gray-400 text-sm">Latest Version</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Next.js 15</div>
                <div className="text-gray-400 text-sm">App Router</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Google AI</div>
                <div className="text-gray-400 text-sm">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">TypeScript</div>
                <div className="text-gray-400 text-sm">Type Safe</div>
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