import React from 'react';
import Layout from '../components/Layout';

export default function Videos() {
  return (
    <Layout>
      <div className="videos-page">
        <h1>Vídeos Educativos</h1>
        <p className="intro">
          Assista aos vídeos educativos sobre os ensinamentos de Jesus e aprenda de forma interativa.
        </p>
        
        <div className="video-container">
          <h2>Playlist Précamp</h2>
          <div className="youtube-embed">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/videoseries?list=PLfxpx84etxI_gyeyiUagyWXIO3ugmFsUv"
              title="Playlist Précamp - Vídeos Educativos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-description">
            Esta playlist contém vídeos educativos especialmente selecionados para complementar 
            os ensinamentos e atividades do Précamp. Assista, aprenda e reflita sobre os 
            ensinamentos de Jesus de uma forma moderna e interativa.
          </p>
        </div>
      </div>
      
      <style>{`
        .videos-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        
        .videos-page h1 {
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ffffff, #e0f7fa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .intro {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 3rem auto;
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.9);
          border-radius: 12px;
          color: #1a2435;
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .video-container {
          background: rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 2rem;
          margin: 2rem auto;
          max-width: 900px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .video-container h2 {
          color: #1a2435;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }
        
        .youtube-embed {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .youtube-embed iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
        
        .video-description {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
          text-align: left;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .videos-page {
            padding: 1rem;
          }
          
          .video-container {
            padding: 1.5rem;
            margin: 1rem;
          }
          
          .videos-page h1 {
            font-size: 2rem;
          }
          
          .intro {
            padding: 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}