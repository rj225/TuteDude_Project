import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navTop'>
          <div className="Logo">LOGO</div>
          <div>
            <button className='login'>Login</button>
            <button className='signUp'>Signup</button>
          </div>
        </div>
        <div className='navBottom'>
          <ul>
            <li>Overview <div className='active'></div></li>
            <li className='unactive'>Curriculum</li>
            <li className='unactive'>Refund</li>
            <li className='unactive'>Testimonials</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
