
import './Hero.css';
// import weather from "../assets/images/Cloud-background.png";
import {useState, useEffect}  from "react";
import { FaBeer } from 'react-icons/fa';




const Hero = () => {

  const url = "https://api.openweathermap.org/data/3.0/onecall?lat=-33.894069&lon=151.2685387&appid=6dca22baff334c28371e8c38e74cb605"

  const[temperature, setTemperature]=useState(null);
  const[currentDate, setCurrentDate]=useState(null);
  const[description, setDescription]=useState(null);
  const[location,setLocation]=useState(null);

  const getWeather = async() =>{
    try{
      const response = await fetch(url);
      const data= await response.json() //como la respuesta viene en json la parseo
      const kelvin = data.current.temp;
      const celsius = (kelvin - 273.15).toFixed(1);
      setTemperature(celsius);

      const timestamp=data.current.dt;
      const date = new Date(timestamp * 1000);
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date);
      setCurrentDate(formattedDate);

      const descriptionInfo=data.current.weather[0].description;
      setDescription(descriptionInfo);

      const location=data.timezone;
      setLocation(location);

    }catch(error){
        console.error(error);
    }
  }

  useEffect(()=>{
    getWeather();
  }, [])


  return (
    <div className='hero-container'>
        <div className='hero-container__header'>
            <button className='button button--secondary'>Search for places</button>
            <button className='icon-button icon--secondary'></button>
        </div>

        <div className='hero-container__image-weather'>
          {/* { <img className='weather-image' src={weather} alt='hero image'/> } */}
        </div>
        <div className='hero-container__weather-info'>
            <h1 className='weather-info__temperature'>
                {temperature !==null ? `${temperature}°C` : 'Cargando...'}
            </h1>
            <h2 className='weather-info__description'>
                {description !==null ? `${description}` : 'Cargando...'}
            </h2>
            <p className='weather-info__date'>
                {currentDate !== null ? `Today  .   ${currentDate}` : ''}
            </p>
            <p className='weather-info__location'>
                <FaBeer />
                {location != null ? `             ${location}` : ''}
            </p>
          
        </div>
    </div>
  )
}

export default Hero;