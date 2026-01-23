import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    duration: string;
    year: string;
    location: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: "MyProfunnel",
        role: "Web Developer",
        duration: "October – Present",
        year: "2025",
        location: "Remote",
        description: [
            "Designed and developed high-converting websites and landing pages for various esteemed companies and startups.",
            "Directly interacted with clients to understand business goals, gather requirements, and translate them into effective web solutions.",
            "Built scalable, responsive, and performance-optimized websites focused on lead generation and client acquisition.",
            "Continuously updated, optimized, and maintained websites based on evolving client needs and feedback."
        ],
        technologies: ["React", "JavaScript", "GoDaddy", "Cpanel"],
    },
    // Add more experiences as needed
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to a scale value for the progress line
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="experience-section" id="experience" ref={containerRef}>
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
                    {/* Static timeline track (background) */}
                    <div className="timeline-track"></div>

                    {/* Animated progress line */}
                    <motion.div
                        className="timeline-progress"
                        style={{ height: progressHeight }}
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="experience-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {/* Year label - left column */}
                            <motion.div
                                className="experience-year"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="year-text">{exp.year}</span>
                            </motion.div>

                            {/* Timeline dot - center */}
                            <motion.div
                                className="timeline-dot"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 200 }}
                                viewport={{ once: true }}
                            ></motion.div>

                            {/* Experience card - right column */}
                            <motion.div
                                className="experience-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="experience-header">
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <div className="experience-company-duration">
                                        <span className="experience-company">{exp.company}</span>
                                        <span className="experience-separator">•</span>
                                        <span className="experience-duration">{exp.duration}</span>
                                    </div>
                                </div>

                                <div className="experience-description">
                                    <ul>
                                        {exp.description.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="experience-tech">
                                    <span className="tech-label">Tech Stack</span>
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="tech-tag"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
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
