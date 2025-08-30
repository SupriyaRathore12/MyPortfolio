import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();
     toast.info("Sending...");

    formData.append("access_key", "d0e3dec5-ebd6-4bcd-b09e-04c8d4bca8ec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // alert(res.message)
      toast.success("Message sent successfully")
    }
  };
  return (
    <div id='contacts' data-aos="fade-up" className='py-16 px-6 md:px-20 bg-[#0b1120] text-white scroll-effect'>
      <div className="flex flex-col md:flex-row gap-10">

        {/* left part */}

        <div data-aos="fade-right" className="md:w-1/2">

          <h1 className="text-3xl font-bold mb-6">
            Contact<span className="text-cyan-300">Me</span>
          </h1>
          <p className="mb-6 flex items-center gap-3 ">
            <FaEnvelope className="text-cyan-400" />supriyarathor68@gmail.com
          </p>

          {/* <p className="mb-6 flex items-center gap-3 ">
            <FaPhone className="text-cyan-400" />7991158377
          </p> */}

          <div data-aos="fade-left" className="flex gap-5 text-2xl mb-12">

            <a href="https://linkedin.com/in/supriya-rathore-ba12ba254/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400" />
            </a>

            <a href="https://github.com/SupriyaRathore12" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400" />
            </a>

            <a href="#">
              <FaInstagramSquare className="hover:text-cyan-400" />
            </a>
            <a href="#">
              <FaWhatsappSquare className="hover:text-cyan-400" />
            </a>

          </div>

          <a href="/Supriya_Resume.pdf"
            download="Supriya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md font-medium '>
            Resume
          </a>

        </div>

        {/* Right part */}

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input type="text"
              name='Name'
              placeholder="Enter Your Name"
              required
              className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm transition-all duration-300'

            />

            <input type="email"
              name='Email'
              placeholder="Enter Your Email"
              required
              className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm transition-all duration-300'

            />



            <textarea name="Message"
              id=""
              placeholder='Feel free to enter your Message'
              className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm transition-all duration-300'

            >
            </textarea>
            <button type='submit'
              className='bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md font-semibold transform hover:scale-105 transition-all duration-300'

            >
              Submit
            </button>
          </form>
        </div>

      </div>

      {/* footer */}

      {/* <div className='mt-10 text-center text-sm text-gray-400 bg-[#0f172a] border border-gray-700 pt-4 '>
        <p>© {year} Design by Supriya Rathore</p>

      </div> */}


    </div>
  )
}

export default Contact;