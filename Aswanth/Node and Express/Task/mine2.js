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
    res.write('<input type="text" name="name" placeholder="Enter your name">');
    res.write('<br><input type="email" name="mail" placeholder="Enter your email">');
    res.write('<br><input type="number" name="phone" placeholder="Enter your number">');
    res.write('<br><input type="submit" value="send">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === '/name+mail+phone') {
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
      fs.writeFileSync("hello.txt", JSON.stringify(splittedMessage));
      res.setHeader("Location", "/display");//redirection
      res.statusCode = 302;
      return res.end();
    });
    return;
  }
  if (url === '/display') {//contentReader
    fs.readFile("hello.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error");
        return;
      }
      console.log(data);
      const splitted = data.split('"');
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>Welcome : </h1>"+ splitted[1]);
      res.write("<h1>  Mail : </h1>"+ splitted[3]);
      res.write("<h1>  Number : </h1>"+ splitted[5]);
      //res.write(data);43q
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
    return;
  }
});
server.listen(5000);