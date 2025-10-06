export interface Question {
  question: string;
  options: string[];
  correct: number;
}

export const triviaData: Record<string, Question[]> = {
  'Conocimientos Generales': [
    {
      question: '¿Qué significa CPU?',
      options: [
        'Unidad Central de Procesamiento',
        'Unidad de Proceso Central',
        'Unidad Procesadora Central'
      ],
      correct: 0
    },
    {
      question: '¿Cuál es la capital de Francia?',
      options: ['Londres', 'París', 'Madrid', 'Roma'],
      correct: 1
    },
    {
      question: '¿En qué año llegó el hombre a la Luna?',
      options: ['1965', '1969', '1972', '1975'],
      correct: 1
    },
    {
      question: '¿Cuál es el océano más grande?',
      options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
      correct: 2
    },
    {
      question: '¿Quién pintó la Mona Lisa?',
      options: ['Van Gogh', 'Picasso', 'Da Vinci', 'Monet'],
      correct: 2
    }
  ],
  'Ciencia': [
    {
      question: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Saturno', 'Júpiter', 'Neptuno', 'Urano'],
      correct: 1
    },
    {
      question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
      options: ['186', '206', '226', '246'],
      correct: 1
    },
    {
      question: '¿Qué gas respiramos principalmente?',
      options: ['Oxígeno', 'Nitrógeno', 'Hidrógeno', 'CO2'],
      correct: 1
    },
    {
      question: '¿Cuál es la velocidad de la luz?',
      options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '200,000 km/s'],
      correct: 0
    },
    {
      question: '¿Qué órgano bombea la sangre?',
      options: ['Pulmones', 'Hígado', 'Corazón', 'Riñones'],
      correct: 2
    }
  ],
  'Deportes': [
    {
      question: '¿En qué deporte se usa un birdie?',
      options: ['Tenis', 'Bádminton', 'Golf', 'Ping Pong'],
      correct: 1
    },
    {
      question: '¿Cuántos jugadores hay en un equipo de fútbol?',
      options: ['9', '10', '11', '12'],
      correct: 2
    },
    {
      question: '¿Cada cuántos años son los Juegos Olímpicos?',
      options: ['2 años', '3 años', '4 años', '5 años'],
      correct: 2
    },
    {
      question: '¿En qué país se originó el kárate?',
      options: ['China', 'Japón', 'Corea', 'Tailandia'],
      correct: 1
    },
    {
      question: '¿Cuántos sets se necesitan para ganar en tenis?',
      options: ['1', '2', '3', 'Depende del torneo'],
      correct: 3
    }
  ],
  'Historia': [
    {
      question: '¿En qué año comenzó la Segunda Guerra Mundial?',
      options: ['1935', '1939', '1941', '1945'],
      correct: 1
    },
    {
      question: '¿Quién fue el primer presidente de México?',
      options: ['Benito Juárez', 'Guadalupe Victoria', 'Porfirio Díaz', 'Miguel Hidalgo'],
      correct: 1
    },
    {
      question: '¿Qué imperio construyó Machu Picchu?',
      options: ['Azteca', 'Maya', 'Inca', 'Olmeca'],
      correct: 2
    },
    {
      question: '¿En qué año cayó el Muro de Berlín?',
      options: ['1985', '1987', '1989', '1991'],
      correct: 2
    },
    {
      question: '¿Quién descubrió América?',
      options: ['Américo Vespucio', 'Hernán Cortés', 'Cristóbal Colón', 'Fernando de Magallanes'],
      correct: 2
    }
  ]
};