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

  if (text === undefined) {
    res
      .status(400)
      .send(
        'Please include a "text" attribute in your request: {"text": "your message here"}'
      );
  } else {
    res.status(200).send(parser(text));
  }
});

app.use(bodyParser.json());
app.use(logger);

export default app;
