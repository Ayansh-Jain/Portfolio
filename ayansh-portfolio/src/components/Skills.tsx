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

const skillCategories = [
  {
    title: "FRONTEND ECOSYSTEM",
    skills: [
      { name: "REACT", icon: SiReact },
      { name: "TYPESCRIPT", icon: SiTypescript },
      { name: "JAVASCRIPT", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ]
  },
  {
    title: "BACKEND & DATA",
    skills: [
      { name: "NODE.JS", icon: SiNodedotjs },
      { name: "PYTHON", icon: SiPython },
      { name: "MONGODB", icon: SiMongodb },
    ]
  },
  {
    title: "CORE SYSTEMS",
    skills: [
      { name: "C++ / C", icon: SiCplusplus },
      { name: "GIT", icon: SiGit },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0A0A0A] py-32 px-4 md:px-10">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter flex flex-col md:flex-row md:gap-8 items-start md:items-end">
          <div className="text-white">Tech</div>
          <div className="text-outline">ARSENAL</div>
        </h2>
        <div className="flex items-center gap-4 mt-8">
          <div className="w-12 h-[2px] bg-[#E67E22]" />
          <span className="text-white/60 font-mono text-sm uppercase tracking-widest">Tech stack I've worked with...</span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#E67E22]/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <h3 className="text-white font-mono text-sm tracking-widest uppercase">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md px-4 py-2 transition-colors cursor-default"
                  >
                    <Icon className="text-white/70 w-4 h-4" />
                    <span className="text-white text-xs font-bold tracking-wider">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
