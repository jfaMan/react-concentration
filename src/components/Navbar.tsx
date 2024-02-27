import { useEffect, useState } from 'react';
import MuteImg from '../assets/images/Mute.png';
import NavbarLogo from '../assets/images/NavbarLogo.png';
import UnmuteImg from '../assets/images/Unmute.png';

type NavbarProps = {
  name: string;
  score: number;
  login: boolean;
  game: boolean;
  reset: () => void;
  loginMusic: HTMLAudioElement;
  gameMusic: HTMLAudioElement;
};

export default function Navbar({ name, score, login, game, reset, loginMusic, gameMusic }: NavbarProps) {
  const [audioOn, setAudioOn] = useState(true);
  const [track, setTrack] = useState(loginMusic);

  useEffect(() => {
    login && setTrack(loginMusic);
    game && setTrack(gameMusic);
    setAudioOn(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, game])

  const muteAudio = () => {
    track.muted = !track.muted ? true : false;
    setAudioOn(!audioOn);
  };

  const handleClick = () => {
    if (game && window.confirm("Are you sure you want to return to the main menu? The current game's progress will be lost!")) {
      reset();
    }

    return;
  };

  return (
    <div className="navbar">
      <img
        className={game ? "navbar__logo navbar__logo--clickable" : "navbar__logo"}
        src={NavbarLogo}
        alt="Logo"
        onClick={handleClick}
      />
      {game && <div className="navbar__score">TRIES REMAINING: {score}</div>}
      {game && <div className="navbar__name">NAME: {name}</div>}
      {(login || game) && <div className="mute">
        <img
          className="mute__button"
          onClick={muteAudio}
          src={!audioOn ? MuteImg : UnmuteImg}
          alt="Mute/Unmute Icon"
        />
      </div>}
    </div>
  );
};
