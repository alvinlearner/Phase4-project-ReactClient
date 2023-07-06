import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

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
          setShowPopup(true);
          setPopupMessage('Login Successful!');
          setTimeout(() => {
            if (typeof onLogin === 'function') {
              onLogin(); 
            }
            navigate('/home');
          }, 2000);
        } else {
          setShowPopup(true);
          setPopupMessage('Invalid login');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowPopup(true);
        setPopupMessage('Invalid login');
      });
  };

  return (
    <div className='cover'>
      <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>Login</h1>
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
      <p style={{ marginTop: '50px' }}>
        Not registered?{' '}
        <Link to='/signup'>
          <em style={{ fontSize: '17px', textDecoration: 'none' }}>
            Sign up today!
          </em>
        </Link>{' '}
      </p>
      {showPopup && (
        <div id='popup'>
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
