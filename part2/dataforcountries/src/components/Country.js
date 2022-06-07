import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({country}) => {
    const [weatherData, setWeatherData] = useState()
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+country.capital[0]+'&appid='+api_key)
            .then(response => setWeatherData(response.data))
    }, [])

    const languages = []
    for(var key in country.languages){
        languages.push(country.languages[key])
    }
    let weather = <p>Loading weather data...</p>
    if(weatherData){
        weather = <div>
                <h3>Weather in {country.capital[0]}</h3>
                <p>temperature {Math.round((weatherData.main.temp - 273.15) * 100) / 100  + '°C'}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                <p>wind {weatherData.wind.speed} m/s</p>
        </div>
    }
    return(
        <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital.length > 1 ? country.capital.map(capital => capital + ", ") : country.capital[0]}</p>
        <p>area {country.area}</p>
        <h3>languages</h3>
        <ul>
            {languages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} alt="Flag"/>
        {weather}
    </>
    )
}

export default Country