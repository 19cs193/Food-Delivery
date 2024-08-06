import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favorite Food Here</h2>
        <p>Choose from a diverse menu featuring a delicious array of dishes</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
