import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import toast from "react-hot-toast";
import CardSection from "./ui/CardSection";

export default function Contact() {
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
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Network error. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Ayansh-Jain", color: "#ffffff" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ayansh-jain-b74bab27b", color: "#0A66C2" },
    { name: "Email", icon: Mail, url: "mailto:ayanshjain.co@gmail.com", color: "#EA4335" },
  ];

  return (
    <CardSection id="contact" className="relative w-full bg-[#0A0A0A] py-32 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#E67E22]" />
            <span className="text-[#E67E22] font-mono tracking-widest text-sm uppercase">Let's Connect</span>
          </div>
          
          <h2 className="text-[14vw] lg:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 flex flex-col">
            <div className="text-white">GET IN</div>
            <div className="text-outline">TOUCH</div>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Drop me a message and let's build something great.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#111111] border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group"
              >
                <social.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" style={{ color: social.color }} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E67E22]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-white/40 font-mono text-xs uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E67E22] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-white/40 font-mono text-xs uppercase tracking-widest">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E67E22] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-white/40 font-mono text-xs uppercase tracking-widest">Your Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E67E22] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-[#E67E22] text-black font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white hover:text-black transition-all mt-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>

      </div>
    </CardSection>
  );
}
