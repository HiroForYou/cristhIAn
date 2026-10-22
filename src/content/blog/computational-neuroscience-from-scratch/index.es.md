---
title: 'Aprendiendo neurociencia computacional desde cero: 18 semanas, 9 demos en el navegador y datos cerebrales reales'
date: 2026-10-16
author: Cristhian Wiki
tags: ['neurociencia', 'python', 'fnirs', 'educación']
excerpt: 'Puedo entrenar una red neuronal, pero no sabía explicar una neurona de verdad. Así que me armé una ruta de 18 semanas, un set de demos en el navegador, y terminé analizando datos cerebrales reales.'
cover: ./images/demo-fnirs.webp
seoTitle: 'Neurociencia computacional desde cero: ruta de 18 semanas'
seoDescription: 'Ruta de 18 semanas de neurociencia computacional: modelos LIF y Hodgkin-Huxley, 9 demos interactivas y un análisis fNIRS con datos cerebrales reales.'
---

Casi todo lo que he escrito en este blog trata sobre redes neuronales artificiales. Capas, funciones
de pérdida, optimizadores. Y durante mucho tiempo eso me bastó. Hasta que un día me di cuenta de que
podía entrenar un transformer, pero no sabía explicar por qué dispara una neurona de verdad. La
palabra "neurona" en mi propio código era prestada, y nunca me había detenido a ver de dónde venía.

Así que me puse un proyecto: aprender neurociencia computacional en serio, y hacerlo de la única
forma en que a mí se me queda: construyendo cada modelo, rompiéndolo y comprobando si de verdad lo
había entendido.

![Neurona leaky integrate-and-fire animada: el voltaje integra una entrada constante, cruza el umbral, dispara y se reinicia](./images/lif-neuron.svg)

Esa pequeña traza es donde empezó todo. Es la neurona leaky integrate-and-fire (LIF): el voltaje se
carga como un capacitor con fugas, llega a un umbral, dispara y se reinicia. Es casi vergonzosamente
simple, y aun así volví a ella más que a cualquier otro modelo.

## Dieciocho semanas, a propósito

Quería un plan que de verdad pudiera terminar junto con un trabajo a tiempo completo, así que me
quedé con 18 semanas de 5 a 8 horas cada una. El primer bloque trata sobre neuronas individuales
(LIF, Hodgkin-Huxley, sinapsis). El segundo pasa a dinámica y redes: puntos fijos, poblaciones que
oscilan, memorias de Hopfield, trenes de spikes con ruido. El tercero se enfoca en ajustar modelos a
datos, y el último es una especialización y un proyecto final.

![La ruta de 18 semanas en cuatro bloques: herramientas y excitabilidad, dinámica y redes, ajuste y poblaciones, síntesis](./images/roadmap.svg)

