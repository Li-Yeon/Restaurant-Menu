import React from 'react'
import Image from 'next/image'

function DishCategoryCard(props) {
  return (
    <div className='min-h-[150px] min-w-[100px] lg:min-h-[200px] lg:min-w-[150px] border rounded-3xl border-gray-300 bg-gradient-to-b from-blue-50 via-slate-50 to-white flex flex-col hover:bg-none hover:bg-blue-300 text-zinc-700 hover:text-white cursor-pointer hover:translate-y-[-10px] transition-all'>

        {/* Dish Image */}
        <div className='max-w-[70px] max-h-[70px] lg:max-w-[100px] lg:max-h-[100px] rounded-full border bg-white mx-auto lg:mt-10 mt-7'>
            <Image src={props.img} alt="dish_category" className='border rounded-full'/>
        </div>

        <p className='font-Poppins text-center mt-3 lg:text-lg'>{props.title}</p>

    </div>
  )
}

export default DishCategoryCard