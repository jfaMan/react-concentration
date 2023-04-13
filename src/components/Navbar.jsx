import NavbarLogo from './images/NavbarLogo.png';
import React, { useState } from 'react';

// import NavbarLogo2 from './images/NavbarLogo2.png';
// import LogoToggle from './music/LogoToggle.mp3'

const Navbar = (props) => {
  const { name, score, start } = props;
  // const [ oldLogo, setOldLogo] = useState(false);

  // const toggleLogo = () => {
  //   setOldLogo(!oldLogo)
  //   const toggleJingle = new Audio(LogoToggle);
  //   toggleJingle.play();
  // }
  return (
    <div className="navbar">
      <img
        src={NavbarLogo}
        alt="Logo"
      />
      {score >= 0 && <div className="score">TRIES REMAINING: {score}</div>}
      {!start && <div className="name">NAME: {name}</div>}
    </div>
  );
};

export default Navbar;