La mayor parte del material viene del currículo de [Neuromatch Academy](https://compneuro.neuromatch.io/),
que es gratuito y excelente. Mi ruta solo enlaza a él; el código y los notebooks son mi propia
versión de cada tema.

## Las figuras que me mintieron

Todas las semanas terminan igual: un script de Python que corre un experimento, dibuja una figura y
luego verifica el resultado con unos cuantos `assert`. El notebook que ves en GitHub se genera a
partir de ese script, así que hay una sola fuente que mantener al día, y un test falla si ambos se
desincronizan.

Al principio las verificaciones me parecían exageradas. Esa sensación no me duró mucho.

En la semana 4 bloqueé los canales de potasio de una neurona de Hodgkin-Huxley para ver qué le pasaba
al potencial de acción. El gráfico mostraba una gran variación de voltaje justo al inicio, antes de
cualquier estímulo, y por un rato intenté explicarlo como algo biológico. No lo era. Estaba
arrancando la simulación en -65 mV, un potencial de reposo que simplemente no existe una vez que
quitas el potasio; el equilibrio real está por encima de -20 mV. La neurona solo estaba cayendo
hacia él. En la semana 13, el texto mencionaba errores estándar de un modelo de Poisson que el código
nunca calculaba. Ambas cosas se veían perfectamente razonables en la página.

La semana 3 tiene mi tipo de verificación favorito. La tasa de disparo simulada tiene que caer sobre
la curva f-I analítica, punto por punto, y nada dispara por debajo de la reobase de 1.5 nA:

![Semana 3: voltaje LIF para tres corrientes de entrada, y la curva f-I simulada sobre la analítica](./images/week03-lif.png)

Y la semana 8 fue donde la dinámica por fin me hizo clic. El mismo circuito de Wilson-Cowan, las
mismas conexiones; solo cambia la entrada, y las poblaciones se quedan en silencio, empiezan a
oscilar o se saturan:

![Semana 8: poblaciones excitatorias e inhibitorias de Wilson-Cowan para entrada baja, media y alta, con ceroclinas y el ciclo límite](./images/week08-wilson-cowan.png)

## Los sliders le ganan a los párrafos

Leer que un sistema "atraviesa una bifurcación de Hopf" me servía de muy poco. Arrastrar un slider
hasta que un punto fijo se convierte en una órbita me servía muchísimo. Así que los modelos clave
también tienen su propia página: HTML y JavaScript puros, nada que instalar, y funcionan en el
celular.

![El módulo de Hodgkin-Huxley: potencial de acción, variables de compuerta y corrientes iónicas](./images/demo-hodgkin-huxley.webp)

Ahora son nueve:

| Módulo | Para qué lo uso |
| --- | --- |
| [Neurona LIF](https://hiroforyou.github.io/computational-neuroscience/interactive/lif.html) | Ver cómo el ruido convierte un disparo regular en irregular |
| [Hodgkin-Huxley](https://hiroforyou.github.io/computational-neuroscience/interactive/hodgkin-huxley.html) | Ver qué hace cada compuerta durante un spike |
| [Sinapsis](https://hiroforyou.github.io/computational-neuroscience/interactive/sinapsis.html) | Qué tan cerca deben estar dos entradas para sumarse |
| [Sistemas lineales 2D](https://hiroforyou.github.io/computational-neuroscience/interactive/sistemas-lineales.html) | Explorar a punta de clics el plano traza-determinante |
| [Wilson-Cowan](https://hiroforyou.github.io/computational-neuroscience/interactive/wilson-cowan.html) | Encontrar la entrada donde empiezan las oscilaciones |
| [Red de Hopfield](https://hiroforyou.github.io/computational-neuroscience/interactive/hopfield.html) | Corromper un recuerdo y ver cómo vuelve |
| [Trenes de spikes de Poisson](https://hiroforyou.github.io/computational-neuroscience/interactive/poisson.html) | Cómo un periodo refractario cambia lo "aleatorio" |
| [Decisión bayesiana](https://hiroforyou.github.io/computational-neuroscience/interactive/decision-bayesiana.html) | Mover el prior y la frontera de decisión |
| [fNIRS con datos reales](https://hiroforyou.github.io/computational-neuroscience/interactive/fnirs.html) | El de más abajo |

![El módulo de Hopfield: patrones almacenados, una sonda con ruido y la energía mientras la red se estabiliza](./images/demo-hopfield.webp)

Hacer que funcionaran en el celular fue más fastidioso que construirlos. Los gráficos se veían
estirados en mi teléfono porque cada redibujado escalaba el canvas por el pixel ratio una vez más. Y
ni siquiera podía probar un ancho de celular real en mi laptop, porque Windows no deja que una
ventana del navegador sea mucho más angosta que 500 px, así que terminé revisando cada página dentro
de un marco de 390 px.

## Luego quise datos reales

Las simulaciones solo te llevan hasta cierto punto. En algún momento quieres ver una señal que salió
de una cabeza de verdad. Encontré [Cedalion](https://github.com/ibs-lab/cedalion), un framework de
Python para fNIRS, una técnica que mide cambios en la oxigenación de la sangre a través del cuero
cabelludo usando luz infrarroja cercana. Su tutorial usa un experimento clásico: mueves los dedos de
una mano dando golpecitos, y la corteza motora del lado **opuesto** debería recibir más sangre
oxigenada.

Analicé a un sujeto en un notebook, usando los primeros 1000 segundos del registro, 8 ensayos por
mano. (Con el registro completo, el ajuste del modelo tardaba más de media hora, demasiado para algo
que quería volver a correr seguido).

La mano izquierda funcionó de maravilla. Doce canales mostraron un aumento significativo de
hemoglobina oxigenada, y 11 de ellos estaban en el hemisferio derecho, justo donde debían estar. El
más fuerte alcanzó su pico unos 8 segundos después de empezar los golpecitos, y un simple promedio
por bloques, sin ningún modelo, coincidió con la respuesta ajustada con r = 0.88. La mano derecha
apuntaba en la misma dirección, pero ningún canal sobrevivió a la corrección por comparaciones
múltiples. Con 8 ensayos, esa la dejo abierta.

De lo que más aprendí fue de un error que casi me quedo. El tutorial original compara los golpecitos
contra una condición de "Control", y yo hice lo mismo. La mano derecha salió bilateral, lo cual no
tenía sentido. Al mirar con más detalle, la propia condición de Control estaba **bajando** la
oxigenación en 10 canales, así que al restarla esas caídas aparecían como activaciones. Comparar
contra el reposo hizo que el patrón desapareciera. Había tratado la elección de la línea base como un
detalle de código, y en realidad era parte de la pregunta que estaba haciendo.

### Una licencia que casi se me pasa

Cuando quise poner estos datos en una demo pública, leí bien el README del dataset:

> Please use only for Cedalion example notebooks. No other use permitted.

Así que el notebook descarga esos datos cuando se ejecuta, y el repositorio nunca los incluye. Para la demo me cambié a un dataset abierto,
[fNIRS Finger Tapping Data in BIDS Format](https://doi.org/10.5281/zenodo.5529797), de Robert Luke
y David McAlpine, con 5 sujetos y 30 ensayos por condición. Un script corre el mismo análisis sobre
todos ellos en unos 18 minutos y escribe los resultados en un archivo que la página carga directamente.

![El módulo de fNIRS: mapa de la cabeza con canales coloreados según el efecto, respuesta en el tiempo y panel de lateralización](./images/demo-fnirs.webp)

Puedes elegir un sujeto o el promedio del grupo y darle play para ver cómo la respuesta se va
formando sobre la corteza motora y se desvanece después de los 10 segundos de golpecitos. La
lateralización sale contralateral en 9 de las 10 combinaciones de sujeto y mano, lo cual fue un
alivio después del drama con un solo sujeto.

## Dónde está ahora

Las 18 semanas tienen su script y su notebook, cada uno validado. Las nueve demos están en línea. La
extensión de fNIRS tiene su notebook y su demo. Todavía faltan plasticidad sináptica y reinforcement
learning, y son lo siguiente en la lista. El código tiene licencia MIT, y cada dataset mantiene sus
propios términos.

Nada de esto reemplaza un curso de verdad ni los papers, y la parte de fNIRS es para aprender, no
para nada clínico. Pero ahora tengo algo que no tenía cuando empecé: para cada modelo de la ruta,
puedo adivinar qué va a hacer un cambio de parámetro, correrlo y descubrir si tenía razón. Casi
siempre no la tengo, y esa es la parte útil.

Si quieres darle una mirada:

- Código y notebooks: [github.com/HiroForYou/computational-neuroscience](https://github.com/HiroForYou/computational-neuroscience)
- Módulos interactivos: [hiroforyou.github.io/computational-neuroscience/interactive](https://hiroforyou.github.io/computational-neuroscience/interactive/)
- El paper del tutorial de Cedalion: Middell, E. et al. (2026), *Neurophotonics* 13(S3), S32602, [doi:10.1117/1.NPh.13.S3.S32602](https://doi.org/10.1117/1.NPh.13.S3.S32602)
