import React from 'react'
import { Row, Col, Form, Input, Button, Checkbox} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../assets/styles/Login.scss'

export const Login = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Row className='loginpage'>
                <Col lg={{span:6, offset: 9}} className='loginpage__form'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Ingatkan Saya</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="/">
                            Lupa Password?
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            <br/>
                            Belum memiliki akun? <a href="/">Daftar Sekarang!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
