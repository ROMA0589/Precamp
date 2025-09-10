import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
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
      </Link>
      <style>{`
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        export default Logo;
        
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .image-container {
          width: 50px;
          height: 50px;
        }
      `}</style>
          </>
        );
    };

