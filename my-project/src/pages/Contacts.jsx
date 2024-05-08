import React from 'react'
import ContactForm from './ContactForm'

function Contacts() {
  return (
    <div className="bg-green-900">
      <ContactForm />
      <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or feedback:</p>
      </div>
      <div>
        <div className="column">
          <img src="/company-logo.jpg" style={{ width: '100%' }} alt="Company Logo" />
          <br></br>

          <p>Company Name: Quartet-s Delivery</p>
          <br></br>
          <p>Address: 2nd Floor, Imaara Mall,Mombasa Road</p>
          <br></br>

          <p>Phone: +254711506494</p>
          <br></br>

          <p>Email: info@company.com</p>
          <br></br>

        </div>
      </div>
    </div>

    </div>
  )
}

export default Contacts;

