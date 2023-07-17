import React from 'react';
// import { FaYoutube } from 'react-icons/fa';
import Data from './data.json';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Card from './Components/Card.js';
import Footer from './Components/Footer.js';
import Features from './Components/Features';
import Featured from './Components/Fretured';
const App = () => {
    let items = [];
    for(let x=0; x<3; x++){
        items.push(<Card imglink={Data[x].imglink} productTitle= {Data[x].productTitle} price={Data[x].price} Rating={Data[x].Rating} desc={Data[x].desc} />)
    }

    let items2 = [];
    for(let x=3; x<6; x++){
        items2.push(<Card imglink={Data[x].imglink} productTitle= {Data[x].productTitle} price={Data[x].price} Rating={Data[x].Rating} desc={Data[x].desc} />)
    }
    // items = Data.map((item) => <Product imglink={item.imglink} productTitle= {item.productTitle} price={item.price} Rating={item.Rating} desc={item.desc} /> );
    return (
        <div>
            <Navbar />
            <Header />
            <Features />
            <Featured />
            <div className='container'> 
                <div className='row cardsRow'>
                    <div className='text-center' style={{marginTop: '90px'}}>
                        <h1 style={{fontFamily: 'Times New Roman', fontSize: '49px', marginBottom: '40px'}}>L A T E S T&nbsp; &nbsp;A R R I V A L</h1>
                    </div>
                    {items}
                </div>

                <div className='row cardsRow' style={{marginTop: '60px', marginBottom: '90px'}}>
                    {items2}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;


{/* <header>
<h1>BD STORE</h1>
</header>
<main>
<div className='row'>
    {items}
</div>
<div className='row'>
    {items2}
</div>
</main>
<footer>
<p className="right">Developed with &hearts; <span> <FaYoutube className='icon'/> </span>  by Md Masum Musfique</p>
</footer>  */}