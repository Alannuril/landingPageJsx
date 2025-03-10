import React from 'react'
import Single from '../assets/single.png'
import Two from '../assets/two.png'
import Three from '../assets/three.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black hover:bg-gray-200 duration-500 cursor-pointer'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparant' src={Two} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-[#00df9a] hover:bg-gray-200 duration-500 cursor-pointer hover:text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparant' src={Three} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black hover:bg-gray-200 duration-500 cursor-pointer'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards