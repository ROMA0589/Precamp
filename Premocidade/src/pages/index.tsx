import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="background-images">
          <div className="image-wrapper">
            <div className="image-container jesus">
              <Image
                src="/images/jesus.png"
                alt="Jesus"
                width={1500}
                height={2000}
                priority
                quality={100}
              />
            </div>
            <div className="image-container kardec">
              <Image
                src="/images/kardec.png"
                alt="Allan Kardec"
                width={800}
                height={1200}
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
        <h1>Bem-vindo a Página Précamp</h1>
        <p className="intro">
          Descubra os ensinamentos de Jesus através de atividades interativas e dinâmicas.
        </p>
        <div className="grid">
          <Link href="/ensinamentos" className="card">
            <div className="icon">📚</div>
            <h2>Ensinamentos</h2>
            <p>Aprenda as lições de Jesus de forma simples e prática.</p>
          </Link>
          
          <Link href="/atividades" className="card">
            <div className="icon">🎮</div>
            <h2>Atividades</h2>
            <p>Jogos e atividades interativas para aprender brincando</p>
          </Link>

          <Link href="/cronogramas" className="card">
            <div className="icon">📅</div>
            <h2>Cronogramas</h2>
            <p>Acompanhe o planejamento das aulas e atividades</p>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .home {
          text-align: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .background-images {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          pointer-events: none;
        }

        .image-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.25;
        }

        .image-container {
          position: absolute;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .jesus {
          transform: translateX(-70%) scale(1);
          bottom: -10%;
        }

        .kardec {
          transform: translateX(60%) scale(0.8);
          bottom: -10%;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          flex: 1;
          min-width: 300px;
          text-align: center;
          text-decoration: none;
          color: white;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
