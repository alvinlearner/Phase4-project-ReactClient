import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './LoginForm.css';
import swal from 'sweetalert';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
          swal({
            title: 'Success',
            text: 'Login Successful!',
            icon: 'success',
            timer: 2000,
            buttons: false,
          }).then(() => {
            if (typeof onLogin === 'function') {
              onLogin();
            }
            navigate('/home');
          });
        } else {
          swal({
            title: 'Error',
            text: 'Invalid login',
            icon: 'error',
            buttons: false,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        swal({
          title: 'Error',
          text: 'Invalid login',
          icon: 'error',
          buttons: false,
        });
        setError('An error occurred. Please try again.'); // Set error message
      });
  };

  return (
    <div className='cover'>
      <div className={`cover-login fade-in`}>
        <img src={logo} alt='Logo' id='loginbrandimg' />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type='password'
            placeholder=' Password'
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className='error-message'>{error}</p>}
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
      </div>
    </div>
  );
}

export default LoginForm;
