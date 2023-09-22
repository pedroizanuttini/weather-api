
import { getDate } from "../../utils/dates";
import { weatherImage } from "../../utils/getWeatherImage";
import "./WeatherItem.css";
import { kelvinToCelcius } from "../../utils/unitConverter";

const WeatherItem = ({day}) => {


    return (
        <article className="weather-card">
            <h3 className="weather-card__date">{getDate(day.dt,("ddd, D MMM"))}</h3>
            <img className="weather-card__image" src={weatherImage(day.weather[0].main)} alt=""/>
            <div className="weather-card__container-temp">
                <p className="container-temp__min">{kelvinToCelcius(day.temp.min)}°C</p>
                <p className="container-temp__max">{kelvinToCelcius(day.temp.max)}°C</p>
            </div>
                
        </article>
    )



}

export default WeatherItem;