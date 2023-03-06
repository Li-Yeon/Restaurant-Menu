import React from 'react'
import Image from 'next/image'

// Assets
import trail_arrow_1 from '../public/trail_arrow_1.png'
import trail_arrow_2 from '../public/trail_arrow_2.png'

function HowToOrderArrow(props) {

    let arrow_variant;

    if (props.variant == 0) {
        arrow_variant = trail_arrow_1;
    }
    else {
        arrow_variant = trail_arrow_2;
    }

    return (
        <div className='h-[100px] w-[100px] rotate-90 lg:rotate-0'>
            <Image src={arrow_variant} alt="arrow_image"/>
        </div>
    )
}

export default HowToOrderArrow