import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Premocidade' }: LayoutProps) {
  return (
    <div className="layout">
      <Head>
        <title>{title} - Aliança Espírita Evangélica</title>
        <meta name="description" content="Programa de Premocidade da Aliança Espírita Evangélica" />
      </Head>

      <header className="header">
        <nav>
          <div className="logo-container">
            <Link href="/" className="logo-link">
              <div className="logo">Précamp</div>
            </Link>
          </div>
          <ul className="nav-list">
            <li><Link href="/ensinamentos">Ensinamentos de Jesus</Link></li>
            <li><Link href="/atividades">Atividades e Jogos</Link></li>
            <li><Link href="/videos">Vídeos</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Aliança Espírita Evangélica</p>
      </footer>
    </div>
  );
}
