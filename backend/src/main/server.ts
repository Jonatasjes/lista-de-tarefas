import express from 'express';
import cors from 'cors';
import routes from './routes';
import CustomError from './middleware/errors/CustomError';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.use(CustomError);

const port = process.env.PORT || 3333;

const DB = process.env.DATABASE_LOCAL || 'mongodb://localhost:27017/todoList';

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connection established with ${DB}`));

server.listen(port, () => {
  console.log(`Server listener on port ${port}! 💥 `);
});