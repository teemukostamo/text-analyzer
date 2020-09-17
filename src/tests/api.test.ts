/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import supertest from 'supertest';
import app from '../../app';

const api = supertest(app);

test('bad request returns 400', async () => {
  const requestBody = {
    foo: 'bar',
  };

  await api.post('/analyze').send(requestBody).expect(400);
});

test('correct request returns 200', async () => {
  const requestBody = {
    text: 'this is a correct format request',
  };
  const test = await api.post('/analyze').send(requestBody);
  console.log(test.body);
  await api
    .post('/analyze')
    .send(requestBody)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('word count is right', async () => {
  const requestBody = {
    text: 'here are four words',
  };
  const result = await api.post('/analyze').send(requestBody);
  expect(result.status).toEqual(200);
  expect(result.body.wordCount).toEqual(4);
});

test('text length count is right', async () => {
  const requestBody = {
    text: 'text length without spaces is 44 and with spaces is 54',
  };
  const result = await api.post('/analyze').send(requestBody);
  expect(result.status).toEqual(200);
  expect(result.body.textLength.withSpaces).toEqual(54);
  expect(result.body.textLength.withoutSpaces).toEqual(44);
});

test('character count is right', async () => {
  const data = [
    {
      a: 4,
    },
    {
      e: 2,
    },
    {
      g: 2,
    },
    {
      i: 2,
    },
    {
      k: 2,
    },
    {
      n: 2,
    },
    {
      s: 2,
    },
    {
      t: 4,
    },
    {
      y: 4,
    },
  ];
  const requestBody = {
    text: 'testing testing yykaa yykaa',
  };
  const result = await api.post('/analyze').send(requestBody);
  expect(result.status).toEqual(200);
  expect(result.body.characterCount).toEqual(data);
});
