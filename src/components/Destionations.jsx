import React from 'react';
import cmptrScience from '../assets/cmptrSciece.jpg';

const Destinations = () => {
  return (
    <div className=''>
        <h1 className='text-black text-2xl font-bold bg-[#00df9a] py-3 px-7'>Different Destinations</h1>
        <div>
            <div>
                <img className='w-full' src={cmptrScience} alt="Computer Science" />
                <h2></h2>
                <p className='text-white text-sm bg-[#00df9a] pl-7 pr-24 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis placeat doloremque sapiente, ea aliquam culpa, velit praesentium fugiat quisquam nulla a? Vero esse atque nulla veritatis magni deleniti accusantium ducimus.
                </p>
            </div>
        </div>
        <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'>
            Learn More
        </button>
    </div>
  );
}

export default Destinations;