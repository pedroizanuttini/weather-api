
import useGetWeather from '../../custom-hooks/useGetWeather';
import { useEffect } from "react";
import "./HighlightItem.css";


const HighlightItem = () => {

    const { wind,humidity,visibility,pressure }=useGetWeather();

    useEffect(()=>{
   
    },[]);

    return (
        <div className='highlight-container'>
            <h3 className='highlight-container__title'>Today's Highlights</h3>
            <article className="wind-card">
                <p className="wind-card__title">Wind status</p>
                <h1 className="wind-card__info">{wind} mph</h1>
                <p className="wind-card__title">WSW</p>    
            </article>

            <article className="humidity-card">
                <p className="humidity-card__title">Humidity</p>
                <h1 className="humidity-card__info">{humidity}%</h1>
            </article>

            <article className="visibility-card">
                <p className="visibility-card__title">Visibility</p>
                <h1 className="visibility-card__info">{visibility} miles</h1>
            </article>

            <article className="pressure-card">
                <p className="pressure-card__title">Air Pressure</p>
                <h1 className="pressure-card__info">{pressure} mb</h1>

            </article>

        </div>

    )


}

export default HighlightItem;