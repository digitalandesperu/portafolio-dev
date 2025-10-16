// src/assets/TailwindCSS.jsx
const TailwindCSS = ({ 
  width = 24, 
  height, 
  className = "",
  color = "#06B6D4"
}) => {
  const aspectRatio = 256 / 154;
  const calculatedHeight = height || width / aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={calculatedHeight}
      viewBox="0 0 256 154"
      className={className}
      role="img"
      aria-label="Tailwind CSS Logo"
    >
      <defs>
        <linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%">
          <stop offset="0%" stopColor="#2298BD" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTailwindcssIcon0)"
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
      />
    </svg>
  );
};

export default TailwindCSS;
