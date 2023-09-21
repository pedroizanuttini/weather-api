import useGetWeather from '../../custom-hooks/useGetWeather';
import { useEffect } from "react";
import WeatherItem from '../WeatherItem/WeatherItem';
import "./WeatherContainer.css";

const WeatherContainer = () =>{

    // 1. obtener el array del pronóstico del clima extendido
    const { weatherWeek }=useGetWeather(); // desestructurar el array del pronóstico del clima extendido



    useEffect(()=>{
        
    },[]);


    return(
        <div className="week-container">
            
            {
                weatherWeek.map((day,index)=> <WeatherItem key={index} day={day} />)
            }
            
        </div>
    );
}

export default WeatherContainer;

