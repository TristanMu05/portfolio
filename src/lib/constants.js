export const navigationItems = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'Projects', href: '#projects', icon: '💼' },
  { name: 'Resume', href: '#resume', icon: '📄' },
  { name: 'Socials', href: '#socials', icon: '🌐' },
  { name: 'Contact', href: '#contact', icon: '📧' },
];

export const externalLinks = [
  { name: 'GitHub', href: 'https://github.com/TristanMu05', icon: '💻', external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-murad-5466532b4', icon: '💼', external: true },
  { name: 'Instagram', href: 'https://www.instagram.com/_tristan_murad_/', icon: '📸', external: true },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/TristanMu05', icon: '💻', description: 'Code repositories and projects' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-murad-5466532b4', icon: '💼', description: 'Professional network' },
  { name: 'Instagram', href: 'https://www.instagram.com/_tristan_murad_/', icon: '📸', description: 'Personal updates and life' },
  { name: 'Email', href: 'mailto:muradtristan@gmail.com', icon: '📧', description: 'Direct contact' },
];

export const additionalSocials = [
  { name: 'YouTube (Coding)', href: 'https://www.youtube.com/@Eleetcodeer', icon: '📺', description: 'Coding tutorials and content' },
  { name: 'Instagram (Coding)', href: 'https://www.instagram.com/eleetcodeer/', icon: '📷', description: 'Coding content and updates' },
  { name: 'TikTok (Coding)', href: 'https://www.tiktok.com/@eleetcoder', icon: '🎵', description: 'Short coding videos' },
  { name: 'Instagram (Personal)', href: 'https://www.instagram.com/_tristan_murad_/', icon: '📸', description: 'Personal updates' },
];

export const skills = {
  core: [
    'Python', 'PyTorch', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Docker', 'AWS',
    'Machine Learning', 'TensorFlow', 'Rust', 'WebSockets', 'Generative AI', 'CUDA', 'Git', 'GitHub', 'Java'
  ],
  frontend: [
    'React 19', 'Next.js 15', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
    'Tailwind CSS 4', 'ShadCN/UI', 'Framer Motion', 'Socket.IO', 'Axios', 'React Query',
    'App Router', 'Lucide React', 'React Icons'
  ],
  backend: [
    'Node.js', 'Express.js', 'Python', 'FastAPI', 'Flask', 'Rust', 'Axum', 'Tokio', 
    'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'WebSockets', 'JWT', 'OAuth', 'NextAuth.js', 'Whop API', 'Stripe'
  ],
  ai_ml: [
    'PyTorch', 'TensorFlow', 'CUDA', 'TensorRT', 'ONNX', 'ONNX Runtime', 'scikit-learn', 'Pandas', 
    'NumPy', 'OpenCV', 'FastAPI', 'Deep Learning', 'Computer Vision', 'GPU Acceleration',
    'Bioinformatics', 'Predictive Analytics', 'OpenAI API', 'Google Generative AI', 'Model Deployment', 
    'XGBoost', 'Polars', 'Matplotlib', 'Seaborn', 'JupyterLab', 'Protein Embeddings', 'Genomics', 'Scientific Computing'
  ],
  tools: [
    'Docker', 'Nginx', 'Git', 'GitHub', 'VS Code', 'PM2', 'Linux/Ubuntu', 
    'SSL/HTTPS', 'Vercel', 'Supabase', 'MongoDB', 'PostgreSQL', 'Redis', 'ClickHouse',
    'Postman', 'Jupyter', 'JupyterLab', 'Cargo', 'Poetry', 'Prometheus', 'Grafana', 'OpenPyXL',
    'NextAuth.js', 'Turbopack', 'ESLint', 'PostCSS'
  ],
  languages: [
    'Python', 'JavaScript', 'TypeScript', 'Rust', 'Java', 'C++', 'SQL', 'R'
  ],
  trading: [
    'Algorithmic Trading', 'Technical Analysis', 'Market Data APIs', 'Risk Management',
    'Portfolio Optimization', 'Backtesting', 'Real-time Data', 'Financial Modeling'
  ],
  bioinformatics: [
    'Genomics', 'Protein Analysis', 'TCGA/GTEx Data', 'Bioinformatics', 'Cancer Research',
    'CAR-T Cell Therapy', 'Protein Embeddings', 'Genomic Data Processing', 'Scientific Computing'
  ]
};

