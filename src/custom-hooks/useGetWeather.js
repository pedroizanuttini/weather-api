import { useEffect, useState } from "react";
import { getDate } from "../utils/dates";
import { API_URL } from "../constants";
import { API_KEY } from "../constants";
import {kelvinToCelcius} from "../utils/unitConverter"

const useGetWeather = () =>{

  const[temperature,setTemperature]=useState(null);
  const[currentDate,setCurrentDate]=useState(null);
  const[currentWeather,setCurrentWeather]=useState(null);
  const[weatherWeek,setWeatherWeek]=useState([]); //array de objetos [{},{},{},{}]
  const[location,setLocation]=useState(null);
  const[loading,setLoading]=useState(true);
  const[error, setError]=useState(null);
  const[wind,setWind]=useState(null);
  const[humidity,setHumidity]=useState(null);
  const[visibility,setVisibility]=useState(null);
  const[pressure,setPressure]=useState(null);
  

  const getWeather = async() =>{
    try{
      const response = await fetch(`${API_URL}lat=-33.894069&lon=151.2685387&${API_KEY}`);
      const data= await response.json() //como la respuesta viene en json la parseo
      const kelvin = data.current.temp;
      const celsius = kelvinToCelcius(kelvin)
      setTemperature(celsius);

      const date = getDate(data.current.dt * 1000);
      setCurrentDate(date);

      const currentWeatherInfo=data.current.weather[0].main;
      setCurrentWeather(currentWeatherInfo);

      const location=data.timezone;
      setLocation(location);

      // en esta variable guardamos toda la info de los 7 dias
      setWeatherWeek(data.daily);

      const currentWind=data.current.wind_speed;
      setWind(currentWind);

      const currentHumidity=data.current.humidity;
      setHumidity(currentHumidity);

      const currentVisibility=data.current.visibility;
      setVisibility(currentVisibility);

      const currentPressure=data.current.pressure;
      setPressure(currentPressure);


    }catch(error){
        console.error(error);
        setError(error)
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getWeather();
  }, [])



  return {
    temperature, currentDate, location, loading, error, getWeather,currentWeather, weatherWeek,wind,humidity,visibility,pressure
  }

}
export default useGetWeather;