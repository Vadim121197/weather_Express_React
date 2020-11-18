import React, { useEffect } from 'react'
import { Card, Image } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { cityWeatherFetchFiveDays } from '../../../../redux/slices/weatherFiveDaysSlices'

const WeatherContent = ({ cityName }) => {
    const dispatch = useDispatch()
    const listWeather = useSelector(state => state.weatherFiveDays.weather.list)
    console.log(listWeather)
    useEffect(() => {
        dispatch(cityWeatherFetchFiveDays(cityName))
    }, [cityName])
    if (!listWeather) {
        return <div>...loading</div>
    }
    return (
        <Card
            bordered={false}
            style={{
                height: '20vh',
            }}>
            <div
                style={{
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '40vw',
                }}>
                {listWeather.map(item => (
                    <img
                        style={{
                            width: '50px',
                            height: '50px',
                        }}
                        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    />
                ))}
            </div>
        </Card>
    )
}

export default WeatherContent
