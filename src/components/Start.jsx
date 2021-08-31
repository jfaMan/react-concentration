import React from 'react';
// import Logo from './images/Logo.png';

const Start = (props) => {
  const { handleStart } = props;

  return (
    <div className="start-screen">
      {/* <img src={Logo} alt="Logo" /> */}
      <button className="btn btn-warning" onClick={handleStart}>1 Player</button>
      <button className="btn btn-warning" onClick={() => alert('Coming soon! N64 Expansion Pak required (not included).')}>2 Player</button>
    </div>
  )
}

export default Start;