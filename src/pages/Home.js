import React from 'react'
import BuyCrypto from '../components/BuyCrypto'
import Countdown from '../components/Countdown'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import '../styles/Home.css'

function Home() {
    return (    
        <>
        <div className='content'>
            <div className="container">
                <div className="content_text">
                    <h1><span>CryptoKs Just Entered</span> the Real World</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi rerum ipsa reiciendis odio, possimus dicta magni minus temporibus placeat amet dolorum, odit explicabo necessitatibus! Est culpa qui cumque commodi soluta. ipsum dolor.</p>
                    
                    <div className="countdown">
                    <Countdown/>
                    </div>

                    
                    <button className='btn'><a href="#buytokens" className='buton-buytokens'>Buy Tokens</a></button>
                    <button><a href="#download" className='buton-download'>Download app</a></button>
        
                </div>
                    <div className="content_image"></div>
            </div>
        </div>

        <div className="why-us" id='why-us'>
            <div className="container">
                <div className="why-title">
                    <h1>We’re Nearly Ready to launch</h1>
                    <p>CryptoKs aims to disrupt the cryptotrading industry by lowering the barrier
                    to creating algorithmic trading models.</p>
                </div>
            <div className="why_crypto">
                
                <div className="description_crypto">
                    <div className="why-image">   
                    <img src="images/home2.png" alt="crypto" />
                    </div>
                    <h1>Crypto is untraceable</h1>
                    <p>Sending and receiving addresses as well as transacted amounts.</p>
                </div>
                <div className="description_crypto">
                <div className="why-image">   
                    <img src="images/home3.png" alt="crypto" />
                    </div>
                    <h1>Autonomy self-rule.</h1>
                    <p>Crypto has striven to solve blockchain governances quickly</p>
                </div>
                <div className="description_crypto">
                <div className="why-image">   
                    <img src="images/home4.png" alt="crypto" />
                    </div>
                    <h1>Transparency & Stability</h1>
                    <p>In crypto, transparency brings trust and old strong transparency</p>
                </div>
            </div>
            </div>
        </div>
        <DownloadApp/>
        <BuyCrypto/> 
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default Home
