const { Router } = require('express')
const config = require('config')
const request = require('request')

const router = Router()

const API_KEY = config.get('API_KEY')
const API_URL = config.get('WEATHER_URL')
const API_URL_FIVE_DAYS = config.get('WEATHER_FIVE_DAYS')
const ICON_URL = config.get('ICON_URL')

router.get('/weather/:city', (req, res) => {
    const city = req.params.city
    try {
        request(
            API_URL + `?q=${city}&lang=en&appid=` + API_KEY,
            (error, response, body) => {
                const weatherData = JSON.parse(body)

                if (error && response.statusCode !== 200) {
                    return res.status(500).json({ message: error })
                }

                if (weatherData.cod === '404') {
                    return res.json({ message: 'Город не найден' })
                }

                // if (icon) {
                //     const iconCode = weatherData.weather.map(
                //         element => element.icon
                //     )
                //     const iconUrl = ICON_URL + iconCode + '.png'
                //     return res.redirect(iconUrl)
                // }

                return res.json(weatherData)
            }
        )
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/weather/coordinats/:latitude/:longitude', (req, res) => {
    const latitude = req.params.latitude
    const longitude = req.params.longitude
    console.log(req.params)
    try {
        request(
            API_URL + `?lat=${latitude}&lon=${longitude}&appid=` + API_KEY,
            (error, response, body) => {
                const weatherData = JSON.parse(body)

                if (error && response.statusCode !== 200) {
                    return res.status(500).json({ message: error })
                }

                if (weatherData.cod === '404') {
                    return res.json({ message: 'Город не найден' })
                }
                return res.json(weatherData)
            }
        )
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

//почасовой API
router.get('/weather/fivedays/:city', (req, res) => {
    const city = req.params.city
    try {
        request(
            API_URL_FIVE_DAYS +
                `?q=${city}&units=metric&cnt=5&&appid=` +
                API_KEY,
            (error, response, body) => {
                const weatherData = JSON.parse(body)

                if (error && response.statusCode !== 200) {
                    return res.status(500).json({ message: error })
                }

                if (weatherData.cod === '404') {
                    return res.json({ message: 'Город не найден' })
                }

                // if (icon) {
                //     const iconCode = weatherData.weather.map(
                //         element => element.icon
                //     )
                //     const iconUrl = ICON_URL + iconCode + '.png'
                //     return res.redirect(iconUrl)
                // }

                return res.json(weatherData)
            }
        )
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

module.exports = router
