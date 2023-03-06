import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../components/Layout'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// Components
import DishCategoryCard from '../components/DishCategoryCard';
import HowToOrderCard from '../components/HowToOrderCard';
import HowToOrderArrow from '../components/HowToOrderArrow';

// Assets
// Dishes Category //
import banner_image from '../public/banner_image.png'
import dish_sushi from '../public/DishCategory/Sushi.png'
import dish_pizza from '../public/DishCategory/Pizza.png'
import dish_burger from '../public/DishCategory/Burger.png'
import dish_dessert from '../public/DishCategory/Dessert.png'
import dish_salad from '../public/DishCategory/Salad.png'
import dish_pasta from '../public/DishCategory/Pasta.png'
// How To Order //
import location from '../public/location.png'
import restaurant from '../public/restaurant.png'
import cart from '../public/cart.png'
import motor from '../public/motor.png'
import trail_arrow_1 from '../public/trail_arrow_1.png'
import trail_arrow_2 from '../public/trail_arrow_2.png'



export default function Home() {
  return (
    <>
      <Head>
        <title>Li-Yeon | Restaurant Menu</title>
        <link rel="shortcut icon" href='favicon.ico' />
      </Head>

      <div>
        <Layout>

          {/* Banner */}
          <div className='lg:mt-[10rem] mt-5 transition-all' id="landing">

            <div className="flex items-center lg:justify-around lg:flex-row flex-col">
              <div className="flex flex-col gap-2">
                <p className='font-Poppins lg:text-6xl text-xl font-bold text-zinc-800 lg:max-w-[500px]'>We Provide Delivery Within 30 Min</p>
                <p className='font-Poppins lg:text-xl text-md font-[300] text-zinc-500 lg:max-w-[500px] mt-3'>Imagine you don&apos;t need a diet because we provide healthy and delicious food for you!</p>

                <div className="flex mt-5 relative">
                  <input type="text" className='border border-zinc-400 rounded-full py-4 font-Poppins px-5 w-full' placeholder='Enter Zip Code' />

                  <button className='absolute right-2 top-[5.5px] bg-gradient-to-b from-blue-400 to-blue-500 rounded-full px-4 py-3'>
                    <div className="flex items-center gap-2">
                      <p className='font-Poppins text-white '>Discover</p>
                      <BsArrowRightCircleFill className='text-white text-lg' />
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
          <div className='lg:mt-[12rem] mt-28 relative' id="dish-category">

            <div className="flex flex-col">
              <p className='font-Poppins font-bold text-lg lg:text-4xl text-zinc-700 mx-auto max-w-[500px] text-center'>More than 20,000 Dishes To Order!</p>
              <p className='font-Poppins font-[300] mt-5 text-sm lg:text-lg text-slate-400 mx-auto text-center'>Welcome to the Biggest Network of Food Ordering & Delivery</p>

              <div className="flex lg:justify-center justify-start">
                <div className="flex overflow-auto flex-nowrap gap-6 lg:px-10 py-5 justify-start">
                  <DishCategoryCard title="SUSHI" img={dish_sushi} />
                  <DishCategoryCard title="PIZZA" img={dish_pizza} />
                  <DishCategoryCard title="BURGER" img={dish_burger} />
                  <DishCategoryCard title="DESSERT" img={dish_dessert} />
                  <DishCategoryCard title="SALAD" img={dish_salad} />
                  <DishCategoryCard title="PASTA" img={dish_pasta} />
                </div>
              </div>

            </div>
            <div className="lg:flex text-blue-600 text-4xl gap-3 absolute right-[150px] top-[380px] hidden">
              <BsArrowLeftCircleFill className='cursor-pointer hover:scale-105' />
              <BsArrowRightCircleFill className='cursor-pointer hover:scale-105' />
            </div>

          </div>

          {/* How to Order */}
          <div className='lg:mt-[12rem] mt-28 relative' id="dish-category">

            <div className="flex flex-col">
              <p className='font-Poppins font-bold text-lg lg:text-4xl text-zinc-700 mx-auto max-w-[500px] text-center'>How to Order?</p>
              <p className='font-Poppins font-[300] mt-5 text-sm lg:text-lg text-slate-400 mx-auto text-center'>Follow the steps</p>

              <div className="flex justify-center mt-5 lg:flex-row flex-col items-center">
                <HowToOrderCard img={location} title="01" body="Choose your location" />
                <HowToOrderArrow variant={0} />
                <HowToOrderCard img={restaurant} title="02" body="Choose restaurant" />
                <HowToOrderArrow variant={1} />
                <HowToOrderCard img={cart} title="03" body="Make your order" />
                <HowToOrderArrow variant={0} />
                <HowToOrderCard img={motor} title="04" body="Food is on your way" />
              </div>

            </div>

          </div>



        </Layout>
      </div>
    </>
  )
}