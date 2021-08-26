import React, { useEffect, useState } from 'react';
import Banjo from './images/EndGameBanjo.gif';
import Gruntilda from './images/EndGameGruntilda.gif';
import BanjoVoice from './music/BanjoVoice.mp3';
import GruntildaVoice from './music/GruntildaVoice.mp3';

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

  const finalScore = () => {
    return score * 10
  }

  const renderMessage = () => {
    if (score !== 0) {
      if (playerName) {
        return (
          <p className="typewriter">
            GREAT JOB, {playerName}! YOU FINISHED THE PUZZLE WITH A SCORE OF {finalScore.toString()}. HOW ABOUT TRYING TO DO IT WITH {(finalScore + 10).toString()}?
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
        <p className="typewriter">HA! GAME OVER. I KNEW MY CHALLENGE WOULD BE TOO DIFFICULT FOR YOU. TRY AGAIN IF YOU DARE.</p>
      );
    }
  }
  
  return (
    <div className="end-game-left">
      <div className="end-game-left-message">
        <img src={score !== 0 ? Banjo : Gruntilda} alt="Character Speaking" />
        {renderMessage()}
      </div>
      <h1>{score !== 0 ? `Score: ${finalScore()}` : ''}</h1>
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