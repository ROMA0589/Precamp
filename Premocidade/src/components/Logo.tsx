import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href="/" className="logo-link">
        <div className="logo-wrapper" style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.8rem'}}>
          <Image
            src="/images/logo.png"
            alt="Précamp Logo"
            width={50}
            height={50}
            priority
          />
          <span className="logo-text">Précamp</span>
        </div>
      </Link>
  {/* Imagen Kardec centrada eliminada, solo fondo global permanece */}
      <style>{`
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo-wrapper {
          display: flex;
          align-items: center;
        }
        .image-container {
          margin-right: 0.8rem;
        }
        .logo-text {
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(45deg, #4a90e2, #f5a623);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: inherit;
          padding: 0.5rem;
          border-radius: 8px;
        }
        .kardec-image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
        );
      }
      
      export default Logo;

