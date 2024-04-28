///////object to string -----> stringify , string to object -----> parse


const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // const details = {
    //     fname: "Vinsmoke",
    //     lname: "Sanji",
    // };
        
    // res.writeHead(200, {'content-type': "application/json"});
    // res.end(JSON.stringify(details));

    //res.writeHead(200, {'content-type': "text/html"});
    // const html = fs.readFileSync("./http.html", "utf8");
    // res.end(html);

    //fs.createReadStream("./http.html").pipe(res);

    // const name = "Sanji";
    // res.writeHead(200, {'content-type': "text/html"});
    // let html = fs.readFileSync("./http.html", "utf8");
    // html = html.replace("{{name}}", name);
    // res.end(html);

    ///////////////////////url check/////////////////////////
    //res.end(req.url);

    if(req.url === "/"){
        res.writeHead(200, {'content-type': "text/plain"});
        res.end("Home page");
    } else if(req.url === "/about"){
        res.writeHead(200, {'content-type': "text/plain"});
        res.end("About page");
    } else if(req.url === "/api"){
        res.writeHead(200, {'content-type': "application/json"});
        res.end(JSON.stringify({
            fname: "Vinsmoke",
            lname: "Sanji",
        }));
    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    } 
})

server.listen(3000, () => {
    console.log("This server runs on port 3000");
})