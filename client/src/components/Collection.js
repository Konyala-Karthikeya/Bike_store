import React , {useState} from 'react'
import {bikeData} from '../data/data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'

const Collection = () => {
    const [bikes , setBikes] = useState(bikeData)
    const fillterCat = (category) => {
        setBikes(
            bikeData.filter((item)=>{
                return item.category === category
            })
        )
    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12 bg-gray-500'>
        <h1 className='text-black-500 font-bold text-2xl text-center py-2'>Our Collection's</h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center'>
                <button onClick={()=>setBikes(bikeData)} className='m-1 border-white text-white bg-black'>All</button>
                <button onClick={()=>fillterCat("Royal_Enfield")} className='m-1 border-white text-white hover:bg-white bg-black'>Royal_Enfield</button>
                <button onClick={()=>fillterCat("BMW")} className='m-1 border-white text-white  bg-black'>BMW</button>
                <button onClick={()=>fillterCat("Bajaj")} className='m-1 border-white text-white bg-black'>Bajaj</button>
                <button onClick={()=>fillterCat("Ducati")} className='m-1 border-white text-white bg-black'>Ducati</button>
                <button onClick={()=>fillterCat("Triumph")} className='m-1 border-white text-white bg-black'>Triumph</button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
            {
                bikes.map((item)=>(
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-lg'
                         src={item.image} alt={item.name} />
                         <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold '>{item.name}</p>
                            <p className='bg-black h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                         </div>
                         <div className='pl-2 py-4 -mt-7'>
                            <p className='flex items-center text-white '>View More<ArrowSmRightIcon className='w-5 ml-2' /></p>
                         </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Collection