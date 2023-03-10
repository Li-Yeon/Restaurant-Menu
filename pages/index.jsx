import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../components/Layout'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsArrowRight } from "react-icons/bs";

// Components
import DishCategoryCard from '../components/DishCategoryCard';
import HowToOrderCard from '../components/HowToOrderCard';
import HowToOrderArrow from '../components/HowToOrderArrow';
import PopularDishCard from '../components/PopularDishCard';
import TestimonialCard from '../components/TestimonialCard';
import ArticlesCard from '../components/ArticlesCard';

// Assets
import banner_image from '../public/banner_image.png'
import chef_image from '../public/chef.png'
import iphone_image from '../public/iphone.png'
import testimonial_image from '../public/testimonial.png'

// Dishes Category //
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
// Mobile Store //
import apple_store from '../public/apple_store.png'
import play_store from '../public/play_store.png'
// Testimonial // 
import smile_emoji from '../public/smile_emoji.png'
import hearteyes_emoji from '../public/hearteyes_emoji.png'
import confetti_emoji from '../public/confetti_emoji.png'
// Articles //
import article_1 from '../public/article_1.png';
import article_2 from '../public/article_2.png';
import article_3 from '../public/article_3.png';



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

          {/* Popular Dishes Category */}
          <div className='lg:mt-[12rem] mt-28 relative' id="dish-category">

            <div className="flex flex-col">
              <p className='font-Poppins font-bold text-lg lg:text-4xl text-zinc-700 mx-auto max-w-[700px] text-center'>Popular dishes with delivery</p>
              <p className='font-Poppins font-[300] mt-5 text-sm lg:text-lg text-slate-400 mx-auto text-center max-w-[600px]'>The most delicious and healthy dishes from our chefs. You can order this meal separately or as part of a meal plan.</p>

              <div className="flex lg:justify-center justify-start">
                <div className="flex overflow-auto flex-nowrap lg:overflow-hidden lg:flex-wrap gap-6 lg:gap-10 lg:px-10 py-5 justify-start lg:justify-center">
                  <PopularDishCard title="Stewed cabbage with sauce" price="$5.90" img={dish_sushi} />
                  <PopularDishCard title="Puree soup with turkey pieces" price="$7.55" img={dish_pizza} />
                  <PopularDishCard title="Chicken with vegetables" price="$3.39" img={dish_burger} />
                  <PopularDishCard title="Traditional Greek salad" price="$4.99" img={dish_dessert} />
                  <PopularDishCard title="Three-Meat Special Lasagna" price="$5.10" img={dish_salad} />
                  <PopularDishCard title="Veggie Tagliatelle Bolognese" price="$4.80" img={dish_pasta} />
                </div>
              </div>

              <button className='bg-gradient-to-b from-blue-400 to-blue-500 rounded-full w-[160px] mx-auto hover:scale-105'>
                <div className="flex items-center gap-2 px-4 py-2">
                  <p className='font-Poppins text-white '>See all Menu</p>
                  <BsArrowRightCircleFill className='text-white text-lg' />
                </div>
              </button>

            </div>

          </div>

          {/* Chef Banner */}
          <div className='lg:mt-[10rem] mt-5 transition-all' id="landing">

            <div className="flex items-center lg:justify-around lg:flex-row flex-col">

              <div className="lg:h-[400px] lg:w-[400px] min-h-[200px] min-w-[200px] mx-auto mt-10 lg:mt-0 lg:mx-0 -scale-x-100">
                <Image src={chef_image} alt="chef_image" />
              </div>

              <div className="flex flex-col gap-2">
                <p className='font-Poppins lg:text-4xl text-lg font-semibold text-zinc-800 lg:max-w-[500px]'>Delicious and healthy food for your body</p>
                <p className='font-Poppins lg:text-lg text-md font-[300] text-zinc-500 lg:max-w-[500px] mt-3'>
                  Our company is engaged in the delivery of healthy and tasty food around the city. Special cooking and delivery technologies allow you to buy fresh and healthy food.
                </p>

                <div className="flex mt-5 flex-wrap gap-5 max-w-[600px] items-center">

                  <div className="flex items-center gap-3">
                    <BsArrowRight />
                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Order a nutritionist consultation</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <BsArrowRight />
                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Order healthy food express delivery</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <BsArrowRight />
                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Tariff plans on an ongoing basis</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <BsArrowRight />
                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Offers for special clients</p>
                  </div>

                  <div className="flex gap-5">

                    <button className='bg-gradient-to-b from-blue-400 to-blue-500 rounded-full hover:scale-105'>
                      <div className="flex items-center gap-2 px-6 py-2">
                        <p className='font-Poppins text-white text-center text-sm'>CHOOSE A DIET</p>
                      </div>
                    </button>

                    <button className='bg-white border-blue-500 border rounded-full hover:scale-105'>
                      <div className="flex items-center gap-2 px-6 py-2">
                        <p className='font-Poppinstext-center text-sm font-semibold text-blue-500'>WHAT&apos;S NEW</p>
                      </div>
                    </button>

                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* App Banner */}
          <div className='lg:mt-[10rem] mt-5 transition-all' id="landing">

            <div className="flex items-center lg:justify-around lg:flex-row flex-col-reverse">

              <div className="flex flex-col gap-2">
                <p className='font-Poppins lg:text-4xl text-lg font-semibold text-zinc-800 lg:max-w-[500px]'>Make The Delicious Food and Order Our App</p>
                <p className='font-Poppins lg:text-lg text-md font-[300] text-zinc-500 lg:max-w-[500px] mt-3'>
                  Download our app now and get the best promos and deals for a limited time offer!
                </p>

                <div className="flex mt-5 flex-col gap-3 items-start">

                  <div className="flex items-center gap-3">

                    <div className='border-dotted rounded-full border-2 mx-auto border-yellow-400'>
                      <p className='text-center px-2 py-1 font-Poppins text-orange-400 text-lg'>01</p>
                    </div>

                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Follow Delivery Status</p>
                  </div>

                  <div className="flex items-center gap-3">

                    <div className='border-dotted rounded-full border-2 mx-auto border-yellow-400'>
                      <p className='text-center px-2 py-1 font-Poppins text-orange-400 text-lg'>02</p>
                    </div>

                    <p className='font-Poppins text-zinc-600 text-md max-w-[200px]'>Order From Any Location</p>
                  </div>

                </div>

                <div className="flex gap-5 mt-5 items-center">

                  <a className='w-[120px] max-h-[73px] cursor-pointer'>
                    <Image src={apple_store} alt="apple_image" />
                  </a>

                  <a className='w-[130px] max-h-[73px] cursor-pointer'>
                    <Image src={play_store} alt="android_image" />
                  </a>

                </div>

              </div>

              <div className="lg:h-[400px] lg:w-[400px] min-h-[200px] min-w-[200px] mx-auto mt-10 lg:mt-0 lg:mx-0">
                <Image src={iphone_image} alt="iphone_image" />
              </div>


            </div>

          </div>

          {/* Testimonial Banner */}
          <div className='lg:mt-[10rem] mt-5 transition-all relative' id="landing">

            <div className="flex items-center lg:justify-around lg:flex-row flex-col">

              <div className="lg:h-[400px] lg:w-[400px] min-h-[200px] min-w-[200px] mx-auto mt-10 lg:mt-0 lg:mx-0 -scale-x-100">
                <Image src={testimonial_image} alt="testimonial_image" />
              </div>

              <div className="absolute w-[180px] h-[100px] bg-white shadow-md backdrop-blur-sm bg-opacity-60 rounded-xl lg:left-[400px] lg:bottom-0 top-[350px] hover:scale-105 cursor-pointer">

                <div className="flex flex-col">
                  <p className='font-Poppins text-zinc-800 mt-5 text-center text-sm'>Our Satisfied User</p>

                  <div className="flex justify-center mt-2 relative">
                    <div style={{ position: "absolute", left: "30px", top: "0" }}>
                      <Image src={smile_emoji} width={40} height={40} alt="emoji" />
                    </div>
                    <div style={{ position: "absolute", left: "60px", top: "0px" }}>
                      <Image src={hearteyes_emoji} width={40} height={40} alt="emoji" />
                    </div>
                    <div style={{ position: "absolute", left: "90px", top: "0" }}>
                      <div className='min-w-[40px] min-h-[40px] rounded-full bg-white backdrop-blur-sm flex items-center bg-opacity-25 border border-gray-100 p-1 shadow-sm'>
                        <p className='font-Poppins text-center text-zinc-800 text-xs'>+25k</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div className="flex flex-col gap-2">
                <p className='font-Poppins lg:text-4xl text-lg font-semibold text-zinc-800 lg:max-w-[500px] mt-10 lg:mt-0'>What Our clients say about us</p>
                <p className='font-Poppins lg:text-lg text-md font-[300] text-zinc-500 lg:max-w-[600px] mt-3'>
                  I am grateful to the company for the timely and exceptionally accurate delivery of food. Everything is very tasty and high quality. And it follows that the weight loss plan I have chosen really works! I was surprised.
                </p>

                <div className="flex mt-5 flex-wrap gap-5 max-w-[600px] items-center">

                  <TestimonialCard img={confetti_emoji} title='Seona Palmsmith' company='Dixon Corp' stars={3} />

                </div>
              </div>

            </div>

          </div>

          {/* Articles Section */}
          <div className='lg:mt-[12rem] mt-28 relative' id="dish-category">

            <div className="flex flex-col">
              <p className='font-Poppins font-bold text-lg lg:text-4xl text-zinc-700 mx-auto max-w-[700px] text-center'>Articles and useful tips</p>
              <p className='font-Poppins font-[300] mt-5 text-sm lg:text-lg text-slate-400 mx-auto text-center max-w-[800px]'>Read on for useful information about tasty and healthy food. Interesting events and recipes. New meat plans and specialized diets for weight loss or gain.</p>

              <div className="flex lg:justify-center justify-start">
                <div className="flex overflow-auto flex-nowrap lg:overflow-hidden lg:flex-wrap gap-6 lg:gap-10 lg:px-10 py-5 justify-start lg:justify-center">
                  <ArticlesCard title="New seafood recipe perfect for losing weight" body="Mass communication has led to modern marketing strategies to continue focusing on brand awareness." img={article_1} />
                  <ArticlesCard title="Balance of proteins, fats and carbo. How do I get it?" body="Mass communication has let to modern marketing strategies to continue focusing on brand awareness." img={article_2} />
                  <ArticlesCard title="The importance of proper and healthy eating." body="Large distribution and heavy promotions. The fast-paced environment of digital payment service." img={article_3} />
                </div>
              </div>

              <button className='bg-gradient-to-b from-blue-400 to-blue-500 rounded-full w-[120px] mx-auto hover:scale-105 mt-2'>
                <div className="flex items-center gap-2 px-4 py-2">
                  <p className='font-Poppins text-white '>See all</p>
                  <BsArrowRightCircleFill className='text-white text-lg' />
                </div>
              </button>

            </div>

          </div>

        </Layout>

        <div className="flex w-full relative lg:flex-row flex-col">

          <div className='w-1/2 lg:block absolute left-0 border-r-[3.5px] border-dashed h-[350px] top-[40px] opacity-60 hidden' />

          <div className="newsletter w-full lg:w-1/2 h-[350px] bg-blue-500 lg:mt-10 mt-5 flex flex-col justify-center">

            <div className="mx-auto flex flex-col">
              <p className='font-Poppins text-white font-semibold text-4xl max-w-[300px] mx-10 lg:mx-0'>Subscribe our newsletter</p>
              <p className='font-Poppins text-gray-100 font-[300] text-sm text-left mt-2 max-w-[500px] mx-10 lg:mx-0'>Browse local restaurants and businesses for delivery by entering your address below.</p>

              <div className="flex mt-5 relative mx-10 lg:mx-0">
                <input type="text" className='border border-zinc-400 rounded-full py-4 font-Poppins px-5 w-full' placeholder='Enter your email address' />

                <button className='absolute right-2 top-[5.5px] bg-gradient-to-b from-blue-400 to-blue-500 rounded-full px-4 py-3'>
                  <div className="flex items-center gap-2">
                    <p className='font-Poppins text-white '>Subscribe</p>
                    <BsArrowRightCircleFill className='text-white text-lg' />
                  </div>
                </button>

              </div>
            </div>

          </div>

          <div className="newsletter w-full lg:w-1/2 h-[200px] lg:h-[350px] bg-blue-500 lg:mt-10 flex flex-col justify-center">

            <div className="mx-auto flex flex-col">
              <p className='font-Poppins text-white font-semibold text-4xl max-w-[300px]'>Ready to Order?</p>

              <button className='bg-blue-700 rounded-full hover:scale-105 max-w-[150px] mx-auto mt-5'>

                <div className="flex items-center gap-2 px-4 py-2 justify-center">
                  <p className='font-Poppins text-white text-center text-lg'>Order Now</p>
                </div>
                
              </button>

            </div>

          </div>


        </div>

      </div>
    </>
  )
}