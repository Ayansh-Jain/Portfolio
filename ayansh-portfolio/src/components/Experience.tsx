import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
{
  id: 1,
  company: "MyProfunnel",
  role: "Web Developer",
  duration: "Oct 2025 – Present",
  location: "Remote",
  description: [
    "Designed and developed high-converting websites and landing pages for various esteemed companies and startups.",
    "Directly interacted with clients to understand business goals, gather requirements, and translate them into effective web solutions.",
    "Built scalable, responsive, and performance-optimized websites focused on lead generation and client acquisition.",
    "Continuously updated, optimized, and maintained websites based on evolving client needs and feedback."
  ],
  technologies: ["React", "JavaScript", "GoDaddy", "Cpanel"],
}
    // Add more experiences as needed
];

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <motion.div
                className="experience-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="experience-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="experience-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="experience-header">
                                <div className="experience-role-section">
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <div className="experience-company">
                                        <FaBriefcase className="experience-icon" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="experience-meta">
                                    <div className="experience-duration">
                                        <FaCalendar className="experience-icon" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="experience-location">
                                        <FaMapMarkerAlt className="experience-icon" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="experience-description">
                                <ul>
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="experience-tech">
                                {exp.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="experience-highlight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    "Experience is the teacher of all things." — Julius Caesar
                </motion.div>
            </motion.div>
        </section>
    );
}
