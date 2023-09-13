import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
export default function Header() {
    return (
        <div className="header" id='home'>
            <img className="logo" src={logo} alt="Club_Logo"></img>
            <ul className="header-menu">
                <li><Link
                    to='home'
                    span={true}
                    smooth={true}
                    activeClass="active"
                >Home</Link></li>
                <li><Link
                    to='programs'
                    span={true}
                    smooth={true} >Programs</Link></li>
                <li><Link
                    to='reason'
                    span={true}
                    smooth={true}>Why us</Link></li>
                <li><Link
                    to='plans'
                    span={true}
                    smooth={true} >Plans</Link></li>
                <li><Link
                    to='testimonials'
                    span={true}
                    smooth={true}
                >Testimonials</Link></li>
            </ul>

        </div>
    )
}
