import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen, QuestionScreen, ResultsScreen } from './src/screens/trivia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Category"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
