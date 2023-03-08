import React from 'react'
import Image from 'next/image'

// Icons
import { BsFillPlusSquareFill } from "react-icons/bs";

function PopularDishCard(props) {
  return (
    <div className='min-h-[230px] min-w-[150px] lg:min-h-[310px] lg:w-[230px] border rounded-3xl border-gray-300 bg-gradient-to-b flex flex-col hover:bg-none hover:bg-blue-300 text-zinc-700 cursor-pointer hover:translate-y-[-10px] transition-all
                    grow-0 group'>

        {/* Dish Image */}
        <div className='max-w-[70px] max-h-[70px] lg:max-w-[130px] lg:max-h-[130px] rounded-full border bg-white mx-auto lg:mt-8 mt-5'>
            <Image src={props.img} alt="popular_dishes" className='border rounded-full'/>
        </div>

        <p className='font-Poppins text-center mt-7 lg:text-md text-zinc-600 group-hover:text-white lg:mx-10 text-sm mx-2'>{props.title}</p>

        <div className="flex flex-col justify-end h-full py-3">
            <div className="flex justify-between lg:mx-6 items-end mx-3">
                <p className='font-Poppins text-center lg:text-md text-black font-semibold group-hover:text-white text-sm'>{props.price}</p>
                <BsFillPlusSquareFill className='text-blue-500 lg:text-2xl text-lg group-hover:text-white'/>
            </div>
        </div>


    </div>
  )
}

export default PopularDishCard