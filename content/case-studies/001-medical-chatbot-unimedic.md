---
title: Medical Chatbot Unimedic 🤖💬
excerpt:
  Unimedic is a chatbot capable of responding to different medical queries in
  real time. It also performs segmentation of medical images (especially brain
  images) using Deep Learning models, and then provides some recommendations.

iframe: //youtube.com/embed/QlRW-021JQw/?modestbranding=1&showinfo=0&autohide=1&rel=0
demo: https://youtu.be/QlRW-021JQw
src: //github.com/uniMedic

info:
  idea:
    The idea that motivated the development of the project was to facilitate
    medical analysis for patients and doctors, avoiding unnecessary medical
    appointments.
  tech: [Pytorch, FastAPI, React Native]
  links:
    - [Medtorch, https://github.com/medtorch]
---

### Motivation

This project was based on the [medtorch](https://github.com/medtorch) repository
(winner of the 2020 Pytorch hackathon). Both the application and the deployment
were very interesting processes, showing us in a challenging way how we could
tackle real-world problems with the help of various Deep Learning tools.

### Features

- ⚛️ Interface created with [React-Native](https://reactnative.dev/).
- 🍃 Authentication using [Mongo DB](https://www.mongodb.com/es).
- 🌀 Chatbot powered by
  [GiftedChat](https://github.com/FaridSafi/react-native-gifted-chat).
- 🔥 Powered backend with models built with
  [PyTorch](https://github.com/uniMedic/uniMedic-Models).

### Screens

#### Login

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/1.png" alt="Login Screen" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/3.png" alt="Login account" width="20.65%">
</p>

#### Intro

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/4.png" alt="Welcome uniMedic" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/5.png" alt="Let's get started!" width="20%">
</p>

#### Patient interface (chat)

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/6.png" alt="Invalid Image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/7.png" alt="Valid Image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/8.png" alt="Result with segmentation" width="20%">
</p>

#### Doctor interface

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/9.png" alt="Invalid Image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/10.png" alt="Valid Image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/11.png" alt="Result with segmentation" width="20%">
</p>
<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/12.png" alt="Invalid image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/13.png" alt="Valid Image" width="20%">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/15.png" alt="Result with segmentation" width="20%">
</p>

#### Diagnosis PDF

<p align="center">
  <img align="center" src="https://github.com/uniMedic/uniMedic-App/raw/main/src/images/screens/14.png" alt="Invalid image" width="60%">
</p>

## Installation & Setup

Follow [these steps](https://reactnative.dev/docs/environment-setup) to set up
your React Native environment. I also recommend that you follow
[this tutorial](https://youtu.be/lGxnOu-K4hU) in order to properly configure
Android Studio. To successfully connect your mobile phone and/or emulator, you
need to
[install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)
and set your environment variables.

Once you have installed the packages with `npm i`, you can run the following
command:

```bash
npm start
```

This will automatically open [Expo](https://expo.io/) in your browser. I
recommend you use [Expo Go](https://expo.io/) to run the app directly on your
phone without using the USB cable.

## Next steps

- 🐼 More PyTorch models for vision tasks (lungs, breasts).
