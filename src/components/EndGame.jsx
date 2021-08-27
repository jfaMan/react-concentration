import React, { useEffect, useState } from 'react';
import Banjo from './images/EndGameBanjo.gif';
import Gruntilda from './images/EndGameGruntilda.gif';
import BanjoVoice from './music/BanjoVoice.mp3';
import GruntildaVoice from './music/GruntildaVoice.mp3';
// import Typewriter from 'typewriter-effect';

const EndGame = (props) => {
  const {playerName, score, endGame, refreshImages} = props;
  const [ banjo ] = useState(new Audio(BanjoVoice));
  const [ gruntilda ] = useState(new Audio(GruntildaVoice));
  const [ finalScore ] = useState(score * 10)
  const [ messageWinA, setMessageWinA ] = useState();
  const [ messageWinB, setMessageWinB ] = useState();
  const [ messageLoseA, setMessageLoseA ] = useState();
  const [ messageLoseB, setMessageLoseB ] = useState();

  useEffect(() => {
    if (score !== 0) {
      banjo.play()
      setTimeout(() => {
        setMessageWinA(<p className="typewriter">THE PUZZLE WITH A SCORE OF {finalScore}.</p>)
      }, 3500)
      setTimeout(() => {
        setMessageWinB(<p className="typewriter">HOW ABOUT TRYING TO DO IT WITH {(finalScore + 10)}?</p>)
      }, 7500)
    } else {
      gruntilda.play();
      setTimeout(() => {
        setMessageLoseA(<p className="typewriter">WOULD BE TOO DIFFICULT FOR YOU.</p>)
      }, 3500)
      setTimeout(() => {
        setMessageLoseB(<p className="typewriter">TRY AGAIN IF YOU DARE.</p>)
      }, 7000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleClick = () => {
    score === 0 ? gruntilda.pause() : banjo.pause();
    endGame(false)
    refreshImages()
  }



  const renderMessage = () => {
    if (score !== 0) {
      return (
        <div>
          <p className="typewriter">GREAT JOB{playerName ? `, ${playerName}` : null}! YOU FINISHED</p>
          {messageWinA}
          {messageWinB}
        </div>
        );
    } else {
      return (
        <div>
          <p className="typewriter">HA! GAME OVER. I KNEW MY CHALLENGE</p>
          {messageLoseA}
          {messageLoseB}
        </div>
      );
    }
  }

  return (
    <div className="end-game-left">
      <div className="end-game-left-message">
        <img src={score !== 0 ? Banjo : Gruntilda} alt="Character Speaking" />
        <div>
          {renderMessage()}
        </div>
      </div>
      <div className="final-score" style={ score !== 0 ? {backgroundColor: '#8EE190'} : null}>
        <h1>{score !== 0 ? `SCORE = ${finalScore}` : ''}</h1>
      </div>
      <button onClick={handleClick} className="btn btn-warning">
        {score === 0 ? 'RETRY' : 'PLAY AGAIN'}
      </button>
    </div>
  )
}

export default EndGame;