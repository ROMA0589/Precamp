import React from 'react';

const Stars = () => {
  return (
    <div className="stars">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`star star--${i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
      <style jsx>{`
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .star {
          position: absolute;
          background: #FFF;
          border-radius: 50%;
        }

        .star--small {
          width: 1px;
          height: 1px;
          animation: twinkle 3s infinite ease-in-out;
        }

        .star--medium {
          width: 2px;
          height: 2px;
          animation: twinkle 4s infinite ease-in-out;
        }

        .star--large {
          width: 3px;
          height: 3px;
          animation: twinkle 5s infinite ease-in-out;
          box-shadow: 0 0 4px #FFF;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Stars;
