import { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import WeatherApp from './components/WeatherApp';
function App() {
  const [coords, setCoords]= useState()
  const [weather, setWeather] = useState()
  const [temp, settemp] = useState()

  const success= position => {
 //   console.log(position)
    const obj= {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    setCoords(obj);
  }
  useEffect(() => {
  if(coords) {
    
    const APIkey='618a1b74f9a8a0975e4354ecf2c2adc3';
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`;
    axios.get(url)
      .then(res=>{
        const grados={
          celsius:(res.data.main.temp-273.15).toFixed(2),
          fahrenheit:((res.data.main.temp-273.15)*(9/5)+32).toFixed(2),
        }
        settemp(grados);
        setWeather(res.data)
      })
      .catch(err =>console.log(err));
    }
  }, [coords]);

  useEffect(() => {
   navigator.geolocation.getCurrentPosition(success);
  }, []);
  
  
  console.log(coords);
  console.log(weather);
  
  return (
    <div className='app'> 
      
      <WeatherApp
      weather={weather}
      temp={temp}
      
      />

      
      
    </div>
  )
}

export default App
