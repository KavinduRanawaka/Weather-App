import axios from 'axios';
import env from 'dotenv';

env.config();

const getWeather=(lat,lon)=>{
   return new Promise((resolve,reject)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid='+ process.env.API_KEY;
    axios.get(url)
      .then(function (response) {
        // handle success
        // console.log("Currently "+response.data.weather[0].description+" and temparature "+response.data.main.temp+"C");
        resolve({weather:'Currently '+response.data.weather[0].description+' and temparature ' +response.data.main.temp+'C'})
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        reject({error:'error'})
      });    
   })
}

export default getWeather;

