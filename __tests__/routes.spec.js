const request = require("supertest");
const server = require("../server");
describe ('API server', () => {
    let api;
    let testMyapi = {
        "day":'Saturday', 
        "games":'Manchester United vs Aston Villa'
    }
    beforeAll(() => {
        api = server.listen(3000, () => console.log('Test server running on port 3000'))},
    )},
    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    }));

