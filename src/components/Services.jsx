import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowUpRight, Zap } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    icon: <FaCode size={70} />,
    description:
      "Modern, responsive and high-performance web applications using React, Next.js and Tailwind CSS.",
    gradient: "from-indigo-400 to-purple-400",
    bgGradient: "from-indigo-500/20 to-purple-500/20",
    iconGradient: "from-indigo-400 to-purple-400",
  },
  {
    id: "02",
    title: "API Development",
    icon: <FaServer size={70} />,
    description:
      "Secure REST APIs, authentication systems, payment integrations and scalable backend architecture.",
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-400 to-cyan-400",
  },
  {
    id: "03",
    title: "Mobile Development",
    icon: <FaMobileAlt size={70} />,
    description:
      "Cross-platform mobile applications using React Native with modern UI and smooth performance.",
    gradient: "from-emerald-400 to-teal-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-400 to-teal-400",
  },
  {
    id: "04",
    title: "Database Design",
    icon: <FaDatabase size={70} />,
    description:
      "MongoDB, MySQL and PostgreSQL database design optimized for speed and scalability.",
    gradient: "from-orange-400 to-red-400",
    bgGradient: "from-orange-500/20 to-red-500/20",
    iconGradient: "from-orange-400 to-red-400",
  },
  {
    id: "05",
    title: "Cloud Deployment",
    icon: <FaCloud size={70} />,
    description:
      "AWS, Vercel, Netlify and DigitalOcean deployment with CI/CD and monitoring.",
    gradient: "from-pink-400 to-rose-400",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    iconGradient: "from-pink-400 to-rose-400",
  },
  {
    id: "06",
    title: "AI Integration",
    icon: <FaRobot size={70} />,
    description:
      "AI-powered applications, chatbots, automation tools and OpenAI integrations.",
    gradient: "from-violet-400 to-fuchsia-400",
    bgGradient: "from-violet-500/20 to-fuchsia-500/20",
    iconGradient: "from-violet-400 to-fuchsia-400",
  },
];

const ServiceCard = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Animated background glow */}
      <div
        className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} rounded-[40px] blur-2xl opacity-0 group-hover:opacity-40 transition duration-700`}
        style={{
          transform: isHovered ? 'scale(1.05) rotateX(5deg)' : 'scale(1) rotateX(0deg)',
          transformStyle: 'preserve-3d',
        }}
      ></div>

      {/* Card Container with 3D perspective */}
      <div 
        className="relative bg-black/40 backdrop-blur-xl rounded-[35px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transition-all duration-500 group-hover:-translate-y-3"
        style={{
          transform: isHovered ? 'perspective(1000px) rotateX(3deg) rotateY(3deg) translateZ(20px)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Gradient top border */}
        <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>

        {/* Card Content */}
        <div className="p-8">
          {/* Icon Section with 3D Animation */}
          <div className="relative mb-8">
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-2xl opacity-0 group-hover:opacity-50 transition duration-500`}
            ></div>
            <div
              className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.iconGradient} text-white shadow-xl shadow-indigo-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              style={{
                transform: isHovered ? 'scale(1.15) rotate(8deg) translateZ(30px)' : 'scale(1) rotate(0deg) translateZ(0px)',
                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {service.icon}
            </div>
          </div>

          {/* Title and ID */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition">
              {service.title}
            </h3>
            <span
              className={`text-4xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition duration-300`}
            >
              {service.id}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>

          {/* Learn More Link */}
          <div
            className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent cursor-pointer group-hover:gap-3 transition-all duration-300`}
          >
            Learn More
            <ArrowUpRight
              size={16}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
            />
          </div>
        </div>

        {/* Hover overlay effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none`}
        ></div>
      </div>
    </div>
  );
};

const Services = () => {
  const [visibleServices, setVisibleServices] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleServices((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-black"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 mb-4">
            <Zap size={16} className="text-indigo-400" />
            <span className="text-indigo-300 font-semibold tracking-wider uppercase text-sm">
              What I Offer
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-4 mb-6 rounded-full shadow-lg shadow-indigo-500/30"></div>
            </div>
            <p className="text-white/50 max-w-md text-lg">
              Transforming ideas into exceptional digital experiences with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              data-index={index}
            >
              <ServiceCard service={service} index={index} isVisible={visibleServices[index]} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-xl rounded-full p-1 pr-4 border border-white/10 shadow-2xl shadow-black/50">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2.5 text-white shadow-lg shadow-indigo-500/30">
              <Sparkles size={18} />
            </div>
            <span className="text-white/80 font-medium">Need a custom solution?</span>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-105">
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
          animation: fade-in 0.6s ease-out forwards;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
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
};

export default Services;