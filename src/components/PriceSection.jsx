import React, { use } from 'react';
import PriceCard from './PriceCard';

const PriceSection = ({pricePromise}) => {
    const priceData = use(pricePromise)
    return (
            <section className='max-w-7xl mx-auto mt-28 mb-10'>
            <div className='text-center'>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg mb-4 max-w-lg mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
          </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
            {
                priceData.map(price => (<PriceCard key={price.id} price={price}></PriceCard>))
            }
        </div>

        </section>
    );
};

export default PriceSection;