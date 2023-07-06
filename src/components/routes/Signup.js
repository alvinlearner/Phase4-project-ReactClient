import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for the popup visibility

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setShowPopup(true); // Show the popup if registration is successful
          setTimeout(() => {
            navigate('/'); // Redirect to home page after a delay
          }, 2000);
        } else {
          console.log('Sign up failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='cover'>
      <h1 style={{ fontSize: '60px',marginBottom:"20px" }}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p style={{ marginTop: '50px' }}>
        Already registered?{' '}
        <Link to='/'>
          <em style={{ fontSize: '17px', textDecoration: 'none' }}>
            Login!
          </em>
        </Link>{' '}
      </p>
      {/* {showPopup && (
        <div id='popup'>
          <p>Registered Successfully!</p>
        </div>
      )} */}
    </div>
  );
}

export default SignUpForm;
