import React from 'react';
// import packageImg from "./assets/package.png"

const Step = ({item}) => {
    const {title, description, icon, badge} = item;
    return (
        <div className="border border-gray-200 h-[380px] rounded-lg p-6 text-center relative shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
      {badge}
    </div>
    <img className="mx-auto mb-4" src={icon} alt="" />
    
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-lg">{description}</p>
  </div>
    );
};

export default Step;