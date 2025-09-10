import React from 'react';
import Layout from '../../components/Layout';
import DireitosDeveresGame from '../../components/games/DireitosDeveresGame';

export default function DireitosPage() {
  return (
    <Layout title="Direitos e Deveres">
      <div className="game-container">
        <h1>Direitos e Deveres</h1>
        <p>Aprenda sobre os direitos e deveres espirituais</p>
        <DireitosDeveresGame />
      </div>
      <style jsx>{`
        // ...existing styles...
      `}</style>
    </Layout>
  );
}
