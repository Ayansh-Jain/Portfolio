import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import verseImage from "/Verse.png";
import verseVideo from "/verse.mp4";
import dashboardImage from "/Chess.png";
import dashboardVideo from "/Chess.mp4";
import universeImage from "/Netflix.png";
import nitaiImage from "/nitai.png";
import hemantImage from "/hemant.png";
import beneImage from "/bene.png";
import homosapiensImage from "/homosapien.png";
import universeVideo from "/Netflix.mp4";
import aiImage from "/Zomato.png";
import aiVideo from "/Zomato.mp4";

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
  const projects: Project[] = [
    {
      title: "Verse",
      description: "A modern social platform where users create, share, and explore polls, images, and challenges. Built with React, Node.js, MongoDB, and real-time features.",
      image: verseImage,
      video: verseVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://verse-frontend.onrender.com",
      code: "https://github.com/Ayansh-Jain/VERSE",
      category: "personal",
    },
    {
      title: "Chess Ai",
      description: "A new al UI dashboard with Google Auth, analytics, and notifications. Designed for clean data visualization and user tracking.",
      image: dashboardImage,
      video: dashboardVideo,
      tech: ["Python", "Tkinter", "Alphabeta Pruning", "Streamlit"],
      demo: "https://chess-lense.streamlit.app/",
      code: "https://github.com/Ayansh-Jain/Chess-AI",
      category: "personal",
    },
    {
      title: "Netflix Clone",
      description: "A full-stack web app for streaming movies online, featuring authentication, feeds, and challenge-based polls built using MERN Stack.",
      image: universeImage,
      video: universeVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://andybeas.github.io/NetflixClonenew/",
      code: "https://github.com/Ayansh-Jain/Netflix",
      category: "personal",
    },
    {
      title: "Zomato Clone",
      description: "A food delivery app clone built with React and Node.js, featuring restaurant listings, user authentication, and real-time order tracking.",
      image: aiImage,
      video: aiVideo,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://zomato-clone-admin.vercel.app/CreateProfile",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "personal",
    },
    {
      title: "HomoSapien",
      description: "A spiritual themed Landing Page for a very famous Guruji, Shri Dev Prem Ji, to sell their online offerings",
      image: homosapiensImage,
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://homosapiens.onrender.com/",
      code: "https://github.com/Ayansh-Jain/HOMOSAPIENS",
      category: "company",
    },
    {
      title: "HemantRise",
      description: "A high-conversion business landing page built with React and deployed using GoDaddy and cPanel. Designed for lead generation with responsive layout, animations, and modern UI elements.",
      image: hemantImage,
      tech: ["React", "Javascript", "Cpanel"],
      demo: "https://lp.hemantrise.live/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "Nitai Ai & Digital Empire",
      description: "A high-conversion business landing page for a franchise company, Nitai Ai & Digital Empire. Designed for lead generation with responsive layout, animations, and modern UI elements.",
      image: nitaiImage,
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://aifranchise.nitaigroup.com/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
    {
      title: "Bene Consulting LLP",
      description: "A professional business website for Consulting company, with high-end graphics and animation",
      image: beneImage,
      tech: ["React", "Javascript", "Cpanel"],
      demo: "https://beneconsulting.co.in/",
      code: "https://github.com/Ayansh-Jain/Zomato-Clone",
      category: "company",
    },
  ];

  const targetRef = useRef<HTMLDivElement>(null);

  // We have 8 projects. Let's create a very long vertical scrolling section.
  // We'll map the vertical scroll progress (0 to 1) to horizontal translation (0% to -85%).
  // -85% works well for this number of items to reach the "End of Log".
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section 
      ref={targetRef} 
      id="projects" 
      className="relative bg-[#0A0A0A] h-[500vh]"
    >
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Background glow for futuristic feel */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#E67E22] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

        <motion.div 
          style={{ x }} 
          className="flex gap-8 px-10 md:px-32 items-center w-max"
        >
          
          {/* Intro / Title Block (First item in horizontal list) */}
          <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col pr-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#E67E22]" />
              <span className="text-[#E67E22] font-mono tracking-widest text-sm uppercase">Selected Works</span>
            </div>
            
            <h2 className="text-[15vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8">
              <div className="text-white">WORK</div>
              <div className="text-outline">LOG</div>
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light mb-12">
              A curated selection of full-stack projects focused on backend logic, data handling, and clean web interfaces. Scroll down to explore.
            </p>

            <div className="flex items-center gap-4 text-white/40 font-mono text-sm uppercase tracking-widest">
              <span className="animate-pulse">Scroll</span>
              <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-white"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="w-[85vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] h-[75vh] flex-shrink-0 bg-[#111111]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#E67E22]/50 transition-colors duration-500"
            >
              {/* Card Header Overlay */}
              <div className="absolute top-0 inset-x-0 p-6 z-20 flex justify-between items-center pointer-events-none">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono px-4 py-2 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
                <div className="text-[#E67E22] font-mono font-bold text-xl opacity-50">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Media Section */}
              <div className="h-[55%] w-full relative overflow-hidden bg-black border-b border-white/5">
                {project.video ? (
                  <div className="relative w-full h-full group/video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/video:opacity-0"
                    />
                    <video 
                      src={project.video} 
                      muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                {/* Futuristic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Section */}
              <div className="h-[45%] p-8 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-[#E67E22] transition-colors">{project.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-6">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map(tech => (
                      <span key={tech} className="bg-white/5 text-[#E67E22] text-[10px] md:text-xs px-3 py-1.5 rounded-full font-mono uppercase tracking-wider border border-[#E67E22]/20">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-white/5 text-white/40 text-[10px] md:text-xs px-3 py-1.5 rounded-full font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-[#E67E22] transition-colors">
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/50 transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Outro Block */}
          <div className="w-[30vw] flex-shrink-0 flex items-center justify-center">
            <h3 className="text-[#E67E22] font-mono uppercase tracking-widest text-2xl rotate-90 opacity-50">
              End of Log
            </h3>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
