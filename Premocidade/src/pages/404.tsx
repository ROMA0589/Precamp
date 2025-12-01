import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="error-container">
        <h1>Página não encontrada</h1>
        <p>Desculpe, a página que você procura não existe.</p>
        <Link href="/" className="home-button">
          Voltar ao Início
        </Link>

        <style jsx>{`
          .error-container {
            text-align: center;
            padding: 4rem 2rem;
            color: white;
          }

          .home-button {
            display: inline-block;
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: linear-gradient(45deg, #4a90e2, #f5a623);
            border-radius: 25px;
            color: white;
            text-decoration: none;
            transition: transform 0.3s ease;
          }

          .home-button:hover {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </Layout>
  );
}
