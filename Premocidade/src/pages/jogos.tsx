import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

interface MemoryCard {
  id: number;
  versiculo: string;
  referencia: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
}

export default function Jogos() {
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const memoryVersiculos = [
    { versiculo: "Amai-vos uns aos outros", referencia: "João 13:34" },
    { versiculo: "A fé é o firme fundamento", referencia: "Hebreus 11:1" },
    { versiculo: "Eu sou o caminho, a verdade e a vida", referencia: "João 14:6" },
    { versiculo: "Bem-aventurados os misericordiosos", referencia: "Mateus 5:7" },
    { versiculo: "Pedi e recebereis", referencia: "Mateus 7:7" },
    { versiculo: "A paz vos deixo", referencia: "João 14:27" }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      pergunta: "Qual é o maior mandamento?",
      opcoes: ["Amar a Deus", "Não matar", "Não roubar", "Guardar o sábado"],
      respostaCorreta: 0,
      explicacao: "Jesus disse que o maior mandamento é amar a Deus sobre todas as coisas"
    },
    {
      pergunta: "Onde Jesus nasceu?",
      opcoes: ["Nazaré", "Belém", "Jerusalém", "Cafarnaum"],
      respostaCorreta: 1,
      explicacao: "Jesus nasceu em Belém, conforme as profecias"
    },
    {
      pergunta: "Qual foi o primeiro milagre de Jesus?",
      opcoes: ["Multiplicar pães", "Transformar água em vinho", "Curar um cego", "Ressuscitar Lázaro"],
      respostaCorreta: 1,
      explicacao: "O primeiro milagre foi nas bodas de Caná"
    }
  ];

  const initializeMemoryGame = () => {
    const cards = [...memoryVersiculos, ...memoryVersiculos].map((item, index) => ({
      id: index,
      versiculo: item.versiculo,
      referencia: item.referencia,
      isFlipped: false,
      isMatched: false
    }));
    setMemoryCards(cards.sort(() => Math.random() - 0.5));
    setActiveGame('memoria');
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setActiveGame('quiz');
  };

  const handleMemoryCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    
    const newCards = memoryCards.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    
    setMemoryCards(newCards);
    setFlippedCards([...flippedCards, cardId]);

    if (flippedCards.length === 1) {
      const firstCard = memoryCards.find(card => card.id === flippedCards[0]);
      const secondCard = memoryCards.find(card => card.id === cardId);

      if (firstCard?.versiculo === secondCard?.versiculo) {
        setMemoryCards(memoryCards.map(card => 
          card.id === flippedCards[0] || card.id === cardId
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setMemoryCards(memoryCards.map(card => 
            card.id === flippedCards[0] || card.id === cardId
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].respostaCorreta) {
      setQuizScore(quizScore + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setActiveGame('quiz-results');
    }
  };

  const renderQuiz = () => {
    if (activeGame === 'quiz-results') {
      return (
        <div className="quiz-results">
          <h2>Resultado Final</h2>
          <p>Você acertou {quizScore} de {quizQuestions.length} perguntas!</p>
          <button className="game-button" onClick={() => setActiveGame(null)}>
            Voltar aos Jogos
          </button>
        </div>
      );
    }

    return (
      <div className="quiz-game">
        <h2>Quiz Bíblico</h2>
        <div className="question-card">
          <p className="question-number">Pergunta {currentQuestion + 1} de {quizQuestions.length}</p>
          <p className="question-text">{quizQuestions[currentQuestion].pergunta}</p>
          <div className="options-grid">
            {quizQuestions[currentQuestion].opcoes.map((opcao, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleQuizAnswer(index)}
                className={`option-button ${
                  showExplanation
                    ? index === quizQuestions[currentQuestion].respostaCorreta
                      ? 'correct'
                      : selectedAnswer === index
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
                disabled={showExplanation}
              >
                {opcao}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div className="explanation">
              <p>{quizQuestions[currentQuestion].explicacao}</p>
              <button onClick={handleNextQuestion} className="next-button">
                {currentQuestion + 1 === quizQuestions.length ? 'Ver Resultado' : 'Próxima Pergunta'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGameContent = () => {
    if (!activeGame) {
      return (
        <div className="games-grid">
          <div className="game-card" onClick={initializeMemoryGame}>
            <h3>Jogo da Memória</h3>
            <p>Encontre os pares de versículos bíblicos</p>
            <div className="game-icon">🎴</div>
          </div>

          <div className="game-card" onClick={startQuiz}>
            <h3>Quiz Bíblico</h3>
            <p>Teste seus conhecimentos</p>
            <div className="game-icon">❓</div>
          </div>

          <div className="game-card">
            <h3>Caça Palavras</h3>
            <p>Encontre palavras bíblicas</p>
            <div className="game-icon">🔍</div>
          </div>

          <div className="game-card">
            <h3>Cruzadinhas</h3>
            <p>Complete com palavras da Bíblia</p>
            <div className="game-icon">✝️</div>
          </div>
        </div>
      );
    }

    switch (activeGame) {
      case 'memoria':
        return (
          <div className="memory-game">
            <h2>Jogo da Memória</h2>
            <div className="memory-grid">
              {memoryCards.map(card => (
                <div
                  key={card.id}
                  className={`memory-card ${card.isFlipped ? 'flipped' : ''}`}
                  onClick={() => handleMemoryCardClick(card.id)}
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
            <button className="game-button" onClick={() => setActiveGame(null)}>
              Voltar aos Jogos
            </button>
          </div>
        );

      case 'quiz':
      case 'quiz-results':
        return renderQuiz();

      default:
        return null;
    }
  };

  return (
    <Layout title="Jogos">
      <div className="jogos-container">
        <h1 className="jogos-title">Jogos Educativos</h1>
        {renderGameContent()}
      </div>
    </Layout>
  );
}
