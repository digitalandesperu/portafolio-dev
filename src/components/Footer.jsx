// src/components/Footer.jsx
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/gunminiho",
      icon: Github,
      color: "hover:text-slate-600 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gunminiho/",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      href: "mailto:gunminiho@gmail.com",
      icon: Mail,
      color: "hover:text-cyan-400",
    },
  ];

  const quickLinks = [
    { name: t("nav.hero"), href: "#hero" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-violet-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600 mb-3">
                Erick Pajares
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
                {t("footer.tagline")}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                <Code2 className="w-4 h-4" />
                <span>{t("footer.tagline_highlight")}</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 font-exo">
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 font-exo">
              {t("footer.social")}
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-slate-600 dark:text-slate-400 ${social.color} transition-colors group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span>© {currentYear} Erick Pajares.</span>
            <span className="hidden md:inline">{t("footer.copyright")}</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold">{t("footer.tech")}</span>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white font-semibold text-sm transition-all shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden md:inline">{t("footer.scroll_top")}</span>
          </motion.button>
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            🚀 {t("footer.availability")} • 🌎 {t("footer.location")}
          </p>
        </div>
      </div>
    </footer>
  );
}
