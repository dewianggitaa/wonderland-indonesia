import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className='app__header flex__center app__bg section__padding' id='home'>
    <div className='app__wrapper_info'>
        <h3 className='subheader'>Welcome Travelers! </h3>
        <h1>Let's Explore Indonesia</h1>
        <Link to="/SignUp">
          <button class="custom-button" role="button">Start Exploring</button>
        </Link>
    </div>
  </div>
);

export default Header;
