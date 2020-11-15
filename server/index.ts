import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotevn from 'dotenv';
import companyRouter from './api/routes/company';
import founderRouter from './api/routes/founder';
import DataBase from './database';

dotevn.config();

const app = express();

app.use(bodyParser.json());

const db = new DataBase();
db.connect();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get('/', (req, res) => res.send('Hello from Techstars Full Stack Challenge Backend API'));
app.use('/api/company', companyRouter);
app.use('/api/founder', founderRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
