import React, { useCallback } from 'react';
import profile from "../../assets/profile.png";
import TextChanger from '../TextChanger';
import bg1 from "../../assets/bg1.jpeg";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <section id='home' className='relative min-h-screen w-full bg-gradient-to-tr from-[#0a0f1a] via-[#0b1120] to-[#1a2333] text-white flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-20'>

    <section
  id='home'
  className='relative min-h-screen w-full text-white flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-28 md:py-20  bg-no-repeat bg-cover bg-center'
  style={{ backgroundImage: `url(${bg1})` }}
>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1120] via-[#0b1120] to-[#0b1120] opacity-80 z-0"></div>


      {/* left content part  */}
      <div data-aos="fade-right" className='text-center md:text-left -mt-18 md:-mt-28 z-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter '>
          Supriya Rathore
        </h1>
        <h2 className='text-cyan-300 text-xl md:text-3xl mt-2'>
          <TextChanger />
        </h2>

        <button className='mt-12 md:10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-cyan-300'
          onClick={scrollToContact}>
          Contact Me
        </button>
      </div>

      {/* right part img */}
      <div data-aos="fade-left" className='md:w-1/2 flex justify-center items-start mt-10 md:mt-0 z-10'>
        <img
          className='w-[300px] md:w-[400px] h-auto object-contain md:-mt-10'
          src={profile}
          alt="supriya"
        />
      </div>

    </section>
  );
};

export default Home;  