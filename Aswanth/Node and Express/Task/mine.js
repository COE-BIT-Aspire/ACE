const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/form") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='/name+mail+phone' method='POST'>");
    res.write('<input type="text" name="name">');
    res.write('<input type="email" name="mail">');
    res.write('<input type="number" name="phone">');
    res.write('<input type="submit" value="send">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === '/name+mail+phone' && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("Chunk:");
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const splittedMessage = parsedBody.split("&").map(pair => pair.split("=")[1]);
      console.log(splittedMessage);
      // Writing form details to hello.txt
      fs.writeFileSync("hello.txt", JSON.stringify(splittedMessage));
      // Redirecting to home page
      res.setHeader("Location", "/display");
      res.statusCode = 302;
      return res.end();
    });
    return;
  }
  if (url === '/display') {
    // Read contents from hello.txt
    fs.readFile("hello.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error");
        return;
      }
      console.log(data);
      const splitted = data.split(',');
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>Welcome : </h1>"+ splitted[0]);
      res.write("<h1>  Mail : </h1>"+ splitted[1]);
      res.write("<h1>  Number : </h1>"+ splitted[2]);
      //res.write(data);
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
    return;
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Welcome : </h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(5000);
