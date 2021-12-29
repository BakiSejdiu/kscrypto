import React from 'react'
import '../styles/Services.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <>
            <div className="services">
            <div className="container">
                <div className="services-title">
                <h1>We’re Nearly Ready to launch</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                    <div className="services-content">
                        <div className="services-text">
                            <h1>Decentralized Minning Our core focus.</h1>
                            <p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                            <Link to='/'>Read more<i className="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                        <div className="service-img">
                        <div className="service-image1">
                        </div>

                        </div>
                        <div className="service-img">
                        <div className="service-image2">
                        </div>
                        </div>

                        <div className="services-text">
                            <h1>Populer Money and Smart wallet.</h1>
                            <p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                            <Link to='/'>Read more<i className="fas fa-long-arrow-alt-right"></i></Link>
                    </div>

                    <div className="services-text">
                            <h1>Upholding Confidentialit & Strong Security.</h1>
                            <p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                            <Link to='/'>Read more<i className="fas fa-long-arrow-alt-right"></i></Link>
                    </div>

                    <div className="service-img">
                        <div className="service-image3">
                        </div>
                        </div>

                        
                </div>
            </div>
            
        </div>
        <footer>
            <Footer/>
            </footer>
        </>
    )
}

export default Services
