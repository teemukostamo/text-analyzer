import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import parser from './src/controllers/parser';
import logger from './src/middleware/logger';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

interface CustomReq extends Request {
  body: {
    text: string;
  };
}

app.post('/analyze', (req: CustomReq, res: Response) => {
  const { text } = req.body;
  const testData = parser(text);
  console.log(testData);
  res.status(200).send(text);
});

app.use(bodyParser.json());
app.use(logger);

export default app;
