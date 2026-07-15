import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  angular,
  docker,
  meta,
  xokaItsolution,
  freelancing,
  shopify,
  addOneStop,
  kihlotacadamy,
  fhc,
  threejs,
  htu
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const fullStackProjects = [
  {
    name: "FHC ERP System",
    description: "Enterprise Resource Planning system for Ethiopian Federal Housing Corporation. Comprehensive solution handling operations, finance, and resource management.",
    tags: ["Angular", "Node.js", "SQL Server", "ASP.NET"],
    link: "https://fhc.gov.et/",
    image: fhc,
  },
  {
    name: "HTU Learning Management System",
    description: "Full-fledged university LMS with real-time features, exam management, payment integration, and comprehensive student/faculty portal.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    link: "https://online.htu.edu.et/",
    image: addOneStop,
  },
  {
    name: "HTU Mobile App LMS",
    description: "Mobile-first learning management application for Holy Trinity University with offline capabilities and real-time sync.",
    tags: ["React", "Node.js", "PostgreSQL", "PWA"],
    link: "https://app.htu.edu.et/",
    image: kihlotacadamy,
  },
  {
    name: "Kihlot Academy",
    description: "Mobile-first educational platform with video streaming, PDF reading, and interactive quizzes for students.",
    tags: ["Angular", "MySQL", "Tailwind"],
    link: "https://kihlotacademy.com/",
    image: kihlotacadamy,
  },
  {
    name: "Water & Energy Ministry Data System",
    description: "Data management system for Federal Water and Energy Ministry handling resource tracking and analytics.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    image: addOneStop,
  },
];

const mlProjects = [
  {
    name: "Real-time Face Mask Detection",
    description: "ML-powered real-time face mask monitoring system using computer vision and IoT. Deployed TensorFlow models for accurate detection with live camera feeds at KIOT campus gate.",
    tags: ["TensorFlow", "OpenCV", "Python", "IoT"],
    link: "https://github.com/elyas21/face-mask-monitoring-at-kiot-campus-gate",
    image: kihlotacadamy,
  },
  {
    name: "Face Recognition System",
    description: "Python-based face recognition pipeline using OpenCV and deep learning models for face detection and identity matching.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    link: "https://github.com/elyas21/face-recognition",
    image: fhc,
  },
  {
    name: "Emotion Detection from Video",
    description: "Dataset and code for extracting and organizing emotion labels from video clips for affect recognition research.",
    tags: ["Python", "Computer Vision", "Dataset"],
    link: "https://github.com/elyas21/emotion-detection-dataset-from-video",
    image: addOneStop,
  },
  {
    name: "News Article Classifier",
    description: "Multi-class text classification model that assigns news articles to multiple categories using NLP and deep learning.",
    tags: ["NLP", "TensorFlow", "Python"],
    link: "https://github.com/elyas21/news-article-multiclass-classifier",
    image: kihlotacadamy,
  },
  {
    name: "YOLOv4 DeepSort Tracking",
    description: "Object tracking implemented with YOLOv4 and DeepSort for multi-object tracking in video streams.",
    tags: ["YOLO", "DeepSort", "TensorFlow"],
    link: "https://github.com/elyas21/yolov4-deepsort",
    image: fhc,
  },
  {
    name: "Liver Disease Prediction",
    description: "ML classification model for predicting liver disease status from clinical data using various classifiers.",
    tags: ["Machine Learning", "Classification", "Healthcare"],
    link: "https://github.com/elyas21/Liver-disease-prediction",
    image: addOneStop,
  },
];

const algorithmProjects = [
  {
    name: "Reinforcement Learning Grid World",
    description: "RL agents trained on grid-world environment to learn navigation policies via value-based and policy-based methods.",
    tags: ["Reinforcement Learning", "Python"],
    link: "https://github.com/elyas21/reinforcement-learning-grid-world",
  },
  {
    name: "Exploration-Exploitation Algorithms",
    description: "Implementation of exploration-exploitation strategies in reinforcement learning, testing bandit-style and RL policies.",
    tags: ["RL", "Algorithms", "Python"],
    link: "https://github.com/elyas21/exploration_exploitation_algorithms",
  },
  {
    name: "Robot Navigation Ethiopia BFS",
    description: "Robot navigation using breadth-first search algorithm on Ethiopian map locations and grid cells.",
    tags: ["BFS", "Path Planning", "Python"],
    link: "https://github.com/elyas21/robot-nav-ethiopia-bfs",
  },
  {
    name: "Uninformed Search Algorithms",
    description: "Implementation of BFS, DFS, and other uninformed search algorithms for graph and grid problems.",
    tags: ["Algorithms", "Search", "Python"],
    link: "https://github.com/elyas21/Uninformed-search",
  },
  {
    name: "Adversarial Search",
    description: "Classical AI adversarial search algorithms including minimax and alpha-beta pruning for game playing.",
    tags: ["AI", "Game Theory", "Python"],
    link: "https://github.com/elyas21/Deterministic-Adversarial-Search",
  },
  {
    name: "MapReduce Hadoop",
    description: "Java implementation of MapReduce jobs on Hadoop demonstrating distributed processing patterns.",
    tags: ["Hadoop", "MapReduce", "Java"],
    link: "https://github.com/elyas21/map-reduce-hadoop",
  },
];

