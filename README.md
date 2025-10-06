# Trivia Game

- **Nombre de la App:** Trivia Game
- **Asignatura/Profesor:** Desarrollo de aplicaciones para dispositivos móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Octubre 2025
- **URL del Repositorio:**
[https://github.com/victorsuazoc/triviagame](https://github.com/victorsuazoc/triviagame)

## Descripción

Trivia Game es una aplicación móvil desarrollada con React Native y Expo que permite a los usuarios poner a prueba sus conocimientos en diferentes categorías. La aplicación cuenta con una interfaz colorida y moderna con retroalimentación visual inmediata, navegación fluida entre pantallas y un sistema de puntuación detallado.

## Características Principales

- 🎯 **Múltiples Categorías:** Conocimientos Generales, Ciencia, Deportes e Historia
- ❓ **Sistema de Preguntas:** 5 preguntas de opción múltiple por categoría
- ✅ **Retroalimentación Visual:** Indicadores de respuesta correcta (verde) e incorrecta (roja)
- 📊 **Sistema de Puntuación:** Cálculo de porcentaje de aciertos
- 📝 **Revisión Detallada:** Pantalla de resultados con todas las respuestas
- 🔄 **Navegación Confirmada:** Alertas de confirmación al salir de una trivia
- 🎨 **Interfaz Moderna:** Diseño colorido con temas por pantalla

## Funcionalidades Implementadas

- Selección de categoría desde pantalla principal
- Presentación secuencial de preguntas con opciones múltiples
- Mensaje de feedback inmediato (¡Correcto! / ¡Incorrecto!)
- Transición automática entre preguntas (1.5 segundos)
- Botón de regreso con confirmación de salida
- Pantalla de resultados con resumen detallado
- Opción de "Jugar de nuevo" para reiniciar
- Diseño responsivo y optimizado para móviles
- Estructura de código modular y escalable

## Stack Tecnológico

- **React Native:** 0.76.5
- **React:** 18.3.1
- **TypeScript:** ~5.3.3
- **Expo:** ~52.0.0
- **Expo Status Bar:** ~2.0.0
- **React Navigation Native:** ^7.1.17
- **React Navigation Native Stack:** ^7.3.26
- **React Native Screens:** ~4.3.0
- **React Native Safe Area Context:** ~5.0.0

## Prerrequisitos

- **Node.js:** v18.17.0 o superior
```bash
node --version
```

- **NPM:** 9.0.0+ o Yarn v1.22.19+
```bash
npm --version # o yarn --version
```

- **Expo CLI:** v6.3.0+
```bash
npx expo --version
```

- **Dispositivo móvil con Expo Go** o **Emulador Android/iOS**
  - Descargar Expo Go: [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

- **Verificar entorno:**
```bash
npx expo doctor
```

## Estructura del Proyecto

```
triviagame/
├── App.tsx                        # Componente principal de la aplicación
├── app.json                       # Configuración de Expo
├── package.json                   # Dependencias y scripts
├── tsconfig.json                  # Configuración de TypeScript
├── assets/                        # Recursos estáticos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── screenshots/                   # Capturas de pantalla
│   ├── pantalla 1.jpg
│   ├── pantalla 2.jpg
│   └── pantalla 3.jpg
└── src/
    ├── screens/                   # Pantallas de la aplicación
    │   └── trivia/
    │       ├── index.ts
    │       ├── CategoryScreen.tsx # Pantalla de selección de categorías
    │       ├── QuestionScreen.tsx # Pantalla de preguntas
    │       └── ResultsScreen.tsx  # Pantalla de resultados
    └── data/                      # Datos y utilidades
        └── triviaData.ts          # Base de datos de preguntas
```

## Archivos Principales

- **App.tsx:** Componente raíz con NavigationContainer y configuración de Stack Navigator
- **CategoryScreen.tsx:** Pantalla principal con selección de categorías
- **QuestionScreen.tsx:** Pantalla de preguntas con validación y feedback
- **ResultsScreen.tsx:** Pantalla de resultados con resumen detallado
- **triviaData.ts:** Base de datos local con preguntas organizadas por categoría

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/trivia-game
cd trivia-game

# Instalar dependencias
npm install

# Instalar dependencias de navegación
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

## Dependencias del Proyecto

| Dependencia | Versión | Propósito |
|---|---|---|
| `@react-navigation/native` | ^7.1.17 | Core de navegación entre pantallas, manejo de estado de navegación |
| `@react-navigation/native-stack` | ^7.3.26 | Stack navigator para navegación jerárquica entre pantallas |
| `react-native-screens` | ~4.3.0 | Optimización de rendimiento para transiciones nativas |
| `react-native-safe-area-context` | ~5.0.0 | Manejo de áreas seguras (notch, barras de estado) |
| `expo` | ~52.0.0 | Framework de desarrollo móvil con TypeScript |
| `expo-status-bar` | ~2.0.0 | Control de apariencia de barra de estado |
| `react` | 18.3.1 | Biblioteca de interfaz de usuario |
| `react-native` | 0.76.5 | Framework de desarrollo móvil multiplataforma |
| `typescript` | ~5.3.3 | Tipado estático para JavaScript |

**Verificar instalación:**
```bash
npm list --depth=0
```

## Comando de Creación del Proyecto

Este proyecto fue creado utilizando el template oficial de Expo con TypeScript:

```bash
npx create-expo-app@latest --template blank-typescript
```

Este template incluye:
- ✅ Configuración de TypeScript preconfigurada
- ✅ Estructura básica de proyecto
- ✅ Scripts de desarrollo listos para usar
- ✅ Configuración de ESLint y Prettier (opcional)

## Ejecución

```bash
# Iniciar servidor de desarrollo
npm start
# o
npx expo start

# Iniciar con túnel (para redes restrictivas)
npx expo start --tunnel

# Limpiar caché y reiniciar
npx expo start --clear
```

### Opciones de Ejecución:

**En dispositivo físico (Recomendado para desarrollo):**
1. Instala Expo Go en tu dispositivo móvil
2. Ejecuta `npm start`
3. Escanea el código QR con la cámara (iOS) o con Expo Go (Android)

**En emulador/simulador:**
```bash
# Android (requiere Android Studio instalado)
npx expo start --android

# iOS (solo macOS, requiere Xcode)
npx expo start --ios
```

**En navegador web:**
```bash
npx expo start --web
```

## Guía de Inicio Rápido

1. **Crear el proyecto (ya hecho):**
```bash
npx create-expo-app@latest --template blank-typescript
```

2. **Instalar dependencias de navegación:**
```bash
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

3. **Iniciar el servidor de desarrollo:**
```bash
npx expo start
```

4. **Conectar dispositivo:**
   - **Android:** Abre Expo Go y escanea el QR
   - **iOS:** Abre la cámara y escanea el QR
   - **Emulador:** Presiona `a` (Android) o `i` (iOS) en la terminal

### Consideraciones
- **Expo Go recomendado:** Para desarrollo rápido sin necesidad de emuladores
- **Túnel para redes restrictivas:** Usa `--tunnel` si estás detrás de un firewall
- **Cache corrupto:** Ejecuta `npx expo start --clear` si hay problemas

## Uso de la Aplicación

### Pantalla de Categorías
- Muestra 4 categorías disponibles: Conocimientos Generales, Ciencia, Deportes e Historia
- Título centrado "Trivia Game" con subtítulo "Selecciona Categoría"
- Toca cualquier categoría para comenzar la trivia
- Diseño: Fondo morado con botones cyan
<div align="center">
  <img src="./screenshots/pantalla 1.jpg" width="250" alt="Pantalla de Categorías" />
</div>

### Pantalla de Preguntas 
- Muestra una pregunta a la vez con opciones múltiples
- Indicador de progreso: "Pregunta X de 5"
- Botón "← Volver" con confirmación de salida
- Retroalimentación visual:
  - Verde: Respuesta correcta ✓
  - Rojo: Respuesta incorrecta ✗
- Mensaje de feedback: "¡Correcto!" o "¡Incorrecto!"
- Transición automática de 1.5 segundos
<div align="center">
  <img src="./screenshots/pantalla 2.jpg" width="250" alt="Pantalla de Preguntas" />
</div>

### Pantalla de Resultados 
- Resumen de puntuación: "Has acertado X de 5"
- Porcentaje de aciertos
- Lista detallada de todas las preguntas:
  - Tu respuesta
  - Respuesta correcta
  - Indicador visual (✓ Correcto / ✗ Correcto: [respuesta])
- Botón "Jugar de nuevo" para reiniciar
<div align="center">
  <img src="./screenshots/pantalla 3.jpg" width="250" alt="Pantalla de Resultados" />
</div>

## Preguntas Incluidas

### Conocimientos Generales (5 preguntas)
- ¿Qué significa CPU?
- ¿Cuál es la capital de Francia?
- ¿En qué año llegó el hombre a la Luna?
- ¿Cuál es el océano más grande?
- ¿Quién pintó la Mona Lisa?

### Ciencia (5 preguntas)
- ¿Cuál es el planeta más grande del sistema solar?
- ¿Cuántos huesos tiene el cuerpo humano adulto?
- ¿Qué gas respiramos principalmente?
- ¿Cuál es la velocidad de la luz?
- ¿Qué órgano bombea la sangre?

### Deportes (5 preguntas)
- ¿En qué deporte se usa un birdie?
- ¿Cuántos jugadores hay en un equipo de fútbol?
- ¿Cada cuántos años son los Juegos Olímpicos?
- ¿En qué país se originó el kárate?
- ¿Cuántos sets se necesitan para ganar en tenis?

### Historia (5 preguntas)
- ¿En qué año comenzó la Segunda Guerra Mundial?
- ¿Quién fue el primer presidente de México?
- ¿Qué imperio construyó Machu Picchu?
- ¿En qué año cayó el Muro de Berlín?
- ¿Quién descubrió América?

## Características Técnicas

- **Navegación Stack:** Transiciones suaves entre pantallas con React Navigation
- **TypeScript:** Tipado estático para mayor seguridad y mantenibilidad
- **Diseño Responsivo:** Optimizado para diferentes tamaños de pantalla
- **Temas por Pantalla:** Colores distintivos para cada sección
- **Componentes Modulares:** Código organizado y reutilizable
- **Manejo de Estado:** Estado local con React Hooks (useState)
- **Validación en Tiempo Real:** Feedback inmediato al responder
- **Sistema de Alertas:** Confirmación nativa al salir de trivia

## Mejoras Futuras

- [ ] Integración con API de preguntas 
- [ ] Sistema de niveles de dificultad (Fácil, Medio, Difícil)
- [ ] Temporizador por pregunta
- [ ] Modo multijugador local
- [ ] Tabla de clasificación (leaderboard)
- [ ] Sistema de logros y badges
- [ ] Efectos de sonido
- [ ] Animaciones mejoradas
- [ ] Más categorías (Geografía, Entretenimiento, Arte, etc.)
- [ ] Base de datos expandida (50+ preguntas por categoría)
- [ ] Modo oscuro/claro
- [ ] Guardado de estadísticas del usuario

## Extensibilidad

### Agregar Nueva Categoría

```typescript
// En src/data/triviaData.ts
export const triviaData: Record<string, Question[]> = {
  // ... categorías existentes
  'Nueva Categoría': [
    {
      question: '¿Tu pregunta aquí?',
      options: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'],
      correct: 0 // Índice de la respuesta correcta (0-3)
    },
    // ... más preguntas
  ]
};

// En src/Screens/Trivia/CategoryScreen.tsx
const categories = [
  'Conocimientos Generales',
  'Ciencia',
  'Deportes',
  'Historia',
  'Nueva Categoría' // Agregar aquí
];
```

### Agregar Nueva Pantalla

```typescript
// Crear nuevo componente en src/Screens/
export function NewScreen({ navigation, route }: NewScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Contenido de la pantalla */}
    </SafeAreaView>
  );
}

// Registrar en App.tsx
<Stack.Screen name="NewScreen" component={NewScreen} />
```

## Solución de Problemas Comunes

| Problema | Solución |
|---|---|
| Error de instalación | `npm install --legacy-peer-deps` |
| Metro bundler corrupto | `npx expo start --clear` |
| Puerto ocupado | `npx expo start --port 8082` |
| Dependencias desactualizadas | `npx expo install --check` |
| Error de TypeScript | `npx tsc --noEmit` para verificar errores |
| Expo Go no conecta | Verificar que estén en la misma red WiFi |
| Error de cache | `rm -rf node_modules .expo && npm install` |

**Comandos útiles:**
```bash
# Verificar salud del proyecto
npx expo doctor

# Limpiar cache completamente
npx expo start --clear

# Reinstalar dependencias desde cero
rm -rf node_modules package-lock.json
npm install

# Verificar errores de TypeScript
npx tsc --noEmit

# Actualizar Expo CLI
npm install -g expo-cli@latest

# Ver logs detallados
npx expo start --verbose
```
