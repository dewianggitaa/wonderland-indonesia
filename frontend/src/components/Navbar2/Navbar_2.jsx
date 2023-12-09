import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";
import './Navbar_2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar2 = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className='app__navbar'>
        <div className='app__navbar_logo'>
            <h2>Wonderland Indonesia</h2>
        </div>

        <div className='seacrh__bar'>
            <input type='text' name='search' placeholder='Search'/>
            <button type='submit'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />            
            </button>
        </div>

        <ul className='app__navbar_links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#favorite'>Favorite</a></li>
        </ul>

        <div className='app__navbar_smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}></GiHamburgerMenu>
            
            {toggleMenu && (
            <div className='app__navbar_smallscreen_overlay flex__center slide-bottom'>
                <IoMdClose color='#1A1A1A' fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)}/>
                <ul className='app__navbar_links_smallscreen'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#popular'>Popular</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            )}
        </div>
        </nav>
    );

}
export default Navbar2;
