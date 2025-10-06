import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

interface CategoryScreenProps {
  navigation: any;
}

export function CategoryScreen({ navigation }: CategoryScreenProps) {
  const categories = [
    'Conocimientos Generales',
    'Ciencia',
    'Deportes',
    'Historia'
  ];

  const handleSelectCategory = (category: string) => {
    navigation.navigate('Question', { category });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Título centrado */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Trivia Game</Text>
          <Text style={styles.subtitle}>Selecciona Categoría</Text>
        </View>
        
        {/* Categorías centradas */}
        <View style={styles.categoriesWrapper}>
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => handleSelectCategory(category)}
                style={styles.categoryButton}
                activeOpacity={0.8}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});