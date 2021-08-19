import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');

  return (
    <div className="wrapper">
      <div className="login">
        <form>
          <label>Name</label>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;