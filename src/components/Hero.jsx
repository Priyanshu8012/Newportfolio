import { useState, useEffect, useRef } from "react";
import profile from "../assets/p22.png";
import { FaArrowRight, FaCheckCircle, FaDownload } from "react-icons/fa";

const Hero = () => {
  const roles = [
    "Backend Developer",
    "Fullstack Developer",
    "Frontend Developer",
    "Tech Entrepreneur",
    "Freelancer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (charIndex < roles[currentRole].length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + roles[currentRole][charIndex]);
          setCharIndex(charIndex + 1);
        }, 80);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 1500);
        return () => clearTimeout(timer);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 40);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
  }, [charIndex, isTyping, currentRole, roles]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = Math.min(Math.max(x / rect.width, 0), 1);
    const py = Math.min(Math.max(y / rect.height, 0), 1);

    const maxTilt = 24;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    setTilt({ x: rotateX, y: rotateY });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleSectionMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setParallax({ x: (px - 0.5) * 2, y: (py - 0.5) * 2 });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Fullstack Cv.pdf";
    link.download = "Priyanshu_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: "30+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
  ];

  const features = [
    "24/7 Support",
    "Quality Assurance",
    "Modern Tech Stack",
    "Fast Delivery",
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Patterns */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-[0.18] transition-transform duration-300 ease-out hidden sm:block"
        style={{
          transform: `translate(${parallax.x * -10}px, ${parallax.y * -10}px)`,
        }}
      />

      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      <div
        className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-[120px] transition-transform duration-500 ease-out hidden md:block"
        style={{
          transform: `translate(${parallax.x * 30}px, ${parallax.y * 30}px)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-violet-700/15 rounded-full blur-[120px] transition-transform duration-500 ease-out hidden md:block"
        style={{
          transform: `translate(${parallax.x * -30}px, ${parallax.y * -30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Profile Card */}
          <div className="order-2 lg:order-1 flex flex-col items-center mt-6 lg:mt-0">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative group [perspective:900px] w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto"
            >
              <div
                className="absolute -inset-px rounded-[28px] opacity-60 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none hidden sm:block"
                style={{
                  background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(167,139,250,0.55), rgba(99,102,241,0.25) 40%, transparent 70%)`,
                  filter: "blur(18px)",
                }}
              />

              <div
                className={`relative bg-[#0E0E11] border border-white/10 rounded-[26px] p-2 sm:p-3 shadow-2xl [transform-style:preserve-3d] ${
                  isHovering ? "" : "transition-transform duration-500 ease-out"
                }`}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
                    isHovering ? 1.04 : 1
                  })`,
                  boxShadow: isHovering
                    ? `${-tilt.y * 1.5}px ${tilt.x * 1.5}px 50px -10px rgba(99,102,241,0.45)`
                    : undefined,
                }}
              >
                <div
                  className="absolute inset-0 rounded-[26px] pointer-events-none mix-blend-overlay transition-opacity duration-200 hidden sm:block"
                  style={{
                    opacity: isHovering ? 0.5 : 0,
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.35), transparent 55%)`,
                  }}
                />

                <img
                  src={profile}
                  alt="Priyanshu Kumar"
                  className="w-full rounded-2xl object-cover select-none"
                  style={{ transform: "translateZ(25px)" }}
                  draggable={false}
                />

                {/* Online Status Badge */}
                <div
                  className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-[#111114]/90 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5 sm:px-3 sm:py-1.5 shadow-lg"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[8px] sm:text-xs font-medium text-gray-200 tracking-wide">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-5 sm:mt-8 flex justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="text-center min-w-[65px] sm:min-w-[70px]">
                  <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 leading-[1.1] text-white animate-slideInLeft animation-delay-100">
              Priyanshu Kumar
            </h1>

            {/* Animated Role Text */}
            <div className="mb-3 sm:mb-4 animate-slideInLeft animation-delay-200 flex justify-center lg:justify-start">
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-white">
                {displayText}
                <span className="text-violet-400 animate-blink">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-5 sm:mb-7 max-w-lg mx-auto lg:mx-0 animate-slideInLeft animation-delay-300">
              Turning complex problems into elegant digital solutions. Specializing in full-stack development with modern technologies — let's bring your ideas to life with cutting-edge web applications.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-7 max-w-md mx-auto lg:mx-0 animate-slideInLeft animation-delay-400">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-400"
                >
                  <FaCheckCircle className="text-violet-400/80 text-xs sm:text-sm flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-7 animate-slideInLeft animation-delay-500 justify-center lg:justify-start">
              <button className="group relative px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white text-black rounded-xl font-semibold overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base">
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Consultation
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
                </span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 border border-white/15 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <FaDownload className="text-xs sm:text-sm" />
                Download Resume
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 animate-slideInLeft animation-delay-600 justify-center lg:justify-start">
              <span className="text-xs sm:text-sm text-gray-500 tracking-wide">
                Trusted by
              </span>
              <div className="flex gap-3 sm:gap-5 flex-wrap">
                {["Kumarsoft", "SolarioTech", "CodeHelp"].map((company, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors tracking-wide"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dot-grid {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.9) 1px,
            transparent 1px
          );
          background-size: 26px 26px;
        }

        .bg-vignette {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 55%,
            #000 100%
          );
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-slideInLeft {
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default Hero;