import React from 'react'

import { Layout } from 'antd'

const Home = () => {
    const { Content } = Layout
    return (
        <Content
            className="site-layout"
            style={{ padding: '0 50px', marginTop: 64 }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: '85vh' }}>
                Home
            </div>
        </Content>
    )
}

export default Home
