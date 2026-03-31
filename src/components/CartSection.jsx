import React from 'react';
import Cart from './Cart';

const CartSection = ({cart, removeCartFunction}) => {
    console.log(cart);
    return (
        <div className='max-w-7xl mx-auto border border-gray-200 rounded-2xl p-10 mb-10'>
            <h2 className='font-bold text-2xl mb-4'>Your Cart</h2>
           {
            cart.map((item, idx) => (<Cart removeCartFunction={removeCartFunction} key={idx} item={item}></Cart>))
           }

           {/* total and checkout btn */}
           <div className='flex items-center justify-between mt-8'>
            <p className='font-bold text-gray-500'>Total</p>
            <h5 className='font-bold text-xl'>$0</h5>
           </div>
           <button className="btn btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg rounded-full mt-5 py-5 ">Proceed To Checkout</button>
        </div>
    );
};

export default CartSection;