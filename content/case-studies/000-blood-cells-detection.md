---
title: Blood Cells Detection System 🔬🩸
excerpt:
  This work proposes a fast and inexpensive system for the recognition of 3 types of blood cells based on convolutional networks. Our DL model is characterized by having reduced inference times, and also ease of deployment in hardware with reduced resources such as a Raspberry Pi.

iframe: //youtube.com/embed/IHtdHIqkBQ8/?modestbranding=1&showinfo=0&autohide=1&rel=0 
demo: https://youtu.be/IHtdHIqkBQ8
src: //github.com/Enigma-A-I/RasPi-BloodView

info:
  idea:
    The main idea of this project is to be able to provide a blood analysis system, characterized by being easy to use and very accurate.
  tech: [Pytorch, Flask, Raspberry]
  links:
    - [ Pytorch ARM, https://mathinf.eu/pytorch/arm64/ ]
---

### Before starting
Currently many Deep Learning tasks run on low-cost devices (without the need for cloud processing), which is known as Edge AI. Among the most popular devices, we have the Rasberry PI, which has an ARM architecture that can perform model inference with relative ease.

On the other hand, after coordinating with my two friends (Cesar and Alexander), we embarked on the search for an application that has an impact in the real world. Finally we chose a medicine project, more specifically, a blood cell detection system. And this is how we started this project, finishing the first version after about 2 months, which I present below.

### The problem

Peru is characterized (to date) by having a notable inequality in access to basic health services, contrasting with urban and rural areas; where the latter has a precarious medical assistance (the inhabitants are forced to move to the cities). In this context, we investigated the main disease rates that afflict this population, finding that a large part of the children suffer from malnutrition and / or anemia. Could we detect anemia without specialized equipment? Maybe we could start with something simple to achieve it?

The main idea is to be able to keep a count of the different blood components, and to be able to make an estimate of the number of red blood cells per milliliter of blood (density). In this way, we could give a quick diagnosis of the presence of anemia.

### Blood Cells Detection System 

With all this background, we implemented an object detection model (based on Yolo v5), trained on a public blood cell dataset, and whose inference times are relatively low. In addition, we designed an intuitive web interface that is helpful for the users of our application, allowing them to obtain blood test results graphically.

The system has been designed to be executed from a raspberry that will serve the model, and it will be accessible from any device that connects to the host (without the need for an internet connection).

To see how the system works, watch the demo [video](https://youtu.be/IHtdHIqkBQ8).

### Demo

[![RasPi-BloodView](https://github-readme-stats.vercel.app/api/pin/?username=Enigma-A-I&repo=RasPi-BloodView&show_owner=true)](https://github.com/Enigma-A-I/RasPi-BloodView)

To run the application, inside the `web` folder execute the following command.
```bash
python index.py
```
Below is a mobile interface of the system.

<p align="center">
  <img src="https://github.com/Enigma-A-I/RasPi-BloodView/raw/master/Blood-Detector/web/static/images/hero/final_mobile.gif" />
</p>

### Not everything is perfect, and we know it
To be a first step, it was good, but we ran into a lot of problems. In the first place, we continue to obtain a relatively high inference time (and this does not suit us if we want to be able to do detection in videos), although we tried to quantize the model, we did not obtain the desired results. Another problem that is closely related to the previous one is that apparently pruning the model does not help as we thought. The third problem is the lack of a module that estimates the density of red blood cells, and predicts whether the patient has anemia or not.

Although we have many problems to solve, we also have an advance of possible solutions, which I will list below (to be able to perform in a second improved version of our system):

- Using a distilled version of Yolo
- Use a faster backbone
- Keep trying to quantize the model
- Use a newer model, different from Yolo, and that has a shorter time (a distilled version of DERT possibly)

### Special thanks 🙏🏽
Many thanks to the members of ENIGMA-AI (Cesar and Alexander) for the commitment presented in the project. This work would not have been possible without team support.

I hope you guys liked the project. And make sure to give it a star
on [Github](https://github.com/Enigma-A-I/RasPi-BloodView).