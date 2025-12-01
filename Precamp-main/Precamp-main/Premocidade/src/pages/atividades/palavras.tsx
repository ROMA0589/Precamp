import React, { useState } from 'react';
import Layout from '../../components/Layout';

const words = [
  { word: "AMOR", hint: "Sentimento que Jesus nos ensinou" },
  { word: "CARIDADE", hint: "Fora dela não há salvação" },
  { word: "EVANGELHO", hint: "Boas novas de Jesus" },
  // ... más palabras aquí
];

export default function Palavras() {
  const [currentWord, setCurrentWord] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const checkWord = () => {
    if (input.toUpperCase() === words[currentWord].word) {
      setMessage('Correto! 🎉');
      setTimeout(() => {
        setInput('');
        setMessage('');
        setCurrentWord(currentWord + 1 >= words.length ? 0 : currentWord + 1);
      }, 1500);
    } else {
      setMessage('Tente novamente');
    }
  };

  return (
    <Layout title="Palavras Cruzadas">
      <div className="palavras-container">
        <h1 className="game-title">Palavras Cruzadas</h1>
        <div className="game-area">
          <div className="hint-section">
            <h3>Dica:</h3>
            <p className="hint">{words[currentWord].hint}</p>
          </div>
          
          <div className="input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite a palavra..."
              className="word-input"
              autoFocus
            />
            <button onClick={checkWord} className="check-button">
              Verificar
            </button>
          </div>

          {message && (
            <div className={`message ${message.includes('Correto') ? 'correct' : 'incorrect'}`}>
              {message}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .palavras-container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .game-title {
          font-size: 3rem;
          text-align: center;
          color: #4a90e2;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
        }

        .game-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .hint-section {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          width: 100%;
          text-align: center;
        }

        .hint {
          font-size: 1.5rem;
          color: white;
          margin-top: 1rem;
        }

        .input-section {
          display: flex;
          gap: 1rem;
          width: 100%;
          max-width: 600px;
        }

        .word-input {
          flex: 1;
          padding: 1.5rem;
          font-size: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .word-input:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 15px rgba(74, 144, 226, 0.3);
        }

        .check-button {
          padding: 0 2rem;
          font-size: 1.2rem;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #4a90e2, #357abd);
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .check-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
        }

        .message {
          font-size: 1.5rem;
          padding: 1rem 2rem;
          border-radius: 10px;
          animation: fadeIn 0.3s ease;
        }

        .message.correct {
          background: rgba(46, 204, 113, 0.2);
          color: #2ecc71;
        }

        .message.incorrect {
          background: rgba(231, 76, 60, 0.2);
          color: #e74c3c;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
}
