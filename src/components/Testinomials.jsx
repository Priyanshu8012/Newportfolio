// src/components/Testimonials.jsx

import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Absolutely outstanding work! The backend architecture they built for us is incredibly robust and scalable. Their attention to detail and problem-solving skills are top-notch. I would definitely hire them again for future projects.",
    project: "E-commerce Platform",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager at InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "One of the most talented developers I've worked with. They delivered our React Native mobile app ahead of schedule and exceeded all expectations. The code quality is exceptional and they're great communicators.",
    project: "Mobile Banking App",
    date: "January 2025",
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Founder at CreativeHub",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    text: "Working with them was a game-changer for our startup. They transformed our rough ideas into a beautiful, functional web application. Their expertise in React and Node.js is impressive. Highly recommended!",
    project: "Creative Portfolio Platform",
    date: "December 2024",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Lead Developer at CloudScale",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Excellent problem solver with deep technical knowledge. They helped us optimize our database queries and reduce API response time by 60%. A true professional who delivers quality work consistently.",
    project: "API Optimization Project",
    date: "October 2024",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    position: "Marketing Director at BrandBoost",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 4,
    text: "Great experience overall! They built a stunning landing page that converted 40% better than our previous design. Very responsive and open to feedback throughout the process.",
    project: "Marketing Landing Page",
    date: "August 2024",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed", icon: <Briefcase size={22} /> },
  { value: "30+", label: "Happy Clients", icon: <User size={22} /> },
  { value: "98%", label: "Client Satisfaction", icon: <Star size={22} /> },
  { value: "4.9", label: "Average Rating", icon: <MessageCircle size={22} /> },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={17}
        className={`${
          i < rating ? "fill-violet-400 text-violet-400" : "fill-white/10 text-white/10"
        } transition-transform duration-300`}
      />
    ))}
  </div>
);

// Testimonial card with cursor-tracked 3D tilt, matching the Hero/Sidebar effect
const TestimonialCard = ({ testimonial, isActive }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    const maxTilt = 8; // gentler than the hero card — this one holds a lot of text
    setTilt({ x: (0.5 - py) * maxTilt * 2, y: (px - 0.5) * maxTilt * 2 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`transition-all duration-500 ${
        isActive
          ? "opacity-100 scale-100 relative"
          : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        className="relative [perspective:1100px]"
      >
        {/* Cursor-following glow border */}
        <div
          className="absolute -inset-px rounded-[28px] opacity-50 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovering ? 0.8 : 0.3,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(167,139,250,0.45), rgba(99,102,241,0.18) 40%, transparent 70%)`,
            filter: "blur(16px)",
          }}
        />

        <div
          className={`relative bg-[#0E0E11] border border-white/10 rounded-[26px] p-8 sm:p-10 shadow-2xl [transform-style:preserve-3d] ${
            isHovering ? "" : "transition-transform duration-500 ease-out"
          }`}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Glare overlay tracking cursor */}
          <div
            className="absolute inset-0 rounded-[26px] pointer-events-none mix-blend-overlay transition-opacity duration-200"
            style={{
              opacity: isHovering ? 0.4 : 0,
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.3), transparent 55%)`,
            }}
          />

          {/* Quote watermark */}
          <Quote
            size={72}
            className="absolute top-6 right-6 text-white/[0.04]"
            style={{ transform: "translateZ(5px)" }}
          />

          <div style={{ transform: "translateZ(20px)" }}>
            <div className="mb-6">
              <StarRating rating={testimonial.rating} />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
              "{testimonial.text}"
            </p>

            <div className="inline-block bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full mb-7 tracking-wide">
              {testimonial.project}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-md opacity-50" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base sm:text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={13} />
                  {testimonial.position}
                </p>
                <p className="text-gray-600 text-xs mt-1">{testimonial.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  useEffect(() => () => clearTimeout(resumeTimeoutRef.current), []);

  // Intersection Observer for stat-card reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = section.querySelectorAll(".stat-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-black"
    >
      {/* Dotted background, consistent with Hero */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-700/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full mb-5">
            <Sparkles size={15} className="text-violet-400" />
            <span className="text-violet-300 font-medium tracking-wider uppercase text-xs">
              Client Love
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Testimonials
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-base sm:text-lg">
            What clients say about my work. I take pride in delivering exceptional
            results.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-5 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-violet-400/30 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1"
              data-index={index}
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 100}ms`,
              }}
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 rounded-2xl text-violet-300 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[480px] sm:min-h-[440px] md:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 hover:text-violet-300 hover:border-violet-400/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-7 h-2 bg-gradient-to-r from-indigo-400 to-violet-400"
                      : "w-2 h-2 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 hover:text-violet-300 hover:border-violet-400/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Decorative Quote */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <Quote size={13} />
            <span>Join 30+ satisfied clients who trust my work</span>
            <Quote size={13} className="rotate-180" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dot-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px);
          background-size: 26px 26px;
        }

        .bg-vignette {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 55%,
            #000 100%
          );
        }

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
      `}</style>
    </section>
  );
};

export default Testimonials;