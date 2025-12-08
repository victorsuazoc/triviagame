# Trivia Game

- **Nombre de la App:** Trivia Game
- **Asignatura/Profesor:** Desarrollo de aplicaciones para dispositivos móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Octubre 2025
- **Estudiante:** Victor Manuel Suazo Carrera
- **URL del Repositorio:** [https://github.com/victorsuazoc/triviagame](https://github.com/victorsuazoc/triviagame)

## Descripción

Trivia Game es una aplicación móvil desarrollada con React Native, TypeScript y Expo que permite a los usuarios poner a prueba sus conocimientos en diferentes categorías. La aplicación cuenta con una interfaz colorida y moderna con retroalimentación visual inmediata, navegación fluida entre pantallas y un sistema de puntuación detallado.

## Características Principales

- 🎯 **Múltiples Categorías:** Conocimientos Generales, Ciencia, Deportes e Historia
- ❓ **Sistema de Preguntas:** 5 preguntas de opción múltiple por categoría
- ✅ **Retroalimentación Visual:** Indicadores de respuesta correcta (verde) e incorrecta (roja)
- 📊 **Sistema de Puntuación:** Cálculo de porcentaje de aciertos
- 📝 **Revisión Detallada:** Pantalla de resultados con todas las respuestas
- 🔄 **Navegación Confirmada:** Alertas de confirmación al salir de una trivia
- 🎨 **Interfaz Moderna:** Diseño colorido con logo personalizado

## Funcionalidades Implementadas

- Selección de categoría desde pantalla principal
- Presentación secuencial de preguntas con opciones múltiples
- Validación automática de respuestas con cambio de color
- Mensaje de feedback inmediato (¡Correcto! ✓ / ¡Incorrecto! ✗)
- Transición automática entre preguntas (1.5 segundos)
- Botón de regreso con confirmación de salida
- Pantalla de resultados con resumen detallado y porcentaje
- Opción de "Jugar de nuevo" para reiniciar
- Logo personalizado en todas las pantallas
- Splash screen y app icon personalizados
- Diseño responsivo y optimizado para móviles

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

- **NPM:** 9.0.0+
```bash
npm --version
```

- **Expo CLI:** v6.3.0+
```bash
npx expo --version
```

- **Dispositivo móvil con Expo Go** o **Emulador Android/iOS**
  - Descargar Expo Go: [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Estructura del Proyecto

```
triviagame/
├── App.tsx                        # Componente principal con navegación
├── app.json                       # Configuración de Expo
├── eas.json                       # Configuración de EAS Build
├── package.json                   # Dependencias y scripts
├── tsconfig.json                  # Configuración de TypeScript
├── assets/                        # Recursos estáticos
│   ├── icon.png                   # Ícono de la app
│   ├── splash-icon.png                 # Pantalla de carga
│   ├── adaptive-icon.png          # Ícono adaptativo Android
│   └── trivia-logo.png            # Logo para pantallas
├── apk/                           # APK para distribución
│   └── trivia-game.apk            # Aplicación instalable
├── screenshots/                   # Capturas de pantalla
│   ├── pantalla 1.jpg
│   ├── pantalla 2.jpg
│   └── pantalla 3.jpg
└── src/
    ├── Screens/                   # Pantallas de la aplicación
    │   └── Trivia/
    │       ├── index.ts
    │       ├── CategoryScreen.tsx # Pantalla de categorías
    │       ├── QuestionScreen.tsx # Pantalla de preguntas
    │       └── ResultsScreen.tsx  # Pantalla de resultados
    ├── data/                      # Datos de la aplicación
    │   └── triviaData.ts          # Base de datos de preguntas
    └── services/                  # Servicios (API)
        └── triviaApiService.ts    # Servicio para API externa
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/victorsuazoc/triviagame
cd triviagame

# Instalar dependencias
npm install

# Instalar dependencias de navegación
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context expo-linear-gradient
```

## Comando de Creación del Proyecto

Este proyecto fue creado utilizando el template oficial de Expo con TypeScript:

```bash
npx create-expo-app@latest --template blank-typescript
```

## Ejecución

```bash
# Iniciar servidor de desarrollo
npx expo start

# Limpiar caché y reiniciar
npx expo start --clear

# Iniciar con túnel (para redes restrictivas)
npx expo start --tunnel
```

### En dispositivo físico (Recomendado):
1. Instala Expo Go en tu dispositivo móvil
2. Ejecuta `npx expo start`
3. Escanea el código QR con la cámara (iOS) o con Expo Go (Android)

### En emulador/simulador:
```bash
# Android (requiere Android Studio)
npx expo start --android

# iOS (solo macOS, requiere Xcode)
npx expo start --ios
```

## 📲 Descargar e Instalar la APK

### **Descarga Directa**

📥 [**Descargar trivia-game.apk**](./apk/trivia-game.apk)

### **Instalación en Android**

1. **Habilitar instalación de fuentes desconocidas:**
   - Ve a **Configuración** → **Seguridad** → **Instalar apps desconocidas**
   - Selecciona el navegador o app con la que descargaste la APK
   - Activa **"Permitir de esta fuente"**

2. **Instalar la APK:**
   - Abre el archivo `trivia-game.apk` descargado
   - Toca **"Instalar"**
   - Espera a que termine la instalación (unos segundos)

3. **Abrir la aplicación:**
   - Busca "Trivia Game" en tus aplicaciones
   - Toca el ícono para abrir
   - ¡Disfruta jugando! 🎮

### **Requisitos del Sistema**
- 📱 **Android:** 5.0 (Lollipop) o superior
- 💾 **Espacio:** ~50 MB libres
- 📶 **Internet:** Opcional (la app funciona offline con preguntas guardadas)

### **Información Técnica**
- **Versión:** 1.0.0
- **Package:** com.victorsuazoc.triviagame
- **Tamaño:** ~45 MB
- **Permisos:** Internet (para API de preguntas)

### **Nota de Seguridad**
Esta APK está firmada digitalmente y es segura. El aviso de "fuente desconocida" aparece porque no está publicada en Google Play Store. Es una práctica común para apps en desarrollo o distribución directa.

## Capturas de Pantalla

### Pantalla de Categorías (Morada)
<div align="center">
  <img src="./screenshots/pantalla 1.jpg" width="300" alt="Pantalla de Categorías" />
</div>

- Logo personalizado "Trivia Game"
- 4 categorías disponibles
- Diseño morado vibrante con botones cyan

---

### Pantalla de Preguntas (Cyan)
<div align="center">
  <img src="./screenshots/pantalla 2.jpg" width="300" alt="Pantalla de Preguntas" />
</div>

- Indicador de progreso (Pregunta X de 5)
- Botón "← Volver" con confirmación
- Respuesta correcta en verde ✓
- Respuesta incorrecta en rojo ✗
- Mensaje de feedback inmediato

---

### Pantalla de Resultados (Roja)
<div align="center">
  <img src="./screenshots/pantalla 3.jpg" width="300" alt="Pantalla de Resultados" />
</div>

- Puntuación total y porcentaje
- Lista detallada de todas las respuestas
- Botón "Jugar de nuevo"

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

- **Navegación Stack:** Transiciones suaves con React Navigation
- **TypeScript:** Tipado estático para mayor seguridad
- **Componentes Modulares:** Código organizado y reutilizable
- **Manejo de Estado:** React Hooks (useState, useEffect)
- **Validación en Tiempo Real:** Feedback inmediato al responder
- **Sistema de Alertas:** Confirmación nativa con Alert
- **Diseño Responsivo:** Optimizado para diferentes pantallas
- **Assets Personalizados:** Logo, ícono y splash screen propios

## Solución de Problemas Comunes

| Problema | Solución |
|---|---|
| Error de instalación | `npm install --legacy-peer-deps` |
| Metro bundler corrupto | `npx expo start --clear` |
| Puerto ocupado | `npx expo start --port 8082` |
| Expo Go no conecta | Verificar misma red WiFi |
| Error de cache | `rm -rf node_modules .expo && npm install` |

**Comandos útiles:**
```bash
# Verificar salud del proyecto
npx expo doctor

# Limpiar cache completamente
npx expo start --clear

# Verificar errores de TypeScript
npx tsc --noEmit
```

## Construcción de la APK

La APK fue generada usando **EAS Build** de Expo:

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Iniciar sesión
eas login

# Configurar proyecto
eas build:configure

# Crear APK
eas build -p android --profile preview
```

## Autor

**Victor Manuel Suazo Carrera**
- GitHub: [@victorsuazoc](https://github.com/victorsuazoc)
- Email: suacmanuel@gmail.com

## Agradecimientos

- M.C. Leonel González Vidales - Profesor de Desarrollo de Aplicaciones Móviles
- Comunidad de React Native y Expo
- The Trivia API por proporcionar preguntas para pruebas

---

⭐️ Si te gustó este proyecto, dale una estrella en GitHub

Desarrollado con ❤️ usando React Native, TypeScript y Expo | 2025
