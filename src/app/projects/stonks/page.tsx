'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function StonksProject() {
  const project = projects.find(p => p.id === 2); // STONKS project

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
            <span className="ml-4 text-lg font-normal text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              🚧 In Progress
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
              onClick={() => alert('🚧 Coming Soon!\n\nThis project is currently in development.')}
              size="lg"
              className="group"
            >
              <span className="mr-2">🚧</span>
              View Live Demo (Coming Soon)
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">⏳</span>
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

            <Button
              onClick={() => window.open('https://www.instagram.com/eleetcodeer/', '_blank')}
              variant="outline"
              size="lg"
              className="group bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-400/30"
            >
              <span className="mr-2">📸</span>
              Building in Public Here
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
            </Button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-96 sm:h-[500px] mb-12 rounded-xl overflow-hidden bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Overview */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">
              Overview
              <span className="ml-3 text-sm font-normal text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
                🚧 Currently Building
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                <span className="font-semibold">📸 Follow the Build:</span> This project is being developed in public! Check out the development progress, code snippets, and behind-the-scenes content on{' '}
                <a 
                  href="https://www.instagram.com/eleetcodeer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 underline font-medium"
                >
                  @eleetcodeer
                </a>
                {' '}where I share the entire development journey.
              </p>
            </div>
          </Card>

          {/* Key Features */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Ultra-fast execution engine built in Rust for microsecond-level trading</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Machine learning pipeline in Python with PyTorch for market prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Real-time market data processing with WebSocket connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Technical analysis indicators and sentiment analysis integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Automated risk management and portfolio optimization</span>
              </li>
            </ul>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Architecture</h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Rust Trading Engine</h3>
                <p>High-performance core built with Rust, Tokio async runtime, and Axum for HTTP services. Utilizes ONNX Runtime for optimized ML model inference.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Python ML Pipeline</h3>
                <p>FastAPI-based ML services with PyTorch models, XGBoost for traditional ML, and transformers for news sentiment analysis.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Infrastructure</h3>
                <p>PostgreSQL for relational data, Redis for high-speed caching, and real-time market data integration from multiple sources.</p>
              </div>
            </div>
          </Card>

          {/* Project Stats */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">
              Performance Metrics
              <span className="ml-3 text-sm font-normal text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
                🎯 Target Goals
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">μs</div>
                <div className="text-gray-400 text-sm">Execution Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Market Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Real-time</div>
                <div className="text-gray-400 text-sm">Data Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Multi-Asset</div>
                <div className="text-gray-400 text-sm">Trading</div>
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