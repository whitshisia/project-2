import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
        reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name', { required: true })} />
      </label>
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
      </label>
      <label>
        Message:
        <textarea {...register('message', { required: true })} />
      </label>
      <button type="submit"
      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >Send</button>
    </form>
  );
};

export default ContactForm;