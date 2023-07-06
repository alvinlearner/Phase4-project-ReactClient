import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Events from './components/routes/Events';
import Contact from './components/routes/Contact';
import LoginForm from './components/routes/LoginForm';
import SignupForm from './components/routes/Signup';
import AdminDash from './components/AdminDash/AdminDash';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  };



  return (
    <div className="App">
      {isLoggedIn ? (
        <React.Fragment>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/admin" element={<AdminDash />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </React.Fragment>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;