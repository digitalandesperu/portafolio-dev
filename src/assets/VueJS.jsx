// src/assets/VueJS.jsx
const VueJS = ({ 
  width = 24, 
  height, 
  className = "",
  primaryColor = "#4FC08D",
  secondaryColor = "#35495E"
}) => {
  const aspectRatio = 256 / 221;
  const calculatedHeight = height || width / aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={calculatedHeight}
      viewBox="0 0 256 221"
      className={className}
      role="img"
      aria-label="Vue.js Logo"
    >
      <path fill={primaryColor} d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" />
      <path fill={secondaryColor} d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" />
      <path fill={primaryColor} d="m50.56 0 77.44 132.48L204.8 0h-47.36L128 51.2 97.92 0H50.56Z" />
    </svg>
  );
};

export default VueJS;