const webProjects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with TypeScript showcasing projects, skills, and experience.",
    tags: ["TypeScript", "React", "Tailwind"],
    link: "https://github.com/elyas21/portfolio",
  },
  {
    name: "Paper Search RAG",
    description: "Research paper search application using retrieval-augmented generation for academic literature lookup.",
    tags: ["RAG", "NLP", "Web"],
    link: "https://github.com/elyas21/paper-search-rag",
  },
  {
    name: "Angular Inventory System",
    description: "Inventory management frontend to track products, stock, and basic CRUD operations.",
    tags: ["Angular", "TypeScript"],
    link: "https://github.com/elyas21/angular-inventory",
  },
  {
    name: "Angular State Management",
    description: "Angular project showcasing state management patterns using NGXS and reactive programming.",
    tags: ["Angular", "NGXS", "RxJS"],
    link: "https://github.com/elyas21/angular-state-management",
  },
  {
    name: "JavaFX E-commerce",
    description: "JavaFX-based e-commerce GUI with product listing, cart, and checkout functionality.",
    tags: ["JavaFX", "Java", "Desktop"],
    link: "https://github.com/elyas21/javafx-ecommerce",
  },
];

const technologies = {
  fullstack: [
    { name: "TypeScript", icon: typescript },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: reactjs },
    { name: "Angular", icon: angular },
    { name: "Node.js", icon: nodejs },
    { name: "Tailwind", icon: tailwind },
    { name: "MongoDB", icon: mongodb },
    { name: "Git", icon: git },
    { name: "Docker", icon: docker },
  ],
  ml: [
    { name: "Python", icon: javascript },
    { name: "TensorFlow", icon: reactjs },
    { name: "PyTorch", icon: nodejs },
    { name: "OpenCV", icon: docker },
    { name: "NumPy", icon: mongodb },
    { name: "Pandas", icon: git },
  ]
};

const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "Commercial Bank of Ethiopia",
    icon: meta,
    iconBg: "#1a3a5c",
    date: "Jan 2026 – Present",
    points: [
      "Developed predictive credit risk models (XGBoost/LightGBM) with SHAP explainability and integrated Vision Transformer/CNN pipelines for automated biometric KYC and identity document verification.",
      "Engineered real-time fraud detection systems using distributed anomaly detection and autonomous Agentic workflows to analyze high-throughput transaction streams, drastically reducing false-positive rates.",
      "Architected enterprise LLMOps/MLOps infrastructure with feature stores and continuous drift monitoring, deploying RAG customer support bots and Vision-Language Models for automated financial document processing.",
    ],
  },
  {
    title: "Senior Full Stack & Machine Learning Engineer",
    company_name: "Holy Trinity University",
    icon: htu,
    iconBg: "#fefefe",
    date: "Dec 2023 – Nov 2025",
    points: [
      "Led end-to-end ML lifecycle for a learning-aid system with distributed training and hyperparameter optimization to deliver personalized student predictions.",
      "Deployed a multimodal NLP chat system integrating text and audio processing for real-time, context-aware learning assistance dynamically adapted to student levels and course types.",
      "Architected enterprise Node.js LMS backends and React frontends with optimized PostgreSQL schemas and complex indexing strategies, accelerating query performance by 40%.",
      "Built secure real-time ecosystems using WebSockets, RBAC-ABAC, and 3rd-party APIs (Zoom, MUX, MPGS) ensuring fault-tolerant live academic sessions and payments.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Xoka IT Solution",
    icon: xokaItsolution,
    iconBg: "#383E56",
    date: "Dec 2021 – Sep 2023",
    points: [
      "Architected enterprise Angular frontends for government ERP systems with strictly typed reactive forms and advanced state management for complex large-scale data entry workflows.",
      "Developed interactive geospatial Angular UIs for mineral resource tracking, integrating Leaflet for real-time external system synchronizations.",
      "Built robust RESTful APIs and background services using Node.js and ASP.NET for secure real-time data synchronization across federal data management platforms.",
      "Designed MS SQL Server architectures from scratch with 50+ stored procedures, slashing critical operation latency from 3s to 500ms.",
    ],
  },
  {
    title: "Founder & Lead Engineer",
    company_name: "Million Technologies (M-TECHS)",
    icon: freelancing,
    iconBg: "#E6DEDD",
    date: "Jun 2021 – Present",
    points: [
      "Directed end-to-end product development for enterprise SaaS solutions: UniFlow SIS, Afrifidel LearnLang, and Grar Books.",
      "Architected platforms combining high-performance Next.js and Tailwind CSS frontends for complex role-based workflows with robust backend systems featuring secure payment integrations.",
      "Built scalable ML models powering predictive analytics, automated student evaluations, and intelligent recommendations across all products.",
    ],
  },
];

export { fullStackProjects, mlProjects, algorithmProjects, webProjects, technologies, experiences };

// Legacy exports
export const testimonials: any[] = [];
export const projects: any[] = [];
export const services: any[] = [];
