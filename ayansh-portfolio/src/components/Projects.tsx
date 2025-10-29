import { useRef, useEffect, useState } from "react";
import { motion} from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import verseImage from "../public/Verse.png";
import verseVideo from "../public/verse.mp4";
import dashboardImage from "../public/Chess.png";
import dashboardVideo from "../public/Chess.mp4";
import universeImage from "../public/Netflix.png";
import universeVideo from "../public/Netflix.mp4";
import aiImage from "../public/Zomato.png";
import aiVideo from "../public/Zomato.mp4";

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

  const projects = [
    {
      title: "Verse",
      description:
        "A modern social platform where users create, share, and explore polls, images, and challenges. Built with React, Node.js, MongoDB, and real-time features.",
      image: verseImage,
      video: verseVideo,
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      demo: "https://verse-frontend.onrender.com",
      code: "https://github.com/Ayansh-Jain/VERSE",
    },
    {
      title: "Chess Ai",
      description:
        "An AI Chess engine with alpha-beta pruning and GUI built in Python. Integrated with Streamlit for online play.",
      image: dashboardImage,
      video: dashboardVideo,
      tech: ["Python", "Tkinter", "Alpha-Beta Pruning", "Streamlit"],
      demo: "https://chess-lense.streamlit.app/",
      code: "https://github.com/Ayansh-Jain/Chess-AI",
    },
    {
      title: "Netflix Clone",
      description:
        "A full-stack web app for streaming movies online with authentication, feeds, and a clean React UI.",
      image: universeImage,
      video: universeVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://andybeas.github.io/NetflixClonenew/",
      code: "https://github.com/Ayansh-Jain/Netflix",
    },
    {
      title: "Zomato Clone",
      description:
        "A food delivery platform with restaurant listings, authentication, and live order tracking.",
      image: aiImage,
      video: aiVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://zomato-clone-admin.vercel.app/CreateProfile",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
    },
  ];

  // ✅ Fixed variant (no function)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
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
        ))}
      </div>
    </section>
  );
}
