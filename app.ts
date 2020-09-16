import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/middleware/logger';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use(bodyParser.json());
app.use(logger);

export default app;
