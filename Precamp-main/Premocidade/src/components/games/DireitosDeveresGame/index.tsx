import React, { useState } from 'react';
import { direitosEDeveres } from '../../../data/direitos-deveres';

const DireitosDeveresGame = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    setSelectedItem(index);
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div className="direitos-deveres">
      <div className="cards-grid">
        {direitosEDeveres.map((item, index) => (
          <div
            key={index}
            className={`card ${item.tipo} ${selectedItem === index ? 'selected' : ''} ${completed.includes(index) ? 'completed' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-content">
              <div className="card-header">
                <span className="tipo-badge">{item.tipo}</span>
                <h3>{item.texto}</h3>
              </div>
              <div className="card-body">
                <p className="explicacao">{item.explicacao}</p>
                <small className="fonte">{item.fonte}</small>
                {item.exemplo && (
                  <div className="exemplo">
                    <strong>Exemplo:</strong>
                    <p>{item.exemplo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .direitos-deveres {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          height: 100%;
        }

        .card.direito {
          border-color: rgba(74, 144, 226, 0.3);
        }

        .card.dever {
          border-color: rgba(245, 166, 35, 0.3);
        }

        .card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .card.selected {
          transform: scale(1.02);
        }

        .card.completed {
          border-width: 3px;
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .tipo-badge {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          text-transform: capitalize;
          margin-bottom: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
        }

        h3 {
          margin: 0.5rem 0;
          color: white;
          font-size: 1.8rem;
        }

        .card-body {
          flex: 1;
        }

        .explicacao {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .fonte {
          display: block;
          margin: 1rem 0;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        .exemplo {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .exemplo strong {
          color: rgba(255, 255, 255, 0.8);
          display: block;
          margin-bottom: 0.5rem;
        }

        .exemplo p {
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DireitosDeveresGame;
