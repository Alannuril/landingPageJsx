import React from 'react';
import cmptrScience from '../assets/cmptrSciece.jpg';

const Destinations = () => {
  return (
    <div className='w-full py-[7rem] px-10 bg-white'>
      <div className='bg-white'>
        <h1 className='text-black text-3xl font-bold'>Different Destinations</h1>
        <p className='py-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem architecto quidem quam alias? Iusto laboriosam sint quo laborum deleniti voluptas veniam, officia, laudantium obcaecati illum pariatur, ab consequatur culpa.
        </p>
        <div className='max-w-[1240px] mx-auto md:grid-cols-3'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3'>
            {/* Card 1 */}
            <div className='p-4'>
              <div className='w-full h-48 overflow-hidden rounded-2xl relative'>
                <img className='w-full h-full object-cover' src={cmptrScience} alt="Computer Science" />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              </div>
              <h2 className='font-bold py-5 text-xl'>Students</h2>
              <p className='text-black text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea aliquam veritatis magni deleniti accusantium ducimus.
              </p>
            </div>

            {/* Card 2 */}
            <div className='p-4'>
              <div className='w-full h-48 overflow-hidden rounded-2xl relative'>
                <img className='w-full h-full object-cover' src={cmptrScience} alt="Computer Science" />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              </div>
              <h2 className='font-bold py-5 text-xl'>Professionals</h2>
              <p className='text-black text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea aliquam veritatis magni deleniti accusantium ducimus.
              </p>
            </div>

            {/* Card 3 */}
            <div className='p-4'>
              <div className='w-full h-48 overflow-hidden rounded-2xl relative'>
                <img className='w-full h-full object-cover' src={cmptrScience} alt="Computer Science" />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              </div>
              <h2 className='font-bold py-5 text-xl'>Writers</h2>
              <p className='text-black text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea aliquam veritatis magni deleniti accusantium ducimus.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 hover:bg-[#00df9a] hover:text-black duration-400 cursor-pointer'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;