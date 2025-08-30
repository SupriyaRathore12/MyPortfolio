
import React, { useState } from 'react'
import profile2 from "../../assets/profile2.jpg"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub,FaJava } from "react-icons/fa"


const About = () => {
  const [activeTab, setActiveTab] = useState('skills')
  return (
    <div id='about' data-aos="fade-right" className='bg-[#0b1120] text-white md:flex md:justify-center md:items-start px-6  pt-12 pb-20 rounded-lg shadow-xl gap-10 scroll-mt-20'>
      {/* Left Image */}
      <div  data-aos="fade-left" className='md:w-1/2 mb-8 md:mb-0 flex justify-center'>
        <img className='rounded-lg md:w-[70%]  object-contain' src={profile2} alt="about" />
      </div>

      {/* Right Content */}
      <div className='md:w-1/2 data-aos="fade-right" '>
        <h2 className="text-4xl font-bold">
          About<span className="text-cyan-300">Me</span>
        </h2>
        <h3 className='text-xl font-semibold mt-4'>
          Final year CSE undergrad at IPS College of Technology and Management.
        </h3>
        <p className='mt-4 text-sm leading-7 text-gray-100'>
          I love problem-solving and continuously expanding my knowledge. Whether it's tackling complex coding challenges or learning new technologies, I enjoy pushing my limits. I have a passion for web development and love building intuitive, user-friendly websites. Alongside that, I’m exploring the exciting world of machine learning. I constantly challenge myself to improve, innovate, and create impactful solutions through code.
        </p>

        {/* Tech Stack */}
        <div className='mt-6'>
          <h4 className="text-2xl font-semibold">Tech<span className='text-cyan-300'>Stack</span></h4>
          <div className="flex gap-4 mt-4 text-3xl text-cyan-200 flex-wrap">
            <FaHtml5  title="HTML5" />
            <FaCss3Alt title="CSS3"/>
            <FaJsSquare  title="JavaScript" />
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaJava title="Java" />
            <FaGithub title="GitHub" />
          </div>
        </div>

        {/* tab part */}
        <div className="mt-10">
          <div className="flex gap-6 text-lg font-semibold cursor-pointer border-b border-gray-700 pb-2">
            {['skills', 'experience', 'education'].map(tab => (
              <span
                key={tab}
                className={`${activeTab == tab ? 'text-pink-400 border-b-2 border-pink-400' : 'text-white hover:text-cyan-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            ))}
          </div>
          {/* content */}

          <div className="mt-6 text-sm leading-6 text-gray-300">
            {activeTab === 'skills' && (
              <ul className="list-disc pl-5">
                <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
                <li>Backend (Node.js,Express.js)</li>
                <li>Version Control (Git & GitHub)</li>
                <li>Problem Solving (Java)</li>
                <li>Machine Learning Fundamentals</li>
                <li>OOPs Fundamentals</li>
              </ul>
            )}
            {activeTab === 'experience' && (
              <ul className="list-disc p1-5">
                
                  <li>Web Development Intern -VerveBridge (Virtual Internship)</li>
                  <li>Personal Projects -Full-stack E-commerce Website,Portfolio etc</li>
                  <li>Collaborative Team Projects - College </li>
                  <li>Frontend Developer Intern — TanVix Technology (july 2025 – Present)</li>
                </ul>

            )}

            {activeTab==='education' && (
              <ul className="list-disc pl-5">
                <li><span className='text-pink-400'>B.Tech in CSE (2022-2026)</span><br />IPS College Of Technology & Management</li>
                <li className='mt-2'><span className='text-pink-400'>12th Standard (2022)</span><br />Green Field Hr. Sec. School</li>
                <li className='mt-2'><span className='text-pink-400'>10th Standard (2020)</span><br />Trident Public School</li>

              </ul>
            )}
          </div>
        </div>


      </div>
    </div>
  )
}

export default About
