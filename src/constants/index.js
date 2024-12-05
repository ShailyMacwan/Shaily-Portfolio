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
      "Designed REST APIs with Express.js and Node.js for a different application, managing the database to ensure seamless data sharing and decision-making processes ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated in Agile development using JIRA, Git, and Scrum meetings across multiple projects, ensuring effective teamwork and project management.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Aura Lifecare Pvt.Ltd.",
    date: "May 2021 - Jun 2023",
    points: [
      "Collaborated with a team to develop a job posting system mainly for teaching jobs using MERN stack technologies, used by 1+ Million users.",
      "Involved in web design with HTML, CSS, Tailwind CSS, and React/Redux for seamless, responsive websites, Improved user experience by 15%.",
      "Designed and implemented scalable database architectures, optimizing data retrieval processes and reducing query times by 20%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "MoonWeb Technologies",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Developed a comprehensive web application utilizing the MERN stack, facilitating online ticket booking and member management functionalities, resulting in a 40% increase in online bookings and membership registrations.",
      "Implemented responsive front-end interfaces across 25 devices, enhancing user experience and accessibility, resulting in a 30% increase in user engagement.",
      "Led the optimization and maintenance of the MongoDB database, ensuring data integrity and efficient query performance.",
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