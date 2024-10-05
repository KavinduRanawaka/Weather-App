import axios from 'axios';
import env from 'dotenv';

env.config();
const location='Colombo'

const getGeo=(location)=>{
    return new Promise((resolve,reject)=>{
        const url='https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid='+process.env.API_KEY;
        axios.get(url)
          .then(function (response) {
            // handle success
            resolve({
                name:response.data[0].name,
                lat:response.data[0].lat,
                lon:response.data[0].lon
            });
            // console.log(response.data[0].name+" is in "+response.data[0].lat+" "+response.data[0].lon);
            
          })
          .catch(function (error) {
            // handle error
            // console.log(error);
            reject({error:'error'})
          });
    });
}
export default getGeo;
