import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import Trip from '../Trip'

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg='https://images.unsplash.com/photo-1610824224972-db9878a2fe2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  )
}