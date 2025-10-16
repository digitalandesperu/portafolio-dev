// src/components/ExperienceSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  TrendingDown,
  TrendingUp,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocalizedData } from "../hooks/useLocalizedData";
import experiencesData from "../data/experiences.json";

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Briefcase,
  TrendingDown,
  TrendingUp,
  Zap,
  CheckCircle,
};

export default function ExperienceSection() {
  const { t } = useTranslation();
  const experiences = useLocalizedData(experiencesData);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 md:px-8"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-400/5 dark:bg-violet-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header épico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 mb-4">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">
              {t("experience.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
            {t("experience.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
            {t("experience.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Línea central animada */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 to-violet-600 origin-top"
            />
          </div>

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Desktop: Alternancia izquierda/derecha */}
                <div
                  className={`flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Nodo central con icono */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="relative"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      {exp.current && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-400 border-2 border-white dark:border-slate-800 animate-pulse" />
                      )}
                    </motion.div>
                  </div>

                  {/* Espaciador para móvil */}
                  <div className="h-4 md:hidden" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                      {/* Gradiente animado de fondo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Contenido */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white font-exo flex-1">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-500 px-2 py-1 rounded-full">
                                {t("experience.current")}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-1">
                            {exp.company}
                          </h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                            📅 {exp.date}
                          </p>
                        </div>

                        {/* Descripción */}
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Logros/Métricas */}
                        {exp.achievements && (
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {exp.achievements.map((achievement, i) => {
                              const Icon = iconMap[achievement.icon];
                              return (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2"
                                >
                                  <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                      {achievement.text}
                                    </p>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                                      {achievement.value}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Stack tecnológico */}
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-400 dark:text-cyan-300 px-3 py-1 rounded-full hover:scale-110 transition-transform cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Decoración de esquina */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
