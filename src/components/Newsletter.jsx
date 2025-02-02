import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:3-xl text-2xl font-bold py-2'>
                    Want tips & trics to optimize your flow?
                </h1>
                <p>sign Up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black bg-white' 
                    type="email" 
                    placeholder='enter email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 mx-auto py-3 text-black hover:bg-white duration-500 cursor-pointer'>Notify Me</button>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <span className='text-[#00df9a]'>Accusamus temporibus</span></p>

            </div>
        </div>
    </div>
  )
}

export default Newsletter