import React from "react";

const ProjectCard = ({ image, title, main, demoLink }) => {
  return (
    <div className="text-white p-4 rounded-xl border border-transparent hover:border-cyan-400 shadow-md w-full max-w-xs">
      {/* Image Container with hover overlay */}
      <div className="relative group w-full h-60 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-2">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-100">{main}</p>
        </div>
      </div>

      {/* Centered Demo Button */}
      <div className="flex justify-center mt-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
