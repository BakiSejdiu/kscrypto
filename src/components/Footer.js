import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <>
            
                <div className="footer">
                    <div className="container">
                        <div className="footer-content">
                        <div className="footer-col1 f1">
                        <div className="logo">
                            <a href="/">
                                <img src={'/images/logo.svg'} alt="logo" width='200px'/>
                            </a>
                        </div>
                        <div className="footer-icons">
                            <ul>
                                <li><a href="/">
                                <i className="fab fa-facebook"></i></a></li>
                                <li>
                                <a href="/">
                                <i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                <a href="/">
                                <i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                <a href="/">
                                <i className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="footer-col2 f2">
                        <div className="footer-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Crypto</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">Covid19</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Support us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col3 f3">
                        <div className="footer-subscribe">
                            <h3>Subscribe to our Newsleter</h3>

                            <input type="text" placeholder='Enter your email address'/>
                            <button type='submit'>Subscribe</button>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
