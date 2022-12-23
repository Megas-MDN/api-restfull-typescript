import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import { connectDB } from './database/db';
import { route as carsRoute } from './routers/carsRouter';

config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
connectDB();

app.use(carsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'TaOk' });
});

app.listen(port, () => console.log('Server ON plus'));
