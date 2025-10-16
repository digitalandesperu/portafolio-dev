// src/hooks/useLocalizedData.js
import { useTranslation } from "react-i18next";

/**
 * Hook personalizado para obtener datos localizados
 * @param {Object} data - Objeto con propiedades que pueden tener traducciones
 * @returns {Object} - Objeto con las traducciones aplicadas según el idioma actual
 */
export const useLocalizedData = (data) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const localizeValue = (value) => {
    // Si el valor es un objeto con propiedades 'es' y 'en', devolver el valor del idioma actual
    if (value && typeof value === "object" && (value.es || value.en)) {
      return value[currentLang] || value.es || value.en;
    }
    
    // Si es un array, localizar cada elemento
    if (Array.isArray(value)) {
      return value.map(item => localizeValue(item));
    }
    
    // Si es un objeto, localizar recursivamente
    if (value && typeof value === "object") {
      const localizedObj = {};
      for (const key in value) {
        localizedObj[key] = localizeValue(value[key]);
      }
      return localizedObj;
    }
    
    // Si no es ninguno de los anteriores, devolver el valor tal cual
    return value;
  };

  return localizeValue(data);
};
