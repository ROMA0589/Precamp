import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const initialCards: Card[] = [
  { id: 1, content: "Amor", isFlipped: false, isMatched: false },
  { id: 2, content: "Caridade", isFlipped: false, isMatched: false },
  { id: 3, content: "Fé", isFlipped: false, isMatched: false },
  { id: 4, content: "Esperança", isFlipped: false, isMatched: false },
  { id: 5, content: "Perdão", isFlipped: false, isMatched: false },
  { id: 6, content: "Humildade", isFlipped: false, isMatched: false },
  { id: 7, content: "Amor", isFlipped: false, isMatched: false },
  { id: 8, content: "Caridade", isFlipped: false, isMatched: false },
  { id: 9, content: "Fé", isFlipped: false, isMatched: false },
  { id: 10, content: "Esperança", isFlipped: false, isMatched: false },
  { id: 11, content: "Perdão", isFlipped: false, isMatched: false },
  { id: 12, content: "Humildade", isFlipped: false, isMatched: false },
];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matches === initialCards.length / 2) {
      setGameCompleted(true);
    }
  }, [matches]);

  const shuffleCards = () => {
    const shuffled = [...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setFlippedCards([]);
  };

  const handleCardClick = (cardId: number) => {
    if (isChecking || flippedCards.length === 2) return;
    if (cards.find(c => c.id === cardId)?.isMatched) return;
    if (flippedCards.includes(cardId)) return;

    setCards(cards.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    
    setFlippedCards([...flippedCards, cardId]);

    if (flippedCards.length === 1) {
      setMoves(prev => prev + 1);
      checkMatch(cardId);
    }
  };

  const checkMatch = (secondCardId: number) => {
    setIsChecking(true);
    const firstCard = cards.find(c => c.id === flippedCards[0]);
    const secondCard = cards.find(c => c.id === secondCardId);

    if (!firstCard || !secondCard) {
      setIsChecking(false);
      return;
    }

    setTimeout(() => {
      setCards(prevCards => prevCards.map(card => {
        if (card.id === firstCard.id || card.id === secondCardId) {
          return {
            ...card,
            isMatched: firstCard.content === secondCard.content,
            isFlipped: firstCard.content === secondCard.content
          };
        }
        return card;
      }));
      
      if (firstCard.content === secondCard.content) {
        setMatches(prev => prev + 1);
      }
      
      setFlippedCards([]);
      setIsChecking(false);
    }, 1000);
  };

  const restartGame = () => {
    setGameCompleted(false);
    setMatches(0);
    setMoves(0);
    shuffleCards();
  };

  return (
    <div className="memory-game">
      <div className="game-stats">
        <span>Movimentos: {moves}</span>
        <span>Pares encontrados: {matches}</span>
      </div>

      <div className="cards-grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span>?</span>
              </div>
              <div className="card-back">
                <span>{card.content}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {gameCompleted && (
        <div className="game-completed">
          <h2>Parabéns!</h2>
          <p>Você completou o jogo em {moves} movimentos!</p>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      )}

      <button className="reset-button" onClick={shuffleCards}>
        Reiniciar Jogo
      </button>

      <style jsx>{`
        .memory-game {
          padding: 2rem;
          text-align: center;
          max-width: 1200px;  // Aumentado a 1200px
          margin: 0 auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);  // Cambiado a 3 columnas
          gap: 2.5rem;  // Aumentado el espacio entre cartas
          margin: 2rem auto;
        }

        .card {
          aspect-ratio: 1;
          perspective: 1000px;
          cursor: pointer;
          min-height: 250px;  // Aumentado significativamente
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;  // Aumentado el tamaño de la interrogación
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;  // Aumentado el radio del borde
          border: 3px solid rgba(255, 255, 255, 0.2);
          padding: 2rem;  // Aumentado el padding
        }

        .card-back {
          transform: rotateY(180deg);
          background: rgba(74, 144, 226, 0.2);
          font-size: 2.2rem;  // Aumentado el tamaño del texto
          font-weight: bold;
          letter-spacing: 1px;
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        }

        .card.matched {
          opacity: 0.7;
          animation: matchedAnimation 0.5s ease-out;
        }

        .reset-button {
          margin-top: 2rem;
          padding: 0.8rem 2rem;
          background: linear-gradient(45deg, #4a90e2, #f5a623);
          border: none;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .reset-button:hover {
          transform: scale(1.05);
        }

        .game-stats {
          display: flex;
          justify-content: space-around;
          margin-bottom: 2rem;
          font-size: 1.2rem;
          color: white;
        }

        .game-completed {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          color: #333;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
        }

        @keyframes matchedAnimation {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .card {
            min-height: 200px;
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card {
            min-height: 180px;
          }

          .card-front,
          .card-back {
            font-size: 2rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .card {
            min-height: 130px;  // Aumentado para móveis pequenos
          }
        }
      `}</style>
    </div>
  );
};

export default MemoryGame;
