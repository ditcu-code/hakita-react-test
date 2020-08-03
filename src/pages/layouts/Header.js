import React from 'react'
import { Col, Row, Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import '../../assets/styles/Header.scss'

const Header = () => {
    return (
        <div className='navbar'>
            <Row className='navbar__wrap'>
                <Col xs={{span:8, offset:6}} sm={{span:6, offset:1}} md={5} lg={4} xxl={3} offset={1} >
                    <Link to="/">
                            <img alt="subsit" src={require("../../assets/images/hakita_logo.png")}/>
                    </Link>
                </Col>
                <Col xs={0} sm={0} md={10} lg={12} xxl={14} offset={5}>
                    <Button type='text'>HOME</Button>
                    <Button type='text'>ABOUT</Button>
                    <Button type='text'>SERVICES</Button>
                    <Button type='text'>PRICING</Button>
                    <Button type='text'>BLOG</Button>
                    <Button type='text'>CONTACT</Button>
                    <Button style={{marginLeft:'1.5em'}} type='primary' icon={<UserOutlined/>}> LOGIN</Button> 
                </Col>
            </Row>
        </div>
    )
}

export default Header