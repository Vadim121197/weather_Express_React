import React from 'react'

import SearchInput from './SearchInput/SearchInput'
import { useSelector } from 'react-redux'
import WeatherCard from './WeatherCard/WeatherCard'

const WeatherPage = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <>
            <SearchInput />
            <WeatherCard />
        </>
    )
}

export default WeatherPage
