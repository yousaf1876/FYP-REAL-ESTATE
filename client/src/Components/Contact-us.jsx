import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../StyleSheet/HouseDescription.css";
export const ContactUs = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_ul0m0d6', 'template_7vjw60u', form.current, 'Us90Zz9MaEtwhZHpd')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Contact__agentForm">
      <form className="Contact__AgentForm" ref={form}>
        <h3>Contact Us</h3>
        <label>Email</label>
        <input
          type="email"
          className='sett'
          name='user_email'
          placeholder="Enter your email address"
          required
        />
        
        <label>Subject</label>
        <input
          type="text"
          className='sett'
          name='user_subject'
          placeholder="Enter the subject of message"
          required
        />
        <label>Message</label>
        <textarea
          name='message'
          className='sett'
          cols="30"
          rows="5"
          placeholder="Type your message here"
          required
        ></textarea> 
        <button onClick={sendMessage} type="submit">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
