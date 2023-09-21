import { imagesDict } from "../constants/index.js";

export const weatherImage =(currentWeather) =>{
    return imagesDict[currentWeather]
  }


