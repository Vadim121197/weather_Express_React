const { Router } = require('express')
const config = require('config')
const request = require('request')

const router = Router()

const API_KEY = config.get('API_KEY')
const API_URL = config.get('WEATHER_URL')
const ICON_URL = config.get('ICON_URL')

router.get('/weather', (req, res) => {
    const { city, icon } = req.query
    try {
        request(
            API_URL + `?q=${city}&lang=ru&appid=` + API_KEY,
            (error, response, body) => {
                const weatherData = JSON.parse(body)

                if (error && response.statusCode !== 200) {
                    return res.status(500).json({ message: error })
                }

                if (weatherData.cod === '404') {
                    return res.status(400).json({ message: 'Город не найден' })
                }

                if (icon) {
                    const iconCode = weatherData.weather.map(
                        element => element.icon
                    )
                    const iconUrl = ICON_URL + iconCode + '.png'
                    return res.redirect(iconUrl)
                }

                return res.json(weatherData)
            }
        )
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

module.exports = router
