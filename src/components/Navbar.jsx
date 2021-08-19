import React from 'react';

const Navbar = (props) => {
  const { name, score } = props;
  return (
    <div className="navbar">
      <div className="game-title">Banjo-Kazooie Concentration</div>
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
    </div>
  )
}

export default Navbar;