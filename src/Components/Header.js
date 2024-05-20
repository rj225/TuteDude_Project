import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navTop'>
          <div className="Logo">LOGO</div>
          <div>
            <button>Login</button>
            <button className='btnColoured'>Signup</button>
          </div>
        </div>
        <div className='navBottom'>
          <ul>
            <li>Overview <div className='active'></div></li>
            <li>Curriculum</li>
            <li>Refund</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
