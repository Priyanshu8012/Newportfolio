// src/components/Projects.jsx

import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Sparkles,
  Star,
  Eye,
  ArrowUpRight,
  Zap,
  Search,
} from "lucide-react";

// GitHub icon as a custom SVG component (since lucide-react might have naming issues)
const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.634 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.544 1.364.201 2.381.098 2.634.64.698 1.03 1.591 1.03 2.682 0 3.833-2.335 4.69-4.555 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .266.18.576.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const projects = [
  {
    title: "QuestBoard",
    description:
      "Task management and productivity platform for teams to organize projects, manage workflows, track tasks and improve collaboration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://questboardapp.com",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    accent: "from-indigo-400 to-violet-400",
    featured: true,
  },
  {
    title: "Silent Knight",
    description:
      "Modern scalable web application with secure architecture, responsive UI and optimized performance.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://www.silentknightsystems.com/",
    github: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    accent: "from-sky-400 to-cyan-400",
    featured: false,
  },
  {
    title: "Wowpio",
    description:
      "Business networking and professional connection platform with modern UI and networking features.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://wowpio.com",
    github: "#",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    accent: "from-emerald-400 to-teal-400",
    featured: false,
  },
  {
    title: "VPS E-Learning Academy",
    description:
      "Online learning platform with courses, PDFs, assignments, notes and admin dashboard.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://vidyarjanscienceacademy.in/",
    github: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    accent: "from-orange-400 to-red-400",
    featured: false,
  },
  {
    title: "GPSM Networking",
    description:
      "Professional networking platform focused on community building and member management.",
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://gpsm.co.in",
    github: "#",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    accent: "from-pink-400 to-rose-400",
    featured: false,
  },
  {
    title: "Ludo World",
    description:
      "Real-time multiplayer gaming platform with wallet system and Socket.IO integration.",
    tech: ["React", "Socket.IO", "Node.js"],
    live: "#",
    github: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsmrASuz9zBtjP9QprW7_Wu92NcDb_F-ncg&s",
    accent: "from-violet-400 to-fuchsia-400",
    featured: false,
  },
  {
    title: "JSP Holidays",
    description:
      "Travel and tourism website with package management and booking inquiry features.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://jspholidays.com",
    github: "#",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    accent: "from-amber-400 to-orange-400",
    featured: false,
  },
  {
    title: "Cavalier India Pune",
    description:
      "Educational institute website with dynamic content and responsive design.",
    tech: ["React", "Tailwind CSS"],
    live: "https://cavalierindiapune.in",
    github: "#",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    accent: "from-sky-400 to-indigo-400",
    featured: false,
  },
];

// Project card with cursor-tracked 3D tilt, consistent with the Hero/Testimonials cards
const ProjectCard = ({ project, index, isVisible }) => {
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
    const maxTilt = 10;
    setTilt({ x: (0.5 - py) * maxTilt * 2, y: (px - 0.5) * maxTilt * 2 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        className="relative [perspective:1100px]"
      >
        {/* Cursor-following glow, tinted with the project's accent */}
        <div
          className={`absolute -inset-2 rounded-[24px] bg-gradient-to-r ${project.accent} pointer-events-none transition-opacity duration-300`}
          style={{ opacity: isHovering ? 0.35 : 0, filter: "blur(22px)" }}
        />

        {/* Card Container — tilts toward the cursor */}
        <div
          className={`relative bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl [transform-style:preserve-3d] ${
            isHovering ? "" : "transition-transform duration-500 ease-out"
          }`}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
              isHovering ? 1.02 : 1
            })`,
          }}
        >
          {/* Glare overlay tracking cursor */}
          <div
            className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay transition-opacity duration-200"
            style={{
              opacity: isHovering ? 0.35 : 0,
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.3), transparent 55%)`,
            }}
          />

          {/* Image Section */}
          <div className="relative h-52 overflow-hidden" style={{ transform: "translateZ(0px)" }}>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-[#0E0E11]/10 to-transparent z-10`}
            />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isHovering ? "scale(1.08)" : "scale(1)" }}
            />

            {/* Overlay links on hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ opacity: isHovering ? 1 : 0 }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-black p-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
                style={{ transform: "translateZ(40px)" }}
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-black p-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
                style={{ transform: "translateZ(40px)" }}
              >
                <GitHubIcon size={18} />
              </a>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div
                className="absolute top-4 left-4 z-20 bg-[#0B0B0D]/90 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm"
                style={{ transform: "translateZ(30px)" }}
              >
                <Star size={11} className="fill-amber-300" />
                Featured
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="p-6" style={{ transform: "translateZ(15px)" }}>
            <div className="flex items-start justify-between mb-3 gap-2">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <div
                className={`w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-300 flex items-center justify-center`}
                style={{ opacity: isHovering ? 1 : 0 }}
              >
                <ArrowUpRight size={14} className="text-black" />
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-gray-300 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-gray-500 rounded-md text-xs font-medium">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Eye size={12} />
                <span>1.2k views</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Star size={12} />
                <span>89 likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState({});
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRef = useRef(null);

  const allTech = [...new Set(projects.flatMap((p) => p.tech))];

  const filteredProjects = projects.filter((project) => {
    if (filter !== "all" && !project.tech.includes(filter)) return false;
    if (
      searchTerm &&
      !project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleProjects((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = section.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filter, searchTerm]);

  const handleClearFilters = () => {
    setFilter("all");
    setSearchTerm("");
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-black"
    >
      {/* Dotted background, consistent with Hero/Testimonials */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-violet-700/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full mb-5">
            <Sparkles size={15} className="text-violet-400" />
            <span className="text-violet-300 font-medium tracking-wider uppercase text-xs">
              My Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Featured Projects
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-base sm:text-lg">
            A collection of real-world projects built using React, Node.js, Express,
            MySQL, MongoDB, Socket.IO and modern web technologies.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/20"
                  : "bg-white/[0.04] text-gray-400 hover:text-gray-200 border border-white/10 hover:border-white/20"
              }`}
            >
              All Projects
            </button>
            {allTech.slice(0, 6).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/20"
                    : "bg-white/[0.04] text-gray-400 hover:text-gray-200 border border-white/10 hover:border-white/20"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:w-64 px-4 py-2.5 pl-10 rounded-full bg-white/[0.04] border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-violet-400/40 focus:ring-2 focus:ring-violet-400/15 outline-none transition"
            />
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <span className="text-sm text-gray-500">
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.title} className="project-card" data-index={index}>
                <ProjectCard
                  project={project}
                  index={index}
                  isVisible={visibleProjects[index]}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex p-6 bg-white/[0.04] border border-white/10 rounded-full mb-4">
              <Zap size={36} className="text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-4 text-violet-400 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 hover:border-violet-400/30 text-gray-300 hover:text-violet-300 px-8 py-3 rounded-full font-semibold transition-all duration-300">
            <span>View All Projects</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
          </button>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}