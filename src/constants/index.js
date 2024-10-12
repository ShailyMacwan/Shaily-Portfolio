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
    source_code_link: "https://github.com/ShailyMacwan/smartblink",
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
    source_code_link: "https://github.com/ShailyMacwan/shaily-portfolio",
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
    ],
    source_code_link: "https://github.com/ShailyMacwan/Jarvis",
  },
  {
    name: "iTask",
    description:
      "iTask is a lightweight task management app built with React and Tailwind CSS, offering an intuitive interface for organizing and tracking tasks efficiently. ",
    tags: [
      {
        name: "react  #css",
        color: "text-seconary",
      },
    ],
    source_code_link: "https://github.com/ShailyMacwan/iTasks",
  },
];

export { experiences, projects , navLinks};