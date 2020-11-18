import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
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
            <Redirect to="/" />
        </Switch>
    )
}

export default AppSwitch
