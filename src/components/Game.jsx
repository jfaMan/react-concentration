import React from 'react';
import Images from './Images'
import Logo from './images/Logo.png'

const Game = (props) => {
  const { audio } = props;
  return (
    <div className='game' style={{ display: 'none' }}>
      <img className="bounce" src={Logo} alt="Logo" />
      <Images audio={audio} />
    </div>
  )
}

export default Game;