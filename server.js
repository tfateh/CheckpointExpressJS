const express = require("require");
const fs = require ('fs');
const timeofreq = require('./midelw')

const app = express();
app.use (express.jon());

const port = 9000;

app.use('/',timeofreq,express.static(path.join(__dirname,"Public")))

app.get('/Home',timeofreq,(req,res)=>{
    
res.sendFile(__dirname+"/Public/Home.html");
});

app.get('/Ouerservice',timeofreq,(req,res)=>{
    
    res.sendFile(__dirname+"/Public/Ouerservice.html");
    });

    app.get('/contact',timeofreq,(req,res)=>{
    
        res.sendFile(__dirname+"/Public/ContactUs.html");
        });


app.listen(port, (err) => {
    err
      ? console.log("Server connection failed", err)
      : console.log(
          `The server is running on http://localhost:9000`
        );
  });