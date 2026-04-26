import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import profilePic from "/AyanshPfp.png";

export default function About() {
  return (
    <section id="about" className="relative w-full">
      {/* Ticker Tape */}
      <div className="w-full bg-[#E67E22] overflow-hidden py-3 flex border-y border-black relative z-20">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap text-black font-black uppercase text-xl md:text-2xl tracking-widest">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-4">•</span>
              <span>REFINE IT</span>
              <span className="mx-4">•</span>
              <span>SHIP IT</span>
              <span className="mx-4">•</span>
              <span>2025 WRAP</span>
              <span className="mx-4">•</span>
              <span>CODE IT</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">
        
        {/* Left Side (Light) */}
        <div className="w-full lg:w-1/2 bg-[#E5E5E5] p-10 md:p-20 flex flex-col justify-center text-[#111111]">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#E67E22]" />
            <span className="text-[#E67E22] font-bold tracking-widest text-sm uppercase">About Me</span>
          </div>
          
          <h2 className="text-[10vw] lg:text-[6vw] leading-[0.85] font-black uppercase tracking-tighter mb-2">
            <div>SOFTWARE</div>
            <div className="text-[#E67E22] text-outline-accent">ENGINEER</div>
          </h2>
          <p className="font-bold text-sm mb-12">In Progress :)</p>

          <div className="max-w-md">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              Turning concepts into code.<br />
              I build interactive web applications engineered for <span className="text-[#E67E22]">performance, maintainability,</span> and <span className="font-black">optimization</span>.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I’m Ayansh Jain, a Full Stack Developer passionate about building scalable, high-performance web applications from concept to deployment. I enjoy crafting clean architectures, writing maintainable code, and turning complex business requirements into reliable, user-friendly digital products.
            </p>
            
            <a 
              href="#resume" 
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#E67E22] transition-colors group"
            >
              My Resume 
              <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Right Side (Dark) */}
        <div className="w-full lg:w-1/2 bg-[#0A0A0A] flex flex-col">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[50%] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={profilePic} alt="Ayansh Jain" className="w-full h-full object-cover" />
            
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[#E67E22] font-mono text-xs uppercase tracking-widest mb-2 block">Current Status</span>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Final-Year Student @ JIIT</h3>
              <p className="text-white/80 text-xl mb-1">Web Developer & Freelancer</p>
              <p className="text-white font-bold text-xl">Incoming Intern @ Top Company</p>
            </div>
            
            <div className="absolute top-8 right-8 z-20 opacity-30">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </div>

          {/* 2025 Wrap Section */}
          <div className="p-10 md:p-16 flex-grow border-t border-white/10">
            <h3 className="text-white text-3xl font-bold mb-8">2025 WRAP</h3>
            <p className="text-white/60 leading-relaxed mb-8 text-lg font-light">
              A year spent strengthening data structures & algorithms and core programming fundamentals while building full-stack web applications. From backend logic and databases to real-time systems and modern web interfaces, the focus has been on efficiency, scalability, and clean execution. But the goal remained same:
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#E67E22]" />
                <span className="text-white">CODE IT.</span> ensuring robust & scalable architecture.
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#E67E22]" />
                <span className="text-white">REFINE IT.</span> optimizing for performance and UX.
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#E67E22]" />
                <span className="text-white">SHIP IT.</span> delivering real-world impact.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
