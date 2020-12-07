const http = require('http');
const fs = require('fs');
const express = require('express');
const mysql2 = require('mysql2');
path = require('path')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/')));

/*const con = mysql2.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "ICS2609",
    database: "mydb"
});

con.connect((err) => {
    if(!err){
        console.log("connected to MySQL server at Port 3306...");
    }else
        console.log("NOT WORKING");
}); 
*/
app.listen(PORT, () => {
    console.log("listening to port " + PORT + " HELLYEAH...");
});


const server = http.createServer(function (req, res){
    if (req.url ==='/start'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/index.html').pipe(res);

    } else if (req.url === '/home'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/home.html').pipe(res);

    } else if (req.url === '/review'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/review.html').pipe(res); 

                
    } else if (req.url === '/submission'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/submission.html').pipe(res); 

                
    } else if (req.url === '/about'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/about.html').pipe(res); 

                
    } else if (req.url === '/aboutbb'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/aboutbts.html').pipe(res); 
                
    } else if (req.url === '/contact'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/contact.html').pipe(res); 
                
                

    } else if (req.url === '/login'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/login.html').pipe(res); 

    } else if (req.url === '/error') {
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/error.html').pipe(res);
        res.end(); 
    }
})
//.listen(3000);

//console.log("listening to port 3000");