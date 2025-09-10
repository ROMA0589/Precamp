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
          </div>
        </div>
        <h1>Bem-vindo à Página Précamp</h1>
        <p className="intro intro-small">
          Descubra os ensinamentos de Jesus através de atividades interativas e dinâmicas.
        </p>
        <div className="grid">
          <Link href="/ensinamentos" className="card">
            <div className="icon">📚</div>
            <h2>Ensinamentos</h2>
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1m8RBEfuDdJg9VkGcjqL2Wv4bE5CYbbtw"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">⬇️</div>
            <h2>Baixar Aulas</h2>
            <p>Faça download das aulas diretamente do Google Drive</p>
          </a>
        </div>
      </div>
      <style>{`
        .home {
          text-align: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.3);
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
          position: relative;
          width: 100%;
          height: 100%;
        }
        .image-container {
          position: absolute;
          opacity: 0.4;
          transition: opacity 0.3s ease;
          left: 50%;
          transform: translateX(-70%) scale(1);
          bottom: -10%;
        }
        .intro-small {
          font-size: 1rem;
          max-width: 320px;
          margin: 0 auto 1.5rem auto;
          padding: 0.5rem 1rem;
          background: rgba(33,150,243,0.08);
          border-radius: 12px;
          color: #185a9d;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 2rem;
          margin: 0 auto;
          max-width: 900px;
        }
        .card {
          background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
          color: #e0f7fa;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 8px rgba(33, 150, 243, 0.15);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(33, 150, 243, 0.25);
        }
        .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
