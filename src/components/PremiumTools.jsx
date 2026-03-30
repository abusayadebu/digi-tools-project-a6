import React from 'react';

const PremiumTools = () => {
    return (
        <section className='container mx-auto mt-28 mb-10'>
            <div className='text-center'>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-lg mb-4 max-w-lg mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          {/* buttons */}
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mr-5">Products</button>
          <button className="btn rounded-full">Cart (2)</button>
            </div>
        </section>
    );
};

export default PremiumTools;