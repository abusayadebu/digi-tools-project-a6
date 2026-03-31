import React from 'react';

const Cart = ({item, removeCartFunction}) => {
    return (
        <div className=''>
        {/* cart */}
      <div className='bg-gray-50 flex items-center justify-between p-8 mb-4 rounded-2xl'>
        {/* icon */}
        <div className='flex items-center gap-5'>
            <div className='bg-gray-100 shadow-2xs p-4 rounded-full w-[60px]'>
      <img src={item.icon} alt="" />
    </div>
        {/* title div */}
        <div>
            <h3 className='text-lg font-bold mb-2'>{item.name}</h3>
            <p className='text-lg text-gray-500 font-semibold'>${item.price}</p>
        </div>
        </div>

        <button onClick={()=> removeCartFunction(item.id)} className="text-md text-red-400 font-bold cursor-pointer hover:text-red-500">Remove</button>
      </div>

        </div>
    );
};

export default Cart;