var express = require('express');
var server = express();
const port = 5000;

// var passangerName;
// server.get('/',(request,response)=>{
//     response.send('Home page')
// })

server.use(airportTerminal,getPassengerName);
function airportTerminal(request,response,next){
    var proof = request.query['proof'];
    if(proof === 'Aadhar')
        next();
    else{
        response.send("<h1> Without valid proof, we are not allowing</h1>");
    }
}

function getPassengerName(request,response,next){
    passangerName=request.query['passenger']
    if(passangerName.length>=4)
        next()
    else{
        response.send("<h1> Enter valid name</h1>");
    
    }
}

server.get("/targetflight", airportTerminal,getPassengerName,(request,response)=>{
    response.send("<h1> welcome "+passangerName+" !!!. Have a wonderful journey</h1>")
})

server.get("/viptargetflight",(request,response)=>{
    response.send("<h1> welcome "+"VIP"+" !!!. Have a wonderful journey</h1>")
})

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});