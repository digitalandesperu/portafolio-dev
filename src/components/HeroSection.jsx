// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import {
  Download,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  View
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Determinar el archivo CV según el idioma
  const cvFile = i18n.language === "en" 
    ? "/Erick_Pajares_US_Resume.pdf" 
    : "/CV_Erick_Pajares.pdf";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* Grid animado de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Círculos animados con parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse" />
        <div
          className="absolute w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-5xl"
      >
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-300">
            Open to work
          </span>
        </motion.div>

        {/* Título con efecto gradiente */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-exo mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 animate-pulse"
          >
            {t("hero.name")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-slate-300"
          >
            {t("hero.role")}
          </motion.span>
        </h1>

        {/* Subtítulo con efecto glassmorphism */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-300 max-w-3xl mx-auto mb-10 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Botones con hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-4 flex-wrap mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-semibold flex items-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{t("hero.cta_projects")}</span>
            <ArrowDown
              size={18}
              className="relative z-10 group-hover:animate-bounce"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={cvFile}
            download
            className="group px-8 py-4 rounded-xl font-semibold flex items-center gap-2 border-2 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            <span>{t("hero.cta_download_cv")}</span>
          </a>
          <a
            href="https://old.erickpajares.dev" target="_blank"
            className="group relative px-8 py-4 rounded-xl font-semibold flex items-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{t("hero.old_portfolio")}</span>
            <View
              size={18}
              className="relative z-10 group-hover:animate-bounce"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Social links con efectos hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/gunminiho",
              color: "hover:bg-purple-500",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/gunminiho/",
              color: "hover:bg-blue-500",
            },
            {
              icon: Mail,
              href: "mailto:gunminiho@gmail.com",
              color: "hover:bg-pink-500",
            },
          ].map(({ icon: Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-xl ${color}`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cyan-400"
          >
            <Terminal size={20} />
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
