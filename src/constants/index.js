import { image } from "framer-motion/client";

const navLinks = [
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



const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Acyute Technologies",
    date: "March 2024 - Current",
    points: [
      
      "Developed a web-based recruitment system for job seekers and recruiters using HTML5, CSS3, Bootstra and Ajax/jQuery",
      "Implemented core features such as job posting, profile management, and candidate filtering using ASP.NET MVC and C#",
      "Automated email notifications for candidate acceptance/rejection with feedback.",
      "Utilized SQL Server for database management and IIS-10 as a local development server"
    ],
  },
  {
    title: "Web Developer",
    company_name: "Aura Lifecare Pvt.Ltd.",
    date: "May 2021 - Jun 2023",
    points: [
      "Designed REST APIs with Express.js and Node.js for a different application, managing the database to ensure seamless data sharing and decision-making processes ",
      "Collaborated in Agile development using JIRA, Git, and Scrum meetings across multiple projects, ensuring effective teamwork and project management.",
      "Involved in web design with HTML, CSS, Tailwind CSS, and React/Redux for seamless, responsive websites, Improved user experience by 15%.",
      "Designed and implemented scalable database architectures, optimizing data retrieval processes and reducing query times by 20%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "MoonWeb Technologies",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Built a comprehensive MERN stack application for online ticket booking, increasing online bookings by 40%.",
      " Developed responsive front-end interfaces, leading to a 30% increase in user engagement.",
      "Optimized and maintained MongoDB, ensuring data integrity and efficient query performance."
    ],
  },
];

const projects = [
  {
    name: "SmartBlink",
    description:
      "Web-based platform named Smartblink transforms ordinary homes into smart homes by providing advanced automation solutions for lighting, security, climate control, and entertainment systems, all managed through a user-friendly smartphone app.",
    tags: [
      {
        name: "react",
        color: "text-seconary",
      },
      {
        name: "tailwind",
        color: "text-seconary",
      },
    ],
    image: '/projects/SMARTBLINK.png',
    source_code_link: "https://github.com/ShailyMacwan/smartblink",
  },
  {
    name: "VITE HIRE",
    description:
      "An online recruiter system features a normalized database, role-based access, and report generation to aid decision-making.",
    tags: [
      {
        name: "C# #ASP.NET With MVC Framework #jQuery #AJAX #IIS-10",
        color: "text-seconary",
      },
    ],
    image: '/projects/Vitehire.jpg',
    source_code_link: "https://github.com/ShailyMacwan/Vitehire/tree/master/Vitehire",
  },

  {
    name: "Jarvis",
    description:
      "Jarvis is an AI virtual assistant that integrates with external services to deliver personalized insights and automation, featuring secure authentication and Python-powered backend processing.",
    tags: [
      {
        name: "Python  #Tkinter  #OpenAI API  #SpeechRecognition  #pyttsx3",
        color: "text-seconary",
      },
    ],    image: '/projects/jarvis.png',
    source_code_link: "https://github.com/ShailyMacwan/Jarvis",
  },
  {
    name: "Foodies Stop",
    description:
      "A dynamic website built using c#, MySQL, and SMTP for email communication. It allows food enthusiasts to explore and order from a variety of cuisines with features like and email notifications for order updates",
    tags: [
      {
        name: "C# #MySql",
        color: "text-seconary",
      },
    ],
    image: '/projects/FoodiesStop.png',
    source_code_link: "https://github.com/ShailyMacwan/FoodiesStop",
  },
  {
    name: "EMS",
    description:
      "A web application which manages employee's data and generate reports with the helpof MongoDB and MySQL database",
    tags:[ {
        name: "C# #MySql 3MongoDB",
        color: "text-seconary",
      },
    ],
    image: '/projects/EMS.png',
    source_code_link: "https://github.com/ShailyMacwan/EMS/tree/master/firstProject",
  },
  {
    name: "Portfolio",
    description:'Personal portfolio',
    tags: [
      {
        name: "react",
        color: "text-seconary",
      },
      {
        name: "threeJS",
        color: "text-seconary",
      },
      {
        name: "tailwind",
        color: "text-seconary",
      },
      {
        name: "motion",
        color: "text-seconary",
      },
    ],
    image: '/projects/portfolio.png',
    source_code_link: "https://github.com/ShailyMacwan/shaily-portfolio",
  },
];

export { experiences, projects , navLinks};