export const projects = [
  {
    id: 1,
    title: 'VYRL - AI Video Performance Platform',
    description: 'Production-ready AI platform trained on 50K+ videos that predicts social media performance and provides actionable feedback. Features real-time GPU-accelerated inference, multi-tier monetization through Whop, and comprehensive analytics dashboard.',
    technologies: ['React', 'Next.js', 'PyTorch', 'FastAPI', 'Docker', 'WebSockets', 'CUDA', 'TensorRT', 'MongoDB', 'Nginx', 'Whop API'],
    image: '/images/vyrl-project.jpg',
    liveUrl: 'https://vyrl.app',
    codeUrl: 'https://github.com/TristanMu05/vyrl',
    featured: true,
  },
  {
    id: 2,
    title: 'STONKS - AI Trading Bot',
    description: 'High-performance algorithmic trading platform built with Rust for ultra-fast execution and Python for ML pipeline. Features real-time market data, technical analysis, sentiment analysis, and automated trading strategies with Docker deployment.',
    technologies: ['Rust', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets', 'PyTorch', 'ONNX Runtime'],
    image: '/images/stonks-project.jpg',
    liveUrl: 'https://stonks-trading.com',
    codeUrl: 'https://github.com/TristanMu05/stonks',
    featured: true,
  },
  {
    id: 3,
    title: 'SynTact - CAR-T Target Discovery',
    description: 'Advanced bioinformatics platform for identifying optimal antigen targets in ovarian cancer for CAR-T cell therapy. Features protein embedding models, genomic data analysis from TCGA/GTEx databases, and machine learning pipeline for cancer research.',
    technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'JupyterLab', 'Bioinformatics', 'Genomics', 'Protein Analysis'],
    image: '/images/syntact-project.jpg',
    liveUrl: 'https://github.com/TristanMu05/SynTact',
    codeUrl: 'https://github.com/TristanMu05/SynTact',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Meal Prep Assistant',
    description: 'Modern full-stack AI application that creates personalized meal prep plans using Google Generative AI. Features Next.js 15 with App Router, React 19, TypeScript, Supabase authentication, and static site generation for optimal performance.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'NextAuth.js', 'Google Generative AI', 'Turbopack'],
    image: '/images/mealprep-project.jpg',
    liveUrl: 'https://tristanmurad.com/prepit',
    codeUrl: 'https://github.com/TristanMu05/prepit',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing full-stack and AI engineering projects. Built with Next.js, featuring smooth animations and comprehensive social integration.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    image: '/images/portfolio-project.jpg',
    liveUrl: 'https://tristanmurad.com',
    codeUrl: 'https://github.com/TristanMu05/portfolio',
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    title: 'Founder & CEO',
    company: 'VYRL (Short Form Content AI Assistant)',
    location: 'Fontana, CA',
    duration: 'April 2024 - Present',
    description: [
      'Developed and deployed an AI platform achieving 75.5% video virality prediction accuracy using LightGBM and multimodal feature extraction',
      'Built scalable FastAPI backend with asynchronous job processing, WebSockets for real-time updates, and GPU-based parallel ML inference',
      'Engineered AI chat assistant using Google\'s Gemini API to provide data-driven content coaching insights',
      'Led development team to ship production-ready ML models, processing 150k+ videos for training data',
      'Integrated enterprise-grade technologies including PyTorch, TensorFlow, AWS Lambda, and subscription management systems'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'AWS', 'Machine Learning', 'LightGBM', 'WebSockets']
  }
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Redlands',
    location: 'Redlands, California',
    year: 'Graduating 2027',
    gpa: '3.8/4.0',
    coursework: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering']
  }
];

export const certifications = [
  {
    id: 1,
    name: 'Essentials of Prompt Engineering',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
    credentialId: null
  },
  {
    id: 2,
    name: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University',
    year: 'In Progress',
    credentialId: null
  }
];

export const personalInfo = {
  name: 'Tristan Murad',
  title: 'Full Stack and AI Engineer',
  location: 'Fontana, CA',
  email: 'muradtristan@gmail.com',
  phone: '+1 (951) 533-4850',
  bio: 'Full-stack and AI engineer building intelligent systems that merge cutting-edge ML with scalable web development. I create tools that empower creators and businesses, from scalable platforms like VYRL to advanced AI applications in media and biotech. I\'m obsessed with building solutions that don\'t just work, but win.',
  avatar: '/images/profile-photo.jpg',
  resume: '/resume.pdf'
}; 