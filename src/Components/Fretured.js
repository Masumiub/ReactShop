import React from 'react';
import Herstory from '../Assets/Herstory.jpg';
import Taagaman from '../Assets/Dress6.jpeg';

function Featured(){
    return(
        <div>
            <div className='container'>
                <div className='row align-items-center' style={{marginTop: '90px'}}>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <h1>T A A G A M A N</h1>
                        <p className='features'>Nulla vitae elit libero, a pharetra augue mollis interdum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <button type="button" class="btn btn-dark btn-sm">SHOP NOW</button>
                    </div>
                    <div className='col-md-6 col-lg-6 col-12'>
                       <img src={Taagaman} alt="taagman" className='img-fluid'/>
                    </div>
                </div>


                <div className='row align-items-center' style={{marginBottom: '40px'}}>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <img src={Herstory} alt="Herstory" className='img-fluid'/>
                    </div>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <h1>H E R S T O R Y</h1>
                        <p className='features'>Nulla vitae elit libero, a pharetra augue mollis interdum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <button type="button" class="btn btn-dark btn-sm">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;