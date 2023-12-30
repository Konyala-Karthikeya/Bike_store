import React from 'react'
// import { BsFillHamburgerFill } from 'react-icons/bs';
import {BsFillCartFill , BsPerson} from 'react-icons/bs'
import Sports_1 from "../assets/images/Sports_1.png"

const Delivery = () => {
  return (
    <div className='w-full bg-chite py-16 px-4'>
        <h3 className='text-white font-bold text-2xl text-center'><span className='font-bold text-red-700'>Own Your Dream </span>Bikes </h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-4' src={Sports_1} />
            <div className='flex flex-col justify-center'>
                <p className='text-[rgb(248,251,252)] font-bold'>Get the App</p>
                <h1 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2 text-white'>Welcome to Biker's HUB – Where Your Two-Wheeled Dreams Take Flight!</h1>
                <p className='text-black'>
                "Step into the world of ultimate biking luxury and innovation at Biker's HUB.
                 As the premier destination for motorcycle enthusiasts, 
                 we bring you an unparalleled experience where style, 
                 performance, and passion converge."
                </p>
                <button className='bg-black text-[#f2f5f4] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery