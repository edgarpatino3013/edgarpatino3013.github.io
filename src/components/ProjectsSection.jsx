import React, { useState } from "react";

const tabs = [
  { label: "Personal Projects", key: "projects" },
  { label: "Professional Experience", key: "experience" },
  { label: "Education", key: "education" },
  { label: "Skills & Technologies", key: "skills" },
];

const personalProjects = [
  {
    emoji: "🌲",
    title: "ParkMate",
    stack: "ReactJS/Java/JavaScript/CSS/National Park Service API/MySQL",
    date: "April 2024",
    description: [
      "Developed a Spring Boot web application enabling users to plan camping trips by searching, comparing, and reviewing US National Parks, with features including user authentication, dynamic park suggestions among friends, and accessibility enhancements for mobile devices and disabled users.",
      "Engineered and tested a secure client-server architecture, and applied comprehensive testing strategies using Jest and React Testing Library to ensure robust functionality and protect user data."
    ]
  },
  {
    emoji: "🎵",
    title: "Beats 4 U",
    stack: "iOS App/Java/Tailwind CSS/ReactJS/NodeJS/Spotify API/MySQL",
    date: "March 2023",
    description: [
      "In a 7-member team, developed a Spotify-inspired Spring Boot application with social features including commenting, posting, and playlist collaboration with added friends.",
      "Led Spring Boot configuration, frontend styling, database integration, security credentials, and collaborative playlist functionality, applying Waterfall methodology, conducting rigorous Whitebox and Blackbox testing, and leveraging multithreading, networking, and the Spotify API for enhanced functionality."
    ]
  },
  {
    emoji: "🍽️",
    title: "Yelp Clone",
    stack: "Java/HTML/CSS/Yelp API/Google Maps API/MySQL",
    date: "November 2023",
    description: [
      "Developed a robust Spring Boot-based web application enabling user account management, favorite restaurant tracking, and reservations, enhancing the Yelp experience.",
      "Integrated sophisticated features such as user authentication, real-time Yelp API integration for restaurant data, and seamless database transactions to ensure a responsive and personalized user experience."
    ]
  }
];

const professionalExperience = [
  {
    emoji: "🤖",
    company: "PrevWORKS, Los Angeles, CA",
    role: "Full-Stack Software Engineer",
    date: "August 2024 - December 2024",
    description: [
      "Developed an AI-powered chatbot and intelligent agent using Google Gemini and Flask to streamline injury reporting, classify user queries, retrieve case details, recommend nearby medical services, and convert geolocation data into addresses, automating 80% of manual triage tasks and reducing injury-related inquiry response times.",
      "Engineered a dual-portal system: an employee platform for AI-driven injury recommendations and an employer dashboard featuring 5+ real-time visual analytics, reducing manual case tracking and cutting inquiry-related costs by up to 30%, while saving employees up to $300 per doctor visit."
    ]
  },
  {
    emoji: "🏢",
    company: "CoStar Group, Irvine, CA",
    role: "Full-Stack Software Engineer, Loopnet",
    date: "June 2024 - August 2024",
    description: [
      "Delivered 3 key projects, including unit testing for 25+ UDFs, by designing and deploying complex schedule triggers to Google Cloud Platform via Terraform; developed a high-security decryption endpoint for encrypted tokens, currently leveraged by 10+ teams through a company site; and engineered a functional Micro Frontend Architecture to replace an outdated webpage, now integrated across 5+ company sites.",
      "Authored 3 in-depth technical articles for the company wiki, documenting projects to aid future development."
    ]
  },
  {
    emoji: "📊",
    company: "Movable Ink, New York, NY",
    role: "Partnerships, Sales, and Data Engineer Intern",
    date: "May 2023 – August 2023",
    description: [
      "Led the creation of strategic outlines for landing pages and actively facilitated over 20 hours of weekly meetings among partners, clients, and prospective customers, contributing to business growth and collaboration.",
      "Utilized LinkedIn Sales Navigator to develop an algorithm that introduced 150+ new clients and coordinated efforts across engineering, product, and marketing teams, streamlining cross-functional collaboration."
    ]
  }
];

const education = [
  {
    school: "University of Southern California, Los Angeles, CA",
    degree: "Bachelor of Science in Computer Science and Business Administration | Viterbi School of Engineering",
    date: "Expected May 2025",
    gpa: "GPA: 3.7",
    coursework: [
      "Applied Statistics & Probability, Data Structures & Algorithms, Discrete Methods, Introduction to Artificial Intelligence, iOS App Development, Linear Algebra, Software Development, Software Engineering."
    ],
    programming: "C++/C#/HTML/CSS, Java, JavaScript, Python, SQL, TypeScript",
    technologies: "Azure DevOps, Docker, Excel, GCP SQL, Git, MySQL, Postman, ReactJS, Spring Boot, SQL Server Management Studio, Swift, Tableau, Tailwind CSS, Terraform, Visual Studio, Xcode, YAML."
  }
];

const techIcons = [
  { name: "React", src: "/assets/images/react.png" },
  { name: "Java", src: "/assets/images/java.png" },
  { name: "JavaScript", src: "/assets/images/javascript.png" },
  { name: "Python", src: "/assets/images/python.png" },
  { name: "TypeScript", src: "/assets/images/typescript.png" },
  { name: "MySQL", src: "/assets/images/mysql.png" },
  { name: "Spring Boot", src: "/assets/images/springboot.png" },
  { name: "Tailwind CSS", src: "/assets/images/tailwind.png" },
  { name: "Docker", src: "/assets/images/docker.png" },
  { name: "GCP", src: "/assets/images/gcp.png" },
  { name: "Terraform", src: "/assets/images/terraform.png" },
  { name: "Git", src: "/assets/images/git.png" },
  { name: "NodeJS", src: "/assets/images/nodejs.png" },
  { name: "Swift", src: "/assets/images/swift.png" },
  { name: "Xcode", src: "/assets/images/xcode.png" },
  { name: "Tableau", src: "/assets/images/tableau.png" },
  { name: "Postman", src: "/assets/images/postman.png" },
  { name: "Excel", src: "/assets/images/excel.png" },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  // Timeline item component
  const TimelineItem = ({ emoji, title, stack, date, description, company, role }) => (
    <div className="flex items-start mb-10 relative">
      <div className="flex flex-col items-center mr-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-2xl text-white shadow-lg z-10">
          {emoji}
        </div>
        <div className="flex-1 w-px bg-accent h-full mt-1" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">{title || company}</h3>
        <div className="text-sm text-accent mb-2 font-semibold">{role ? `${role} | ${date}` : `${stack} | ${date}`}</div>
        <ul className="list-disc ml-6 text-text text-lg">
          {description.map((desc, idx) => (
            <li key={idx} className="mb-1">{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="bg-background min-h-screen py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-8 text-center">My Work & Experience</h2>
        <div className="flex justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 mx-2 rounded-t-lg font-semibold transition border-b-4 focus:outline-none ${
                activeTab === tab.key
                  ? "border-primary bg-surface text-primary"
                  : "border-transparent bg-surface-light text-text hover:bg-surface"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-surface rounded-lg shadow-lg p-8 text-white">
          {activeTab === "projects" && (
            <div className="relative ml-6 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
              {personalProjects.map((proj, idx) => (
                <TimelineItem key={proj.title} {...proj} />
              ))}
            </div>
          )}
          {activeTab === "experience" && (
            <div className="relative ml-6 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
              {professionalExperience.map((exp, idx) => (
                <TimelineItem key={exp.company} {...exp} />
              ))}
            </div>
          )}
          {activeTab === "education" && (
            <div>
              {education.map((edu) => (
                <div key={edu.school} className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-1">{edu.school}</h3>
                  <div className="text-lg font-semibold text-white">{edu.degree}</div>
                  <div className="text-sm text-accent mb-2">{edu.date} | {edu.gpa}</div>
                  <div className="mb-2 text-text"><span className="font-semibold">Relevant Coursework:</span> {edu.coursework}</div>
                  <div className="mb-2 text-text"><span className="font-semibold">Programming:</span> {edu.programming}</div>
                  <div className="mb-2 text-text"><span className="font-semibold">Technologies/Frameworks:</span> {edu.technologies}</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "skills" && (
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Technologies & Tools</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {techIcons.map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center">
                    <img src={icon.src} alt={icon.name} className="w-14 h-14 object-contain mb-2 bg-white rounded-lg p-2 shadow" />
                    <span className="text-text text-sm font-semibold mt-1">{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 