import './App.css';
import { Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Events from './components/routes/Events';
import Contact from './components/routes/Contact';
import LoginForm from './components/routes/LoginForm';
import SignupForm from './components/routes/Signup';
import AdminDash from './components/AdminDash/AdminDash';
import Organisation from './components/AdminDash/Organisation';
import DashFooter from './components/AdminDash/DashHome';
import Statistics from './components/AdminDash/Statistics';
import Graphs from './components/AdminDash/Graphs';


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
            <Route path="/organisation" element={<Organisation/>}/>
            <Route path="/analytics/statistics" element={<Statistics/>}/>
            <Route path="/analytics/graphs" element={<Graphs/>} />
            <Route path='/adminhome' element={<DashFooter/>}/>
          </Routes>
        </React.Fragment>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}

    </div>
  );
}

export default App;



