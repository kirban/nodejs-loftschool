const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
  let client = counter++;

  if (req.url.includes('favicon')) {
    res.end('Bad request');
  }

  if (req.method === 'GET') {
    if (req.url === '/') {
      let result = '';
      const end = () => {
        res.end(result);
      };

      let step = 0;
      const interval = setInterval(() => {
        const date = new Date();
        result = `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;

        console.log('result: ', client, result);
        res.write(result + '\r\n');

        step++;
        if (step >= 10) {
          clearInterval(interval);
          end();
        }
      }, process.env.INTERVAL || 1000);
    } else {
      res.end('Bad request');
    }
  } else {
    res.end('Bad request');
  }
});

server.listen(3001, () => {
  console.log('Server started on port 3001: http://localhost:3001/');
});
