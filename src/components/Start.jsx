import React from 'react';

// import Logo from './images/Logo.png';

const Start = (props) => {
  const { handleStart } = props;

  return (
    <div className="start-screen">
      <div className="start-btn-container">
        <button
          className="btn btn-warning"
          onClick={handleStart}
        >
          1 Player
        </button>
        <button
          className="btn btn-warning"
          onClick={() => alert('Coming soon! N64 Expansion Pak required (not included).')}
        >
          2 Player
        </button>
      </div>
      <div className="footer">
        <p className="text-left">CREATED BY ALLAN SZEWCZYK 2021</p>
        <p className="text-center">|</p>
        <p className="text-right">BANJO-KAZOOIE® IS A TRADEMARK OF RARE LIMITED</p>
      </div>
    </div>
  );
};

export default Start;
