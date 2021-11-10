const express = require('express')
const app = express()
app.use('/', require('./routes'));
const supertest = require('supertest');
const server = app.listen();
const request = supertest.agent(server);

describe('Hello World', () => {
    test('Test', async () => {
        let reponse = await request.get('/');
        expect(reponse.text).toBe('Hello World!');
    })
})

afterAll(done => {
    server.close(done);
})