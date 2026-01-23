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
    title: "Full Stack Developer",
    company_name: "XOKA IT Solution",
    icon: xokaItsolution,
    iconBg: "#383E56",
    date: "June 2022 - April 2023",
    points: [
      "Full stack development using Angular, NodeJS, ASP.NET and SQL Server.",
      "Designed and implemented Microsoft SQL databases including procedures, functions and triggers.",
      "Developed Windows services and web services for real-time system operations.",
      "Collaborated with cross-functional teams to deliver high-quality ERP solutions.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Holy Trinity University",
    icon: htu,
    iconBg: "#fefefe",
    date: "April 2022 - Present",
    points: [
      "Lead a team to develop a comprehensive Learning Management System using Next.js, React, Node.js, and PostgreSQL.",
      "Architected and deployed scalable solutions for online learning, exams, and payment integration.",
      "Implemented real-time features and ensured seamless user experience for students and faculty.",
      "Managed full development lifecycle from design to deployment.",
    ],
  },
  {
    title: "Freelance AI/ML & Full Stack Developer",
    icon: freelancing,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developing AI/ML solutions focusing on Computer Vision and NLP applications.",
      "Building full-stack web applications using React, Next.js, Node.js, and Python.",
      "Implementing machine learning models using TensorFlow, PyTorch, and OpenCV.",
      "Delivering end-to-end solutions from data preprocessing to model deployment on GCP and Firebase.",
    ],
  },
];

export { fullStackProjects, mlProjects, algorithmProjects, webProjects, technologies, experiences };
