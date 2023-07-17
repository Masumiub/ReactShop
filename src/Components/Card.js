import React from 'react';
import img1 from '../Assets/img1.jpg';
const Card=(props)=>{
    return(
        <div class="card shadow-sm" style={{width: "320px", border: "0px"}}>
        <img src={props.imglink} alt="image" className='imageIco' />
        <div class="card-body">
            <h5 class="card-title">{props.productTitle}</h5>
            <p>Price: {props.price}</p>
            {/* <p>Rating: {props.Rating}</p> */}
            {/* <p class="card-text">{props.desc}</p> */}
            <a href="#" class="btn btn-dark btn-sm">SHOP NOW</a>
        </div>
        </div>
    );
};
export default Card;