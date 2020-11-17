import React from 'react'
import { useSelector } from 'react-redux'
import {
    getHumidity,
    getTemperature,
    getWind,
    getDescriptions,
} from '../../../../redux/selectors/weatherSelectors'
import style from '../WeatherCard.module.css'

const WeatherInfo = () => {
    const wind = useSelector(getWind)
    const humidity = useSelector(getHumidity)
    const temperature = useSelector(getTemperature)
    const descriptions = useSelector(getDescriptions)

    return (
        <div className={style.weatherInfoHeader}>
            <p className={style.temperatureValue}>{temperature} &deg;</p>
            <p className={style.weatherValue}>{descriptions}</p>
            <div className={style.descriptionsWeather}>
                <p>
                    Humiditi <br />
                    {humidity}%
                </p>
                <p>
                    Wind <br />
                    {wind} K/M
                </p>
            </div>
        </div>
    )
}

export default WeatherInfo
