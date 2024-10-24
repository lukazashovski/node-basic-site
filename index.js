const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    let q = url.parse(req.url);
    let filename = "." + q.pathname;

    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (err404, data404) => {
          if (err404) {
            res.writeHead(500, { "Content-Type": "text/html" });
            return res.end("500 Internal Server Error");
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data404);
            return res.end();
          }
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(3000);
