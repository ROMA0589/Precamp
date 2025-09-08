import React, { ReactNode } from 'react';
import Head from 'next/head';
import Logo from './Logo';
import Stars from './Stars';

interface LayoutProps {
  children: ReactNode;
  title?: string;
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
        <meta name="description" content="Programa de Premocidade da Aliança Espírita Evangélica - Aprenda os ensinamentos de Jesus através de atividades interativas e dinâmicas" />
        <meta name="keywords" content="premocidade, precamp, espiritismo, Jesus, educação espiritual, atividades educativas" />
        <meta name="author" content="Aliança Espírita Evangélica" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Programa de Premocidade da Aliança Espírita Evangélica" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="canonical" href="https://roma0589.github.io/Precamp/" />
      </Head>

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

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
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
        }
      `}</style>
    </div>
  );
}
