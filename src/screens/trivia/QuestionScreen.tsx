import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert, Image } from 'react-native';
import { triviaData } from '../../data/triviaData';

interface QuestionScreenProps {
  navigation: any;
  route: any;
}

export function QuestionScreen({ navigation, route }: QuestionScreenProps) {
  const { category } = route.params;
  const questions = route.params.questions || triviaData[category];
  const source = route.params.source || 'local';
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  React.useEffect(() => {
    console.log(`📝 Usando preguntas desde: ${source === 'api' ? 'Internet (API)' : 'Almacenamiento local'}`);
  }, []);

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
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);

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
      return styles.optionButton;
    }

    if (index === selectedAnswer) {
      return selectedAnswer === currentQuestion.correct 
        ? styles.optionButtonCorrect 
        : styles.optionButtonWrong;
    }
    
    return styles.optionButton;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>

        <Image 
          source={require('../../../assets/trivia-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
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
          {currentQuestion.options.map((option: string, index: number) => (
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
    backgroundColor: '#00aee5',
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
  logo: {
    width: 280,
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
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
    backgroundColor: '#6600c5ff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionButtonCorrect: {
    backgroundColor: '#03a02aff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionButtonWrong: {
    backgroundColor: '#DC2626',
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
    color: '#03a02aff',
  },
  feedbackWrong: {
    color: '#DC2626',
  },
});