---
order: 1
title: Sistema de detección de células sanguíneas 🔬🩸
excerpt:
  Este trabajo propone un sistema rápido y económico para reconocer 3 tipos de células sanguíneas usando redes convolucionales. Nuestro modelo de DL destaca por sus tiempos de inferencia reducidos y por lo fácil que es desplegarlo en hardware con pocos recursos, como una Raspberry Pi.

iframe: //youtube.com/embed/IHtdHIqkBQ8/?modestbranding=1&showinfo=0&autohide=1&rel=0 
demo: https://youtu.be/IHtdHIqkBQ8
src: //github.com/Enigma-A-I/RasPi-BloodView

info:
  idea:
    La idea principal de este proyecto es ofrecer un sistema de análisis de sangre fácil de usar y muy preciso.
  tech: [Pytorch, Flask, Raspberry]
  links:
    - [ Pytorch ARM, https://mathinf.eu/pytorch/arm64/ ]
---

### Antes de empezar
Hoy en día muchas tareas de Deep Learning corren en dispositivos de bajo costo (sin necesidad de procesar en la nube), lo que se conoce como Edge AI. Entre los dispositivos más populares está la Raspberry Pi, que tiene una arquitectura ARM capaz de ejecutar la inferencia de un modelo con relativa facilidad.

Por otro lado, después de ponerme de acuerdo con mis dos amigos (Cesar y Alexander), nos lanzamos a buscar una aplicación que tuviera impacto en el mundo real. Al final elegimos un proyecto de medicina, más específicamente, un sistema de detección de células sanguíneas. Así arrancó este proyecto, cuya primera versión terminamos después de unos 2 meses y que te presento a continuación.

### El problema

El Perú se caracteriza (hasta hoy) por una notable desigualdad en el acceso a servicios básicos de salud, con un fuerte contraste entre las zonas urbanas y rurales; en estas últimas la atención médica es precaria (y los pobladores se ven obligados a trasladarse a las ciudades). En ese contexto, investigamos las principales enfermedades que afectan a esta población y encontramos que gran parte de los niños sufre de desnutrición y/o anemia. ¿Podríamos detectar la anemia sin equipos especializados? ¿Quizás podríamos empezar por algo simple?

La idea principal es poder llevar un conteo de los distintos componentes de la sangre y estimar la cantidad de glóbulos rojos por mililitro de sangre (densidad). Así podríamos dar un diagnóstico rápido sobre la presencia de anemia.

### Sistema de detección de células sanguíneas 

Con todo este contexto, implementamos un modelo de detección de objetos (basado en Yolo v5), entrenado con un dataset público de células sanguíneas y con tiempos de inferencia relativamente bajos. Además, diseñamos una interfaz web intuitiva que les facilita la vida a los usuarios de nuestra aplicación, permitiéndoles ver los resultados del análisis de sangre de forma gráfica.

El sistema está pensado para ejecutarse desde una Raspberry que sirve el modelo, y es accesible desde cualquier dispositivo que se conecte al host (sin necesidad de conexión a internet).

Para ver cómo funciona el sistema, mira el [video](https://youtu.be/IHtdHIqkBQ8) de demostración.

### Demo

[![RasPi-BloodView](https://github-readme-stats.vercel.app/api/pin/?username=Enigma-A-I&repo=RasPi-BloodView&show_owner=true)](https://github.com/Enigma-A-I/RasPi-BloodView)

Para correr la aplicación, ejecuta el siguiente comando dentro de la carpeta `web`.
```bash
python index.py
```
A continuación, la interfaz móvil del sistema.

<p align="center">
  <img src="https://github.com/Enigma-A-I/RasPi-BloodView/raw/master/Blood-Detector/web/static/images/hero/final_mobile.gif" />
</p>

### No todo es perfecto, y lo sabemos
Como primer paso estuvo bien, pero nos topamos con muchos problemas. En primer lugar, seguimos teniendo un tiempo de inferencia relativamente alto (y eso no nos conviene si queremos hacer detección en videos); aunque intentamos cuantizar el modelo, no obtuvimos los resultados esperados. Otro problema, muy ligado al anterior, es que al parecer hacer pruning al modelo no ayuda tanto como pensábamos. El tercer problema es que falta un módulo que estime la densidad de glóbulos rojos y prediga si el paciente tiene anemia o no.

Aunque tenemos muchos problemas por resolver, también tenemos un adelanto de posibles soluciones, que listo a continuación (para implementarlas en una segunda versión mejorada de nuestro sistema):

- Usar una versión destilada de YOLO
- Usar un backbone más rápido
- Seguir intentando cuantizar el modelo
- Usar un modelo más reciente, distinto de Yolo, y con un tiempo menor (posiblemente una versión destilada de DERT)

### Agradecimientos especiales 🙏🏽
Muchas gracias a los miembros de ENIGMA-AI (Cesar y Alexander) por el compromiso que mostraron en el proyecto. Este trabajo no habría sido posible sin el apoyo del equipo.

Espero que les haya gustado el proyecto. Y no olviden darle una estrella
en [Github](https://github.com/Enigma-A-I/RasPi-BloodView).
