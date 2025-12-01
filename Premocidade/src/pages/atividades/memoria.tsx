import React from 'react';
import Layout from '../../components/Layout';
import MemoryGame from '../../components/games/MemoryGame';

export default function MemoriaPage() {
  return (
    <Layout title="Jogo da Memória">
      <div className="game-container">
        <h1>Jogo da Memória</h1>
        <p>Encontre os pares de cartas com mensagens espirituais</p>
        <MemoryGame />
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
