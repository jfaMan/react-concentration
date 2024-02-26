import Banjo from '../assets/images/EndGameBanjo.gif';
import BanjoStop from '../assets/images/EndGameBanjoStop.gif';
import Gruntilda from '../assets/images/EndGameGruntilda.gif';
import GruntildaStop from '../assets/images/EndGameGruntildaStop.gif';
// import Kazooie from '../assets/images/EndGameKazooie.gif';
import BanjoVoice from '../assets/audio/BanjoVoice.mp3';
import GruntildaVoice from '../assets/audio/GruntildaVoice.mp3';
import React, { useEffect, useState } from 'react';

// import KazooieVoice from '../assets/audio/KazooieVoice.mp3';
// import Typewriter from 'typewriter-effect';

type EndGameProps = {
  playerName: string;
  score: number;
  handleEndGame: (boolean: boolean) => void;
  refreshImages: () => void;
};

export default function EndGame({ playerName, score, handleEndGame, refreshImages }: EndGameProps) {
  const [banjo] = useState(new Audio(BanjoVoice));
  const [gruntilda] = useState(new Audio(GruntildaVoice));
  // const [ kazooie ] = useState(new Audio(KazooieVoice));
  const [finalScore] = useState(score * 10);
  const [messageWinA, setMessageWinA] = useState<JSX.Element>();
  const [messageWinB, setMessageWinB] = useState<JSX.Element>();
  // const [ messageWinC, setMessageWinC ] = useState();
  // const [ messageWinD, setMessageWinD ] = useState();
  const [messageLoseA, setMessageLoseA] = useState<JSX.Element>();
  const [messageLoseB, setMessageLoseB] = useState<JSX.Element>();
  const [banjoSpeaking, setBanjoSpeaking] = useState(true);
  const [gruntySpeaking, setGruntySpeaking] = useState(true);

  useEffect(() => {
    if (score !== 0) {
      banjo.play();
      setTimeout(() => {
        setMessageWinA(<p className="typewriter">THE CHALLENGE WITH A SCORE OF {finalScore}.</p>);
      }, 3500);
      setTimeout(() => {
        setMessageWinB(<p className="typewriter">HOW ABOUT TRYING FOR {finalScore + 10} NEXT?</p>);
      }, 7500);
      setTimeout(() => {
        setBanjoSpeaking(false);
      }, 11400);
      // setTimeout(() => {
      //   kazooie.play()
      //   setMessageWinC(
      //     <div className="end-game-left-message">
      //       <div>
      //         <p className="typewriter">ANYTHING TO MAKE THAT OLD HAG LEAVE</p>
      //         {messageWinD}
      //       </div>
      //       <img src={Kazooie} alt="Kazooie Speaking" />
      //     </div>
      //   )
      // }, 11500)
      // setTimeout(() => {
      //   setMessageWinD(<p className="typewriter">OUR HOME.</p>)
      // }, 15000)
    } else {
      gruntilda.play();
      setTimeout(() => {
        setMessageLoseA(<p className="typewriter">WOULD BE TOO DIFFICULT FOR YOU.</p>);
      }, 3500);
      setTimeout(() => {
        setMessageLoseB(<p className="typewriter">TRY AGAIN IF YOU DARE!</p>);
      }, 7000);
      setTimeout(() => {
        setGruntySpeaking(false);
      }, 10500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    score === 0 ? gruntilda.pause() : banjo.pause();
    handleEndGame(false);
    refreshImages();
  };

  const renderMessage = () => {
    if (score !== 0) {
      return (
        <div>
          <p className="typewriter">GREAT JOB{playerName ? `, ${playerName}` : null}! YOU COMPLETED</p>
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
  };

  // const renderKazooie = () => {
  //   return (
  //     messageWinC
  //     messageWinD
  // }

  // THESE STYLE OBJECT VARIABLES DON'T WORK???
  // const winScoreScreen = {
  //   backgroundColor: '#8EE190',
  //   boxShadow: '0px 0px 8px 8px rgba(142, 225, 144, 0.7)'
  // }
  // const loseScoreScreen = {
  //   backgroundColor: '#F8F8F8',
  //   boxShadow: '0px 0px 8px 8px rgba(248, 248, 248, 0.7)'
  // }

  return (
    <div className="end-game-left">
      <div className="end-game-left-message">
        <img
          src={score !== 0 ? (banjoSpeaking ? Banjo : BanjoStop) : gruntySpeaking ? Gruntilda : GruntildaStop}
          alt="Character Speaking"
        />
        <div>{renderMessage()}</div>
      </div>
      {/* {messageWinC} */}
      {/* {messageWinD} */}
      <div
        className="final-score"
        style={
          score !== 0
            ? {
                backgroundColor: '#8EE190',
                boxShadow: '0px 0px 8px 8px rgba(142, 225, 144, 0.7)'
              }
            : {
                backgroundColor: '#F8F8F8',
                boxShadow: '0px 0px 8px 8px rgba(248, 248, 248, 0.7)'
              }
        }
      >
        <h1>{score !== 0 ? `SCORE = ${finalScore}` : 'GAME OVER'}</h1>
      </div>
      <button
        onClick={handleClick}
        className="btn btn-warning"
      >
        {score === 0 ? 'RETRY' : 'PLAY AGAIN'}
      </button>
    </div>
  );
};
