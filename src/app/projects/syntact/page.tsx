'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function SyntactProject() {
  const project = projects.find(p => p.id === 3); // SynTact project

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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <div className="mb-6">
            <span className="text-sm sm:text-base font-normal text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              🚧 In Progress
            </span>
          </div>
          
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
              onClick={() => alert('🚧 Coming Soon!\n\nThis research project is currently in development.')}
              size="lg"
              className="group"
            >
              <span className="mr-2">🚧</span>
              View Project (Coming Soon)
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
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full max-w-lg mx-auto aspect-square mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain rounded-2xl shadow-2xl shadow-blue-500/20"
            sizes="(max-width: 768px) 100vw, 512px"
          />
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
                <span className="font-semibold">🔬 Research in Progress:</span> This advanced bioinformatics platform is currently under active development. The project aims to revolutionize CAR-T cell therapy research by providing comprehensive tools for identifying optimal antigen targets in ovarian cancer treatment.
              </p>
            </div>
          </Card>

          {/* Research Goals */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">
              Research Goals
              <span className="ml-3 text-sm font-normal text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
                🔬 Research Focus
              </span>
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Identify optimal antigen targets for CAR-T cell therapy in ovarian cancer</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Analyze large-scale genomic datasets from TCGA and GTEx databases</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Develop machine learning models for protein expression prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Create comprehensive bioinformatics pipeline for cancer research</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Advance personalized immunotherapy treatment strategies</span>
              </li>
            </ul>
          </Card>

          {/* Technical Implementation */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">
              Technical Implementation
              <span className="ml-3 text-sm font-normal text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
                🛠️ Development Stack
              </span>
            </h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Processing Pipeline</h3>
                <p>Python-based pipeline using Pandas and NumPy for large-scale genomic data manipulation from TCGA/GTEx databases with automated data cleaning and normalization.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning Models</h3>
                <p>scikit-learn implementation with protein embedding models for feature extraction and classification of potential therapeutic targets.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Research Environment</h3>
                <p>JupyterLab-based research environment with Matplotlib and Seaborn for scientific visualization and interactive data exploration.</p>
              </div>
            </div>
          </Card>

          {/* Research Impact */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">
              Research Impact
              <span className="ml-3 text-sm font-normal text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md border border-yellow-400/20">
                🎯 Target Goals
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">TCGA</div>
                <div className="text-gray-400 text-sm">Database</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">GTEx</div>
                <div className="text-gray-400 text-sm">Database</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">CAR-T</div>
                <div className="text-gray-400 text-sm">Therapy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Cancer</div>
                <div className="text-gray-400 text-sm">Research</div>
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