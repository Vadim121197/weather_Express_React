import React from 'react'
import AppSwitch from '../App/AppSwitch/AppSwitch'
import { Layout } from 'antd'
import style from './ContentPage.module.css'

const { Content } = Layout

const ContentPage = () => {
    return (
        <Content className={style.siteLayout}>
            <div className={style.siteLayoutBackground}>
                <AppSwitch />
            </div>
        </Content>
    )
}

export default ContentPage
