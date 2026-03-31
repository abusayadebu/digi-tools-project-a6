import React, { use } from 'react';
import Step from './Step';



const GetStarted = ({stepsPromise}) => {
    const stepsData = use(stepsPromise);
    console.log(stepsData);
    return (
        <section className='max-w-7xl mx-auto mt-28 mb-10'>
            <div className='text-center'>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-500 text-lg mb-4 max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
          </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6'>
            {
            stepsData.map(item => (<Step key={item.id} item={item}></Step>))
        }
        </div>

        </section>
    );
};

export default GetStarted;