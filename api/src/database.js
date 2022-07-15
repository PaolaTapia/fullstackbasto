//conexion BD
import mongoose from 'mongoose';
import config from './config.js';

export async function connectDB() {
    try {
        const url = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`;
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        const db = await mongoose.connect(url, mongooseOptions);
        console.log(`Conectado a  MongoDB`, db.connection.name)
    } catch (error) {
        console.log(error)
    }
}


// (async () => {
//     try {
//         const url = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`;
//         const mongooseOptions = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//         const db = await mongoose.connect(url, mongooseOptions);
//         console.log(`Conectado a  MongoDB`, db.connection.name)
//     } catch (error) {
//         console.log(error)
//     }
// })()


// const MongoClient = require('mongodb').MongoClient;
