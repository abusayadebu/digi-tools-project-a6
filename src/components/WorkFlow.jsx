import React from 'react';

const WorkFlow = () => {
    return (
        <section className="container mx-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-25 mt-28">
      <div className="max-w-5xl mx-auto text-center text-white px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-gray-200 mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          
          {/* Explore Button */}
          <button className="bg-white text-purple-600 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>

          {/* Pricing Button */}
          <button className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        
        <ul className="flex justify-center gap-6 text-xs text-gray-200 list-disc list-inside">
        <li>14-day free trial</li>
        <li>No credit card required</li>
        <li>Cancel anytime</li>
        </ul>

      </div>
    </section>
    );
};

export default WorkFlow;