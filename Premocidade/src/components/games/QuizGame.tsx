import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é a principal mensagem de Jesus sobre o amor?",
    options: [
      "Amar somente a família",
      "Amar a Deus sobre todas as coisas e ao próximo como a si mesmo",
      "Amar apenas os amigos",
      "Amar somente a si mesmo"
    ],
    correct: 1,
    explanation: "Jesus ensinou que devemos amar a Deus sobre todas as coisas e ao próximo como a nós mesmos, sendo este o maior mandamento."
  },
  {
    id: 2,
    question: "O que Jesus ensinou sobre o perdão?",
    options: [
      "Perdoar uma vez",
      "Nunca perdoar",
      "Perdoar setenta vezes sete",
      "Perdoar apenas família"
    ],
    correct: 2,
    explanation: "Jesus ensinou que devemos perdoar setenta vezes sete, simbolizando que o perdão deve ser ilimitado."
  },
  {
    id: 3,
    question: "Qual a importância da oração segundo Jesus?",
    options: [
      "É apenas um ritual",
      "É uma forma de conexão com Deus",
      "Não é necessária",
      "Só deve ser feita na igreja"
    ],
    correct: 1,
    explanation: "Jesus ensinou que a oração é uma forma sincera de conexão com Deus, devendo ser feita com o coração."
  },
  {
    id: 4,
    question: "O que Jesus ensinou sobre julgar os outros?",
    options: [
      "Devemos julgar sempre",
      "Não julgueis, para não serdes julgados",
      "Só julgar amigos",
      "Julgar apenas inimigos"
    ],
    correct: 1,
    explanation: "Jesus ensinou que não devemos julgar os outros, pois seremos julgados da mesma forma."
  },
  {
    id: 5,
    question: "Qual foi o ensinamento de Jesus sobre a humildade?",
    options: [
      "Não é importante ser humilde",
      "Os humildes serão exaltados",
      "A humildade é sinal de fraqueza",
      "Devemos ser orgulhosos"
    ],
    correct: 1,
    explanation: "Jesus ensinou que os humildes serão exaltados e que devemos ser mansos de coração."
  },
  {
    id: 6,
    question: "Como Jesus ensinou a tratar os inimigos?",
    options: [
      "Com vingança",
      "Com indiferença",
      "Com amor e perdão",
      "Com ódio"
    ],
    correct: 2,
    explanation: "Jesus ensinou a amar os inimigos e orar pelos que nos perseguem."
  },
  {
    id: 7,
    question: "O que Jesus disse sobre a caridade?",
    options: [
      "Não é necessária",
      "É a maior das virtudes",
      "Só ajudar a família",
      "É opcional"
    ],
    correct: 1,
    explanation: "Jesus ensinou que a caridade é a maior das virtudes, junto com a fé e a esperança."
  },
  {
    id: 8,
    question: "Qual o significado da parábola do Bom Samaritano?",
    options: [
      "Ajudar só quem conhecemos",
      "Ignorar quem precisa",
      "Ajudar a todos sem distinção",
      "Ajudar só os amigos"
    ],
    correct: 2,
    explanation: "A parábola ensina que devemos ajudar a todos que precisam, independente de quem sejam."
  },
  {
    id: 9,
    question: "O que Jesus ensinou sobre a paz?",
    options: [
      "Não é importante",
      "Bem-aventurados os pacificadores",
      "Só para alguns",
      "É impossível ter paz"
    ],
    correct: 1,
    explanation: "Jesus disse: 'Bem-aventurados os pacificadores, porque serão chamados filhos de Deus.'"
  },
  {
    id: 10,
    question: "Como devemos tratar o próximo segundo Jesus?",
    options: [
      "Como inimigos",
      "Com indiferença",
      "Como a nós mesmos",
      "Com superioridade"
    ],
    correct: 2,
    explanation: "Jesus ensinou a amar o próximo como a nós mesmos, este é o segundo maior mandamento."
  },
  {
    id: 11,
    question: "O que Jesus ensinou sobre o Reino de Deus?",
    options: [
      "Está dentro de nós",
      "Só existe após a morte",
      "É um lugar físico",
      "Não existe"
    ],
    correct: 0,
    explanation: "Jesus ensinou que o Reino de Deus está dentro de nós e se manifesta através de nossas ações."
  },
  {
    id: 12,
    question: "Qual a importância do amor segundo Jesus?",
    options: [
      "Não é importante",
      "É o maior mandamento",
      "É opcional",
      "Só para alguns"
    ],
    correct: 1,
    explanation: "O amor é o maior mandamento, devendo amar a Deus e ao próximo acima de tudo."
  },
  {
    id: 13,
    question: "O que Jesus ensinou sobre o serviço ao próximo?",
    options: [
      "Não é necessário",
      "É opcional",
      "Quem quiser ser o maior, seja o servo",
      "Devemos ser servidos"
    ],
    correct: 2,
    explanation: "Jesus ensinou que quem quiser ser o maior deve ser servo, como Ele próprio veio para servir."
  },
  {
    id: 14,
    question: "Como Jesus ensinou a praticar a caridade?",
    options: [
      "Com ostentação",
      "Em secreto",
      "Apenas em público",
      "Não praticar"
    ],
    correct: 1,
    explanation: "Jesus ensinou que a caridade deve ser praticada em secreto, sem ostentação."
  },
  {
    id: 15,
    question: "O que Jesus ensinou sobre o perdão divino?",
    options: [
      "É automático",
      "Não existe",
      "Depende de quanto perdoamos",
      "É só para alguns"
    ],
    correct: 2,
    explanation: "Jesus ensinou que seremos perdoados na mesma medida em que perdoamos os outros."
  }
];

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setGameOver(false);
  };

  const calculateScore = () => {
    return {
      points: score * 25,
      stars: Math.floor(score / questions.length * 5),
      message: getScoreMessage(score / questions.length)
    };
  };

  const getScoreMessage = (ratio: number) => {
    if (ratio >= 0.8) return "Excelente! Você tem um ótimo conhecimento!";
    if (ratio >= 0.6) return "Muito bom! Continue estudando!";
    return "Continue aprendendo! Cada dia é uma nova oportunidade!";
  };

  if (gameOver) {
    const result = calculateScore();
    return (
      <div className="quiz-container">
        <div className="result-card">
          <h2>Quiz Completado!</h2>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < result.stars ? 'star filled' : 'star'}>
                ⭐
              </span>
            ))}
          </div>
          <p className="score">Pontuação: {result.points}</p>
          <p className="message">{result.message}</p>
          <button className="restart-button" onClick={restartQuiz}>
            Jogar Novamente
          </button>
        </div>
        <style jsx>{`
          .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          .question-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            color: white;
          }

          .options-container {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
          }

          .option-button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 1rem;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .option-button:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }

          .option-button.correct {
            background: rgba(46, 213, 115, 0.3);
            border-color: rgba(46, 213, 115, 0.5);
          }

          .option-button.incorrect {
            background: rgba(255, 71, 87, 0.3);
            border-color: rgba(255, 71, 87, 0.5);
          }

          .explanation {
            margin-top: 2rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }

          .next-button, .restart-button {
            background: linear-gradient(45deg, #4a90e2, #f5a623);
            border: none;
            padding: 1rem 2rem;
            border-radius: 25px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1rem;
          }

          .next-button:hover, .restart-button:hover {
            transform: scale(1.05);
          }

          .stars {
            margin: 1rem 0;
            font-size: 2rem;
          }

          .star {
            opacity: 0.3;
            margin: 0 0.2rem;
          }

          .star.filled {
            opacity: 1;
          }

          .score {
            font-size: 1.5rem;
            margin: 1rem 0;
          }

          .message {
            color: #666;
            margin-bottom: 1.5rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="question-card">
        <h2>Questão {currentQuestion + 1} de {questions.length}</h2>
        <p className="question-text">{questions[currentQuestion].question}</p>
        
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`option-button ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="explanation">
            <p>{questions[currentQuestion].explanation}</p>
            <button className="next-button" onClick={nextQuestion}>
              {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .quiz-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .question-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          color: white;
        }

        .options-container {
          display: grid;
          gap: 1rem;
          margin: 2rem 0;
        }

        .option-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1rem;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .option-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .option-button.correct {
          background: rgba(46, 213, 115, 0.3);
          border-color: rgba(46, 213, 115, 0.5);
        }

        .option-button.incorrect {
          background: rgba(255, 71, 87, 0.3);
          border-color: rgba(255, 71, 87, 0.5);
        }

        .explanation {
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .next-button, .restart-button {
          background: linear-gradient(45deg, #4a90e2, #f5a623);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .next-button:hover, .restart-button:hover {
          transform: scale(1.05);
        }

        .stars {
          margin: 1rem 0;
          font-size: 2rem;
        }

        .star {
          opacity: 0.3;
          margin: 0 0.2rem;
        }

        .star.filled {
          opacity: 1;
        }

        .score {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .message {
          color: #666;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default QuizGame;
