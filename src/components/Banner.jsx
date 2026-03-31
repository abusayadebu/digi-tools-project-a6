import React from 'react';
// import bannerImg from "../assets/banner.png"
import { FaPlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* left*/}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-4 h-4 bg-purple-500 rounded-full">
                <span className="w-3 h-3 bg-purple-800 rounded-full">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                </span>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">Explore Products</button>

            <button className="flex items-center gap-2 border border-purple-400 text-purple-600 px-6 py-3 rounded-full font-medium">
                <FaPlay></FaPlay>
                Watch Demo</button>
          </div>
        </div>

        {/* right side*/}
        <div className="relative">
          <img
            src="/assets/banner.png"
            alt="banner"
            className="w-full rounded-lg object-cover"/>
        </div>
      </div>
    </section>
    );
};

export default Banner;