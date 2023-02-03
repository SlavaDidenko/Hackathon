import React, { useEffect, useState } from 'react';
import './Header.scss';
import {Squeeze } from 'hamburger-react'; // норм ліба, можна юзать

const navArr = [];
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
          {/*<Squeeze*/}
          {/*  color="#fff4b9"*/}
          {/*  onToggle={() => toggle()}*/}
          {/*  duration={0.2}*/}
          {/*></Squeeze>*/}
      </div>
    </header>
  );
};

export default Header;
