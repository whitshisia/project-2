import React from 'react';

const About = () => {
  return (
    <div className="mb-3 text-center text-gray-500 dark:text-gray-400">
      <h2 className='text-4xl font-bold text-green-900 dark:text-white'>About Us</h2>
      <p className='text-2xl font-thin text-green-900 dark:text-white'>Welcome to our food delivery service! 
        <br></br>
        We're dedicated to providing delicious meals  straight to your doorstep.</p>
        <br></br>
        <p className='text-2xl font-thin text-green-900 dark:text-white'>Explore our diverse menu options and experience the convenience of ordering from Quartet-s Delivery today!</p>
        <br></br>
      <p className='text-2xl font-thin text-green-900 dark:text-white' >Our dedicated team ensures that your orders are prepared with care and delivered promptly to your doorstep.</p>
      
    
      <iframe className="h-100 max-w-lg mx-auto "
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.963973742841!2d36.82194621475775!3d-1.2868166859992904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f182e1d879af9%3A0x68d6992f78b49f3b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1621525267557!5m2!1sen!2sus" 
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      
      <p>Located at Nairobi City, Kenya.</p>
      <br></br>
      <p>Join our loyalty program and earn rewards with every order. We appreciate your continued support!</p>

    </div>
  );
};

export default About;