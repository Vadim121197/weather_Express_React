import React from 'react'
import style from '../WeatherCard.module.css'

const CityName = ({ cityName }) => {
    return <div className={style.cityName}>{cityName}</div>
}

export default CityName
