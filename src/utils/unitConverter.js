// Este util se usar para convertir unidades de medida

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const kelvinToCelcius = (kelvin) => {
    return kelvin - 273.15;
};

const millisecondsToSeconds = (milliseconds) => {
    return milliseconds / 1000;
}

const secondsToMilliseconds = (seconds) => {
    return seconds * 1000;
}




export { celciusToFahrenheit, kelvinToCelcius, millisecondsToSeconds, secondsToMilliseconds };