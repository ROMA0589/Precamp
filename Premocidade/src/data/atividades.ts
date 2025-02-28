export interface Atividade {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'memoria' | 'quiz' | 'direitos';
  ruta: string;
  icone: string;
  cor: string;
}

export const atividades: Atividade[] = [
  {
    id: 1,
    titulo: "Jogo da Memória",
    descricao: "Encontre os pares de cartas e descubra mensagens especiais",
    tipo: "memoria",
    ruta: "/atividades/memoria",
    icone: "🎴",
    cor: "#4a90e2"
  },
  {
    id: 2,
    titulo: "Quiz Espiritual",
    descricao: "Teste seus conhecimentos sobre os ensinamentos de Jesus",
    tipo: "quiz",
    ruta: "/atividades/quiz",
    icone: "❓",
    cor: "#f5a623"
  },
  {
    id: 3,
    titulo: "Direitos e Deveres",
    descricao: "Aprenda sobre direitos e deveres espirituais",
    tipo: "direitos",
    ruta: "/atividades/direitos",
    icone: "⚖️",
    cor: "#50E3C2"
  }
];
