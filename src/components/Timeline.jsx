// src/components/Timeline.jsx

import {
  Briefcase,
  GraduationCap,
  Code,
  Building2,
  Rocket,
  School,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    title: "Backend Developer",
    company: "SolarioTech,Mohali",
    date: "2025 - Present",
    icon: <Code size={24} />,
    side: "left",
    description: "Building scalable APIs and microservices architecture.",
    color: "from-indigo-400 to-purple-400",
  },
  {
    title: "Full Stack Developer",
    company: "Kumar Soft, Noida",
    date: "2023 - 2025",
    icon: <Briefcase size={24} />,
    side: "right",
    description: "Developed full-stack applications with React and Node.js.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "MERN Stack Internship",
    company: "CodeHelp",
    date: "2022 - 2023 (1 Year)",
    icon: <Code size={24} />,
    side: "left",
    description: "Intensive training in MongoDB, Express, React, Node.js.",
    color: "from-emerald-400 to-teal-400",
  },
  {
    title: "Web Development Internship",
    company: "Internshala",
    date: "2021 (6 Months)",
    icon: <Building2 size={24} />,
    side: "right",
    description: "Built responsive websites and optimized performance.",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "B.Tech (Computer Science)",
    company: "United Institute of Technology, Prayagraj",
    date: "2020 - 2024",
    icon: <GraduationCap size={24} />,
    side: "left",
    description: "Specialized in software development and algorithms.",
    color: "from-rose-400 to-pink-400",
  },
  {
    title: "Class 12",
    company: "Varanasi",
    date: "2019",
    icon: <School size={24} />,
    side: "right",
    description: "Science stream with Computer Science.",
    color: "from-violet-400 to-purple-400",
  },
  {
    title: "Class 10",
    company: "Varanasi",
    date: "2017",
    icon: <School size={24} />,
    side: "left",
    description: "First division with distinction.",
    color: "from-sky-400 to-indigo-400",
  },
  {
    title: "Birth",
    company: "Varanasi, Uttar Pradesh",
    date: "2002",
    icon: <Star size={24} />,
    side: "right",
    description: "Started the journey in the spiritual capital of India.",
    color: "from-fuchsia-400 to-purple-400",
  },
];

// Animated card component with enhanced 3D effects
const TimelineCard = ({ item, index, isVisible }) => {
  const side = item.side;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 2, y: y * 2 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={`relative flex items-center mb-16 ${
        side === "left" ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Connecting line dot for mobile */}
      <div className="absolute left-0 md:hidden w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-indigo-500/30 z-10 animate-pulse"></div>
      
      {/* Card with enhanced 3D effect */}
      <div
        ref={cardRef}
        className={`w-full md:w-[45%] transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms`,
          perspective: '1000px',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          className={`group relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 transition-all duration-500`}
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg) translateZ(30px) scale(1.02)` 
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
            transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Animated gradient border with 3D depth */}
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>
          
          {/* 3D Glow effect on hover with parallax */}
          <div 
            className={`absolute -inset-3 bg-gradient-to-r ${item.color} blur-2xl opacity-0 group-hover:opacity-40 transition duration-500`}
            style={{
              transform: isHovered ? `translateZ(-10px)` : 'translateZ(0px)',
            }}
          ></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {isHovered && (
              <>
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-float-particle" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float-particle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-particle" style={{ animationDelay: '1.5s' }}></div>
              </>
            )}
          </div>
          
          <div className="relative z-10 flex gap-5" style={{ transform: 'translateZ(10px)' }}>
            {/* Icon container with 3D animation */}
            <div className="relative">
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} blur-md opacity-0 group-hover:opacity-60 transition duration-500`}></div>
              <div 
                className={`relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-xl shadow-indigo-500/20 transition-all duration-500`}
                style={{
                  transform: isHovered 
                    ? `rotateY(${mousePosition.x * 8}deg) rotateX(${mousePosition.y * -5}deg) scale(1.2) translateZ(40px)` 
                    : 'rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)',
                  transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {item.icon}
              </div>
            </div>

            <div className="flex-1" style={{ transform: 'translateZ(20px)' }}>
              <div className="flex items-start justify-between flex-wrap gap-2">
                <h3 
                  className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition"
                  style={{
                    transform: isHovered ? `translateZ(15px)` : 'translateZ(0px)',
                  }}
                >
                  {item.title}
                </h3>
                <span 
                  className={`text-xs font-mono px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg shadow-indigo-500/20`}
                  style={{
                    transform: isHovered ? `translateZ(15px) scale(1.05)` : 'translateZ(0px) scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {item.date}
                </span>
              </div>

              <p className="text-indigo-300 font-medium mt-1 flex items-center gap-1">
                <Building2 size={14} />
                {item.company}
              </p>

              <p className="text-white/50 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* 3D reflection line */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-black"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Animated background elements with 3D depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* 3D floating orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-float-orb"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-orb animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header with 3D animation */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 mb-4 hover:scale-105 transition-transform duration-300">
            <Sparkles size={16} className="text-indigo-400 animate-spin-slow" />
            <span className="text-indigo-300 font-semibold tracking-widest uppercase text-sm">
              My Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-3 animate-glow">
            Timeline
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto mt-5 rounded-full shadow-lg shadow-indigo-500/30 animate-pulse"></div>

          <p className="max-w-2xl mx-auto text-white/40 mt-6 text-lg">
            A visual journey through my education, internships, and professional experience.
          </p>
        </div>

        <div className="relative">
          {/* Animated Center Line with 3D depth */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent transform -translate-x-1/2 rounded-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50 animate-ping"></div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30 animate-pulse"></div>
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-lg shadow-pink-500/30 animate-pulse"></div>
          </div>

          {/* Rocket with 3D animation */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-full shadow-2xl shadow-indigo-500/30 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group-hover:shadow-indigo-500/50">
                <Rocket size={32} className="text-white animate-bounce group-hover:animate-none" />
              </div>
            </div>
          </div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-card relative"
              data-index={index}
            >
              {/* Timeline Dot - Desktop with 3D effect */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`relative w-5 h-5 bg-black border-2 border-indigo-400 rounded-full shadow-lg shadow-indigo-500/30 hover:scale-150 transition-all duration-300 group-hover:shadow-indigo-500/50`}></div>
                </div>
              </div>

              {/* Mobile Timeline Dot */}
              <div className="absolute left-0 md:hidden w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-indigo-500/30 z-10 animate-pulse"></div>

              {/* Mobile connecting line */}
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-indigo-400/50 to-purple-400/50 md:hidden"></div>

              <TimelineCard item={item} index={index} isVisible={visibleItems[index]} />
            </div>
          ))}
        </div>

        {/* Bottom decoration with 3D effect */}
        <div className="flex justify-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50 hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/20">
            <p className="text-indigo-300 font-medium flex items-center gap-2">
              <Sparkles size={18} className="animate-spin-slow" />
              Constantly evolving, always learning
              <Sparkles size={18} className="animate-spin-slow" />
            </p>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.2); }
        }
        .animate-float-orb {
          animation: float-orb 8s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          50% { transform: translate(10px, -20px) scale(1.5); opacity: 0.5; }
        }
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(168, 85, 247, 0.3); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}