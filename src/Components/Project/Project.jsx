import React from 'react';
import ProjectCard from './ProjectCard';
import Gurlly from "../../assets/Gurlly.png"
import BookMngt from "../../assets/BookMngt.png"
import spotify from "../../assets/spotify.png"

const Projects = () => {
  return (
    <div id='projects' data-aos="fade-down" className="min-h-screen bg-[#0b1120] text-white px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
       Latest<span className='text-cyan-300'>Project</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          image={Gurlly}
          title="FullStack Ecommerce Website"
          main="A feature-rich online shopping platform built using the MERN stack. It includes user authentication, product listing, shopping cart, order management, 
          and secure checkout with a responsive UI for a smooth shopping experience."
          demoLink="https://ecommerce-fullstack-frontend-emhf.onrender.com/"
          // sourceLink="https://github.com/your-repo"
        />
        <ProjectCard
          image={BookMngt}
          title="BookManagement Website"
          main="A React-based web application to manage and organize books.
           It allows users to add, view, update, and delete book records with a clean and responsive UI."
          demoLink="https://book-library-ui.netlify.app/mybook"
          // sourceLink="https://github.com/portfolio"
        />
        <ProjectCard
          image={spotify}
          title="Spotify Clone"
          main="A React-based music streaming UI that replicates Spotify’s look and feel, 
          with features like playlists, navigation, and responsive design for a seamless user experience."
          demoLink="https://spotify-clone-supri.netlify.app/"
          // sourceLink="https://github.com/shop"
        />
      </div>
    </div>
  );
};

export default Projects;