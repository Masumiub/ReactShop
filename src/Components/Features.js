import React from 'react';
import {FaTruck} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaShieldAlt} from "react-icons/fa";
import {FaHeadset} from "react-icons/fa";

function Features(){
    return(
        <div className='container'>
            <div className='row' style={{marginTop: '90px', marginBottom: '40px'}}>
                <div className='col-md-6 col-lg-3 col-12'>
                    <FaTruck className='fontawesomeIco' size="6x"/>
                    <h4>FREE US DELIVERY</h4>
                    <p className='features'>Free shipping on all order above $200</p>
                </div>

                <div className='col-md-6 col-lg-3 col-12' >
                    <FaStar className='fontawesomeIco' size="6x"/>
                    <h4>PREMIUM QUALITY</h4>
                    <p className='features'>Printed to the best standards available</p>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                    <FaShieldAlt className='fontawesomeIco' size="6x"/>
                    <h4>SECURE PAYMENT</h4>
                    <p className='features'>Return it within 30 days for an exchange.</p>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                    <FaHeadset className='fontawesomeIco' size="6x"/>
                    <h4>SUPPORT 24/7</h4>
                    <p className='features'>Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
