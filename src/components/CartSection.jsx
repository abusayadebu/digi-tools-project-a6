import React from 'react';

const CartSection = ({cart}) => {
    console.log(cart);
    return (
        <div>
            this is cart section
           {
            cart.map(item => (<h2>{item.name}</h2>))
           }
        </div>
    );
};

export default CartSection;