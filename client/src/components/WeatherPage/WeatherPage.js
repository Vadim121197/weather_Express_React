import React, { useEffect, useState } from 'react'

import SearchInput from './SearchInput/SearchInput'
import WeatherCard from './WeatherCard/WeatherCard'
import { usePosition } from '../../hooks/usePosition'

const WeatherPage = () => {

    return (
        <>
            <SearchInput />
            <WeatherCard />
        </>
    )
}

export default WeatherPage
