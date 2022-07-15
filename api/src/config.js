import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT);

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'db1',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    PORT: process.env.PORT || 3000,
}