import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Navigation() {
    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(false)
    }

    return (
        <>
        <ul className={`nav ${clicked && 'open'}`}>
            <li>
                <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
                <Link to="crypto" onClick={handleClick}>Crypto</Link>
            </li>
            <li>
                <Link to="services" onClick={handleClick}>Services</Link>
            </li>
            <li>
                <Link to="contact" onClick={handleClick}>Contact</Link>
            </li>
            <li>
                <Link to="covid19" onClick={handleClick}>Covid-19</Link>
            </li>

    
        </ul>
        <div className="menu-icon" onClick={() =>
            {setClicked(!clicked)}
        }>
            { clicked ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i> }
        </div>
        </>
    )
}

export default Navigation
