const test = require('tape');
const server = require('../component_combiner.js');
const hyperquest = require('hyperquest');

const reqUrl = 'http://localhost:8000/';
test('check the index route', t => {
  hyperquest.get(reqUrl, (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, '200 status code, passed');
    t.end();
  });
});

test('check style.css works', t => {
  hyperquest.get(reqUrl + 'style.css', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'style.css received successfully');
    t.end();
  });
});

test('check typography component', t => {
  hyperquest.get(reqUrl + 'components/typography.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'typography component received successfully');
    t.end();
  });
});

test('check form component', t => {
  hyperquest.get(reqUrl + 'components/form.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'form component received successfully');
    t.end();
  });
});

test('check button component', t => {
  hyperquest.get(reqUrl + 'components/button.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'button component received successfully');
    t.end();
  });
});

test('check image component', t => {
  hyperquest.get(reqUrl + 'components/image.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'image component received successfully');
    t.end();
  });
});

test('check grid component', t => {
  hyperquest.get(reqUrl + 'components/grid.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'grid component received successfully');
    t.end();
  });
});

test('check code component', t => {
  hyperquest.get(reqUrl + 'components/code.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'code component received successfully');
    t.end();
  });
});

test('check table component', t => {
  hyperquest.get(reqUrl + 'components/table.html', (err, response) => {
    console.log(err);
    t.equal(response.statusCode, 200, 'table component received successfully');
    t.end();
  });
});

test.onFinish(() => {
  server.init.close();
});
