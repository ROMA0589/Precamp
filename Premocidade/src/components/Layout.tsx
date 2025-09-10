import React, { ReactNode } from 'react';
import Head from 'next/head';
import Logo from './Logo';
import Stars from './Stars';

interface LayoutProps {
  readonly children: ReactNode;
  readonly title?: string;
}

export default function Layout({ children, title = 'Premocidade' }: LayoutProps) {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear 
    ? startYear 
    : `${startYear}-${currentYear}`;

  const pageTitle = title ? `${title} - Aliança Espírita Evangélica` : 'Aliança Espírita Evangélica';

  return (
    <div className="layout">
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" content="Programa de Premocidade da Aliança Espírita Evangélica" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {/* Fondo de Kardec */}
      <div className="background-kardec"></div>

      <header className="header">
        <nav>
          <div className="logo-container">
            <Logo />
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="galaxy-background">
          <Stars />
        </div>
        <div className="content-wrapper">
          {children}
        </div>
      </main>

      <footer className="footer">
        <p>© {yearDisplay} Premocidade - Precamp - Feito de <span className="heart">&#10084;</span></p>
      </footer>

      <style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .background-kardec {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          background: url('/images/kardec.png') no-repeat center center;
          background-size: cover;
          opacity: 0.18;
          pointer-events: none;
        }
        .header, .main, .footer {
          position: relative;
          z-index: 1;
        }
        .header {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          padding: 1rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo-container {
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }
        .logo-container:hover {
          transform: scale(1.05);
        }
        .main {
          flex: 1;
          padding: 1rem;
        }
        .footer {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          text-align: center;
          padding: 1rem;
          margin-top: auto;
        }
        @media (max-width: 480px) {
          .content-wrapper {
            padding: 1rem;
          }
          .background-kardec {
            background-size: contain;
          }
        }
      `}</style>
    </div>
  );
}
