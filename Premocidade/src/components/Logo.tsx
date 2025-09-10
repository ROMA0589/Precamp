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
      <div className="kardec-image-wrapper">
        <Image
          src="/images/kardec.png"
          alt="Kardec"
          width={180}
          height={180}
          priority
          style={{ display: 'block', margin: '2rem auto 0 auto', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        />
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

