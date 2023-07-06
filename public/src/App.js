import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Service from './components/routes/Service';
import Contact from './components/routes/Contact';
import LoginForm from './components/routes/LoginForm';
import SignupForm from './components/routes/Signup';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </div>
  );
}

export default App;
