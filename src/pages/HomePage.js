import React from 'react'
import { Row, Col, Button, Card, Space, Divider, Input } from 'antd'
import '../assets/styles/HomePage.scss'
import { Typography } from 'antd';
import { RightOutlined, PhoneFilled, FacebookFilled } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import peopleImg from '../assets/images/people.png'
import security from '../assets/images/security.png'
import lawyer from '../assets/images/lawyer.png'
import documents from '../assets/images/documents.png'
import docmgr from '../assets/images/docmgr.png'
const { TextArea } = Input;
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
            <Row align='center' style={{margin:'75px 0 45px 0'}} >
                <Col>
                    <Title level={3} style={{textAlign:'center'}}>Your Trusted Partner</Title>
                </Col>
            </Row>
            <Row className='whyus'>
                <Col lg={{span:6, offset:2}}>
                    <Card cover={<img alt="example" src={peopleImg} />}
                    bordered={false} style={{width:325, height:325, borderRadius:'10px', paddingTop:'25px'}}>
                        <Space direction='vertical' style={{width:'250px'}}>
                            <Text strong>We Meet People's Needs</Text>
                            <p style={{fontSize:'12px', paddingTop:'10px'}}>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk  menjawab segala kebutuhan legal Anda.</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <Card cover={<img alt="example" src={security} />}
                    bordered={false} style={{width:325, height:325, borderRadius:'10px', paddingTop:'25px'}}>
                        <Space direction='vertical' style={{width:'250px'}}>
                            <Text strong>We Provide Protection</Text>
                            <p style={{fontSize:'12px', paddingTop:'10px'}}>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</p>
                        </Space>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <Card cover={<img alt="example" src={lawyer} />}
                    bordered={false} style={{width:325, height:325, borderRadius:'10px', paddingTop:'25px'}}>
                        <Space direction='vertical' style={{width:'250px'}}>
                            <Text strong>We Are Trustworthy</Text>
                            <p style={{fontSize:'12px', paddingTop:'10px'}}>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</p>
                        </Space>
                    </Card>
                </Col>
            </Row>
            <Row align='center' style={{marginTop:'100px'}} >
                <Col>
                    <Title level={2} style={{textAlign:'center'}}>Product and Services</Title>
                    <p style={{margin:'20px 0'}}>Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
                </Col>
            </Row>
            <Row className='services'>
                <Col lg={{span:6, offset:2}}>
                    <Card style={{width:500, height:300}}
                    bordered={false} hoverable title='Otomasi Dokumen'>
                        <Space className='services__content'>
                            <Col>
                                <img alt="example" src={documents} />
                            </Col>
                            <p>Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                        </Space>
                        <Button href='https://www.hakita.id/produk' block type='primary'>Learn More<RightOutlined/> </Button>
                    </Card>
                </Col>
                <Col lg={{span:6, offset:5}}>
                    <Card style={{width:500, height:300}}
                    bordered={false} hoverable title='Sistem Manajemen Dokumen'>
                        <Space className='services__content'>
                            <Col>
                                <img alt="example" src={docmgr} />
                            </Col>
                            <p>Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder.</p>
                        </Space>
                        <Button href='https://www.hakita.id/produk' block type='primary'>Learn More<RightOutlined/> </Button>
                    </Card>
                </Col>
            </Row>
            <Row align='center' className='accident'>
                <Col span={24}>
                    <Row style={{marginTop:'100px'}}>
                        <Col xs={{span:20, offset:2}} lg={{span:8, offset:2}} className='hero__title'>
                            <Title>"Tahukah Anda?</Title>
                            <p>bahwa ketika terlibat kecelakaan Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak?"</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row align='center' style={{marginTop:'60px'}} >
                <Col>
                    <Title level={2} style={{textAlign:'center'}}>Love Reading, Keep Reading</Title>
                    <p style={{margin:'20px 0'}}>Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
                </Col>
            </Row>
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
            <Row align='center' style={{marginTop:'60px'}} >
                <Col>
                    <Title level={2} style={{textAlign:'center'}}>Contact Us</Title>
                    <p style={{margin:'20px 0'}}>Anda punya pertanyaan atau catatan? Kirim saja pesan kepada kami!</p>
                </Col>
            </Row>
            <Row className='contact'>
                <Col lg={{span:5, offset:3}} className='contact__container'>
                    <Row className='contact__row'>
                        <Col className='contact__inner'>
                            <Title level={4}>Kenali lebih dekat</Title>
                            <Divider/>
                            <Space direction='vertical'>
                                <p> <FacebookFilled/> Hakita</p>
                                <p> <PhoneFilled/> +62 623 923 2394</p>
                                <p>Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat, Jakarta Utara</p>
                            </Space>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{span:12, offset:0}} className='contact__containerleft'>
                    <Row className='contact__row'>
                        <Col className='contact__right'>
                            <Space direction='vertical'>
                                <Input placeholder='Nama'></Input>
                                <Input placeholder='Email'></Input>
                                <Space direction='horizontal'>
                                    <Input placeholder='Perusahaan'></Input>
                                    <Input placeholder='Jabatan'></Input>
                                </Space>
                                <TextArea placeholder='Pesan'></TextArea>
                                <Button type='primary'>Kirim</Button>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage