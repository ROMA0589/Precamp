import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

interface Card {
  id: number;
  versiculo: string;
  referencia: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function JogoMemoria() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);

  const versiculos = [
    { versiculo: "Amai-vos uns aos outros", referencia: "João 13:34" },
    { versiculo: "Eu sou o caminho, a verdade e a vida", referencia: "João 14:6" },
    { versiculo: "Bem-aventurados os misericordiosos", referencia: "Mateus 5:7" },
    { versiculo: "A fé é o firme fundamento", referencia: "Hebreus 11:1" },
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const gameCards: Card[] = [...versiculos, ...versiculos].map((item, index) => ({
      id: index,
      versiculo: item.versiculo,
      referencia: item.referencia,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(shuffleCards(gameCards));
  };

  const shuffleCards = (array: Card[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (clickedCardId: number) => {
    if (flippedCards.length === 2) return;
    
    const newCards = cards.map(card => 
      card.id === clickedCardId ? { ...card, isFlipped: true } : card
    );
    
    setCards(newCards);
    setFlippedCards([...flippedCards, clickedCardId]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find(card => card.id === flippedCards[0]);
      const secondCard = cards.find(card => card.id === clickedCardId);

      if (firstCard?.versiculo === secondCard?.versiculo) {
        setMatchedPairs(prev => prev + 1);
        setCards(cards.map(card => 
          card.id === flippedCards[0] || card.id === clickedCardId
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map(card => 
            card.id === flippedCards[0] || card.id === clickedCardId
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <Layout title="Jogo da Memória">
      <div className="jogo-container">
        <h1>Jogo da Memória - Versículos</h1>
        <div className="memory-grid">
          {cards.map(card => (
            <div
              key={card.id}
              className={`memory-card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
              onClick={() => !card.isFlipped && !card.isMatched && handleCardClick(card.id)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">
                  <p>{card.versiculo}</p>
                  <small>{card.referencia}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={initializeGame}>
          Recomeçar Jogo
        </button>
      </div>
    </Layout>
  );
}
