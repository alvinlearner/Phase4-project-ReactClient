import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg='https://images.unsplash.com/photo-1506099914961-765be7a97019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  )
}
