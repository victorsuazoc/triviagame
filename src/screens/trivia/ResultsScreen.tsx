import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

interface Result {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface ResultsScreenProps {
  navigation: any;
  route: any;
}

export function ResultsScreen({ navigation, route }: ResultsScreenProps) {
  const { results } = route.params as { results: Result[] };
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;

  const handlePlayAgain = () => {
    navigation.navigate('Category');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../../../assets/trivia-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Resultados</Text>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Has acertado {correctAnswers} de {totalQuestions}
          </Text>
          <Text style={styles.percentageText}>
            {Math.round((correctAnswers / totalQuestions) * 100)}%
          </Text>
        </View>

        <ScrollView 
          style={styles.resultsScroll} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultsContent}
        >
          {results.map((result, index) => (
            <View key={index} style={styles.resultCard}>
              <Text style={styles.resultQuestion}>
                {index + 1}. {result.question}
              </Text>
              <Text style={styles.resultAnswer}>
                Tu respuesta: {result.userAnswer}
              </Text>
              <Text style={[
                styles.resultStatus,
                result.isCorrect ? styles.correct : styles.incorrect
              ]}>
                {result.isCorrect ? '✓ Correcto' : `✗ Correcto: ${result.correctAnswer}`}
              </Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity 
          onPress={handlePlayAgain}
          style={styles.playAgainButton}
          activeOpacity={0.8}
        >
          <Text style={styles.playAgainText}>Jugar de nuevo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cb0000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 24,
  },
  logo: {
    width:280,
    height: 100,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  scoreContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  scoreText: {
    color: '#1F2937',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  percentageText: {
    color: '#7C3AED',
    fontSize: 36,
    fontWeight: '900',
  },
  resultsScroll: {
    flex: 1,
  },
  resultsContent: {
    gap: 16,
    paddingBottom: 16,
  },
  resultCard: {
    backgroundColor: '#fa6800ff',
    borderRadius: 16,
    padding: 20,
  },
  resultQuestion: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultAnswer: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  resultStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  correct: {
    color: '#49ca8aff',
  },
  incorrect: {
    color: '#FDE047',
  },
  playAgainButton: {
    backgroundColor: '#01aee2ff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  playAgainText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
});