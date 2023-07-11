import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Destination from '../Destination';
import Trip from '../Trip';
import Footer from '../Footer';
import './Home.css';

export default function Home() {
  const [fadeState, setFadeState] = useState('');

  useEffect(() => {
    const handlePageEnter = () => {
      setFadeState('fade-in');
    };

    const handlePageExit = () => {
      setFadeState('fade-out');
    };

    window.addEventListener('DOMContentLoaded', handlePageEnter);
    window.addEventListener('beforeunload', handlePageExit);

    return () => {
      window.removeEventListener('DOMContentLoaded', handlePageEnter);
      window.removeEventListener('beforeunload', handlePageExit);
    };
  }, []);

  return (
    <div className={`home-container ${fadeState}`}>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1683009427500-71296178737f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        title="Memories made right"
        text="With us. One big family"
        buttonText="Pick Your Next Adventure"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}
