import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // }

  const handleSubmit = () => {
    const input = document.querySelector('input')
    setName(input.target.value);
  }

  return (
    <div className="wrapper">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label>Name</label>
            <input type="text" />
            <p>Banjo-Kazooie Concentration game</p>
          </div>
          <button className='btn btn-warning'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;