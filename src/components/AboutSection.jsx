// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code, Rocket, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function CountUpAnimation({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Code,
      value: 3,
      suffix: "+",
      label: t("about.stats.experience"),
      color: "text-cyan-400",
    },
    {
      icon: Rocket,
      value: 15,
      suffix: "+",
      label: t("about.stats.projects"),
      color: "text-violet-400",
    },
    {
      icon: Users,
      value: 10,
      suffix: "+",
      label: t("about.stats.clients"),
      color: "text-blue-400",
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: t("about.stats.success"),
      color: "text-pink-400",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0f172a] dark:to-slate-900"
    >
      <div className="max-w-6xl w-full">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen con efectos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative">
              <img
                src="/images/erick-photo.webp"
                alt="Erick Pajares"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover border-4 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay con efecto glassmorphism */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed text-justify text-slate-700 dark:text-slate-300">
                {t("about.description")}
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["Node.js", "React", "PostgreSQL", "Docker", "Redis", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Estadísticas animadas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 text-center space-y-3">
                <stat.icon className={`w-10 h-10 mx-auto ${stat.color}`} />
                <div className={`text-4xl font-bold font-exo ${stat.color}`}>
                  <CountUpAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
