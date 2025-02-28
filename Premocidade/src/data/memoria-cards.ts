export interface MemoryCard {
  id: number;
  emoji: string;
  name: string;
  value: string;
}

export const memoryCards: MemoryCard[] = [
  // Virtudes fundamentales
  { id: 1, emoji: "❤️", name: "Amor", value: "amor" },
  { id: 2, emoji: "🕊️", name: "Paz", value: "paz" },
  { id: 3, emoji: "🙏", name: "Fé", value: "fe" },
  { id: 4, emoji: "✨", name: "Luz", value: "luz" },
  { id: 5, emoji: "🌟", name: "Esperança", value: "esperanca" },
  { id: 6, emoji: "🤝", name: "Caridade", value: "caridade" },
  { id: 7, emoji: "🎭", name: "Humildade", value: "humildade" },
  { id: 8, emoji: "🙌", name: "Gratidão", value: "gratidao" },
  
  // Conceptos espíritas
  { id: 9, emoji: "📖", name: "Kardec", value: "kardec" },
  { id: 10, emoji: "👼", name: "Espírito", value: "espirito" },
  { id: 11, emoji: "🔄", name: "Reencarnação", value: "reencarnacao" },
  { id: 12, emoji: "🌈", name: "Evolução", value: "evolucao" },
  { id: 13, emoji: "✝️", name: "Jesus", value: "jesus" },
  { id: 14, emoji: "🎯", name: "Moral", value: "moral" },
  
  // Valores importantes
  { id: 15, emoji: "🤲", name: "Bondade", value: "bondade" },
  { id: 16, emoji: "🎓", name: "Estudo", value: "estudo" },
  { id: 17, emoji: "🗣️", name: "Verdade", value: "verdade" },
  { id: 18, emoji: "🌱", name: "Reforma Íntima", value: "reforma" },
  
  // Prácticas espíritas
  { id: 19, emoji: "🙇", name: "Prece", value: "prece" },
  { id: 20, emoji: "📚", name: "Evangelho", value: "evangelho" },
  { id: 21, emoji: "💝", name: "Perdão", value: "perdao" },
  { id: 22, emoji: "🏠", name: "Família", value: "familia" },
  
  // Enseñanzas especiales
  { id: 23, emoji: "🌍", name: "Terra", value: "terra" },
  { id: 24, emoji: "👨‍👩‍👧‍👦", name: "União", value: "uniao" }
];
