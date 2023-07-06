import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import AboutUs from '../AboutUs'

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg='https://images.unsplash.com/photo-1433770082169-c9bfaf2c323f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  )
}
