const test = require('tape');
const server = require('../component_combiner.js');
const hyperquest = require('hyperquest');

test('check the index route', t => {
  hyperquest.get('http://localhost:8000/', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, '200 status code, passed');
    console.log(server);
    server.init.close();
    t.end();
  });
});
