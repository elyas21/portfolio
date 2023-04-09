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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services: Array<any> = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular & React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Computer vision enginner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack  Developer",
      company_name: "Xoka It Solution",
      icon: xokaItsolution,
      iconBg: "#383E56",
      date: "Jun 2022 - March 2023",
      points: [
        "Developing and maintaining web applications using Angular and React , NodeJS, Asp.net core other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Also  worked on Microsoft SQL databases from design to implementation. developing database   procedure, function and triggers are my expertise.",
        "Also I work on windows service and web service making the system real time."
      ],
    },
    {
      title: "Freelancing",
      icon: freelancing,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Angular , React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "",
      designation: "CFO",
      company: "xoka it",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
  ];
  
  const projects = [
    {
      name: "kihlotacademy",
      description:
        "Web-based platform that allows users to watch video, read pdf and answer questions on various topics, providing a convenient and mobile first design to the users.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kihlotacadamy,
      source_code_link: "",
    },
    {
      name: "ERP syste for FHC",
      description:
        "ERP system for Ethiopian federal housing corporation i’m part of a team for developing this fully fledged  ERP system. I develop full stack web application from design to deployment",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: fhc,
      source_code_link: "https://github.com/",
    },
    {
      name: "Addis One Stop",
      description:
        "A comprehensive city administration system for Addis abeba, and offers curated feel for popular users of the system.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: addOneStop,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };