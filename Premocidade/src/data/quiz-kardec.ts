interface PerguntaKardec {
  pergunta: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
  fonte: string;
}

export const perguntasKardec: PerguntaKardec[] = [
  {
    pergunta: "O que é Deus?",
    opcoes: [
      "Um ser que vive no céu",
      "A inteligência suprema, causa primeira de todas as coisas",
      "Um espírito como os outros",
      "Uma energia da natureza"
    ],
    resposta: 1,
    explicacao: "Deus é a inteligência suprema e a causa primeira de tudo o que existe. É eterno, imutável, imaterial, único, onipotente, soberanamente justo e bom.",
    fonte: "O Livro dos Espíritos, questão 1"
  },
  {
    pergunta: "Por que Deus nos criou?",
    opcoes: [
      "Para nos fazer sofrer",
      "Para evoluirmos e sermos felizes",
      "Porque estava sozinho",
      "Sem nenhum motivo específico"
    ],
    resposta: 1,
    explicacao: "Deus nos criou para que possamos evoluir e alcançar a perfeição, sendo felizes através do nosso progresso.",
    fonte: "O Livro dos Espíritos, questão 115"
  },
  {
    pergunta: "O que é um espírito?",
    opcoes: [
      "Um fantasma que assusta",
      "O princípio inteligente do universo",
      "Uma energia sem consciência",
      "Uma alma penada"
    ],
    resposta: 1,
    explicacao: "Os espíritos são os seres inteligentes da criação. São as almas dos que já viveram na Terra ou em outros mundos.",
    fonte: "O Livro dos Espíritos, questão 76"
  },
  {
    pergunta: "Por que reencarnamos?",
    opcoes: [
      "Como castigo de Deus",
      "Para evoluir e aprender",
      "Por acaso",
      "Porque não temos escolha"
    ],
    resposta: 1,
    explicacao: "Reencarnamos para progredir, aprender novas lições e reparar erros do passado, sempre com o objetivo de evolução.",
    fonte: "O Livro dos Espíritos, questão 167"
  },
  {
    pergunta: "O que é a caridade segundo o Espiritismo?",
    opcoes: [
      "Dar esmolas",
      "Benevolência para com todos, indulgência para com as imperfeições alheias e perdão das ofensas",
      "Fazer doações",
      "Ajudar só quem conhecemos"
    ],
    resposta: 1,
    explicacao: "A verdadeira caridade não é apenas material, mas também moral. Inclui amor, perdão e compreensão.",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XV"
  },
  {
    pergunta: "Como podemos ser felizes?",
    opcoes: [
      "Tendo muito dinheiro",
      "Praticando o bem e confiando em Deus",
      "Vivendo isolados",
      "Fazendo o que queremos sempre"
    ],
    resposta: 1,
    explicacao: "A verdadeira felicidade vem da prática do bem, do amor ao próximo e da confiança em Deus.",
    fonte: "O Livro dos Espíritos, questão 920"
  },
  {
    pergunta: "Por que devemos orar?",
    opcoes: [
      "Para pedir riquezas",
      "Para nos conectar com Deus e os bons espíritos",
      "Porque somos obrigados",
      "Para impressionar os outros"
    ],
    resposta: 1,
    explicacao: "A oração é uma forma de conexão com Deus e os bons espíritos, nos trazendo força, paz e orientação.",
    fonte: "O Livro dos Espíritos, questão 659"
  }
];

export type { PerguntaKardec };
