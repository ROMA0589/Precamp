import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="logo-link">
      <div className="logo-wrapper">
        <div className="image-container">
          <Image
            src="/images/logo.png"
            alt="Précamp Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <span className="logo-text">Précamp</span>
      </div>
      <style>{`
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .image-container {
          width: 50px;
          height: 50px;
          position: relative;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.5rem;
          }

          .image-container {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </Link>
  );
};

export default Logo;
