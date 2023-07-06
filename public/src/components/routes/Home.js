import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Destination from '../Destination'
import Trip from '../Trip'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
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
    </>
  )
}
