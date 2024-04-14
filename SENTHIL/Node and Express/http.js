const http=require('http');
const server=http.createServer((request,response)=>
{
   if(request.url==='/')
   {
    response.end("This our home page")
   }
   if(request.url==='/about')
   {
    response.end("This is our about page")
   }
   response.end(`<h1>OOPS</H1><P>The webpage is not Found</p>
   <a href='/'>Home</a>`);
});
server.listen(5000);