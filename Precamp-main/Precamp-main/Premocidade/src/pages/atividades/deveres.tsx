import React from 'react';
import Layout from '../../components/Layout';
import DeveresGame from '../../components/games/DeveresGame';

export default function DeveresPage() {
  return (
    <Layout title="Deveres e Valores">
      <div className="game-container">
        <h1>Deveres e Valores</h1>
        <p>Aprenda sobre valores morais e responsabilidades</p>
        <DeveresGame />
      </div>

      <style jsx>{`
        .game-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          color: white;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  );
}
