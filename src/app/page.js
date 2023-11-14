'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { RiThumbUpFill, RiUserStarFill, RiSuitcaseFill, RiMapFill, RiStarFill, RiLoader2Fill } from "react-icons/ri";
import ScrollAnimate from 'react-animation-scroll'
import 'react-animation-scroll/dist/index.css';
export default function Home() {


  const bannerUrl = ['/assets/man-landscape-wilderness-walking-person-mountain.jpg',
    '/assets/pedestrian-person-woman-road-street-crowd.jpg',
    '/assets/travel-trip.jpg',
    '/assets/road-street-town-building-alley-tourist-1295.jpg'];
  const [bannerIndex, setBannerIndex] = useState(0);
  const [banner, setBanner] = useState(bannerUrl[bannerIndex]);
  useEffect(() => {



    const intervalId = setInterval(() => {

      setBanner(bannerUrl[bannerIndex]);
      if (bannerIndex >= bannerUrl.length - 1) {
        setBannerIndex(0);
      }
      else {
        setBannerIndex(bannerIndex + 1)
      }
    }, 3000);




    return () => {
      clearInterval(intervalId);

    };
  }, [bannerIndex]);


  return (
    <main className="overflow-x-hidden w-full overflow-hidden" >

      <div className='w-full min-h-[80vh]  fixed '>
        <div className='w-full min-h-screen fixed top-0 bg-slate-600 lg:bg-emerald-800  lg:bg-opacity-20 lg:bg-gradient-to-r to-slate-900 from-transparent opacity-70 lg:opacity-80 z-20'>

        </div>
        <Image className='z-10 zoom-background fadeOut object-cover '
          src={banner}
          alt='banner-for-tripadvisor-website'
          fill
          priority

        />
      </div>

      <div className='min-h-[80vh] w-full bg-transparent top-0  relative '>
        <div className='flex lg:justify-end justify-center text-background w-full'>
          <ScrollAnimate infinite={true} duration={2} animation={'fade-in'}>
            <div className='lg:w-[45vw] lg:mt-36 mt-24 p-4 space-y-8 lg:mr-24 w-full '>
              <p className='widertracking- text-xl lg:text-3xl xl:text-6xl leading-relaxed font-semibold text-center lg:text-left'>Enjoy the holidays with tripadvisor</p>
              <p className='text-lg lg:leading-loose lg:tracking-wide text-center lg:text-left'>Enjoy the holidays with TripAdvisor and unlock a world of incredible
                travel experiences. Whether youre seeking a tranquil beach escape, an exhilarating adventure, or a cultural exploration,
                TripAdvisor provides you with a wealth of options to make your holidays truly unforgettable.</p>
            </div>
          </ScrollAnimate>
        </div>
      </div>
      <div className='w-full bg-slate-200 relative z-20 lg:px-8'>
        <ScrollAnimate animation={'slide-in-up'}>
          <div className='mx-auto   container shadow-lg  -translate-y-32 rounded-xl'>
            <div className='text-xl p-4 px-8 rounded-t-xl font-semibold w-fit bg-background'>Search for your trip</div>
            <div className='  bg-background rounded-b-xl rounded-tr-xl'>
              <form className='flex lg:flex-row flex-col justify-between w-full xl:px-24 px-12 lg:space-x-4 space-y-4 lg:space-y-0  xl:space-x-6 py-14 '>

                <input placeholder='city' type='text' className='lg:w-1/4 bg-slate-200 h-12 p-2 rounded-xl' />
                <input placeholder='Departure' type='text' className='lg:w-1/4 bg-slate-200 h-12 p-2 rounded-xl' />
                <input placeholder='Arrival' type='text' className='lg:w-1/4 bg-slate-200 h-12 p-2 rounded-xl' />
                <input placeholder='budget' type='text' className='lg:w-1/4 bg-slate-200 h-12 p-2 rounded-xl' />
                <button className='bg-emerald-700 text-background font-semibold p-2 px-16 rounded-xl ' type='submit ' > Search </button>
              </form>
            </div>
          </div>
        </ScrollAnimate>
        <ScrollAnimate duration={2} animation={'slide-in-up'}>
          <div className='lg:text-3xl  font-semibold text-center justify-center -translate-y-12 flex'>
            <span>Embrace the Journey, Capture the Moments</span>
            <RiLoader2Fill className='text-emerald-700' size={28} />
          </div>
        </ScrollAnimate>
      </div>
      <div className=' w-full bg-background  relative  '>
        <div className='flex lg:flex-row flex-col  justify-around lg:container mx-auto lg:p-24 '>
          <div className='lg:w-1/2 relative md:flex md:p-4'>
            <Image className='lg:w-[40%] lg:h-[100%] h-[300px]  object-cover lg:absolute lg:rounded-[40px]'
              src={'/assets/landscape-sea-architecture-building-old-city.jpg'}
              alt='Mountains'
              width={1000}
              height={900}

            />
            <Image className='lg:w-[40%] lg:h-[100%] h-[300px] object-cover lg:absolute  top-0 lg:rounded-[40px] lg:translate-x-[60%] lg:translate-y-[20%]'
              src={'/assets/beach-landscape-sea-coast-water-nature.jpg'}
              alt='Mountains'
              width={1000}
              height={900}

            />


          </div>
          <div className='lg:w-1/2 glass md:mx-8 lg:shadow-none lg:bg-background mx-4 lg:mx-0 p-4 lg:p-0 -translate-y-44 md:-translate-y-12 lg:translate-y-0'>
            <ScrollAnimate duration={2} animation={'slide-in-up'}>
              <div className='space-y-6 '>

                <p className='xl:text-4xl lg:text-2xl text-md  leading-relaxed tracking-wide font-semibold'>Investigate All corners of The World With Us</p>

                <p className='xl:text-md text-sm lg:leading-relaxed '>
                  Investigate All Corners of The World With Us is an
                  invitation to embark on an adventurous journey, exploring the diverse and enchanting landscapes,
                  cultures, and hidden treasures that our planet has to offer. With our passion for discovery and a
                  commitment to sustainable travel, we invite you to join us in uncovering the mysteries,
                  embracing the unknown, and experiencing the beauty of our world, one corner at a time.
                </p>

                <div className='bg-emerald-700 p-2 text-background w-32 text-center hover:bg-emerald-800 tarnsition-colors delay-200 ease-in-out rounded-lg cursor-pointer '>Discover</div>
              </div>
            </ScrollAnimate>


          </div>
        </div>
      </div>
      <div className='w-full bg-slate-200  relative md:flex md:justify-center'>
        <div className='w-full bg-slate-200  lg:p-24 p-4 flex lg:mx-auto container gap-x-24 flex-col-reverse lg:grid lg:grid-cols-2'>

          <div className='space-y-6 mt-24 lg:mt-0'>
            <ScrollAnimate className='space-y-6' animation='slide-in-up' >
              <div className='xl:text-4xl lg:text-2xl font-semibold '>

                Best Features For You
              </div>
              <div className='text-sm'>
                Explore the worlds finest destinations with TripAdvisor Best Features For You.
                From personalized recommendations to expert reviews, we have curated the ultimate travel
                experience just for you.
              </div>
            </ScrollAnimate>
            <ul className=' grid lg:grid-cols-2 gap-2 xl:flex xl:flex-col  space-y-4 lg:space-y-0 xl:space-y-4 '>
              <li>
                <ScrollAnimate delay={200} className='xl:flex flex-row space-x-6' animation='slide-in-up' >
                  <div className='text-green-400 bg-green-200 lg:p-4 p-2 h-fit rounded-lg flex'>
                    <RiThumbUpFill className='-translate-x-2 translate-y-2 ' size={28} />
                    <span className='font-semibold md:block xl:hidden xl:text-md text-sm mt-2'>Personalized Recommendations</span>
                  </div>
                  <div className='space-y-2'>
                    <span className='font-semibold xl:block hidden xl:text-md text-sm'>Personalized Recommendations</span>
                    <p className='text-sm leading-relaxed'> Our advanced algorithm tailors travel recommendations specifically for you based on your preferences,
                      past travels, and interests.
                    </p>
                  </div>
                </ScrollAnimate>
              </li>
              <li >
                <ScrollAnimate delay={400} className='xl:flex flex-row space-x-6' animation='slide-in-up' >
                  <div className='text-orange-400 bg-orange-200 lg:p-4 p-2  h-fit rounded-lg flex'>
                    <RiUserStarFill className='-translate-x-2 translate-y-2 ' size={32} />
                    <span className='font-semibold xl:hidden xl:text-md text-sm mt-2'>Expert Reviews and Ratings</span>
                  </div>
                  <div className='space-y-2'>
                    <span className='font-semibold xl:block hidden xl:text-md text-sm'>Expert Reviews and Ratings</span>
                    <p className='text-sm leading-relaxed'>Access in-depth reviews and ratings from fellow travelers and experts.
                      Make informed decisions ensuring you have an unforgettable travel experience.</p>
                  </div>
                </ScrollAnimate>
              </li>
              <li >
                <ScrollAnimate delay={600} className='xl:flex xl:flex-row space-x-6 lg:col-span-2' animation='slide-in-up' >
                  <div className='text-red-400 bg-red-200 lg:p-4 p-2  h-fit rounded-lg flex'>
                    <RiSuitcaseFill className='-translate-x-2  translate-y-2' size={28} />
                    <span className='font-semibold xl:hidden xl:text-md text-sm pt-2'>Interactive Travel Planner</span>
                  </div>
                  <div className='space-y-2'>
                    <span className='font-semibold xl:block hidden xl:text-md text-sm'>Interactive Travel Planner</span>
                    <p className='text-sm leading-relaxed'>  Plan your entire trip in one place.
                      Our interactive travel planner allows you to create itineraries, book activities, and make reservations seamlessly.
                    </p>
                  </div>
                </ScrollAnimate>
              </li>
            </ul>

            <div className='bg-emerald-700 p-2 px-4 rounded-lg lg:w-fit w-full text-center text-background '>
              Discover
            </div>

          </div>
          <div className='h-full lg:mt-12 xl:mt-0'>
            <div className='grid grid-cols-2 gap-2 gap-y-12  auto-cols-max'>
              <ScrollAnimate animation='fade-in-top-left' >
                <Image className='object-cover h-[120%] rounded-tr-[35%] rounded-bl-[35%] '
                  src={'/assets/person-people-girl-woman-camera-photography.jpg'}
                  alt='Mountains'
                  width={600}
                  height={600}

                />
              </ScrollAnimate>
              <ScrollAnimate delay={200} animation='fade-in-top-right' >
                <Image className='object-cover h-[120%] rounded-tl-[35%] rounded-br-[35%]'
                  src={'/assets/building-tower-castle-pink-cherry-blossom-temple.jpg'}
                  alt='Mountains'
                  width={800}
                  height={800}

                />
              </ScrollAnimate>
              <ScrollAnimate delay={400} animation='fade-in-bottom-left' >
                <Image className='object-cover h-[120%] rounded-tl-[35%] rounded-br-[35%]'
                  src={'/assets/beach-landscape-sea-coast-water-nature-resort.jpg'}
                  alt='Mountains'
                  width={600}
                  height={600}

                />
              </ScrollAnimate>
              <ScrollAnimate delay={600} animation='fade-in-bottom-right' >
                <Image className='object-cover h-[120%] rounded-tr-[35%] rounded-bl-[35%]'
                  src={'/assets/banner-hiking.webp'}
                  alt='Mountains'
                  width={600}
                  height={600}

                />
              </ScrollAnimate>

            </div>

          </div>
        </div>
      </div>
      <div className='w-full relative bg-background'>
        <div className='w-full lg:container lg:mx-auto lg:p-24  space-y-12'>
          <ScrollAnimate animation='slide-in-up' >
            <div className=' text-center space-y-6 p-4'>
              <span className='font-semibold text-lg lg:text-4xl'>Popular Destinations</span>
              <div className='flex justify-center '>
                <p className='text-sm lg:w-1/2'>Discover Dream Destinations
                  Explore the worlds most sought-after travel destinations on Trip Advisor. From bustling cities to tranquil getaways,
                  our Popular Destinations offer a taste of what the world has to offer. Start planning your next adventure today!</p>
              </div>

            </div>
          </ScrollAnimate>
          <div className='md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:space-x-8  '>
            <div className='relative lg:h-[400px] h-[300px] lg:w-[250px] overflow-hidden  lg:rounded-2xl group '>
              <Image className='lg:w-[40%] lg:h-[100%]  object-cover absolute lg:rounded-2xl z-10 group-hover:scale-125 transform transition-transform duration-300 ease-in-out'
                src={'/assets/building-tower-castle-pink-cherry-blossom-temple.jpg'}
                alt='Mountains'
                fill

              />

              <div className='absolute z-20 bottom-0 glass w-full text-dark p-2 py-4 space-y-4 flex flex-row
               justify-between rounded-t-3xl  lg:opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-500 ease-in-out '>
                <div>
                  <span className='text-lg'>Osaka Castle</span>

                  <p className='flex space-x-6 text-sm'>
                    <RiMapFill size={20} /><span>Osaka, Japan</span>
                  </p>
                </div>
                <div className='text-md border-[1px] h-fit rounded-md p-2 border-background hover:bg-background 
                transitions-colors delay-100 ease-in-out  cursor-pointer '>
                  ADD
                </div>
              </div>

              <div className='glass absolute top-24 z-20 right-0 flex p-2 rounded-l-lg space-x-2'>
                <span className='text-dark '>4.5</span>
                <div className='text-orange-400'>   <RiStarFill size={20} /></div>

              </div>

            </div>
            <div className='relative lg:h-[400px] lg:w-[250px] h-[300px] overflow-hidden  lg:rounded-2xl group '>
              <Image className='lg:w-[40%] lg:h-[100%]  object-cover absolute lg:rounded-2xl z-10 group-hover:scale-125 transform transition-transform duration-300 ease-in-out'
                src={'/assets/landscape-cloud-sky-eiffel-tower-paris-monument.jpg'}
                alt='Mountains'
                fill

              />

              <div className='absolute z-20 bottom-0 glass w-full text-dark p-2 py-4 space-y-4 flex flex-row
               justify-between rounded-t-3xl  lg:opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-500 ease-in-out '>
                <div>
                  <span className='text-lg'>Eiffel Tower</span>

                  <p className='flex space-x-6 text-sm'>
                    <RiMapFill size={20} /><span>Paris, France</span>
                  </p>
                </div>
                <div className='text-md border-[1px] h-fit rounded-md p-2 border-background hover:bg-background transitions-colors delay-100 ease-in-out text-dark cursor-pointer '>
                  ADD
                </div>
              </div>

              <div className='glass absolute top-24 z-20 right-0 flex p-2 rounded-l-lg space-x-2'>
                <span className='text-dark'>4.5</span>
                <div className='text-orange-400'>   <RiStarFill size={20} /></div>

              </div>

            </div>
            <div className='relative lg:h-[400px] lg:w-[250px] h-[300px] overflow-hidden  lg:rounded-2xl group '>
              <Image className='lg:w-[40%] lg:h-[100%]  object-cover absolute lg:rounded-2xl z-10 group-hover:scale-125 transform transition-transform duration-300 ease-in-out'
                src={'/assets/mountainous-landforms-mountain-body-of-water-natural-landscape-nature-wilderness.jpg'}
                alt='Mountains'
                fill

              />

              <div className='absolute z-20 bottom-0 glass w-full text-dark p-2 py-4 space-y-4 flex flex-row
               justify-between rounded-t-3xl  lg:opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-500 ease-in-out '>
                <div>
                  <span className='text-lg'>Oeschinen Lake</span>

                  <p className='flex space-x-6 text-sm'>
                    <RiMapFill size={20} /><span>Heuberg, Switzerland</span>
                  </p>
                </div>
                <div className='text-md border-[1px] h-fit rounded-md p-2 border-background hover:bg-background transitions-colors delay-100 ease-in-out text-dark cursor-pointer '>
                  ADD
                </div>
              </div>

              <div className='glass absolute top-24 z-20 right-0 flex p-2 rounded-l-lg space-x-2'>
                <span className='text-dark'>4.5</span>
                <div className='text-orange-400'>   <RiStarFill size={20} /></div>

              </div>

            </div>

            <div className='relative lg:h-[400px] lg:w-[250px] h-[300px] overflow-hidden  lg:rounded-2xl group '>
              <Image className='lg:w-[40%] lg:h-[100%]  object-cover absolute lg:rounded-2xl z-10 group-hover:scale-125 transform transition-transform duration-300 ease-in-out'
                src={'/assets/architecture-structure-sky-building-palace-old.jpg'}
                alt='Mountains'
                fill

              />

              <div className='absolute z-20 bottom-0 glass w-full text-dark p-2 py-4 space-y-4 flex flex-row
               justify-between rounded-t-3xl  lg:opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-500 ease-in-out '>
                <div>
                  <span className='text-lg'>Colosseum</span>

                  <p className='flex space-x-6 text-sm'>
                    <RiMapFill size={20} /><span>Roma, Italy</span>
                  </p>
                </div>
                <div className='text-md border-[1px] h-fit rounded-md p-2 border-background hover:bg-background transitions-colors delay-100 ease-in-out text-dark cursor-pointer '>
                  ADD
                </div>
              </div>

              <div className='glass absolute top-24 z-20 right-0 flex p-2 rounded-l-lg space-x-2'>
                <span className='text-dark'>4.5</span>
                <div className='text-orange-400'>   <RiStarFill size={20} /></div>

              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='relative bg-slate-200 w-full lg:p-24 '>
        <div className='container mx-auto space-y-12'>
          <ScrollAnimate animation='slide-in-up' >
            <div className=' text-center space-y-6 p-4 lg:p-0'>
              <span className='font-semibold text-xl lg:text-4xl'>Our Blogs</span>
              <div className='flex justify-center '>
                <p className='text-sm w-full lg:w-1/2'>Explore Our Insights and Stories
                  Dive into a world of knowledge and inspiration with our carefully curated collection of blogs. Our dedicated team of writers
                  and experts shares their insights, experiences, and tips to help you stay informed and inspired. </p>
              </div>
            </div>
          </ScrollAnimate>
          <div className='grid xl:grid-cols-2  gap-12'>
            <div className='w-full relative lg:flex bg-background lg:rounded-2xl '>
              <div className='relative lg:w-[250px] h-[350px] '>
                <Image className=' absolute object-cover  lg:rounded-2xl  '
                  src={'/assets/architecture-structure-sky-building-palace-old.jpg'}
                  alt='Mountains'
                  fill

                />
              </div>

              <div className='lg:w-2/3 lg:p-8 p-2 space-y-4'>
                <span className='font-semibold'>La Dolce Vita: Discovering the Charms of Italy</span>
                <p className='text-sm '>
                  Italy, with its classical architecture, delicious cuisine, and rich culture,
                  has always been an alluring destination. In this blog, we will explore iconic places like Rome,
                  Venice, and Florence, and provide insights into Italys
                  world-famous cuisine. Get ready for a virtual journey to a land full of charm.
                </p>

                <div className='p-2 py-4  w-fit  rounded-xl cursor-pointer group'>
                  Read More
                  <div className='h-[2px] w-full  slide-animation-white'></div>
                </div>
              </div>

            </div>

            <div className='w-full relative lg:flex bg-background lg:rounded-2xl '>
              <div className='relative lg:w-[250px] h-[350px] '>
                <Image className=' absolute object-cover  lg:rounded-2xl  '
                  src={'/assets/building-tower-castle-pink-cherry-blossom-temple.jpg '}
                  alt='Mountains'
                  fill

                />
              </div>

              <div className='lg:w-2/3 lg:p-8 p-2 space-y-4'>
                <span className='font-semibold'>Japan Unveiled: A Journey Through Tradition and Modernity</span>
                <p className='text-sm '>
                  Japan is a unique blend of deep traditions and cutting-edge technology.
                  We will discuss travels to places like Kyoto, Tokyo, and Hiroshima. This blog will also delve into the world of geishas,
                  beautiful temples,
                  and impressive technological advancements. Follow us to explore the Land of the Rising Sun.
                </p>

                <div className='p-2 py-4  w-fit  rounded-xl cursor-pointer group'>
                  Read More
                  <div className='h-[2px] w-full  slide-animation-white'></div>
                </div>
              </div>

            </div>


            <div className='w-full relative lg:flex bg-background lg:rounded-2xl '>
              <div className='relative lg:w-[250px] h-[350px] '>
                <Image className=' absolute object-cover  lg:rounded-2xl  '
                  src={'/assets/landscape-cloud-sky-eiffel-tower-paris-monument.jpg'}
                  alt='Mountains'
                  fill

                />
              </div>

              <div className='lg:w-2/3 p-2 lg:p-8 space-y-4'>
                <span className='font-semibold'>Paris, the City of Lights: A Romantic Escape</span>
                <p className='text-sm '>
                  Paris, known as the City of Light, is one of the worlds most iconic romantic destinations. In this blog,
                  we will explore Paris, highlighting places like the Eiffel Tower, the Louvre, and Montmartre. We will also
                  discuss the captivating French culinary art
                  and the renowned café culture. Get ready to experience the charm of Paris on this romantic journey.
                </p>

                <div className='p-2 py-4  w-fit  rounded-xl cursor-pointer group'>
                  Read More
                  <div className='h-[2px] w-full  slide-animation-white'></div>
                </div>
              </div>

            </div>

            <div className='w-full relative lg:flex bg-background lg:rounded-2xl '>
              <div className='relative lg:w-[250px] h-[350px] '>
                <Image className=' absolute object-cover  lg:rounded-2xl  '
                  src={'/assets/mountainous-landforms-mountain-body-of-water-natural-landscape-nature-wilderness.jpg'}
                  alt='Mountains'
                  fill

                />
              </div>

              <div className='lg:w-2/3 p-2 lg:p-8 space-y-4'>
                <span className='font-semibold'>Switzerland Scenic Splendor: A Haven for Nature Lovers</span>
                <p className='text-sm '>
                  Switzerland is renowned for its breathtaking mountain landscapes and natural beauty. We will cover trips to Zermatt,
                  Interlaken, and Lucerne, as well as exciting outdoor activities such as hiking, skiing, and snowboarding.
                  Discover the unforgettable natural charm of Switzerland in this blog.
                </p>

                <div className='p-2 py-4  w-fit  rounded-xl cursor-pointer group'>
                  Read More
                  <div className='h-[2px] w-full  slide-animation-white'></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='w-full bg-background bg-slate-200 relative z-30 p-4'>

        <div className='mx-auto asbsolute  container  rounded-xl lg:px-24 lg:-translate-y-12 mt-12'>

          <div className='  bg-background  rounded-b-xl rounded-tr-xl '>
            <form className='flex flex-col lg:flex-row justify-between w-full xl:px-24 px-12 lg:space-x-4 shadow-lg p-4  space-y-4 lg:space-y-0  xl:space-x-6 lg:py-14 '>

              <input placeholder='Email Adrres' type='email' className='lg:w-3/4 bg-slate-200 h-12 p-2 rounded-xl' />

              <button className='bg-emerald-700 text-background font-semibold p-2 px-16 rounded-xl text-center ' type='submit ' > Subscribe </button>
            </form>
          </div>
        </div>



      </div>

    </main>
  )
}
