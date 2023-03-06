import Head from 'next/head'
import Image from 'next/image'


// Layout
import Layout from '../components/Layout'
import { BsArrowRightCircleFill } from "react-icons/bs";

// Components
import banner_image from '../public/banner_image.png'

export default function Home() {
  return (
    <>
      <div>
        <Layout>

          {/* Banner */}
          <div className='lg:mt-[10rem] mt-5'>

            <div className="flex items-center lg:justify-around lg:flex-row flex-col">
              <div className="flex flex-col gap-2">
                <p className='font-Poppins lg:text-6xl text-xl font-bold text-zinc-800 lg:max-w-[500px]'>We Provide Delivery Within 30 Min</p>
                <p className='font-Poppins lg:text-xl text-md font-[300] text-zinc-500 lg:max-w-[500px] mt-3'>Imagine you don't need a diet because we provide healthy and delicious food for you!</p>

                <div className="flex mt-5 relative">
                  <input type="text" className='border border-zinc-400 rounded-full py-4 font-Poppins px-5 w-full' placeholder='Enter Zip Code' />

                  <button className='absolute right-2 top-[5.5px] bg-gradient-to-b from-blue-400 to-blue-500 rounded-full px-4 py-3'>
                    <div className="flex items-center gap-2">
                      <p className='font-Poppins text-white '>Discover</p>
                      <BsArrowRightCircleFill className='text-white text-lg'/>
                    </div>
                  </button>

                </div>
              </div>

              <div className="lg:h-[400px] lg:w-[400px] min-h-[200px] min-w-[200px] mx-auto mt-10 lg:mt-0 lg:mx-0">
                <Image src={banner_image} alt="banner_image" />
              </div>
            </div>

          </div>

          {/* Dishes Category */}



        </Layout>
      </div>
    </>
  )
}