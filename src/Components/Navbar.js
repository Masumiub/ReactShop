import React from 'react';

const Navbar = () => {
    return (
    <div>
      <div className='text-center' style={{backgroundColor: '#000', color: '#fff'}}>
          <p className='topbanner' style={{padding:'5px'}}>checkout our latest fashion collections</p>
      </div>
      <div className='text-center' style={{marginTop: '50px'}}> 
          <h1 style={{fontFamily: 'Times New Roman', fontSize: '54px'}}>~ A A R O N G ~</h1>
      </div>
    <div style={{marginTop: '20px', marginBottom: '50px'}}>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link NavLink" aria-current="page" href="#">home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link NavLink" href="#">shop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link NavLink" href="#">collection</a>
      </li>
      <li class="nav-item">
        <a class="nav-link NavLink" href="#">blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link NavLink" href="#">about</a>
      </li>
      <li class="nav-item">
        <a class="nav-link NavLink">contact</a>
      </li>
    </ul>
    </div>
    </div>
    );
};

export default Navbar;