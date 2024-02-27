import Instructions from '../assets/images/Instructions.png';
import Logo from '../assets/images/Logo.png';
import Banjo from '../assets/audio/Banjo.mp3';
import Fireplace from '../assets/audio/Fireplace.mp3';
import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from '../types';

type LoginProps = {
  handleLogin: (name: string) => void;
  loginMusic: HTMLAudioElement;
};

export default function Login({ handleLogin, loginMusic }: LoginProps ) {
  const [inputName, setInputName] = useState('');
  const [fireplace] = useState(new Audio(Fireplace));
  const [gameStartBanjoVoice] = useState(new Audio(Banjo));

  useEffect(() => {
    fireplace.volume = 0.5;
    fireplace.setAttribute('loop', 'true');
    fireplace.play();
    loginMusic.setAttribute('loop', 'true');
    loginMusic.play();

    return () => {
      fireplace.pause();
      loginMusic.pause();
      loginMusic.muted = false;
      loginMusic.currentTime = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin(inputName);
    gameStartBanjoVoice.play();
  };

  const handleChange = (event: ChangeEvent) => {
    setInputName(event.target.value.toUpperCase());
  };

  return (
    <div className="login-screen">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img
              className="bounce"
              src={Logo}
              alt="Logo"
            />
            <h5>CONCENTRATION CHALLENGE</h5>
            <label>ENTER YOUR NAME</label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              pattern="[a-zA-Z]+"
              minLength={2}
              maxLength={7}
              required
            />
          </div>
          <button className="btn btn-warning">START</button>
        </form>
      </div>
      <div className="login-instructions">
        <div className="instructions">
          <h1>INSTRUCTIONS</h1>
          <img
            src={Instructions}
            alt="Banjo and Kazooie"
          />
          <p>GRUNTY'S BACK! HELP EVERYONE'S FAVOURITE BEAR AND BIRD COMPLETE GRUNTILDA'S CONCENTRATION CHALLENGE.</p>
          <p>
            YOU'LL HAVE A NUMBER OF ATTEMPTS TO TRY AND PAIR UP ALL THE MATCHING CARDS, BUT BE CAREFUL BECAUSE IF THE
            NUMBER REACHES 0, IT'S GAME OVER!
          </p>
        </div>
      </div>
    </div>
  );
};
