import React from 'react';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes circuitWaveOne {
          0%, 100% {
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(255, 119, 0, 0));
          }
          15% {
            opacity: 0.02;
            filter: drop-shadow(0 0 1px rgba(255, 119, 0, 0.1));
          }
          50% {
            opacity: 0.14;
            filter: drop-shadow(0 0 4px rgba(255, 119, 0, 0.4)) drop-shadow(0 0 10px rgba(255, 119, 0, 0.2));
          }
          85% {
            opacity: 0.02;
            filter: drop-shadow(0 0 1px rgba(255, 119, 0, 0.1));
          }
        }

        @keyframes circuitWaveTwo {
          0%, 100% {
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(255, 119, 0, 0));
          }
          35% {
            opacity: 0.01;
            filter: drop-shadow(0 0 1px rgba(255, 119, 0, 0.1));
          }
          70% {
            opacity: 0.12;
            filter: drop-shadow(0 0 5px rgba(255, 119, 0, 0.4)) drop-shadow(0 0 12px rgba(255, 119, 0, 0.2));
          }
          90% {
            opacity: 0.02;
            filter: drop-shadow(0 0 1px rgba(255, 119, 0, 0.1));
          }
        }

        .animate-circuit-wave-1 {
          opacity: 0;
          animation: circuitWaveOne 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-circuit-wave-2 {
          opacity: 0;
          animation: circuitWaveTwo 8s ease-in-out infinite;
          animation-delay: 4.5s;
        }
      `}</style>

      {/* Primary Glowing Circuit Light Wave */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 animate-circuit-wave-1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="circuit-pattern-1"
            x="0"
            y="0"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* Circuit Traces in Orange Glow */}
            <path
              d="M 20,20 L 90,20 L 120,50 L 170,50 M 170,50 L 170,110 L 220,110"
              fill="none"
              stroke="#FF7700"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="4" fill="#FF7700" />
            <circle cx="220" cy="110" r="4" fill="#FFaa00" />

            <path
              d="M 15,140 L 65,140 L 90,165 L 90,210"
              fill="none"
              stroke="#FF7700"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="15" cy="140" r="4" fill="#FFaa00" />
            <circle cx="90" cy="210" r="4" fill="#FF7700" />

            <path
              d="M 220,15 L 180,15 L 155,40 L 130,40"
              fill="none"
              stroke="#FF7700"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="220" cy="15" r="4" fill="#FF7700" />

            <path
              d="M 120,120 L 145,145 L 195,145 L 220,170 L 220,220"
              fill="none"
              stroke="#FF7700"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="120" cy="120" r="4" fill="#FF7700" />
            <circle cx="220" cy="220" r="4" fill="#FFaa00" />

            {/* Microchip / IC nodes */}
            <rect x="100" y="100" width="36" height="36" rx="5" fill="none" stroke="#FF7700" strokeWidth="1.8" />
            <path d="M 100,108 L 88,108 M 100,118 L 88,118 M 100,128 L 88,128" stroke="#FF7700" strokeWidth="1.8" />
            <path d="M 136,108 L 148,108 M 136,118 L 148,118 M 136,128 L 148,128" stroke="#FF7700" strokeWidth="1.8" />
            <path d="M 108,100 L 108,88 M 118,100 L 118,88 M 128,100 L 128,88" stroke="#FF7700" strokeWidth="1.8" />
            <path d="M 108,136 L 108,148 M 118,136 L 118,148 M 128,136 L 128,148" stroke="#FF7700" strokeWidth="1.8" />
            <circle cx="118" cy="118" r="3" fill="#FF7700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern-1)" />
      </svg>

      {/* Secondary Staggered Glowing Circuit Light Wave */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 animate-circuit-wave-2"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="circuit-pattern-2"
            x="120"
            y="120"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30,30 L 70,70 L 150,70 L 190,30"
              fill="none"
              stroke="#FF8800"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="30" cy="30" r="3.5" fill="#FF7700" />
            <circle cx="190" cy="30" r="3.5" fill="#FF7700" />

            <path
              d="M 210,90 L 170,130 L 170,190 M 170,190 L 110,190"
              fill="none"
              stroke="#FF8800"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="210" cy="90" r="3.5" fill="#FF9900" />
            <circle cx="110" cy="190" r="3.5" fill="#FF7700" />

            {/* Glowing signal node dots */}
            <circle cx="70" cy="70" r="2.5" fill="#FFcc00" />
            <circle cx="170" cy="130" r="2.5" fill="#FFcc00" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern-2)" />
      </svg>
    </div>
  );
};

