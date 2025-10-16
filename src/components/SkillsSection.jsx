// src/components/SkillsSection.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Server, Code2, Cloud } from "lucide-react";

// Importar logos SVG
import AWS from "@/assets/AWS";
import NodeJS from "@/assets/NodeJS";
import ReactLogo from "@/assets/ReactLogo";
import PostgreSQL from "@/assets/PostgreSQL";
import Docker from "@/assets/Docker";
import TypeScript from "@/assets/TypeScript";
import MongoDB from "@/assets/MongoDB";
import Redis from "@/assets/Redis";
import Express from "@/assets/Express";
import NestJS from "@/assets/NestJS";
import Git from "@/assets/Git";
import VueJS from "@/assets/VueJS";
import TailwindCSS from "@/assets/TailwindCSS";
import JavaScript from "@/assets/JavaScript";
import Nginx from "@/assets/Nginx";
import Linux from "@/assets/Linux";
import Sequelize from "@/assets/Sequelize";
import Prisma from "@/assets/Prisma";
import GraphQL from "@/assets/GraphQL";
import RestAPI from "@/assets/RestAPI";
import WebSockets from "@/assets/WebSockets";
import HTML5 from "@/assets/HTML5";
import CSS3 from "@/assets/CSS3";
import Leaflet from "@/assets/Leaflet";
import Redux from "@/assets/Redux";
import Vite from "@/assets/Vite";
import FramerMotion from "@/assets/FramerMotion";
import PM2 from "@/assets/PM2";
import GitHubActions from "@/assets/GitHubActions";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.groups.backend"),
      icon: Server,
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        {
          name: "Node.JS",
          icon: (
            <NodeJS
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Express.JS",
          icon: (
            <Express
              width={75}
              color="#000000"
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "NestJS",
          icon: (
            <NestJS
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <TypeScript
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <PostgreSQL
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <MongoDB
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Redis",
          icon: (
            <Redis
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Sequelize",
          icon: (
            <Sequelize
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Prisma",
          icon: (
            <Prisma
              width={75}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "REST APIs",
          icon: (
            <RestAPI
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "GraphQL",
          icon: (
            <GraphQL
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "WebSockets",
          icon: (
            <WebSockets
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
      ],
    },
    {
      title: t("skills.groups.frontend"),
      icon: Code2,
      gradient: "from-violet-500 to-purple-600",
      skills: [
        {
          name: "React",
          icon: (
            <ReactLogo
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Vue.js",
          icon: (
            <VueJS
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <JavaScript
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <TailwindCSS
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "HTML5",
          icon: (
            <HTML5
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "CSS3",
          icon: (
            <CSS3
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Leaflet",
          icon: (
            <Leaflet
              width={80}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Redux",
          icon: (
            <Redux
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Vite",
          icon: (
            <Vite
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Framer Motion",
          icon: (
            <FramerMotion
              width={60}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
      ],
    },
    {
      title: t("skills.groups.devops"),
      icon: Cloud,
      gradient: "from-pink-500 to-rose-600",
      skills: [
        {
          name: "Docker",
          icon: (
            <Docker
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Nginx",
          icon: (
            <Nginx
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "PM2",
          icon: (
            <PM2
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Linux",
          icon: (
            <Linux
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "AWS",
          icon: (
            <AWS
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "Git",
          icon: (
            <Git
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
        {
          name: "GitHub",
          icon: (
            <GitHubActions
              width={50}
              className="group-hover:opacity-80 transition-opacity"
            />
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(167,139,250,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl w-full">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 mb-4">
            <Server className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">
              {t("skills.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
            {t("skills.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
            {t("skills.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de categorías - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="group relative"
            >
              {/* Card con glassmorphism */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradiente animado de fondo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Header de categoría */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-exo text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Grid de skills */}
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center justify-around gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all cursor-default group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform flex items-center justify-center">
                        {typeof skill.icon === "string"
                          ? skill.icon
                          : skill.icon}
                      </div>
                      <span className="font-semibold text-slate-800 text-xs text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decoración de fondo */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA o nota adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            💡 Siempre aprendiendo y explorando nuevas tecnologías
          </p>
        </motion.div>
      </div>
    </section>
  );
}
