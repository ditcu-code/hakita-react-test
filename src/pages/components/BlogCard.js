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
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-opennegri-740x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Instansi Pemerintah yang Tetap Buka semasa COVID 19</Title>
                            <p>Berbagai langkah telah dicoba untuk memerangi bahaya dan penyebaran COVID 19 yang kini menjalar di berbagai belahan dunia. Sebagai salah satu ...</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:5, offset:0}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakita-agama-770x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Kegiatan Keagamaan Saat PSBB</Title>
                            <p>Wabah pandemi Corona Virus Disease (COVID 19)  merupakan bahaya yang menyerangan berbagai negara-negara di dunia, termasuk ...</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:5, offset:0}}>
                    <Card style={{width:260, height:400}} cover={<img alt="example" src={'https://www.hakita.id/blog/wp-content/uploads/2020/06/hakitatv-770x400.jpg'} />}
                    bordered={false} >
                        <Space direction='vertical' className='blogs__text' >
                            <Title level={4}>Kasus George Floyd ditinjau dari Hukum Indonesia</Title>
                            <p>Kasus penganiayaan merupakan sebuah kejahatan yang sangat mengkhawatirkan. Garda perlindungan terdepan dari penganiayaan adalah ...</p>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
