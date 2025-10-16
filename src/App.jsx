import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useTheme from "@/hooks/useTheme";
import "@/i18n";
import { useTranslation } from "react-i18next";
import { Menu, X, Code2 } from "lucide-react";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mainElement, setMainElement] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    // Esperar a que el elemento main esté montado
    const main = document.querySelector("main");
    if (main) {
      setMainElement(main);
    }
  }, []);

  useEffect(() => {
    if (!mainElement) return;

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      // Encontrar la sección más visible en el viewport
      let maxVisibility = 0;
      let mostVisibleSection = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calcular qué porcentaje de la sección está visible
          const visibleHeight =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibility = visibleHeight / viewportHeight;

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = section;
          }
        }
      });

      if (maxVisibility > 0.3) {
        // Al menos 30% visible para cambiar
        setActiveSection(mostVisibleSection);
      }
    };

    // Ejecutar inmediatamente y luego en cada scroll
    handleScroll();
    mainElement.addEventListener("scroll", handleScroll);

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, [mainElement]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const navLinks = [
    { id: "hero", label: t("nav.hero") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Actualizar inmediatamente el estado activo
      setActiveSection(id);

      // Scroll suave a la sección
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Cerrar menú móvil
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200">
      {/* Navbar mejorado */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 shadow-lg border-b border-slate-200 dark:border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="flex items-center gap-2 font-exo text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600 hover:scale-105 transition-transform"
          >
            <Code2 className="text-cyan-400" size={28} />
            EP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-105"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle - hidden but logic preserved */}
            <button
              onClick={toggleTheme}
              className="hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-white transition-colors"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="hero" className="snap-start">
          <HeroSection />
        </section>
        <section id="about" className="snap-start">
          <AboutSection />
        </section>
        <section id="skills" className="snap-start">
          <SkillsSection />
        </section>
        <section id="experience" className="snap-start">
          <ExperienceSection />
        </section>
        <section id="projects" className="snap-start">
          <ProjectsSection />
        </section>
        <section id="contact" className="snap-start">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
