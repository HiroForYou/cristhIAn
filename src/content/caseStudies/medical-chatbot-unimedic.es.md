---
order: 2
title: Chatbot médico Unimedic 🤖💬
excerpt:
  Unimedic es un chatbot capaz de responder distintas consultas médicas en
  tiempo real. Además, segmenta imágenes médicas (sobre todo imágenes
  cerebrales) con modelos de Deep Learning y luego ofrece algunas
  recomendaciones.

iframe: //youtube.com/embed/QlRW-021JQw/?modestbranding=1&showinfo=0&autohide=1&rel=0
demo: https://youtu.be/QlRW-021JQw
src: //github.com/uniMedic

info:
  idea:
    La idea que motivó el desarrollo del proyecto fue facilitar el análisis
    médico a pacientes y doctores, evitando citas médicas innecesarias.
  tech: [Pytorch, FastAPI, React Native]
  links:
    - [Medtorch, https://github.com/medtorch]
---

### Motivación

Este proyecto se basó en el repositorio [medtorch](https://github.com/medtorch)
(ganador del hackathon de Pytorch 2020). Tanto la aplicación como el despliegue
fueron procesos muy interesantes, que nos mostraron de forma desafiante cómo
podíamos atacar problemas del mundo real con la ayuda de distintas herramientas
de Deep Learning.

### Funcionalidades

- ⚛️ Interfaz creada con [React-Native](https://reactnative.dev/).
- 🍃 Autenticación con [Mongo DB](https://www.mongodb.com/es).
- 🌀 Chatbot impulsado por
  [GiftedChat](https://github.com/FaridSafi/react-native-gifted-chat).
- 🔥 Backend potenciado con modelos construidos en
  [PyTorch](https://github.com/uniMedic/uniMedic-Models).

### Pantallas

#### Inicio de sesión

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/1.png" alt="Pantalla de inicio de sesión" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/3.png" alt="Inicio de sesión con cuenta" width="20.65%">
</p>

#### Introducción

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/4.png" alt="Bienvenida a uniMedic" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/5.png" alt="¡Empecemos!" width="20%">
</p>

#### Interfaz del paciente (chat)

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/6.png" alt="Imagen no válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/7.png" alt="Imagen válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/8.png" alt="Resultado con segmentación" width="20%">
</p>

#### Interfaz del doctor

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/9.png" alt="Imagen no válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/10.png" alt="Imagen válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/11.png" alt="Resultado con segmentación" width="20%">
</p>
<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/12.png" alt="Imagen no válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/13.png" alt="Imagen válida" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/15.png" alt="Resultado con segmentación" width="20%">
</p>

#### PDF de diagnóstico

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/14.png" alt="Imagen no válida" width="60%">
</p>

## Instalación y configuración

Sigue [estos pasos](https://reactnative.dev/docs/environment-setup) para
configurar tu entorno de React Native. También te recomiendo seguir
[este tutorial](https://youtu.be/lGxnOu-K4hU) para configurar bien Android
Studio. Para conectar sin problemas tu celular y/o emulador, necesitas
[instalar ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)
y configurar tus variables de entorno.

Una vez que hayas instalado los paquetes con `npm i`, puedes ejecutar el
siguiente comando:

```bash
npm start
```

Esto abrirá automáticamente [Expo](https://expo.io/) en tu navegador. Te
recomiendo usar [Expo Go](https://expo.io/) para correr la app directamente en
tu celular sin usar el cable USB.

## Próximos pasos

- 🐼 Más modelos de PyTorch para tareas de visión (pulmones, mamas).
