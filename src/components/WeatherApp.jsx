import React, { useRef, useState } from 'react';
import './style/styleWeather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
const WeatherApp=({weather,temp,settext,hasError,hasvacio }) =>{
  const [grade, setgrade] = useState(true);

  const handlebutton=()=>{
    setgrade(!grade);

  }
  /**Para leer informacion de un input se necesta useRef */ 
  const city = useRef()
  /**Esta funcion es para evitar la recarga de la pagina 
   * cuando pulsamo el boton
   */
  const handleSearch= event =>{
    event.preventDefault();
    settext(city.current.value.toLowerCase().trim())
    
   /**Para leer informacion de un input se necesta useRef */ 
   
  }
  return (
    <section className='weather'>
        <h1 className='title_weather' >Weather App</h1>
        <form class="form-group" onSubmit={handleSearch}>
          <input type="text" className='weather_text'
             ref={city}  placeholder="Search"/>
          <button  className='btn2' ><FontAwesomeIcon icon={faSearch} /></button>

        </form>
        {
          hasvacio?
          
          <h2>Llenar campo</h2>
          
          :
          hasError?
          <>
          <h2>This city does not exist</h2>
          <h2>please enter again</h2>
          </>
          :
          <>
          <h2 className='city_weather' >{weather?.name},   {weather?.sys.country}</h2>
       
          <article className='container_weather'>
            <figure className='figura_weather'>
              <img className='img_weather' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
          </figure>
            <div>
              <h3 className='clouds_weather'>{weather?.weather[0].description}</h3>
                <ul className='info_weather'>
                  <li><span>Wind speed:</span><span className='span_weather'>{weather?.wind.speed}m/s</span></li>
                  <li><span>Clouds:</span><span className='span_weather'>{weather?.clouds.all}%</span></li>
                  <li><span>Pressure:</span><span className='span_weather'>{weather?.main.pressure}Hpa</span></li>
                  <li><span>Humidity:</span><span className='span_weather'>{weather?.main.humidity}%</span></li>
                </ul>
            </div>
          </article>
          <div className='container2_weather'>
            <h3 className='temp_weather'>
            {//renderizado condicionando
              grade?
               temp?.celsius+' °C'
              : 
               temp?.fahrenheit+' °F'
            }
            </h3> 
            <button  className='btn btn1' onClick={handlebutton}/**redenrizamos el button para cambio */>Change to {grade?'°F':'°C'} </button>
          </div> 
          </>
        }
         
    </section>
  )
}

export default WeatherApp;