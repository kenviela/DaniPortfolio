import "./WaveDivider.scss";
const WaveDivider = ({ flip, color = "#35a29f" }) => {
  return (
    <div className={`wave ${flip ? "flip" : ""}`}>
      <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="40%" stopColor="#071952" />
            <stop offset="60%" stopColor="#0b666a" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C300,150 600,0 900,80 C1200,150 1440,50 1440,50 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
