import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
  FaCogs,
  FaQuoteLeft,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "services", icon: FaCogs, label: "Services" },
    { id: "timeline", icon: FaBriefcase, label: "Experience" },
    { id: "projects", icon: FaLaptopCode, label: "Projects" },
    { id: "testimonials", icon: FaQuoteLeft, label: "Testimonials" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <>
      {/* Background overlay for dark theme */}
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] -z-10" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      {/* Desktop Sidebar - Premium Dark 3D Design */}
      <div
        className="
          fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex
          flex-col gap-4
        "
      >
        {/* 3D Perspective Container */}
        <div className="relative p-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
          
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  transform: isHovered ? 'translateZ(20px) scale(1.05)' : 'translateZ(0px) scale(1)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* 3D Glow Effect */}
                <div
                  className={`
                    absolute inset-0 rounded-full transition-all duration-500
                    ${isActive 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 opacity-100 scale-110 blur-sm" 
                      : "bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-30 scale-100"
                    }
                  `}
                />

                {/* Button with 3D depth */}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative w-12 h-12 rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    ${isActive 
                      ? "text-white shadow-lg shadow-indigo-500/30 bg-gradient-to-br from-indigo-500 to-purple-500" 
                      : "text-gray-400 hover:text-white bg-black/40 backdrop-blur-sm"
                    }
                    border ${isActive ? "border-white/20" : "border-white/10"}
                    hover:scale-110 transform
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  `}
                  style={{
                    transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
                    boxShadow: isActive 
                      ? '0 8px 32px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)' 
                      : '0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease'
                  }}
                >
                  <Icon className={`text-xl transition-all ${isActive ? "scale-110" : ""}`} />
                </button>

                {/* 3D Tooltip */}
                <div
                  className={`
                    absolute left-16 top-1/2 -translate-y-1/2
                    px-4 py-2 bg-black/90 backdrop-blur-xl text-white text-sm font-medium
                    rounded-xl whitespace-nowrap
                    transition-all duration-300
                    ${isHovered || isActive
                      ? "opacity-100 visible translate-x-0" 
                      : "opacity-0 invisible -translate-x-2"
                    }
                    shadow-2xl border border-white/10
                    transform ${isHovered ? 'scale-105' : 'scale-100'}
                  `}
                  style={{
                    transform: isHovered ? 'translateZ(30px) scale(1.05)' : 'translateZ(0px) scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {item.label}
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2">
                    <div className="w-2.5 h-2.5 bg-black/90 border-l border-b border-white/10 rotate-45"></div>
                  </div>
                </div>

                {/* Active Indicator Line with 3D effect */}
                {isActive && (
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse" />
                )}
              </div>
            );
          })}

          {/* Social Links Separator with 3D depth */}
          <div className="my-4 px-3">
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Social Media Icons with 3D effect */}
          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 overflow-hidden"
              style={{
                transform: hoveredItem === 'linkedin' ? 'translateZ(15px) scale(1.1)' : 'translateZ(0px) scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={() => setHoveredItem('linkedin')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaLinkedin className="text-xl relative z-10" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 overflow-hidden"
              style={{
                transform: hoveredItem === 'github' ? 'translateZ(15px) scale(1.1)' : 'translateZ(0px) scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={() => setHoveredItem('github')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaGithub className="text-xl relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Dark 3D Bottom Bar */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50 lg:hidden
          bg-black/90 backdrop-blur-2xl border-t border-white/10
          shadow-2xl shadow-black/50
        "
      >
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative flex flex-col items-center gap-0.5
                  py-1.5 px-2 rounded-xl transition-all duration-300
                  ${isActive 
                    ? "text-indigo-400" 
                    : "text-gray-500 hover:text-gray-300"
                  }
                `}
                style={{
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0px)',
                }}
              >
                <div className="relative">
                  <Icon className={`text-xl ${isActive ? "scale-110" : ""} transition-transform duration-300`} />
                  {isActive && (
                    <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur-sm -z-10" />
                  )}
                </div>
                <span className={`text-[10px] transition-all duration-300 ${isActive ? "opacity-100 text-indigo-400" : "opacity-60"}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -top-2 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-lg shadow-indigo-500/50" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;