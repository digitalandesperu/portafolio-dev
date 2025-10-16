// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://getform.io/f/4e901050-5c86-4d26-ba35-9a32751501b1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert(t("contact.form_success"));
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(t("contact.form_error"));
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(t("contact.form_error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">{t("contact.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-exo text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
            {t("contact.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Grid de contenido */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Card de contacto directo */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-exo mb-6">
                {t("contact.info_title")}
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:epajares@me.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("contact.email_label")}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                      epajares@me.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/gunminiho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("contact.github_label")}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                      @gunminiho
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/gunminiho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("contact.linkedin_label")}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                      Erick Pajares
                    </p>
                  </div>
                </a>

                {/* Ubicación */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t("contact.location_label")}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {t("contact.location_value")} 🇵🇪
                    </p>
                  </div>
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {t("contact.availability_title")}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t("contact.availability_subtitle")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-exo mb-6">
                {t("contact.form_title")}
              </h3>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("contact.form_name")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder={t("contact.form_name_placeholder")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-2 ${
                        focusedField === "name"
                          ? "border-cyan-400 dark:border-cyan-500"
                          : "border-slate-200 dark:border-slate-600"
                      } outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("contact.form_email")}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder={t("contact.form_email_placeholder")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-2 ${
                        focusedField === "email"
                          ? "border-cyan-400 dark:border-cyan-500"
                          : "border-slate-200 dark:border-slate-600"
                      } outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400`}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("contact.form_phone")} <span className="text-slate-400 font-normal">{t("contact.form_phone_optional")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder={t("contact.form_phone_placeholder")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-2 ${
                        focusedField === "phone"
                          ? "border-cyan-400 dark:border-cyan-500"
                          : "border-slate-200 dark:border-slate-600"
                      } outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400`}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("contact.form_message")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      placeholder={t("contact.form_message_placeholder")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-2 ${
                        focusedField === "message"
                          ? "border-cyan-400 dark:border-cyan-500"
                          : "border-slate-200 dark:border-slate-600"
                      } outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400 resize-none`}
                    />
                  </div>
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg transition-all ${
                    isSubmitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("contact.form_submitting")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contact.form_submit")}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
