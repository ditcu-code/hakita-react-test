import React from 'react'
import { Row, Col, Card, Space, Typography} from 'antd'
import '../../assets/styles/HomePage.scss'
const { Title } = Typography;

export const BlogCard = () => {
    return (
        <div className='homepage'>
            <Row className='blogs'>
                <Col lg={{span:5, offset:2}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-konser-740x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Konser Semasa COVID 19, Boleh?</Title>
                            <p>Acara sosial seperti konser merupakan hal yang banyak ditunggu oleh kalangan muda di berbagai belahan dunia. Setiap tahun, panggung ...</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:5, offset:0}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-konser-740x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Konser Semasa COVID 19, Boleh?</Title>
                            <p>Acara sosial seperti konser merupakan hal yang banyak ditunggu oleh kalangan muda di berbagai belahan dunia. Setiap tahun, panggung ...</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:5, offset:0}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-konser-740x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Konser Semasa COVID 19, Boleh?</Title>
                            <p>Acara sosial seperti konser merupakan hal yang banyak ditunggu oleh kalangan muda di berbagai belahan dunia. Setiap tahun, panggung ...</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:5, offset:0}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-konser-740x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Konser Semasa COVID 19, Boleh?</Title>
                            <p>Acara sosial seperti konser merupakan hal yang banyak ditunggu oleh kalangan muda di berbagai belahan dunia. Setiap tahun, panggung ...</p>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
