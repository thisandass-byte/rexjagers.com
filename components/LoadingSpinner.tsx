import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-navy">
      <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" strokeWidth="4">
          <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeOpacity="0.3" />
          <path
            stroke="#d4af37"
            strokeLinecap="round"
            d="M 50,5
              A 45,45 0 0 1 95,50"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
