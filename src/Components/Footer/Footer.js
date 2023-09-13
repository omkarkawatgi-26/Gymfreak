import react from 'react';
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/omkarkawatgi-26">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/omkar-kawatgi-18b0981b7/">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/omkawatgi/?hl=en">
                        <img src={Instagram} alt=""
                        />
                    </a>

                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
    )
}

