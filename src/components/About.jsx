import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
  FaDatabase,
  FaCloud,
  FaPlug,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFire,
  FaStripe,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
  SiFirebase,
  SiGooglesheets,
  SiTensorflow,
} from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import profile from "../assets/pr.jpeg";

const stats = [
  { value: "3+", label: "YEARS EXPERIENCE", icon: "💼" },
  { value: "10+", label: "LIVE PROJECTS", icon: "🚀" },
  { value: "React / Next", label: "FRONTEND", icon: "⚛️" },
  { value: "Node / TS", label: "BACKEND", icon: "🖥️" },
  { value: "MySQL / MongoDB", label: "DATABASE", icon: "🗄️" },
  { value: "Socket.IO", label: "REAL-TIME APPS", icon: "⚡" },
  { value: "JWT", label: "AUTHENTICATION", icon: "🔐" },
  { value: "AI / ML", label: "LEARNING", icon: "🧠" },
];

const expertise = [
  {
    title: "Front-End",
    icon: <FaCode className="text-indigo-400 text-3xl" />,
    description: "React, Next.js, Redux, Hooks, Context API, Tailwind CSS, and modern UI frameworks with responsive design.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Back-End",
    icon: <FaDatabase className="text-indigo-400 text-3xl" />,
    description: "Node.js, Express.js, REST APIs, GraphQL, JWT Authentication, and OAuth integrations.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-indigo-400 text-3xl" />,
    description: "MongoDB, PostgreSQL, MySQL optimized for scalability and high performance.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Deployment & DevOps",
    icon: <FaCloud className="text-indigo-400 text-3xl" />,
    description: "AWS, Vercel, Netlify, DigitalOcean, Docker, and CI/CD pipelines.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Integrations",
    icon: <FaPlug className="text-indigo-400 text-3xl" />,
    description: "Stripe, Firebase, Google Maps, CMS Platforms, CSV/PDF handling, Email Services and Third-party APIs.",
    color: "from-indigo-500 to-indigo-600 md:col-span-2"
  }
];

const skillsWithIcons = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "REST API", icon: <FaCode className="text-indigo-400" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-300" /> },
  { name: "OAuth", icon: <FaCode className="text-green-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "DigitalOcean", icon: <SiDigitalocean className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Stripe", icon: <FaStripe className="text-purple-400" /> },
  { name: "Google Maps", icon: <SiGooglesheets className="text-green-400" /> },
  { name: "AI/ML", icon: <SiTensorflow className="text-orange-400" /> },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black py-24 px-2 md:px-10 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with Gradient */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-4 mb-14 rounded-full shadow-lg shadow-indigo-500/30"></div>
        </motion.div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Social Icons Floating */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
              {[
                { Icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-600", label: "LinkedIn" },
                { Icon: FaGithub, href: "https://github.com", color: "hover:bg-gray-700", label: "GitHub" },
                { Icon: FaEnvelope, href: "mailto:kumarpriyanshu4036@gmail.com", color: "hover:bg-red-600", label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-black/60 backdrop-blur-xl border border-white/10 text-indigo-400 p-3 rounded-xl ${social.color} transition-all duration-300 hover:text-white shadow-lg shadow-black/50`}
                  aria-label={social.label}
                >
                  <social.Icon size={24} />
                </motion.a>
              ))}
            </div>

            {/* Image Card with 3D effect */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 z-10"></div>
              <div className="p-6">
                <img
                  src={profile}
                  alt="Priyanshu Kumar"
                  className="w-full max-w-md mx-auto rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-4 rounded-xl font-bold text-xl shadow-lg shadow-indigo-500/30">
                  Software Engineer
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/40 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group hover:shadow-indigo-500/10"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {item.value}
                </h3>
                <p className="font-semibold tracking-wide text-white/60 mt-2 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Description with Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -left-2 top-0 text-6xl text-indigo-500/20 md:-left-4">"</div>
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl shadow-black/50">
            <p className="text-white/80 text-lg leading-relaxed">
              Hi, I'm <span className="font-bold text-indigo-400">Priyanshu Kumar</span>, a passionate Full Stack
              Developer with <span className="font-semibold text-indigo-400">3+ years of experience</span> building scalable,
              secure, and high-performance web applications that solve real-world problems.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              I specialize in modern web technologies including <span className="font-semibold text-indigo-400">React.js, Next.js, Node.js,
              TypeScript, MongoDB, and cloud deployment solutions</span>. My expertise spans the entire development lifecycle,
              from concept to deployment.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              I've successfully delivered projects across various domains including <span className="font-semibold text-indigo-400">
              educational platforms, enterprise applications, client management systems, gaming solutions,
              and real-time applications</span>.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              My focus is on building <span className="font-semibold text-indigo-400">scalable applications with clean architecture,
              exceptional user experience, and production-ready performance</span>. I'm committed to writing clean,
              maintainable code and staying updated with the latest industry trends.
            </p>
          </div>
        </motion.div>

        {/* Technical Expertise with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <HiOutlineLightBulb className="text-indigo-400 text-4xl" />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group ${item.color.includes('md:col-span-2') ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl mb-3 text-white">
                      {item.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Marquee with Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">
            Technologies & Tools
          </h3>

          <div className="relative overflow-hidden border border-white/10 py-6 bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50">
            <div className="flex w-max animate-marquee">
              {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.15, backgroundColor: "#4f46e5" }}
                  className="mx-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full font-medium whitespace-nowrap cursor-default transition-all duration-300 border border-white/10 shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <FaDownload />
            Let's Work Together
          </a>
        </motion.div>
      </div>

      <style jsx>{`
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;