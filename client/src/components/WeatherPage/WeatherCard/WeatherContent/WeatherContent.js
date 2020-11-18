import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const WeatherContent = () => {
    return (
        <Card
            bordered={false}
            style={{
                height: '20vh',
            }}>
            <div>Hi</div>
        </Card>
    )
}

export default WeatherContent
