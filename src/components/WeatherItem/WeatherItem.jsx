
import { getDate } from "../../utils/dates";
import { weatherImage } from "../../utils/getWeatherImage";
import "./WeatherItem.css";

const WeatherItem = ({day}) => {

    return (
        <article className="weather-card">
            <h3 className="weather-card__date">{getDate(day.dt,("ddd, DD MMM"))}</h3>
            <img className="weather-card__image" src={weatherImage(day.weather.main)} alt=""/>
            <div className="weather-card__container-temp">
                <p className="container-temp__min">{day.temp.min}</p>
                <p className="container-temp__max">{day.temp.max}</p>
            </div>
                
        </article>
    )


}

export default WeatherItem;