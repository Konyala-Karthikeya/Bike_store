import React , {useState}from 'react'
import {BsChevronCompactLeft ,BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

import haya1 from '../assets/images/haya1.jpg'
import re2 from '../assets/images/re2.webp'
import mt3 from '../assets/images/mt3.jpg'


const Featured = () => {
    const sliders = [
        {
            url : haya1,
        },
        {
            url : re2
        },
        {
            url : mt3
        }
    ]
    const [currentIndex , setCurrentIndex] = useState(0)

     const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
     }

     const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
     }

     const moveToSpecificSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
     }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group bg-gray-500'>

        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems , slideIndex) => (
                    <div 
                    key={slideIndex}
                    onClick={() => moveToSpecificSlide(slideIndex)}
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Featured