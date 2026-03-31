import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const EmptyCart = () => {
    return (
        <div className='max-w-7xl h-[400px] mx-auto border border-gray-200 rounded-2xl p-10 mb-10 flex flex-col'>
      
      {/* top heading */}
      <h2 className='font-bold text-2xl'>Your Cart</h2>

      {/* center content */}
      <div className='flex-1 flex flex-col items-center justify-center text-center'>
        <FaCartPlus className='text-4xl text-gray-400 mb-3' />
        <p className='text-gray-500'>Your cart is Empty</p>
      </div>

    </div>
    );
};

export default EmptyCart;