import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../Home/Home'

import WeatherPage from '../../WeatherPage/WeatherPage'

const AppSwitch = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/weather">
                <WeatherPage />
            </Route>
        </Switch>
    )
}

export default AppSwitch
