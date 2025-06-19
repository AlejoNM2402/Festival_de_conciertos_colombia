# 🎤👨‍🎤 Base de datos Festival de Conciertos en Colombia

## 🍃Consultas:

### 📑 Buscar bandas cuyo nombre comience por "A":
```js
db.bandas.find(
  {nombre: {$regex: /^A/, $options: "i"}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20111955.png)


### 📑 Buscar asistentes cuyo nombre contenga "Goméz":
```js
db.asistentes.find(
  {nombre: {$regex: /Gómez/, $options: "i"}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20112459.png)


### 📑 Buscar asistentes que tengan "Rock" dentro de sus generos favoritos:
```js
db.asistentes.find(
  {generos_favoritos: {$in: ["Rock"]}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20113815.png)


### 📑 Agrupar presentaciones por escenario y contar cuantas hay por cada uno:
```js
db.presentaciones.aggregate(
  {$group: {_id: "$escenario", total: {$sum: 1}}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20114530.png)


### 📑 Calcular el promedio de duración de cada presemtación en minutos:
```js
db.presentaciones.aggregate(
  {$group: {_id: null, promedio_duracion_minutos: {$avg: "$duracion_minutos"}}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20120105.png)




## 📡 Funciones:

### 🎭 1. Mostrar los escenarios que estan en una ciudad especifica:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20163844.png)

### 🎭 2. Mostrar las bandas activas de un genero especifico:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20164308.png)