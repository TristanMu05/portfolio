'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function VyrlProject() {
  const project = projects.find(p => p.id === 1); // VYRL project

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
              onClick={() => window.open('https://youtu.be/yzPnpCxAbdY', '_blank')}
              size="lg"
              className="group"
            >
              <span className="mr-2">🚀</span>
              View Live Demo
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
            </Button>
            
            <Button
              onClick={() => window.open('https://govyrl.tech', '_blank')}
              variant="outline"
              size="lg"
              className="group"
            >
              <span className="mr-2">🚀</span>
              Visit VYRL
              <span className="ml-2 transform group-hover:scale-110 transition-transform duration-200">↗</span>
            </Button>

            <Button
              onClick={() => window.open('https://instagram.com/vyrl.ai', '_blank')}
              variant="outline"
              size="lg"
              className="group bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-400/30"
            >
              <span className="mr-2">📸</span>
              Follow Along
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
            <p className="text-gray-400 leading-relaxed mb-4">
              VYRL is a production-ready AI platform that predicts video virality with 75%+ accuracy using advanced ensemble LightGBM models and multimodal feature extraction. The platform processes video, audio, and text data through a sophisticated two-stage prediction pipeline with GPU-optimized inference for sub-10ms model execution latency.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Built for content creators and businesses, VYRL combines cutting-edge computer vision, natural language processing, and machine learning to provide data-driven insights on video performance potential. The platform features real-time processing, subscription-based access, and comprehensive analytics dashboards to help creators optimize their content strategy.
            </p>
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 rounded-lg p-4">
              <p className="text-pink-300 text-sm">
                <span className="font-semibold">📸 Follow VYRL&apos;s Journey:</span> Stay updated with the latest features, insights, and behind-the-scenes content! Follow VYRL on{' '}
                <a 
                  href="https://instagram.com/vyrl.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 underline font-medium"
                >
                  @vyrl.ai
                </a>
                {' '}for exclusive updates, AI insights, and platform developments.
              </p>
            </div>
          </Card>

          {/* Key Features */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>75%+ prediction accuracy on video virality classification using ensemble LightGBM models</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Multimodal feature extraction combining SlowFast visual embeddings, CLIP content analysis, and BERTweet text processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>GPU-accelerated inference with TensorRT optimization for sub-10ms model execution latency</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Real-time WebSocket progress updates during video processing and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Subscription-based access system with Whop payments integration and user authentication</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Automated speech transcription using Whisper and text recognition with EasyOCR</span>
              </li>
            </ul>
          </Card>

          {/* Technical Implementation */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">AI/ML Pipeline</h3>
                <p>Advanced ensemble LightGBM models with multimodal feature extraction pipeline combining SlowFast visual embeddings, CLIP content analysis, BERTweet text processing, Whisper speech transcription, and EasyOCR text recognition. Trained on 150K+ videos for optimal virality prediction.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend Architecture</h3>
                <p>High-performance FastAPI backend with asynchronous job processing, scalable job queue management, and GPU-parallel inference using PyTorch 2.7, TensorFlow, and TensorRT optimization for production-grade performance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Infrastructure & Deployment</h3>
                <p>Containerized deployment with Docker, NVIDIA GPU acceleration, TensorRT model optimization, persistent volume caching, and automated health monitoring. Features real-time WebSocket communication for instant progress updates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Frontend & User Experience</h3>
                <p>React.js frontend with real-time updates, subscription management through Whop integration, user authentication, token management, and comprehensive analytics dashboard for seamless user experience.</p>
              </div>
            </div>
          </Card>

          {/* Project Stats */}
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Key Technical Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">75%+</div>
                <div className="text-gray-400 text-sm">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">150K+</div>
                <div className="text-gray-400 text-sm">Training Videos</div>
              </div>
                              <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">50M+</div>
                  <div className="text-gray-400 text-sm">Views Generated</div>
                </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Multi-Modal</div>
                <div className="text-gray-400 text-sm">AI Pipeline</div>
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