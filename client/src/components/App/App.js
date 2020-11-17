import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Layout } from 'antd'

import 'antd/dist/antd.css'
import './App.css'
import AppSwitch from './AppSwitch/AppSwitch'
import ContentPage from '../ContentPage/ContentPage'

const App = () => {
    return (
        <div className="app">
            <Router>
                <Layout>
                    <Header />
                    <ContentPage />
                    <Footer />
                </Layout>
            </Router>
        </div>
    )
}

export default App
