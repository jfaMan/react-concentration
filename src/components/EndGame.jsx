import React, { useEffect, useState } from 'react';
import Banjo from './images/EndGameBanjo.gif';
import Gruntilda from './images/EndGameGruntilda.gif';
import BanjoVoice from './music/BanjoSpeaking.mp3';
import GruntildaVoice from './music/GruntildaSpeaking.mp3';

const EndGame = (props) => {
  const {playerName, score, endGame, refreshImages} = props;
  const [ banjo ] = useState(new Audio(BanjoVoice));
  const [ gruntilda ] = useState(new Audio(GruntildaVoice));

  useEffect(() => {
    score !== 0 ? banjo.play() : gruntilda.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleClick = () => {
    score === 0 ? gruntilda.pause() : banjo.pause();
    endGame(false)
    refreshImages()
  }
  const renderMessage = () => {
    if (score !== 0) {
      if (playerName) {
        return (
          <p className="typewriter">
            GREAT JOB, {playerName}! YOU FINISHED THE PUZZLE WITH {score.toString()} TRIES REMAINING. HOW ABOUT TRYING TO DO IT WITH {(score + 1).toString()}?
          </p>
        );
      } else {
        return (
          <p className="typewriter">
            GREAT JOB! YOU FINISHED THE PUZZLE WITH {score.toString()} TRIES REMAINING. HOW ABOUT TRYING TO DO IT WITH {(score + 1).toString()}?
          </p>
        );
      }
    } else {
      return (
        <p className="typewriter">HA! GAME OVER. I KNEW IT WOULD BE TOO DIFFICULT FOR YOU. TRY AGAIN.</p>
      );
    }
  }
  
  return (
    <div className="end-game-left">
      <div className="end-game-left-message">
        <img src={score !== 0 ? Banjo : Gruntilda} alt="Character Speaking" />
        {renderMessage()}
      </div>
      <button
        onClick={handleClick}
        className="btn btn-warning"
      >
          {score === 0 ? 'RETRY' : 'PLAY AGAIN'}
      </button>
    </div>
  )
}

export default EndGame;