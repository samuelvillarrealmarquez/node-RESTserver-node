//============
// Puerto
//===========
process.env.PORT = process.env.PORT || 3000;

//============
// Entorno
//===========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============
// vencimiento de token
//===========
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//============
// seed de autenticacion
//===========
process.env.seed = process.env.seed || 'ESTE-ES-ESL-SEED-DE-DESARROLLO';

//============
// Base de datos
//===========

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = process.env.mongo_link;
}

process.env.URLDB = urlDB;