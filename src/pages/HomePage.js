import React from 'react'
import { Row, Col, Button, Card, Divider, Space } from 'antd'
import '../assets/styles/HomePage.scss'
import { Typography } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import people from '../assets/images/people.png'
import security from '../assets/images/security.png'
import lawyer from '../assets/images/lawyer.png'
const { Title } = Typography;

const HomePage = () => {
    return (
        <div className='homepage'>
            <Row className='hero'>
                <Col span={24}>
                    <Row style={{marginTop:'100px'}}>
                        <Col xs={{span:20, offset:2}} lg={{span:8, offset:2}} className='hero__title'>
                            <Title>Urusan Legal Jadi Lebih Mudah dengan Hakita</Title>
                            <Button type='primary'>Baca Artikel</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row align='center' style={{marginTop:'75px'}} >
                <Col>
                    <Title level={3} style={{textAlign:'center'}}>Your Trusted Partner</Title>
                </Col>
            </Row>
            <Row className='whyus'>
                <Col lg={{span:6, offset:2}}>
                    <Card cover={<img alt="example" src={people} />}
                    bordered={false} style={{width:325, height:275, borderRadius:'10px', paddingTop:'10px'}}>
                        <Space direction='vertical'>
                            <Text strong>We Meet People's Needs</Text>
                            <p style={{fontSize:'12px'}}>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk  menjawab segala kebutuhan legal Anda.</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <Card cover={<img alt="example" src={security} />}
                    bordered={false} style={{width:325, height:275, borderRadius:'10px', paddingTop:'10px'}}>
                        <Space direction='vertical'>
                            <Text strong>We Provide Protection</Text>
                            <p style={{fontSize:'12px'}}>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <Card cover={<img alt="example" src={lawyer} />}
                    bordered={false} style={{width:325, height:275, borderRadius:'10px', paddingTop:'10px'}}>
                        <Space direction='vertical'>
                            <Text strong>We Are Trustworthy</Text>
                            <p style={{fontSize:'12px'}}>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</p>
                        </Space>
                    </Card>
                </Col>
            </Row>
            <Row align='center' style={{marginTop:'60px'}} >
                <Col>
                    <Title level={2} style={{textAlign:'center'}}>Product and Services</Title>
                    <p style={{margin:'20px 0'}}>Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
                </Col>
            </Row>
            <Row className='whyus'>
                <Col lg={{span:6, offset:2}}>
                    <Card cover={<img alt="example" src={lawyer} />} style={{width:500, height:275}}
                    bordered={false} hoverable title='Otomasi Dokumen'>
                        <Text strong>Otomasi Dokumen</Text>
                        <p>Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:5}}>
                    <Card cover={<img alt="example" src={lawyer} />} style={{width:500, height:275}}
                    bordered={false} hoverable title='Sistem Manajemen Dokumen'>
                        <Text strong>Sistem Manajemen Dokumen</Text>
                        <p>Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage