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

describe('Cache test', () => {
    test('Post', async () => {
        let response = await request.post('/cache/testing');
        expect(response.text).toBe('OK');
    })
    
    test('Get', async () => {
        let response = await request.get('/cache/testing');
        expect(response.text).toBe('testing');
        console.log(`rhost${process.env.rhost.split('')}`)
        console.log(`rport${process.env.rport.split('')}`)
    })
})

afterAll(done => {
    server.close(() => {
        require('./redis-helper').quit(done);
    });
})