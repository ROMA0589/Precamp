import React, { useState } from 'react';

interface Dever {
  id: number;
  titulo: string;
  descricao: string;
  exemplo: string;
}

const deveres: Dever[] = [
  {
    id: 1,
    titulo: "Respeito aos Pais",
    descricao: "Honrar e obedecer aos pais, reconhecendo sua importância",
    exemplo: "Ouvir seus conselhos e ajudar nas tarefas de casa"
  },
  {
    id: 2,
    titulo: "Estudar com Dedicação",
    descricao: "Aproveitar as oportunidades de aprendizado",
    exemplo: "Fazer as lições e prestar atenção nas aulas"
  },
  {
    id: 3,
    titulo: "Ajudar ao Próximo",
    descricao: "Praticar a caridade e o amor ao próximo",
    exemplo: "Auxiliar quem precisa e compartilhar com os outros"
  }
];

const DeveresGame = () => {
  const [selectedDever, setSelectedDever] = useState<Dever | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const handleDeverClick = (dever: Dever) => {
    setSelectedDever(dever);
    if (!completed.includes(dever.id)) {
      setCompleted([...completed, dever.id]);
    }
  };

  return (
    <div className="deveres-container">
      <div className="deveres-grid">
        {deveres.map((dever) => (
          <div
            key={dever.id}
            className={`dever-card ${completed.includes(dever.id) ? 'completed' : ''}`}
            onClick={() => handleDeverClick(dever)}
          >
            <h3>{dever.titulo}</h3>
            <p>{dever.descricao}</p>
            {completed.includes(dever.id) && <span className="check">✓</span>}
          </div>
        ))}
      </div>

      {selectedDever && (
        <div className="exemplo-card">
          <h3>Exemplo Prático</h3>
          <p>{selectedDever.exemplo}</p>
          <button onClick={() => setSelectedDever(null)}>Fechar</button>
        </div>
      )}

      <style jsx>{`
        .deveres-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .deveres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .dever-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .dever-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
        }

        .dever-card.completed {
          border: 2px solid #50E3C2;
        }

        .check {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #50E3C2;
          font-size: 1.5rem;
        }

        .exemplo-card {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
          color: #333;
          z-index: 100;
          max-width: 90%;
          width: 500px;
        }

        button {
          background: linear-gradient(45deg, #4a90e2, #50E3C2);
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
          margin-top: 1rem;
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default DeveresGame;
