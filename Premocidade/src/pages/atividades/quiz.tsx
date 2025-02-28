import React from 'react';
import Layout from '../../components/Layout';
import QuizGame from '../../components/games/QuizGame';

export default function QuizPage() {
  return (
    <Layout title="Quiz Espiritual">
      <div className="game-container">
        <h1>Quiz Espiritual</h1>
        <p>Teste seus conhecimentos sobre os ensinamentos espíritas</p>
        <QuizGame />
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
