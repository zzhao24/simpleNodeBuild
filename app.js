const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

// this is the incoming route, just like in Vue
  let url = req.url;
  if(url =="/about") {
    res.write(`<h1>You are on the ${url} page!</h1>`);
    res.end();// end the response
  } else if (url == "/contact") {
    res.write(`<h1>You are on the ${url} page!</h1>`);
    res.end();
  } else {
    res.write(`<h1>Hello world! Or at least everyone on port ${port}</h1>`)
    res.end();// res.end is like a php echo statement
  }

  //this is the root => you will see this when you in 3030.
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
