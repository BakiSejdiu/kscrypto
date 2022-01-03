import React from 'react'
import Footer from '../components/Footer'
import '../styles/Contact.css'

function Contact() {

    function handleForm(e) {
        e.preventDefault();
        Array.from(e.target.elements).forEach(control =>
            {
                if(control.type ==='text' || control.type ==='textarea' || control.type ==='email' || control.type ==='phone')
                console.log(control.value)
            })  

            alert(`
                Name : ${e.target.name.value}
                email: ${e.target.mail.value}
            `)

            console.log(e.target.rez.value)
            e.target.reset()
    }

    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="contact-title">
                        <h1>Contact</h1>
                        <p>We are always here for you</p>
                    </div>
                    <div className="contact-content">
                        <div className="contact-left">
                            <h1>Contact us</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quod esse accusamus officia praesentium quam.</p>
                            <div className="contact-icons">
                            <a href='tel:+383 44 124 224'><i className="fas fa-phone"></i> +383 44 124 224</a>
                            <a href='mailto:support@cryptoks.com'><i className="fas fa-envelope"></i> support@cryptoks.com</a>
                            <a href='#map'><i className="fas fa-location-arrow"></i> Prishtina, Albania</a>
                            </div>
                        </div>
                        <div className="contact-right">
                            <h2>Leave a message here</h2>
                            <form onSubmit={handleForm}>
                                <div className="form-row">
                                    <div className="form-row1">
                                    <input type="text" name='name' placeholder='Name*' required/>
                                    <input type="email" placeholder='Email*' name='mail' required/>
                                    </div>
                                    <div className="form-row2">
                                    <input type="text" placeholder='Subject'/>
                                    <input type="phone" placeholder='Phone'/>
                                    </div>
                                    <div className="form-row3">
                                    <textarea name="message" placeholder='Message'/>
                                    </div>
                                    <button type='submit' name='rez'>Submit</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                    
                </div>

            </div>
            <div className="map" id='map'>
                <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46084.52912642114!2d21.123707863609205!3d42.66637476673429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e1!3m2!1sen!2s!4v1640645703065!5m2!1sen!2s" 
                width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title='Prishtina'></iframe>
                    </div>
                </div>
                    
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Contact
