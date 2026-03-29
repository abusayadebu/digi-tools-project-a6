import React from 'react';

const Stat = () => {
    return (
            <div class="container mx-auto grid place-items-center grid-cols-3 h-[160px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] justify-around shadow text-white">
  <div class="text-center space-y-3">
    <h3 class="font-extrabold text-6xl text-center space-y-3">50K+</h3>
    <p className='opacity-60'>Active Users</p>
  </div>
  <div class="text-center space-y-3">
    <h3 class="font-bold text-6xl">200+</h3>
    <p className='opacity-60'>Premium Tools</p>
  </div>
  <div class="text-center space-y-3">
    <h3 class="font-bold text-6xl text-center space-y-3">4.9</h3>
    <p className='opacity-60'>Rating</p>
  </div>

</div>
    );
};

export default Stat;