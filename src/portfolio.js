/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "mithrandir3010",
  title: "Hi all, I'm Mehmet Ali",
  subTitle: emoji(
    "A passionate Backend Software Engineer 🚀 specializing in Java & Spring Boot — building scalable REST APIs, full-stack applications, and AI-integrated systems with LangChain4j & MCP integration."
  ),
  resumeLink: "https://drive.google.com/file/d/1YBVmpoYWHuMvY_QlnBToqKtArO-J58JF/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mithrandir3010",
  linkedin: "https://www.linkedin.com/in/mehmet-ali-bulut/",
  gmail: "malibulut221@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND SOFTWARE ENGINEER PASSIONATE ABOUT SCALABLE SYSTEMS AND AI-INTEGRATED APPLICATIONS",
  skills: [
    emoji(
      "⚡ Design and develop scalable REST APIs and microservices with Java & Spring Boot"
    ),
    emoji(
      "⚡ Build AI-integrated systems leveraging LangChain4j, LLMs and Model Context Protocol (MCP)"
    ),
    emoji(
      "⚡ Full-stack development with React.js and containerized deployment with Docker & AWS"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Istanbul Medeniyet University",
      logo: require("./assets/images/imuLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "2021 – 2026",
      desc: "Focused on algorithms, distributed systems, and AI with coursework spanning data structures, databases, deep learning, and NLP.",
      descBullets: [
        "Computer Science Core: Advanced Data Structures, Algorithms, Operating Systems",
        "Systems & Infrastructure: Database Management Systems, Computer Networks",
        "AI & Data Intelligence: Deep Learning, Data Mining, Pattern Recognition, NLP"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend (Java / Spring Boot)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (React / JavaScript)",
      progressPercentage: "65%"
    },
    {
      Stack: "DevOps (Docker / AWS / Linux)",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Long-term Intern",
      company: "Finartz",
      companylogo: require("./assets/images/finartzLogo.png"),
      date: "Nov 2025 – Jan 2026",
      desc: "Engineered a full-stack brokerage platform in an Agile environment using Java, Spring Boot, and React.",
      descBullets: [
        "Built full-stack brokerage platform with layered architecture to maximize system scalability",
        "Integrated PostgreSQL and Docker for robust data management and containerized deployment",
        "Architected comprehensive unit tests (JUnit/Mockito) ensuring high system reliability"
      ]
    },
    {
      role: "Intern",
      company: "Codexist",
      companylogo: require("./assets/images/codexistLogo.png"),
      date: "July 2023 – Sept 2023",
      desc: "Developed a banking application following enterprise architecture standards with the Java & Spring ecosystem.",
      descBullets: [
        "Built a banking application with RESTful API design and modern dependency management",
        "Engineered a JDBC-based backend for structured data management, integrity, and CRUD operations",
        "Applied industry-standard Agile workflows for high-quality software delivery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL PROJECTS SHOWCASING BACKEND ENGINEERING AND AI INTEGRATION",
  projects: [
    {
      image: require("./assets/images/manOnTable.svg"),
      projectName: "Smart Budgeting App",
      projectDesc:
        "LLM-powered financial analysis platform with MCP integration. Achieved 87.5% reduction in LLM token consumption via a hybrid routing pipeline. Built with Java 17, Spring Boot 3.2, React 19, PostgreSQL, Docker, LangChain4j, and AWS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mithrandir3010"
        }
      ]
    },
    {
      image: require("./assets/images/jsFramework.svg"),
      projectName: "Brokerage Firm App",
      projectDesc:
        "End-to-end full-stack stock trading platform with secure transaction handling and high system reliability. Built with Java, Spring Boot, React, Docker, PostgreSQL, and tested with JUnit/Mockito.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mithrandir3010"
        }
      ]
    },
    {
      image: require("./assets/images/googleAssistant.svg"),
      projectName: "Nearby Places Finder",
      projectDesc:
        "Reactive web application using Spring WebFlux for non-blocking API calls with Leaflet.js map integration for coordinate-based geospatial data visualization.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mithrandir3010"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and bootcamps that shaped my engineering skills",

  achievementsCards: [
    {
      title: "TUBITAK BILGEM YTE – Java Bootcamp",
      subtitle:
        "Completed intensive Java training at TUBITAK BILGEM YTE, one of Turkey's leading technology research institutes.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "TUBITAK BILGEM YTE Logo",
      footerLink: [
        {
          name: "Certificate (2023)",
          url: ""
        }
      ]
    },
    {
      title: "TUBITAK BILGEM YTE – Spring Boot Bootcamp",
      subtitle:
        "Completed advanced Spring Boot training covering enterprise application development patterns and best practices.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "TUBITAK BILGEM YTE Logo",
      footerLink: [
        {
          name: "Certificate (2023)",
          url: ""
        }
      ]
    },
    {
      title: "Aygaz / Global AI Hub – Image Processing",
      subtitle:
        "Completed Image Processing certification with Aygaz and Global AI Hub, covering computer vision fundamentals and applied deep learning.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Global AI Hub Logo",
      footerLink: [
        {
          name: "Certificate (2025)",
          url: ""
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Writing about backend engineering, Java, and AI-integrated systems.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open for all.",
  number: "+90-531-253-5943",
  email_address: "malibulut221@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
