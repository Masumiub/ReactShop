import React from 'react';

const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.imglink} alt="img" className='imageIco'/>
            <div className='product_details'>
                <h4 className='product_title'>{props.productTitle}</h4>
                <h5 className='product_price'>Price: {props.price}</h5>
                <h5 className='product_rating'>Rating: {props.Rating}</h5>
                <p className='product_desc'>{props.desc}</p>
            </div>
            <button>Add to cart</button>
        </div>
    );
};


export default Product;