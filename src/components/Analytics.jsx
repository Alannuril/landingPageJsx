import React from 'react'
import computer from '../assets/computer.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={computer} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold md:text-3xl sm:text-2xl text-xl'>Data Analyst</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, necessitatibus illum. Maxime fuga soluta aut nulla quaerat, incidunt reprehenderit magnam omnis? Vero deserunt expedita nemo quod ratione magnam impedit ipsum!
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 hover:bg-[#00df9a] hover:text-black duration-400 cursor-pointer'>Get Started</button>            
            </div>
        </div>
    </div>
  )
}

export default Analytics