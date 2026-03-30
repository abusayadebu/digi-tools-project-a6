import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Product = ({product}) => {
        // Distructure
        const {name, description, price, period, tag, features, icon} = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm relative space-y-4">
  <div className="card-body">
    {/* badge */}
    <span className={`badge badge-xl absolute top-2 right-2 rounded-full text-sm font-bold capitalize
        ${tag === "new"
      ? "badge-success"
      : tag === "popular"
      ? "badge-warning"
      : tag === "best seller"
      ? "badge-primary"
      : ""}
        `}>{tag}</span>
    {/* img */}
    <div className='bg-gray-50 shadow-2xs p-4 rounded-full w-[60px]'>
      <img src={icon} alt="" />
    </div>

    <div className='space-y-4'>
        {/* title */}
    <h2 className="text-3xl font-bold">{name}</h2>
    <p className='text-gray-500 text-lg'>{description}</p>

    {/* price */}
    <span className="text-xl font-bold">${price}<span className='text-[#627382] capitalize'>/{period}</span></span>
    </div>

    <ul className="flex flex-col gap-2 text-lg">
      
            {
                features.map((feature, idx) => (
                    
                    <li key={idx} className='flex items-center gap-2 text-gray-500'><FaCheck className='text-green-500'></FaCheck> {feature}</li>
                ))
            }
            
      
    </ul>

    {/* <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul> */}
    {/* button */}
    <div className="mt-6">
      <button className="btn btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg rounded-full mr-5">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;