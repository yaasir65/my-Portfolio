import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6oyjgdv', // Gali EmailJS Service ID-gaaga
        'template_fmxly0o', // Gali EmailJS Template ID-gaaga
        e.target,
        'eX5a9RYD8yXJMzK2r' // Gali EmailJS User ID-gaaga
      )
      .then(
        (result) => {
          console.log(result);
          toast.success('Your message has been sent!');
        },
        (error) => {
          console.log(error);
          toast.error('There was an error sending your message. Please try again.');
        }
      );
    e.target.reset(); // Faylka foomka dib ayuu u cusboonaysiin doonaa kadib diritaanka
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-8">
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full sm:mt-[80px]">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Contact <span className="text-orange-500">Me</span>
          </h1>
          <form
            className="bg-transparent sm:w-[700px] p-8 border border-orange-500 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 mt-10">
              <label className='text-2xl ml-4 mb-2 hover:text-orange-500'>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className='text-2xl ml-4 mb-2 hover:text-orange-500'>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className='text-2xl ml-4 mb-2 hover:text-orange-500'>Message</label>
              <textarea
                name="user_message"
                placeholder="Your Message"
                className="w-full p-3 border border-orange-500 bg-transparent text-white rounded-lg focus:outline-none h-32"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-black font-bold rounded-full hover:bg-lime-400 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
    </section>
  );
};

export default Contact;
