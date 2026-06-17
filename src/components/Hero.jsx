import { useState, useEffect, useRef } from "react";
// import profile from "../assets/profile.jpeg";
import profile from "../assets/p2.png";
import { FaArrowRight, FaCheckCircle, FaDownload, FaPlay } from "react-icons/fa";

const Hero = () => {
  const roles = [
    "Fullstack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Tech Entrepreneur",
    "Freelancer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // 3D tilt state
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 }); // -1..1 across whole section

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

  // 3D cursor-tilt handler for the profile card (strong, snappy response)
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = Math.min(Math.max(x / rect.width, 0), 1);
    const py = Math.min(Math.max(y / rect.height, 0), 1);

    const maxTilt = 24; // stronger tilt so it's unmistakable
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

  // Section-wide cursor tracking -> subtle parallax drift on background
  // elements and the right-column content, so the 3D feel isn't confined
  // to just the card.
  const handleSectionMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    setParallax({ x: (px - 0.5) * 2, y: (py - 0.5) * 2 }); // -1..1
  };

  // Download Resume Handler
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Fullstack Cv.pdf";
    link.download = "Priyanshu_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats data
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
  ];

  const features = [
    "24/7 Support",
    "Quality Assurance",
    "Fast Delivery",
    "Modern Tech Stack",
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Dotted background pattern — drifts slightly opposite the cursor for depth */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-[0.18] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${parallax.x * -10}px, ${parallax.y * -10}px)`,
        }}
      />

      {/* Radial vignette to fade dots toward the edges */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* Ambient glow orbs — drift with the cursor for a parallax depth cue */}
      <div
        className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-[120px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${parallax.x * 30}px, ${parallax.y * 30}px)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-violet-700/15 rounded-full blur-[120px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${parallax.x * -30}px, ${parallax.y * -30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - 3D Profile Card */}
          <div className="order-2 lg:order-1 flex flex-col items-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative group [perspective:900px] w-full max-w-md"
            >
              {/* Animated gradient border glow, follows cursor */}
              <div
                className="absolute -inset-px rounded-[28px] opacity-60 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(167,139,250,0.55), rgba(99,102,241,0.25) 40%, transparent 70%)`,
                  filter: "blur(18px)",
                }}
              />

              {/* The tilting card itself — no transition on transform while
                  hovering so it tracks the cursor with zero lag; transition
                  only kicks in on mouse-leave to ease back to flat. */}
              <div
                className={`relative bg-[#0E0E11] border border-white/10 rounded-[26px] p-3 shadow-2xl [transform-style:preserve-3d] ${
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
                {/* Glare overlay that tracks the cursor */}
                <div
                  className="absolute inset-0 rounded-[26px] pointer-events-none mix-blend-overlay transition-opacity duration-200"
                  style={{
                    opacity: isHovering ? 0.5 : 0,
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.35), transparent 55%)`,
                  }}
                />

                <img
                  src={profile}
                  alt="Priyanshu Kumar Singh"
                  className="w-full rounded-2xl object-cover select-none"
                  style={{ transform: "translateZ(25px)" }}
                  draggable={false}
                />

                {/* Online Status Badge */}
                <div
                  className="absolute bottom-6 right-6 bg-[#111114]/90 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 shadow-lg"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-gray-200 tracking-wide">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-10 flex justify-center gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-semibold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 animate-slideInLeft backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-[1.05] animate-slideInLeft animation-delay-100">
              <span className="text-white">Priyanshu Kumar</span>
              <br />
             
            </h1>

            {/* Animated Role Text */}
            <div className="mb-6 animate-slideInLeft animation-delay-200">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl">
                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                <span className="text-gray-500 font-mono text-sm">I'm a</span>
                <h2 className="text-xl sm:text-2xl font-semibold text-white font-mono">
                  {displayText}
                  <span className="text-violet-400 animate-blink">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg animate-slideInLeft animation-delay-300">
              Turning complex problems into elegant digital solutions.
              Specializing in full-stack development with modern
              technologies — let's bring your ideas to life with
              cutting-edge web applications.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-9 max-w-md animate-slideInLeft animation-delay-400">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <FaCheckCircle className="text-violet-400/80 text-xs flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-9 animate-slideInLeft animation-delay-500">
              <button className="group relative px-7 py-3.5 bg-white text-black rounded-xl font-semibold overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98]">
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Consultation
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-7 py-3.5 border border-white/15 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </button>

             
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 animate-slideInLeft animation-delay-600">
              <span className="text-xs text-gray-500 tracking-wide">
                Trusted by
              </span>
              <div className="flex gap-5">
                {["Kumarsoft", "Solario Tech", "CodeHelp"].map((company, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-gray-600 hover:text-gray-300 transition-colors tracking-wide"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Styles */}
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-slideInLeft {
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
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
