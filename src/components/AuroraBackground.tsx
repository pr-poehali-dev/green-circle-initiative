import React from "react";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`min-h-screen bg-black relative overflow-hidden ${className}`}
    >
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />

        {/* Animated Aurora Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Moving Aurora Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-aurora-1" />
          <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-aurora-2" />
          <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-aurora-3" />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuroraBackground;
