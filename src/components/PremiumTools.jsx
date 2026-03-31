import React from 'react';

const PremiumTools = ({activeBtn, cart, handleProducts, handleCart, isCheckout}) => {

    return (
        <section className='container mx-auto mt-28 mb-10'>
            <div className='text-center'>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-lg mb-4 max-w-lg mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          <div className='shadow-xs max-w-[220px] p-2 rounded-full mx-auto'>
            {/* buttons */}
          <button onClick={handleProducts} className={`btn rounded-full mr-2
            ${
                activeBtn ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""
            }
            `}>Products</button>

            <button onClick={handleCart} className={`btn rounded-full
            ${!activeBtn ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""
                    }
            `}>Cart ({isCheckout ? 0 : cart.length})</button>
          </div>
            </div>
        </section>
    );
};

export default PremiumTools;