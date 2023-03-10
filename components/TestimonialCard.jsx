import React from 'react'
import Image from 'next/image'

// Assets
import review_star from '../public/review_star.png'

function TestimonialCard(props) {

    const numOfStars = props.stars;

    function RenderStars() {
        const stars = Array(numOfStars).fill().map((_, i) => (
            <Image key={i} src={review_star} width={15} height={15} alt="review_stars"/>
        ));
    
        return stars;
    }

    return (
        <div className='flex items-center gap-3 transition-all hover:scale-105 cursor-pointer'>
            <div className='rounded-full items-center flex p-3 bg-blue-500'>
                <Image src={props.img} className='' width={50} height={50} alt="emoji"/>
            </div>

            <div className="flex flex-col gap-1 justify-center">
                <p className='font-Poppins text-zinc-800'>{props.title}</p>
                <p className='font-Poppins text-zinc-600 text-sm'>{props.company}</p>

                <div className="flex gap-1">
                    {
                        RenderStars()
                    }
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard