import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import verseImage from "/public/Verse.png";
import verseVideo from "/public/verse.mp4"; // 🎥 Add your demo video here
import dashboardImage from "/public/Chess.png";
import dashboardVideo from "/public/Chess.mp4";
import universeImage from "/public/Netflix.png";
import nitaiImage from "/public/nitai.png";
import hemantImage from "/public/hemant.png";
import beneImage from "/public/bene.png";
import baghlImage from "/public/baghla.png";
import saasImage from "/public/saas.png";
import profunnelImage from "/public/profunnel.png";
import homosapiensImage from "/public/homosapien.png";
import universeVideo from "/public/Netflix.mp4"; // 🎥 Add your demo video here
import aiImage from "/public/Zomato.png";
import aiVideo from "/public/Zomato.mp4";

interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  tech: string[];
  demo: string;
  code: string;
  category: "personal" | "company";
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "Verse",
      description:
        "A modern social platform where users create, share, and explore polls, images, and challenges. Built with React, Node.js, MongoDB, and real-time features.",
      image: verseImage,
      video: verseVideo,
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      demo: "https://verse-frontend.onrender.com",
      code: "https://github.com/Ayansh-Jain/VERSE",
      category: "personal",
    },
    {
      title: "Chess Ai",
      description:
        "A new al UI dashboard with Google Auth, analytics, and notifications. Designed for clean data visualization and user tracking.",
      image: dashboardImage,
      video: dashboardVideo,
      tech: ["Python", "Tkinter", "Alphabeta Pruning", "Streamlit"],
      demo: "https://chess-lense.streamlit.app/",
      code: "https://github.com/Ayansh-Jain/Chess-AI",
      category: "personal",
    },
    {
      title: "Netflix Clone",
      description:
        "A full-stack web app for streaming movies online, featuring authentication, feeds, and challenge-based polls built using MERN Stack.",
      image: universeImage,
      video: universeVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://andybeas.github.io/NetflixClonenew/",
      code: "https://github.com/Ayansh-Jain/Netflix",
      category: "personal",
    },
    {
      title: "Zomato Clone",
      description:
        "A food delivery app clone built with React and Node.js, featuring restaurant listings, user authentication, and real-time order tracking.",
      image: aiImage,
      video: aiVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://zomato-clone-admin.vercel.app/CreateProfile",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "personal",
    },
    // Add company projects here with category: "company"
    {
      title: "HomoSapien",
      description:
        "A spiritual themed Landing Page for a very famous Guruji,Shri Dev Prem Ji,to sell their online offerings",
      image: homosapiensImage,

      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://homosapiens.onrender.com/",
      code: "https://github.com/Ayansh-Jain/HOMOSAPIENS",
      category: "company",
    },
    {
      title: "HemantRise",
      description:
        "A high-conversion business landing page built with React and deployed using GoDaddy and cPanel. Designed for lead generation with responsive layout, animations, and modern UI elements.",
      image: hemantImage,

      tech: ["React", "Javascript", "Cpanel", "GoDaddy"],
      demo: "https://lp.hemantrise.live/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "Nitai Ai & Digital Empire",
      description:
        "A high-conversion business landing page for a franchise company, Nitai Ai & Digital Empire. Designed for lead generation with responsive layout, animations, and modern UI elements.",
      image: nitaiImage,

      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://aifranchise.nitaigroup.com/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "Bene Consulting LLP",
      description:
        "A professional business website for Consulting company,with high-end graphics and animation",
      image: beneImage,

      tech: ["React", "Javascript", "Cpanel", "GoDaddy"],
      demo: "https://beneconsulting.co.in/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "Baghla Research and Analytics",
      description:
        "A high-conversion business landing page for a very famous Chartered Accountant , CA Sumedh Baghla,showcasing his consulting services",
      image: baghlImage,

      tech: ["React", "Javascript", "Cpanel", "GoDaddy"],
      demo: "https://baghlaresearch.com/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "SaaS Universe",
      description:
        "A landing page for a SaaS company,to sell their online offerings",
      image: saasImage,

      tech: ["React", "Javascript", "Cpanel", "GoDaddy"],
      demo: "https://zomato-clone-admin.vercel.app/CreateProfile",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "MyProfunnel",
      description:
        "A company that creates funnels for their clients to sell their products and services",
      image: profunnelImage,

      tech: ["React", "Javascript", "Cpanel", "GoDaddy"],
      demo: "https://shrivastavaprofunnels.com/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },

  ];

  const personalProjects = projects.filter(p => p.category === "personal");
  const companyProjects = projects.filter(p => p.category === "company");

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  } as const;

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={index}
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      custom={index}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="project-image-wrapper">
        {project.video ? (
          <motion.div
            className="video-container"
            whileHover="hovered"
            initial="rest"
            animate="rest"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              variants={{
                rest: { opacity: 1 },
                hovered: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.video
              className="project-video"
              src={project.video}
              muted
              loop
              playsInline
              variants={{
                rest: { opacity: 0 },
                hovered: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={(e: { currentTarget: { play: () => any; }; }) => e.currentTarget.play()}
              onMouseLeave={(e: { currentTarget: { pause: () => any; }; }) => e.currentTarget.pause()}
            />
          </motion.div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-buttons">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-primary"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-outline"
          >
            <Github size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" ref={ref} className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="projects-title"
      >
        Featured Projects
      </motion.h2>

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <div className="projects-subsection">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="projects-subtitle"
          >
            Personal Projects
          </motion.h3>
          <div className="projects-grid">
            {personalProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      )}

      {/* Company/Real World Projects */}
      {companyProjects.length > 0 && (
        <div className="projects-subsection">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="projects-subtitle"
          >
            Company / Real World Projects
          </motion.h3>
          <div className="projects-grid">
            {companyProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      )}
    </section>
  );
}
