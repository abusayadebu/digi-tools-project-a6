import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PriceCard = ({price}) => {
    const {title, description, priceCount, duration, features, buttonText, highlighted} = price;
    return (
            <div className={`relative card shadow-sm border border-gray-200 rounded-lg flex flex-col h-full ${highlighted ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-black'}`}>

            {/* badge */}
            {
                highlighted ? <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-100 text-purple-500 px-4 py-1 rounded-full text-sm font-bold capitalize shadow-lg">Most Popular</span> : ""
            }
          <div className="card-body">
            <div className='space-y-4 flex flex-col flex-grow'>
                {/* title */}
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className={`text-lg ${highlighted ? 'text-white' : 'text-gray-500'}`}>{description}</p>
        
            {/* price */}
            <span className="text-4xl font-bold mb-2">${priceCount}<span className={`text-2xl ${highlighted ? 'text-white capitalize' : 'text-[#627382] capitalize'}`}>/{duration}</span></span>
            </div>
        
            <ul className="flex flex-col gap-2 text-lg flex-grow">
              
                    {
                        features.map((feature, idx) => (
                            
                            <li key={idx} className={`flex items-center gap-2 ${highlighted ? 'text-white' : 'text-gray-500' }`}><FaCheck className={`${highlighted ? 'text-white' : 'text-green-500'}`}></FaCheck> {feature}</li>
                        ))
                    }
    
            </ul>
        
            {/* button */}
            <div className="mt-6">
              <button className={`btn btn-block ${highlighted ? 'bg-white text-purple-600' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'} text-lg rounded-full mr-5`}>{buttonText}</button>
            </div>
          </div>
        </div>
        
    );
};

export default PriceCard;