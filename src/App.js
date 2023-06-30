import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Product from './Components/Products.js';
import Data from './data.json';
const App = () => {
    let items = [];
    for(let x=0; x<3; x++){
        items.push(<Product imglink={Data[x].imglink} productTitle= {Data[x].productTitle} price={Data[x].price} Rating={Data[x].Rating} desc={Data[x].desc} />)
    }
    // items = Data.map((item) => <Product imglink={item.imglink} productTitle= {item.productTitle} price={item.price} Rating={item.Rating} desc={item.desc} /> );
    let items2 = [];
    for(let x=3; x<6; x++){
        items2.push(<Product imglink={Data[x].imglink} productTitle= {Data[x].productTitle} price={Data[x].price} Rating={Data[x].Rating} desc={Data[x].desc} />)
    }

    return (
        <div>
            <header>
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
                <p className="right">Developed with &hearts; by Anisul Islam</p>
            </footer> 
        </div>
    );
};

export default App;
