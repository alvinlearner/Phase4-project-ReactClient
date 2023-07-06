import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/home');
        } else {
          navigate('/signup');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='cover'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
