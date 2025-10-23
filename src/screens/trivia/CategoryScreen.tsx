import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { fetchQuestionsFromAPI } from '../../services/triviaApiService';

interface CategoryScreenProps {
  navigation: any;
}

export function CategoryScreen({ navigation }: CategoryScreenProps) {
  const [loading, setLoading] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);

  const categories = [
    'Conocimientos Generales',
    'Ciencia',
    'Deportes',
    'Historia'
  ];

  const handleSelectCategory = async (category: string) => {
    setLoading(true);
    setLoadingCategory(category);
    
    try {
      console.log('📥 Cargando preguntas para:', category);
      
      // Obtener preguntas desde la API
      const questions = await fetchQuestionsFromAPI(category, 5);
      
      if (questions.length > 0) {
        console.log('✅ Preguntas cargadas correctamente');
        
        // Navegar con las preguntas de la API
        navigation.navigate('Question', { 
          category,
          questions,
          source: 'api'
        });
      } else {
        throw new Error('No se recibieron preguntas');
      }
      
    } catch (error) {
      console.error('❌ Error:', error);
      
      // Mostrar alerta y ofrecer usar preguntas locales
      Alert.alert(
        'Error de Conexión',
        'No se pudieron cargar las preguntas de internet. ¿Quieres usar preguntas guardadas en la app?',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Usar Guardadas',
            onPress: () => {
              navigation.navigate('Question', { 
                category,
                questions: null, // Usará triviaData local
                source: 'local'
              });
            }
          }
        ]
      );
    } finally {
      setLoading(false);
      setLoadingCategory(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Trivia Game</Text>
          <Text style={styles.subtitle}>Selecciona Categoría</Text>
        </View>
        
        <View style={styles.categoriesWrapper}>
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => handleSelectCategory(category)}
                style={styles.categoryButton}
                activeOpacity={0.8}
                disabled={loading}
              >
                {loading && loadingCategory === category ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.categoryText}>{category}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
          
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#FBBF24" />
              <Text style={styles.loadingText}>Cargando preguntas desde internet...</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7C3AED',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 56,
    fontWeight: '900',
    color: '#FBBF24',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  categoriesWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    width: '100%',
    gap: 16,
  },
  categoryButton: {
    backgroundColor: '#22D3EE',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 24,
    minHeight: 72,
    justifyContent: 'center',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 50,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
});