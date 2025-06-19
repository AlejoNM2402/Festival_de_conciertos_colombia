const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://alejonaranjo:alejo2402@alejandro.zn6aqic.mongodb.net/";
const dbName = "festival_conciertos";

// Función 1: Buscar los escenarios que hay en una ciudad especifica
async function escenariosPorCiudad(ciudad) {
const client = new MongoClient(uri);

try {
    await client.connect();
    const db = client.db(dbName);
    const coleccion = db.collection('escenarios');

    const resultados = await coleccion.find({ ciudad }).toArray();

    if (resultados.length === 0) {
    console.log(`🚫No se encontraron escenarios en ${ciudad}`);
    } else {
    console.log(`🎭Escenarios en ${ciudad}:`);
    resultados.forEach(e => console.log(`- ${e.nombre}`));
    }
} catch (error) {
    console.error("Error:", error);
} finally {
    await client.close();
}
}

// Función 2: Buscar bandas activas de un genero especifico
async function bandasPorGenero(genero) {
const client = new MongoClient(uri);

try {
    await client.connect();
    const db = client.db(dbName);
    const coleccion = db.collection('bandas');

    const resultados = await coleccion.find({ genero: genero, activa: true }).toArray();

    if (resultados.length === 0) {
    console.log(`🚫No se encontraron bandas activas en el género ${genero}`);
    } else {
    console.log(`🥁Bandas activas en el género ${genero}:`);
    resultados.forEach(banda => console.log(`- ${banda.nombre}`));
    }
} catch (error) {
    console.error("Error:", error);
} finally {
    await client.close();
}
}

// Control de ejecución según argumento
const accion = process.argv[2];
const parametro = process.argv[3];

if (accion === "escenarios") {
if (!parametro) {
    console.log("Debes escribir una ciudad. Ejemplo:\nnode app.js escenarios Medellín");
} else {
    escenariosPorCiudad(parametro);
}
} else if (accion === "bandas") {
if (!parametro) {
    console.log("Debes escribir un género. Ejemplo:\nnode app.js bandas rock");
} else {
    bandasPorGenero(parametro);
}
} else {
console.log("Comando no reconocido. Usa uno de estos:");
console.log("node app.js escenarios <nombre_ciudad>");
console.log("node app.js bandas <genero>");
}

