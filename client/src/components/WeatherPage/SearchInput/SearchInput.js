import React from 'react'
import { useDispatch } from 'react-redux'
import { cityWeatherFetch } from '../../../redux/slices/citySlices'
import { Form, Input, Button, Row, Col } from 'antd'
import { validateMessages } from '../../../helper/helper'

const SearchInput = () => {
    const dispatch = useDispatch()

    const onFinish = values => {
        dispatch(cityWeatherFetch(values))
    }

    return (
        <Row>
            <Col span={20} offset={4}>
                <Form
                    validateMessages={validateMessages}
                    layout="inline"
                    onFinish={onFinish}
                    style={{ height: '50px' }}>
                    <Form.Item
                        name="city"
                        rules={[{ required: true }]}
                        style={{ width: '60%' }}>
                        <Input placeholder="Input city" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" danger>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchInput
