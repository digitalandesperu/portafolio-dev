// src/components/ProjectsSection.jsx
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  Rocket,
  Shield,
  MapPin,
  Activity,
  Lock,
  Camera,
  ShoppingBag,
  Utensils,
  Building2,
  Monitor,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocalizedData } from "../hooks/useLocalizedData";
import projectsData from "../data/projects.json";

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Lock,
  Shield,
  Activity,
  Camera,
  MapPin,
  ShoppingBag,
  Utensils,
  Building2,
  Monitor,
};

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = useLocalizedData(projectsData);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-24 px-4 md:px-8"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/5 dark:bg-violet-400/10 rounded-full blur-3xl" />
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
            <Rocket className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">
              {t("projects.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
            {t("projects.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  {/* Badge Featured */}
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white dark:border-slate-800 text-white text-xs font-bold shadow-lg">
                        ⭐ {t("projects.featured")}
                      </span>
                    </div>
                  )}

                  {/* Gradiente animado de fondo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Contenido */}
                  <div className="relative p-8 overflow-hidden rounded-2xl">
                    {/* Header con icono */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-exo mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-600 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Métricas */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 border border-slate-200 dark:border-slate-600"
                        >
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                            {metric.label}
                          </p>
                          <p className="text-lg font-bold text-slate-800 dark:text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack tecnológico */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-400 dark:text-cyan-300 px-3 py-1 rounded-full hover:scale-110 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          {t("projects.view_code")}
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("projects.view_demo")}
                        </a>
                      )}
                      {!project.links.github && !project.links.demo && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-sm">
                          <Code2 className="w-4 h-4" />
                          {t("projects.private")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decoración de esquina */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
