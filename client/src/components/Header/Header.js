import React from 'react'

import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const { Header } = Layout
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/weather">Weather</NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default Header
