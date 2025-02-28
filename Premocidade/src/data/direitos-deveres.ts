interface DireitoDever {
  texto: string;
  tipo: 'direito' | 'dever';
  explicacao: string;
  fonte: string;
  exemplo?: string;  // Agregada propiedad opcional
  cor?: string;
}

export const direitosEDeveres: DireitoDever[] = [
  {
    texto: "Direito à vida",
    tipo: "direito" as const,
    explicacao: "Todo espírito tem direito à vida e às experiências necessárias para sua evolução",
    fonte: "O Livro dos Espíritos, questão 880",
    exemplo: "Respeitar e valorizar a vida em todas suas formas"
  },
  {
    texto: "Dever de instruir-se",
    tipo: "dever" as const,
    explicacao: "O espírito tem o dever de buscar conhecimento e evolução intelectual e moral",
    fonte: "O Livro dos Espíritos, questão 685",
    exemplo: "Estudar, ler bons livros e buscar aprender sempre"
  },
  {
    texto: "Direito ao livre-arbítrio",
    tipo: "direito" as const,
    explicacao: "Liberdade de escolha e responsabilidade pelos próprios atos",
    fonte: "O Livro dos Espíritos, questão 843"
  },
  {
    texto: "Dever de praticar a caridade",
    tipo: "dever" as const,
    explicacao: "A caridade é a virtude fundamental - Fora da caridade não há salvação",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XV"
  },
  {
    texto: "Direito à justiça divina",
    tipo: "direito" as const,
    explicacao: "Todo espírito recebe segundo suas obras, nem mais nem menos",
    fonte: "O Livro dos Espíritos, questão 964"
  },
  {
    texto: "Dever de respeitar o próximo",
    tipo: "dever" as const,
    explicacao: "Fazer aos outros o que gostaríamos que nos fizessem",
    fonte: "O Evangelho Segundo o Espiritismo, cap. XI"
  },
  {
    texto: "Direito ao progresso",
    tipo: "direito" as const,
    explicacao: "Todo espírito tem direito às oportunidades de evolução",
    fonte: "O Livro dos Espíritos, questão 115"
  },
  {
    texto: "Dever de trabalhar",
    tipo: "dever" as const,
    explicacao: "O trabalho é lei da natureza e meio de aperfeiçoamento",
    fonte: "O Livro dos Espíritos, questão 674"
  }
].map(item => ({
  ...item,
  cor: item.tipo === 'direito' ? '#4a90e2' : '#f5a623'
}));

export type { DireitoDever };

