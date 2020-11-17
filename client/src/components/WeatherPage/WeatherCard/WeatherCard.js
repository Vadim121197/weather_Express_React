import React from 'react'
import { Card, Avatar, Typography } from 'antd'
import style from './WeatherCard.module.css'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import { useSelector } from 'react-redux'
import CityName from './CityName/CityName'
import { getCityName } from '../../../redux/selectors/weatherSelectors'
const { Meta } = Card
const { Title } = Typography

const WeatherCard = () => {
    const cityName = useSelector(getCityName)

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
                <Meta
                    style={{
                        height: '20vh',
                    }}
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    )
}

export default WeatherCard
