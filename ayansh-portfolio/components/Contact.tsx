import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xeopgpvw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("⚠️ Network error. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Ayansh-Jain",
      color: "#0f0f0f",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/ayansh-jain-b74bab27b",
      color: "#0A66C2",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ayanshjain.co@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" ref={ref}>
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Feel free to reach out!
            </p>

            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  style={{ color: social.color }}
                >
                  <social.icon className="icon" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <button type="submit" className="submit-btn" disabled={isSending}>
              <Send className="send-icon" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
