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
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Banjo-Kazooie Concentration game</h4>
            <label>Enter your name</label>
            <br />
            <input type="text" />
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