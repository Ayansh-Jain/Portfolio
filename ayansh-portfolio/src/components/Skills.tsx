import { useRef, useEffect, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiPython,
  SiCplusplus,
  SiTypescript
  
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C Programming", icon: SiCplusplus, color: "#1b477aff" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${isVisible ? "fade-in" : ""}`}
      ref={ref}
    >
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                transitionDelay: `${index * 0.1}s`,
                "--icon-color": skill.color,
              } as React.CSSProperties}
            >
              <div className="skill-icon">
                <Icon />
              </div>
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
