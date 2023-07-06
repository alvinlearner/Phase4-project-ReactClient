import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './ContactForm.css'

function ContactForm() {
  const form = useRef();
  const [formStatus, setFormStatus] = React.useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    emailjs.sendForm('service_cij3dub', 'template_d1tv4gt', form.current, '5_mhEEZgXYyxuiO_F')
      .then((result) => {
        console.log(result.text);
        resetForm();
        setFormStatus("Submitted");
      })
      .catch((error) => {
        console.log(error.text);
        setFormStatus("Error");
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className='form-container'>
      <h1>Send us a message!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input className="form-control" type="text" name="name" placeholder="Full names" required />
        <input className="form-control" type="email" name="email" placeholder="Email" required pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/>
        <input className="form-control" type="tel" name="phone" placeholder="+1234567890" required pattern="^\+(?:[0-9] ?){6,14}[0-9]$" title="Phone number must be in the format +1234567890" />
        <textarea name="message" placeholder="Message" rows="4" required />
        <button id="danger" type="submit"> {formStatus} </button>
      </form>
    </div>
  );
}

export default ContactForm;
