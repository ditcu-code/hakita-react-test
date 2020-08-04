import React from 'react'
import HeaderBlog from './layouts/HeaderBlog'
import { Row, Col, Avatar, Space } from 'antd'
import '../assets/styles/Blog.scss'
import { BlogCard } from './components/BlogCard'

export const Blog = () => {
    return (
        <div>
            <HeaderBlog/>
            <Row className='blog'>
                <Col lg={{span:10}} className='blog__image'>
                    <img alt='blogimage' src='https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-opennegri-740x400.jpg'></img>
                </Col>
                <Col lg={{span:10, offset:1}} className='blog__text'>
                    <p style={{fontSize:'10px'}}>COVID 19</p>
                    <h1>Instansi Pemerintah yang Tetap Buka semasa COVID 19</h1>
                    <p>Berbagai langkah telah dicoba untuk memerangi bahaya dan penyebaran COVID 19 yang kini menjalar di berbagai belahan dunia. Sebagai salah satu negara yang terinfeksi, Indonesia menerapkan peraturan Pembatasan Sosial Berskala Besar (‘PSBB’) sebagai langkah pencegahan penyebaran COVID 19. Langkah ini telah dilaksanakan di beberapa daerah di Indonesia.</p>
                    <Space className='blog__avatar'>
                        <Avatar size='large' src='https://www.seekpng.com/png/full/627-6279537_circle-invest-welcomes-monero-portrait-circle.png'></Avatar>
                        <Space direction='vertical' className='blog__avatar__author'>
                            <p>Selvina</p>
                            <p class='second'>June 14, 2020</p>
                        </Space>
                    </Space>
                </Col>
            </Row>
            <BlogCard/>
        </div>
    )
}
