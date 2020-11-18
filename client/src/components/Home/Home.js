import React, { useEffect } from 'react'

import { Layout } from 'antd'
import { usePosition } from '../../hooks/usePosition'
import { addLocation } from '../../redux/slices/citySlices'
import { useDispatch } from 'react-redux'
const { Content } = Layout

const Home = () => {
    const { position } = usePosition()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addLocation(position))
    }, [position])

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
