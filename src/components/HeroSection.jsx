import React from "react";
import edgarImage from "../assets/images/Edgar_Patino_Headshot.png";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-background text-text">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-background opacity-30"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left max-w-6xl mx-auto p-6">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="inline-block">👋 Hello, I'm </span>
            <span className="text-primary">Edgar Patino</span>
          </h1>
          <p className="text-lg mt-4 text-text-muted max-w-lg">
            A passionate developer building modern, interactive web applications.
          </p>
          <a href="/projects">
            <button className="mt-6 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-light transition">
              View My Work
            </button>
          </a>
        </div>
        
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            {/* Background Outline Effect */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-md transform rotate-3"></div>
            {/* Profile Image */}
            <img 
              src={edgarImage} 
              alt="Edgar Patino" 
              className="relative w-64 h-64 object-cover rounded-md border-4 border-background shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
