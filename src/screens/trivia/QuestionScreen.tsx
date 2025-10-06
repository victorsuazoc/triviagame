import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { triviaData } from '../../data/triviaData';

interface QuestionScreenProps {
  navigation: any;
  route: any;
}

export function QuestionScreen({ navigation, route }: QuestionScreenProps) {
  const { category } = route.params;
  const questions = triviaData[category];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleBack = () => {
    Alert.alert(
      '¿Estás seguro?',
      '¿Quieres regresar al inicio? Perderás tu progreso actual.',
      [
        {
          text: 'NO',
          style: 'cancel',
        },
        {
          text: 'SÍ',
          onPress: () => navigation.navigate('Category'),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleSelectAnswer = (index: number) => {
    if (showResult) return; // No permitir cambiar respuesta después de mostrar resultado
    
    setSelectedAnswer(index);
    setShowResult(true);

    // Esperar 1.5 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {
      handleNext(index);
    }, 1500);
  };

  const handleNext = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correct;
    
    const newResult = {
      question: currentQuestion.question,
      userAnswer: currentQuestion.options[answerIndex],
      correctAnswer: currentQuestion.options[currentQuestion.correct],
      isCorrect
    };

    const updatedResults = [...results, newResult];

    if (currentQuestionIndex < totalQuestions - 1) {
      setResults(updatedResults);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      navigation.navigate('Results', { results: updatedResults });
    }
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      // Antes de mostrar resultado, todos se ven normales
      return styles.optionButton;
    }

    // Después de responder: solo la seleccionada cambia de color
    if (index === selectedAnswer) {
      // Si acertó: verde, si falló: rojo
      return selectedAnswer === currentQuestion.correct 
        ? styles.optionButtonCorrect 
        : styles.optionButtonWrong;
    }
    
    // Las demás opciones se quedan moradas normales
    return styles.optionButton;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Botón de regreso */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Trivia Game</Text>
        <Text style={styles.subtitle}>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</Text>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>
        </View>

        <ScrollView 
          style={styles.optionsScroll} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.optionsContent}
        >
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectAnswer(index)}
              style={getOptionStyle(index)}
              activeOpacity={0.8}
              disabled={showResult}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {showResult && (
          <View style={styles.feedbackContainer}>
            <Text style={[
              styles.feedbackText,
              selectedAnswer === currentQuestion.correct ? styles.feedbackCorrect : styles.feedbackWrong
            ]}>
              {selectedAnswer === currentQuestion.correct ? '¡Correcto! ✓' : '¡Incorrecto! ✗'}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22D3EE',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 56,
    fontWeight: '900',
    color: '#FBBF24',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 32,
    textAlign: 'center',
  },
  questionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  questionText: {
    color: '#1F2937',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsScroll: {
    flex: 1,
  },
  optionsContent: {
    gap: 16,
    paddingBottom: 16,
  },
  optionButton: {
    backgroundColor: '#9333EA', // Morado normal
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionButtonCorrect: {
    backgroundColor: '#10B981', // Verde cuando es correcta
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionButtonWrong: {
    backgroundColor: '#DC2626', // Rojo cuando es incorrecta
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedbackContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 22,
    fontWeight: '900',
  },
  feedbackCorrect: {
    color: '#10B981',
  },
  feedbackWrong: {
    color: '#DC2626',
  },
});