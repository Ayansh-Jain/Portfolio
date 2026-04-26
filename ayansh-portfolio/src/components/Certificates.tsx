import { Trophy, ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "React  – HackerRank",
    link: "https://www.hackerrank.com/certificates/e517674405b5",
    issuer: "HackerRank",
    tags: ["React", "Frontend", "Assessment"]
  },
  {
    title: "Hackathon Participation",
    link: "https://drive.google.com/file/d/1BTnTKlj5KZB4GMzB28OTbEkfsggxVy9a/view",
    issuer: "JIIT Hackathon",
    tags: ["Teamwork", "Development", "Event"]
  },
  {
    title: "Javascript Intermediate",
    link: "https://www.hackerrank.com/certificates/80b3200ea105",
    issuer: "HackerRank",
    tags: ["JavaScript", "Logic", "Assessment"]
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative w-full bg-[#0A0A0A] py-32 px-4 md:px-10">
      
      {/* Title */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-[#E67E22] font-mono text-sm uppercase tracking-widest font-bold">Hall of Fame</span>
        </div>
        <h2 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter flex flex-col items-center">
          <div className="text-white">Achievements &</div>
          <div className="text-outline">AWARDS</div>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {certificates.map((cert, index) => (
          <a 
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#111111] border border-white/5 rounded-2xl p-8 md:p-12 overflow-hidden transition-colors hover:border-white/20 block"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E67E22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              
              {/* Trophy Icon */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-[-12px] z-10 shadow-xl group-hover:border-[#E67E22]/50 transition-colors">
                  <Trophy className="w-10 h-10 text-[#E67E22]" />
                </div>
                <div className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest z-20">
                  Verified
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-[#E67E22] text-2xl md:text-3xl font-bold mb-2">{cert.title}</h3>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-6">
                  Issued By {cert.issuer}
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Successfully completed and verified by the issuing authority, demonstrating core competencies and practical knowledge in the respective domain.
                </p>
                
                {/* Tags */}
                <div className="flex items-center gap-2">
                  <div className="bg-transparent border border-[#E67E22]/30 rounded-full px-4 py-1 flex items-center gap-2">
                    <span className="text-[#E67E22] text-xs font-mono">
                      {cert.tags.join(" • ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-8 right-8 text-white/30 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>

            </div>
          </a>
        ))}
      </div>
      
    </section>
  );
}
