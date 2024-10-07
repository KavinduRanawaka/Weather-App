import express from 'express';
import weather from './Utils/weather.js';
import geo from './Utils/geo.js';

const app=express();

app.get("/",(req,res)=>{
  res.send("<h1>Welcome</h1>");
});
app.get("/help",(req,res)=>{
  res.send("<h1>help<h1>");
});
app.get("/about",(req,res)=>{
  res.send("<h1>about<h1>");
});
app.get("/weather",(req,res)=>{
  if(!req.query.address){
    res.send({error:'Address not found!'})
  }
  geo(req.query.address)
    .then((data)=>{
     return weather(data.lat,data.lon)
    })
    .then((data)=>{
     res.send(data)
    })
    .catch((error)=>{
      res.send(error)
    })
});
app.get("*",(req,res)=>{
  res.send("app not found");
});

  

  app.listen(3000,()=>{console.log('server is on port 3000')});