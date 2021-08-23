import React, { useEffect } from 'react';
import Banjo from './images/EndGameBanjo.gif';
import BanjoVoice from './music/BanjoSpeaking.mp3';

const EndGame = (props) => {
  const {score} = props;

  useEffect(() => {
    const banjo = new Audio(BanjoVoice)
    banjo.play();
  })
  
  return (
    <div className="end-game">
      <img src={Banjo} alt="Banjo Speaking" />
      <p className="typewriter">{`GREAT JOB! YOU FINISHED THE PUZZLE WITH ${score.toString()} TRIES REMAINING. HOW ABOUT TRYING TO DO IT WITH ${(score + 1).toString()}?`}</p>
    </div>
  )
}

export default EndGame;