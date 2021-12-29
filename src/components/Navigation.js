import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="crypto">Crypto</Link>
            </li>
            <li>
                <Link to="services">Services</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <li>
                <Link to="covid19">Covid-19</Link>
            </li>

        </ul>
    )
}

export default Navigation
