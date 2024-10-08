import path from 'path';
import express from 'express';
import weather from './Utils/weather.js';
import geo from './Utils/geo.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();

const templatepath=path.join(__dirname,"../template");
const partialpath=path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);

const publicDirPath=path.join(__dirname,"../public")
//console.log(publicDirPath)
app.use(express.static(publicDirPath));

app.get('/',(req,res)=>{
  res.render("index");
})

app.get("/help",(req,res)=>{
  res.render("help");
});
app.get("/about",(req,res)=>{
  res.render("about");
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
  res.render("404");
});

  
app.listen(3000,()=>{console.log('server is on port 3000')});