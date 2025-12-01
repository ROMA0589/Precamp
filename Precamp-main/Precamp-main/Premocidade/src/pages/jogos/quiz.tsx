import React, { useState } from 'react';
import Layout from '../../components/Layout';

interface Question {
  id: number;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
}

const questions: Question[] = [
  {
    id: 1,
    pergunta: "Qual é o maior mandamento segundo Jesus?",
    opcoes: [
      "Não matar",
      "Amar a Deus sobre todas as coisas",
      "Guardar o sábado",
      "Não roubar"
    ],
    respostaCorreta: 1,
    explicacao: "Jesus disse que o maior mandamento é amar a Deus sobre todas as coisas (Mateus 22:37-38)"
  },
  {
    id: 2,
    pergunta: "Onde Jesus nasceu?",
    opcoes: [
      "Nazaré",
      "Jerusalém",
      "Belém",
      "Cafarnaum"
    ],
    respostaCorreta: 2,
    explicacao: "Jesus nasceu em Belém, conforme profetizado em Miqueias 5:2"
  },
  // Agregar más preguntas aquí
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    if (optionIndex === questions[currentQuestion].respostaCorreta) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  return (
    <Layout title="Quiz Bíblico">
      <div className="quiz-container">
        {!showResult ? (
          <div className="question-card">
            <h2>Pergunta {currentQuestion + 1} de {questions.length}</h2>
            <p className="question-text">{questions[currentQuestion].pergunta}</p>
            <div className="options-container">
              {questions[currentQuestion].opcoes.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  className={`option-button ${
                    selectedAnswer !== null && index === questions[currentQuestion].respostaCorreta
                      ? 'correct'
                      : selectedAnswer === index && selectedAnswer !== questions[currentQuestion].respostaCorreta
                      ? 'incorrect'
                      : ''
                  }`}
                  disabled={showExplanation}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanation && (
              <div className="explanation">
                <p>{questions[currentQuestion].explicacao}</p>
                <button onClick={nextQuestion} className="next-button">
                  {currentQuestion + 1 === questions.length ? 'Ver Resultado' : 'Próxima Pergunta'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="result-card">
            <h2>Quiz Completo!</h2>
            <p>Você acertou {score} de {questions.length} perguntas</p>
            <button onClick={restartQuiz} className="restart-button">
              Jogar Novamente
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
