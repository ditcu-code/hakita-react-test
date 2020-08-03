import React from 'react'
import { Row, Col, Space } from 'antd'
import '../../assets/styles/Footer.scss'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'

const Footer = () => {
    return (
        <div className='footer'>
            <Row className='footer__container'>
                <Col lg={{span:8, offset:2}}>
                    <img alt="hakita" src={require("../../assets/images/hakita_logo_white.png")}/>
                    <p>HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
                    <Space className='footer__terms'>
                        <a href='https://www.hakita.id/content/terms-and-conditions'>Syarat dan Ketentuan</a> ‧
                        <a href='https://www.hakita.id/content/privacy-policy'>Kebijakan Privasi</a> ‧
                        <a href='https://www.hakita.id/content/instruksi-pembayaran/'>Panduan Pembayaran</a>
                    </Space>
                </Col>
                <Col lg={{span:4, offset:2}}>
                    <h4>Ikuti Kami</h4>
                    <a href='https://fb.me/hakita.id'><FacebookFilled/> Hakita Indonesia</a><br/>
                    <a href='https://instagram.com/hakita.id'><InstagramFilled/> hakita.id</a>
                </Col>
                <Col lg={{span:5, offset:1}}>
                    <h4>PT Legalindo Mitra Abadi</h4>
                    <p>Jl. Boulevard Barat Raya No.27, RW. 9,Kelapa Gading Barat - Jakarta Utara <br/> 14240</p>
                    <a href="mailto:info@hakita.com">info@hakita.com</a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
