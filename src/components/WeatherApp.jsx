import React, { useState } from 'react';
import './style/styleWeather.css';

const WeatherApp=({weather,temp}) =>{
  const [grade, setgrade] = useState(true);

  const handlebutton=()=>{
    setgrade(!grade);

  }
  return (
    <section className='weather'>
        <h1 className='title_weather' >Weather App</h1>
        <h2 className='city_weather' >{weather?.name},   {weather?.sys.country}</h2>
        <article className='container_weather'>
          <figure className='figura_weather'>
            <img className='img_weather' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
          </figure>
          <div>
            <h3 className='clouds_weather'>{weather?.weather[0].description}</h3>
            <ul className='info_weather'>
              <li><span>Wind speed: </span><span>{weather?.wind.speed}m/s</span></li>
              <li><span>Clouds: </span><span>{weather?.clouds.all}%</span></li>
              <li><span>Pressure:</span><span>{weather?.main.pressure}Hpa</span></li>
              <li><span>Humidity:</span><span>{weather?.main.humidity}%</span></li>
            </ul>
          </div>
        </article>
        <div className='container2_weather'>
          <h3 className='temp_weather'>{//renderizado condicionando
            grade?
              temp?.celsius+' °C'
              : 
              temp?.fahrenheit+' °F'
              }
            </h3> 
          <button className='btn' onClick={handlebutton}/**redenrizamos el button para cambio */>Change to {grade?'°F':'°C'} </button>
        </div> 
    </section>

  )
}

export default WeatherApp