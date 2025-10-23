import { Question } from '../data/triviaData';

// Interfaz para la respuesta de la API
interface TriviaAPIResponse {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
}

// Mapeo de tus categorías a las categorías de la API
const categoryMap: Record<string, string> = {
  'Conocimientos Generales': 'general_knowledge',
  'Ciencia': 'science',
  'Deportes': 'sport_and_leisure',
  'Historia': 'history',
};

// Función principal para obtener preguntas desde la API
export async function fetchQuestionsFromAPI(
  category: string,
  amount: number = 5
): Promise<Question[]> {
  try {
    // Obtener la categoría correspondiente de la API
    const apiCategory = categoryMap[category] || 'general_knowledge';
    
    // Construir la URL
    const url = `https://the-trivia-api.com/v2/questions?limit=${amount}&categories=${apiCategory}`;
    
    console.log('🌐 Cargando desde API:', url);
    
    // Hacer la petición
    const response = await fetch(url);
    
    // Verificar si la respuesta es correcta
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    // Convertir a JSON
    const data: TriviaAPIResponse[] = await response.json();
    
    console.log('✅ Preguntas recibidas:', data.length);
    
    // Transformar al formato de tu app
    const questions: Question[] = data.map((item) => {
      // Combinar todas las opciones
      const allOptions = [...item.incorrectAnswers, item.correctAnswer];
      
      // Mezclar aleatoriamente
      const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
      
      // Encontrar el índice correcto
      const correctIndex = shuffledOptions.indexOf(item.correctAnswer);
      
      return {
        question: item.question.text,
        options: shuffledOptions,
        correct: correctIndex,
      };
    });
    
    return questions;
    
  } catch (error) {
    console.error('❌ Error al obtener preguntas:', error);
    throw error;
  }
}