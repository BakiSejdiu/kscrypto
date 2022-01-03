import React from 'react'
import '../styles/DownloadApp.css'

function DownloadApp() {
    return (
        <>
            <div className="download" id="download">
                <div className="container">
                    <div className="download-content">
                        <div className="download-title">
                            <h1>Download our app</h1>
                            <p>Lorem ipsum dolor sit amet  adipisicing elit. Iste, ratione?</p>
                        </div>
                        <div className="download-cards">
                            <div className="download-card card1">
                                <div className="download-card-title">
                                    <h2>Download for Android</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                                    <button className='btn-download'>
                                    <a href="/" className='link'><i className="fab fa-google-play"></i>Play Store</a>
                                    </button>
                                </div>
                                <div className="download-image">
                                    <img src="images/download.png" alt="app" className='downloadimages' height='540px'/>
                                </div>
                            </div>
                            <div className="download-card card2">
                                <div className="download-card-title">
                                    <h2>Download for iOS</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                                    <button className='btn-download'>
                                    <a href="/" className='link'><i className="fab fa-apple"></i>App Store</a>
                                    </button>
                                </div>
                                <div className="download-image">
                                    <img src="images/download.png" className='downloadimages' alt="app" height='540px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadApp
