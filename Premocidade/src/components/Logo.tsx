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
          return (
            <Link href="/" className="logo-link" style={{display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none'}}>
              <Image
                src="/images/logo.png"
                alt="Précamp Logo"
                width={50}
                height={50}
                priority
                style={{borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}
              />
              <span className="logo-text" style={{fontSize: '1.8rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #4a90e2, #f5a623)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'inherit', padding: '0.5rem', borderRadius: '8px'}}>Précamp</span>
            </Link>
          );

