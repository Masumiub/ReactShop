import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Dress1 from '../Assets/Dress-1.jpg';
import Dress2 from '../Assets/Dress-2.jpg';
import Dress3 from '../Assets/Dress-3.jpg';
import Dress4 from '../Assets/Dress-4.jpg';

function Header(){
    return(
        <Carousel>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={Dress1}
            alt="First slide"
          />
          <Carousel.Caption className='caroCaption'>
            <h1 className='captionHead'>eid collection</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" class="btn btn-dark">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={Dress2}
            alt="Second slide"
          />
          <Carousel.Caption className='caroCaption'>
            <h1 className='captionHead'>festival collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" class="btn btn-dark">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={Dress3}
            alt="Third slide"
          />
          <Carousel.Caption className='caroCaption'>
            <h1 className='captionHead'>summer collection</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button type="button" class="btn btn-dark">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={Dress4}
            alt="4th slide"
          />
          <Carousel.Caption className='caroCaption'>
            <h1 className='captionHead'>autumn collection</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button type="button" class="btn btn-dark">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;

{/* <div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={Dress1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={Dress2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={Dress3} class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</div> */}

