import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Book a timeslot to talk to us</h4>
                        <h3>Send us an email to: info@wasteant.com</h3>
                        <hr />
                        <h5>Privacy policies</h5>
                    </div>
                    <div className="row">
                        <p>
                            &copy;{new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;