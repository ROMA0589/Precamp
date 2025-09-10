import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { atividades } from '../data/atividades';

export default function Atividades() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Layout>
      <div className="atividades">
        <h1>Atividades e Jogos</h1>
        <div className="cards-container">
          {atividades.map((atividade) => (
            <Link 
              href={atividade.ruta}
              key={atividade.id}
              className={`card ${hoveredCard === atividade.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(atividade.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon-container">
                    <span className="icon">{atividade.icone}</span>
                  </div>
                </div>
                <h2>{atividade.titulo}</h2>
                <p>{atividade.descricao}</p>
                <span className="play-button">Jogar Agora</span>
              </div>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .atividades {
            padding: 4rem 2rem;
            text-align: center;
          }

          .cards-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 3rem;
            padding: 3rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .card {
            flex: 0 1 300px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            min-height: 350px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            color: white;
            display: flex;
            flex-direction: column;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .card:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
            background: rgba(255, 255, 255, 0.15);
          }

          .card-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .icon-wrapper {
            width: 80px;
            height: 80px;
            margin-bottom: 1rem;
          }

          .icon-container {
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }

          .card:hover .icon-container {
            transform: scale(1.1) rotate(5deg);
          }

          .icon {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.8rem;
            margin: 0;
          }

          p {
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
            flex-grow: 1;
          }

          .play-button {
            padding: 0.8rem 2rem;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 25px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .card:hover .play-button {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
          }

          @media (max-width: 768px) {
            .card {
              flex: 0 1 100%;
              max-width: 300px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
