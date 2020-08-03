import React from 'react'
import { Col, Row, Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import '../../assets/styles/Header.scss'

const Header = () => {
    return (
        <div className='navbar'>
            <Row className='navbar__wrap'>
                <Col xs={{span:8, offset:6}} sm={{span:6, offset:6}} md={{span:1, offset:2}} lg={4} xxl={3} >
                    <Link to="/">
                            <img alt="hakita" src={require("../../assets/images/hakita_logo.png")}/>
                    </Link>
                </Col>
                <Col xs={0} sm={0} md={{span:16, offset:0}} lg={{span:14}} xxl={{span:13, offset:4}} className='navbar__item'>
                    <Button type='text'>HOME</Button>
                    <Button type='text'>ABOUT</Button>
                    <Button type='text'>SERVICES</Button>
                    <Button type='text'>PRICING</Button>
                    <Button type='text'>BLOG</Button>
                    <Button type='text'>CONTACT</Button>
                </Col>
                <Col sm={0} md={{span:1}}>
                    <Button type='primary' icon={<UserOutlined/>}>LOGIN</Button> 
                </Col>
            </Row>
        </div>
    )
}

export default Header