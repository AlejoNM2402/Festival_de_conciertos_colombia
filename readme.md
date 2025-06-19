# 🎤👨‍🎤 Base de datos Festival de Conciertos en Colombia

## 🍃 Consultas:

### 📑Buscar bandas cuyo nombre comience por "A":
```js
db.bandas.find(
  {nombre: {$regex: /^A/, $options: "i"}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20111955.png)


### 📑Buscar asistentes cuyo nombre contenga "Goméz":
```js
db.asistentes.find(
  {nombre: {$regex: /Gómez/, $options: "i"}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20112459.png)


### 📑Buscar asistentes que tengan "Rock" dentro de sus generos favoritos:
```js
db.asistentes.find(
  {generos_favoritos: {$regex: /Rock/, $options: "i"}}
)

```
#### Resultado:
![evidencia](evidencias/Captura%20de%20pantalla%202025-06-19%20112910.png)

