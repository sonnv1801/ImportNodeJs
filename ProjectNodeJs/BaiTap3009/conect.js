var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var parse = url.parse(req.url, true);
    var path = parse.path;

    if (path === "/") {
      fs.readFile("home.html", "utf8", function (err, data) {
        if (err) throw err;

        res.write(data, "utf8");

        res.end();
      });

    } else if (path === "/account") {
      fs.readFile("account.html", "utf8", function (err, data) {
        if (err) throw err;

        res.write(data, "utf8");

        res.end();
      });

    } else if (path === "/contact") {
      fs.readFile("contact.html", "utf8", function (err, data) {
        if (err) throw err;

        res.write(data, "utf8");

        res.end();
      });

    } else {
      var load = "files" + path + ".html";
      fs.readFile(load, function (err, data) {
        if (err) {
          res.writeHead("404", { "Content-Type": "text/html" });
          res.end("<h1>404 not found</h1>");
        } else {
          res.writeHead("200", { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    }
  })
  .listen(8080);
