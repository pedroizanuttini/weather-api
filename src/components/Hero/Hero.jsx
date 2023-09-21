
import './Hero.css';
import weather from "../../assets/images/Cloud-background.png";
import { IoLocation } from 'react-icons/io5';
import {BiCurrentLocation} from 'react-icons/bi';
import useGetWeather from '../../custom-hooks/useGetWeather';
import { useEffect } from 'react';
import {weatherImage} from "../../utils/getWeatherImage";


const Hero = () => {
  const {currentDate,location,getWeather,temperature,currentWeather}=useGetWeather();


  useEffect(()=>{
    getWeather()
  },[]);


  return (
    <div className='hero-container'>
        <div className='hero-container__header'>
            <button className='button button--secondary'>Search for places</button>
            <button className='icon-button icon--secondary'><BiCurrentLocation className='icon-large'/></button>
        </div>

        <div className='hero-container__image-weather'>
          { <img className='weather-image' src={weather} alt='hero image'/> }
        </div>
        <div className='hero-container__weather-info'>
            <img src={weatherImage(currentWeather)} alt="weather image"></img>
            <h1 className='weather-info__temperature'>
                {temperature !==null ? `${temperature}°C` : 'Cargando...'}
            </h1>
            <h2 className='weather-info__description'>
                {currentWeather !==null ? `${currentWeather}` : 'Cargando...'}
            </h2>
            <p className='weather-info__date'>
                {currentDate !== null ? `Today  .   ${currentDate}` : ''}
            </p>
            <p className='weather-info__location'>
                <IoLocation />
                {location != null ? `             ${location}` : ''}
            </p>
          
        </div>
    </div>
  )
}

export default Hero;