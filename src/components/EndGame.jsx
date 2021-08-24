import React, { useEffect } from 'react';
import Banjo from './images/EndGameBanjo.gif';
import Gruntilda from './images/EndGameGruntilda.gif';
import BanjoVoice from './music/BanjoSpeaking.mp3';
import GruntildaVoice from './music/GruntildaSpeaking.mp3'

const EndGame = (props) => {
  const {playerName, score} = props;

  useEffect(() => {
    if (score !== 0) {
      const banjo = new Audio(BanjoVoice)
      banjo.play();
    } else {
      const gruntilda = new Audio(GruntildaVoice)
      gruntilda.play();
    }
  })
  
  const renderMessage = () => {
    if (score !== 0) {
      if (playerName) {
        return (
          <p>
            GREAT JOB, {playerName}! YOU FINISHED THE PUZZLE WITH {score.toString()} TRIES REMAINING. HOW ABOUT TRYING TO DO IT WITH {(score + 1).toString()}?
          </p>
        );
      } else {
        return (
          <p>
            GREAT JOB! YOU FINISHED THE PUZZLE WITH {score.toString()} TRIES REMAINING. HOW ABOUT TRYING TO DO IT WITH {(score + 1).toString()}?
          </p>
        );
      }
    } else {
      return (
        <p>HA! GAME OVER. I KNEW IT WOULD BE TOO DIFFICULT FOR YOU. TRY AGAIN.</p>
      );
    }
  }
  
  return (
    <div className="end-game-left">
      <img src={score !== 0 ? Banjo : Gruntilda} alt="Character Speaking" />
      {renderMessage()}
    </div>
  )
}

export default EndGame;