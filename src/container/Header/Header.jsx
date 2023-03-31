import React from 'react';
import { SubHeading } from '../../components';

import images from '../../constants/images'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Find Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p>
      <button className='custom__button'>Explore MENU</button>
    </div>

    <div className="app__wrapper-img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
