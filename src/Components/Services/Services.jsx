import React from "react";
import { FaCode, FaLaptopCode, FaCogs } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="scroll-effect py-16 bg-[#0b1120] text-white " >
      <div className="container mx-auto px-6 " data-aos="fade-right">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-12">My<span className="text-cyan-300" >Services</span></h1>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-cyan-400">
            <FaCode className="text-5xl text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Web Design</h2>
            <p className="text-gray-300">
              Designing and developing responsive and dynamic websites using
              HTML, CSS, JavaScript, Bootstrap, and React. Creating interactive
              and user-friendly web applications.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-cyan-400">
            <FaLaptopCode className="text-5xl text-green-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Personal Projects & Custom Solutions
            </h2>
            <p className="text-gray-300">
              Developing custom mini-projects, portfolio websites, or tools
              tailored to individual needs. Helping beginners understand basic
              coding concepts and web development.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-cyan-400">
            <FaCogs className="text-5xl text-pink-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Programming & Problem-Solving
            </h2>
            <p className="text-gray-300">
              Writing clean and efficient code in C++, Java, Python, and
              JavaScript. Debugging and optimizing code for better performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
