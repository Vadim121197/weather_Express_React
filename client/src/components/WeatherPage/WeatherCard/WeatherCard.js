import React, { useEffect } from 'react'
import { Card, Typography } from 'antd'
import style from './WeatherCard.module.css'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import { useDispatch, useSelector } from 'react-redux'
import CityName from './CityName/CityName'
import {
    getCityName,
    getLocation,
} from '../../../redux/selectors/weatherSelectors'
import { cityWeatherFetchByCoord } from '../../../redux/slices/citySlices'
import WeatherContent from './WeatherContent/WeatherContent'
const { Title } = Typography

const WeatherCard = () => {
    const cityName = useSelector(getCityName)
    const locations = useSelector(getLocation)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cityWeatherFetchByCoord(locations))
    }, [])

    if (!cityName) {
        return (
            <Title style={{ textAlign: 'center', color: '#8B0000' }}>
                Input city
            </Title>
        )
    }

    return (
        <div className={style.content}>
            <Card
                className={style.weatherCard}
                cover={
                    <div className={style.weatherHeader}>
                        <WeatherInfo />
                        <CityName cityName={cityName} />
                    </div>
                }>
                <WeatherContent cityName={cityName}  />
            </Card>
        </div>
    )
}

export default WeatherCard
