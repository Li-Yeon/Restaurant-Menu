import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";

function ArticlesCard(props) {
  return (
    <div className='flex flex-col cursor-pointer lg:hover:scale-105 transition-all shrink-0'>
        <Image src={props.img} width={300} height={200} className='rounded-xl' alt="article_image"/>

        <p className='font-Poppins text-zinc-800 mt-5 text-lg max-w-[300px]'>{props.title}</p>

        <p className='font-Poppins text-zinc-500 font-[300] mt-5 text-sm max-w-[300px]'>{props.body}</p>

        <div className="flex items-center mt-5 gap-3">
            <p className='font-Poppins text-sm text-zinc-800 '>Read More</p>
            <BsArrowRight/>
        </div>

    </div>
  )
}

export default ArticlesCard