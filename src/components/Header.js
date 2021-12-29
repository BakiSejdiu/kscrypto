import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='container'>

                <Link to='/'> <img src='images/logo2.png' alt='logo'/></Link>
                <Navigation/>
            </div>
        </div>
    )   
}

export default Header
