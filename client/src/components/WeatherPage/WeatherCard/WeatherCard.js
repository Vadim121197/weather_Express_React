import React from 'react'
import { Card, Avatar, Typography } from 'antd'
import style from './WeatherCard.module.css'
const { Meta } = Card

const { Title } = Typography

const WeatherCard = () => {
    return (
        <div className={style.content}>
            <Card
                className={style.weatherCard}
                cover={
                    <div
                        style={{
                            height: '45vh',
                            borderRadius: '20px 20px 0 0',
                            backgroundImage:
                                'url(https://s.0512.com.ua/section/newsInternalIcon/upload/images/news/icon/000/052/600/pogoda-dozd-no2_5f74b89992024.jpg)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <div className={style.weatherHeader}>
                            <p className={style.temperatureValue}>12 &deg;</p>
                            <p className={style.weatherValue}>Rain</p>
                            <div className={style.descriptionsWeather}>
                                <p>Humiditi 60%</p>
                                <p>Wind 12 K/M</p>
                            </div>
                        </div>
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
