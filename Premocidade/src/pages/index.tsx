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
<<<<<<< HEAD
        <p className="intro intro-small">
=======
        <p className="intro">
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
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
<<<<<<< HEAD

            <a href="https://drive.google.com/drive/folders/1m8RBEfuDdJg9VkGcjqL2Wv4bE5CYbbtw" className="card" target="_blank" rel="noopener noreferrer">
              <div className="icon">⬇️</div>
              <h2>Baixar Aulas</h2>
              <p>Faça download das aulas diretamente do Google Drive</p>
            </a>
        </div>
      </div>
      <style>{`
=======
        </div>
      </div>
      <style jsx>{`
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
        .home {
          text-align: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
<<<<<<< HEAD
          background: rgba(255,255,255,0.3);
=======
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
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
<<<<<<< HEAD
          max-width: 55vw;
          height: auto;
          min-width: 250px;
          max-height: 90vh;
=======
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
        }

        .jesus {
          transform: translateX(-70%) scale(1);
          bottom: -10%;
        }

        .kardec {
<<<<<<< HEAD
          transform: translateX(20%) scale(0.9);
=======
          transform: translateX(60%) scale(0.8);
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
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
<<<<<<< HEAD
          background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
=======
          background: rgba(255, 255, 255, 0.1);
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
          border-radius: 20px;
          padding: 2rem;
          flex: 1;
          min-width: 300px;
          text-align: center;
          text-decoration: none;
<<<<<<< HEAD
          color: #e0f7fa;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 8px rgba(33, 150, 243, 0.15);
=======
          color: white;
          backdrop-filter: blur(10px);
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
<<<<<<< HEAD
          box-shadow: 0 10px 20px rgba(33, 150, 243, 0.25);
=======
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
<<<<<<< HEAD
          color: #43cea2;
        }

        @media (max-width: 1024px) {
        .image-container {
          max-width: 75vw;
          min-width: 160px;
        }
=======
        }

        @media (max-width: 1024px) {
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
<<<<<<< HEAD
        .image-container {
          max-width: 95vw;
          min-width: 100px;
        }
=======
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
          .grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }
<<<<<<< HEAD

        .intro-small {
          font-size: 1rem;
          max-width: 320px;
          margin: 0 auto 1.5rem auto;
          padding: 0.5rem 1rem;
          background: rgba(33,150,243,0.08);
          border-radius: 12px;
          color: #185a9d;
        }
        }
=======
>>>>>>> 2a5984b547d1efc890697add46cb393e6c58ce0d
      `}</style>
    </Layout>
  );
}
