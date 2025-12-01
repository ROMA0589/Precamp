import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  tipo: 'direito' | 'dever';
  fonte: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o principal direito do espírito segundo a doutrina espírita?",
    options: [
      "O direito de não evoluir",
      "O direito à evolução espiritual",
      "O direito de prejudicar outros",
      "O direito de ficar estagnado"
    ],
    correct: 1,
    explanation: "Todo espírito tem o direito fundamental à evolução espiritual através das experiências necessárias.",
    tipo: "direito",
    fonte: "O Livro dos Espíritos, questão 115"
  },
  {
    id: 2,
    question: "Qual é o dever fundamental em relação ao conhecimento espiritual?",
    options: [
      "Guardar o conhecimento para si",
      "Compartilhar apenas com amigos",
      "Buscar sempre aprender e evoluir",
      "Ignorar os ensinamentos"
    ],
    correct: 2,
    explanation: "É dever do espírito buscar constantemente o conhecimento e a evolução.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, questão 685"
  },
  {
    id: 3,
    question: "Como devemos exercer nosso direito ao livre-arbítrio?",
    options: [
      "Com total irresponsabilidade",
      "Sem pensar nas consequências",
      "Com responsabilidade e consciência",
      "Pensando apenas em si"
    ],
    correct: 2,
    explanation: "O livre-arbítrio deve ser exercido com responsabilidade, considerando as consequências de nossas escolhas.",
    tipo: "direito",
    fonte: "O Livro dos Espíritos, questão 843"
  },
  {
    id: 4,
    question: "Qual é o dever do espírito em relação à caridade?",
    options: [
      "Praticar apenas quando conveniente",
      "Ajudar somente amigos",
      "Praticar sempre que possível",
      "Ignorar as necessidades alheias"
    ],
    correct: 2,
    explanation: "A caridade é um dever fundamental do espírito, devendo ser praticada sempre que possível.",
    tipo: "dever",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XV"
  },
  {
    id: 5,
    question: "Como devemos exercer nosso direito à prece?",
    options: [
      "Apenas nos momentos difíceis",
      "Com sinceridade e regularidade",
      "Somente em lugares específicos",
      "De forma mecânica"
    ],
    correct: 1,
    explanation: "A prece é um direito e deve ser exercida com sinceridade e regularidade.",
    tipo: "direito",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XXVII"
  },
  {
    id: 6,
    question: "Qual o dever do espírito em relação ao próximo?",
    options: [
      "Ignorar",
      "Ajudar só quando pedirem",
      "Amar e respeitar como a si mesmo",
      "Manter distância"
    ],
    correct: 2,
    explanation: "Devemos amar e respeitar o próximo como a nós mesmos, seguindo o ensinamento de Jesus.",
    tipo: "dever",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XI"
  },
  {
    id: 7,
    question: "Qual direito temos em relação ao nosso desenvolvimento espiritual?",
    options: [
      "Evoluir no nosso próprio ritmo",
      "Permanecer estagnado",
      "Regredir quando quiser",
      "Ignorar a evolução"
    ],
    correct: 0,
    explanation: "Cada espírito tem o direito de evoluir em seu próprio ritmo, respeitando seu livre-arbítrio.",
    tipo: "direito",
    fonte: "O Livro dos Espíritos, questão 115"
  },
  {
    id: 8,
    question: "Qual o dever do espírito em relação ao trabalho?",
    options: [
      "Evitar sempre que possível",
      "Trabalhar apenas quando necessário",
      "Buscar constantemente o progresso",
      "Trabalhar sem propósito"
    ],
    correct: 2,
    explanation: "O trabalho é lei da natureza e meio de progresso espiritual.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, questão 674"
  },
  {
    id: 9,
    question: "Como devemos exercer nosso direito ao conhecimento espiritual?",
    options: [
      "Guardando só para si",
      "Buscando e compartilhando",
      "Ignorando as verdades",
      "Aceitando sem questionar"
    ],
    correct: 1,
    explanation: "Temos o direito de buscar e compartilhar o conhecimento espiritual.",
    tipo: "direito",
    fonte: "O Livro dos Espíritos, questão 627"
  },
  {
    id: 10,
    question: "Qual o dever em relação à mediunidade?",
    options: [
      "Usá-la para benefício próprio",
      "Ignorar completamente",
      "Exercê-la com responsabilidade",
      "Comercializá-la"
    ],
    correct: 2,
    explanation: "A mediunidade deve ser exercida com responsabilidade e sem interesse material.",
    tipo: "dever",
    fonte: "O Livro dos Médiuns, cap. XX"
  },
  {
    id: 11,
    question: "Qual direito temos em relação às provas da vida?",
    options: [
      "Evitá-las sempre",
      "Enfrentá-las com resignação",
      "Ignorá-las completamente",
      "Reclamar constantemente"
    ],
    correct: 1,
    explanation: "Temos o direito de enfrentar as provas com resignação, compreendendo seu valor evolutivo.",
    tipo: "direito",
    fonte: "O Evangelho Segundo o Espiritismo, cap. V"
  },
  {
    id: 12,
    question: "Qual o dever em relação ao perdão?",
    options: [
      "Perdoar quando conveniente",
      "Nunca perdoar",
      "Perdoar sempre",
      "Perdoar com condições"
    ],
    correct: 2,
    explanation: "Devemos perdoar sempre, sem restrições, como ensinou Jesus.",
    tipo: "dever",
    fonte: "O Evangelho Segundo o Espiritismo, cap. X"
  },
  {
    id: 13,
    question: "Como exercer o direito à reforma íntima?",
    options: [
      "Postergar sempre",
      "Com constância e dedicação",
      "Apenas quando necessário",
      "De forma superficial"
    ],
    correct: 1,
    explanation: "A reforma íntima é um direito que deve ser exercido com constância e dedicação.",
    tipo: "direito",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XVII"
  },
  {
    id: 14,
    question: "Qual o dever em relação à família?",
    options: [
      "Ignorar os laços",
      "Cumprir quando conveniente",
      "Amar e respeitar sempre",
      "Manter distância"
    ],
    correct: 2,
    explanation: "Temos o dever de amar e respeitar nossa família, compreendendo os laços espirituais.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, questão 774"
  },
  {
    id: 15,
    question: "Como exercer o direito à paz interior?",
    options: [
      "Ignorando os problemas",
      "Através da prática do bem",
      "Isolando-se dos outros",
      "Com agressividade"
    ],
    correct: 1,
    explanation: "A paz interior é um direito alcançado através da prática do bem e da harmonia com as leis divinas.",
    tipo: "direito",
    fonte: "O Evangelho Segundo o Espiritismo, cap. V"
  },
  {
    id: 16,
    question: "Qual o dever em relação ao meio ambiente?",
    options: [
      "Ignorar a natureza",
      "Usar sem limites",
      "Preservar e respeitar",
      "Destruir livremente"
    ],
    correct: 2,
    explanation: "Temos o dever de preservar e respeitar o meio ambiente, obra divina.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, questão 705"
  },
  {
    id: 17,
    question: "Como exercer o direito à felicidade?",
    options: [
      "Através do prazer material",
      "Praticando o bem",
      "Ignorando os outros",
      "Acumulando riquezas"
    ],
    correct: 1,
    explanation: "A verdadeira felicidade é um direito alcançado através da prática do bem e do amor.",
    tipo: "direito",
    fonte: "O Evangelho Segundo o Espiritismo, cap. V"
  },
  {
    id: 18,
    question: "Qual o dever em relação ao estudo espírita?",
    options: [
      "Estudar superficialmente",
      "Ignorar os ensinamentos",
      "Aprofundar-se sempre",
      "Memorizar sem compreender"
    ],
    correct: 2,
    explanation: "Devemos nos aprofundar constantemente no estudo da Doutrina Espírita.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, Introdução"
  },
  {
    id: 19,
    question: "Como exercer o direito à proteção espiritual?",
    options: [
      "Exigindo sempre",
      "Com fé e merecimento",
      "Ignorando os espíritos",
      "De forma egoísta"
    ],
    correct: 1,
    explanation: "A proteção espiritual é um direito exercido através da fé e do merecimento.",
    tipo: "direito",
    fonte: "O Livro dos Espíritos, questão 495"
  },
  {
    id: 20,
    question: "Qual o dever fundamental do espírito encarnado?",
    options: [
      "Buscar riqueza material",
      "Viver sem propósito",
      "Progredir sempre",
      "Evitar desafios"
    ],
    correct: 2,
    explanation: "O dever fundamental é progredir sempre, através das experiências da vida.",
    tipo: "dever",
    fonte: "O Livro dos Espíritos, questão 115"
  }
];

const DireitosDeveresGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
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

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="game-container">
        <div className="result-card">
          <h2>Quiz Completado!</h2>
          <p className="score">Pontuação: {score} de {questions.length}</p>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="question-card">
        <div className={`tipo-badge ${questions[currentQuestion].tipo}`}>
          {questions[currentQuestion].tipo === 'direito' ? 'Direito' : 'Dever'}
        </div>
        <h2>{questions[currentQuestion].question}</h2>
        
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
            <small className="fonte">{questions[currentQuestion].fonte}</small>
            <button className="next-button" onClick={nextQuestion}>
              {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .game-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .question-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          color: white;
          position: relative;
        }

        .tipo-badge {
          position: absolute;
          top: -1rem;
          right: 2rem;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .tipo-badge.direito {
          background: #4a90e2;
        }

        .tipo-badge.dever {
          background: #f5a623;
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
          font-size: 1.1rem;
          text-align: left;
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

        .fonte {
          display: block;
          margin: 1rem 0;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        .next-button {
          background: linear-gradient(45deg, #4a90e2, #f5a623);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .next-button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default DireitosDeveresGame;
