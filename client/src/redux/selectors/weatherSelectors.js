import { createSelector } from '@reduxjs/toolkit'

export const getCityName = createSelector(
    state => state.city.weather.name,
    cityName => cityName
)

export const getWind = createSelector(
    state => state.city.weather.wind.speed,
    wind => wind
)

export const getHumidity = createSelector(
    state => state.city.weather.main.humidity,
    humidity => humidity
)

export const getTemperature = createSelector(
    state => Math.ceil(state.city.weather.main.temp - 273.15),
    temperature => temperature
)
export const getDescriptions = createSelector(
    state => state.city.weather.weather[0].main,
    descriptions => descriptions
)

export const getLocation = createSelector(
    state => state.city.locations,
    locations => locations
)
