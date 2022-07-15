import express from 'express';
import config from './config.js';
import animalsRoutes from './routes/animals.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.set('port', config.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(animalsRoutes);

export default app;