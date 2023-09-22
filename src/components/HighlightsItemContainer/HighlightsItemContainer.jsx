

import useGetWeather from '../../custom-hooks/useGetWeather';
import { useEffect } from "react";
import "./HighlightsItemContainer.css";
import HighlightItem from '../HighlightItem/HighlightItem';


const HighlightItemContainer = () =>{

    const { wind,humidity,visibility,pressure }=useGetWeather();

    useEffect(()=>{
   
    },[]);

    return (
        <div className='highlight-container'>
            <h3 className='highlight-container__title'>Today's Highlights</h3>
            <HighlightItem title="Wind status" value={wind} unit="mph"/>
            <HighlightItem title="Humidity" value={humidity} unit="%"/>
            <HighlightItem title="Visibility" value={visibility} unit="miles"/>
            <HighlightItem title="Air Pressure" value={pressure} unit="mb"/>
        </div>
    )
    
}

export default HighlightItemContainer;

