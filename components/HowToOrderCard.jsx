import React from 'react'
import Image from 'next/image'

function HowToOrderCard(props) {
    return (
        <div className='h-[250px] w-[150px] flex flex-col'>

            <div className="w-[80px] h-[80px] mx-auto mt-3">
                <Image src={props.img} />
            </div>

            <div className='border-dotted rounded-full border-2 mx-auto border-yellow-400 mt-5'>
                <p className='text-center px-2 py-1 font-Poppins text-orange-400 text-lg'>{props.title}</p>
            </div>

            <div className='mt-5'>
                <p className='text-center font-Poppins text-zinc-700 text-md'>{props.body}</p>
            </div>

        </div>
    )
}

export default HowToOrderCard