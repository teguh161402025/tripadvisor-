import React from 'react'
import Image from 'next/image'
function Destination() {
    return (
        <main className="overflow-x-hidden w-full overflow-hidden" >

            <div className='w-full min-h-[80vh]  fixed '>
                <div className='w-full min-h-screen fixed top-0 bg-slate-600 bg-emerald-800     bg-gradient-to-r to-slate-900 from-transparent opacity-80  z-20'>

                </div>
                <Image className='z-10 fadeOut object-cover '
                    src='/assets/man-landscape-wilderness-walking-person-mountain.jpg'
                    alt='man landscape wilderness walking person mountain'
                    fill
                    quality={100}
                    priority
                />
            </div>
            <div className='min-h-[40vh] w-full bg-transparent top-0  relative '>
                <div className='flex xl:justify-start container mx-auto p-8  justify-center text-background w-full'>
                    <div className='lg:w-[45vw] mt-24  lg:px-36 lg:mr-8 w-full '>
                        <p className='tracking-wider text-3xl  xl:text-6xl leading-relaxed font-semibold lg:text-left'>
                            Destination List
                        </p>
                    </div>
                </div>
            </div>
            <div className=' w-full bg-background relative py-6 lg:px-32 border-b-[1px] border-b-slate-400'>
                <div className='md:space-y-8 container mx-auto '>
                    <span className='text-slate-400'>Home</span> <span className='text-emerald-700 ml-8'>Destination</span>
                </div>

            </div>
            <div className='bg-background relative min-h-screen lg:px-36 p-4 lg:py-24'>

                <div className='text-center font-bold text-xl md:text-5xl pb-12'>
                    Destination lists
                </div>


                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-4 gap-4 w-full mx-auto container space-y-4 lg:space-y-0 ">
                    <div className='relative group '>
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Japan</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/landscape-sea-architecture-building-old-city.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                    </div>
                    <div className="col-span-2 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Rome</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/architecture-structure-sky-building-palace-old.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                    </div>
                    <div className="col-start-4 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Washington</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/banner-hiking.webp'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                    </div>
                    <div className="col-span-2 row-start-2 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Greece</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/beach-landscape-sea-coast-water-nature-resort.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        /></div>
                    <div className="col-span-2 col-start-3 row-start-2 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Hawaii</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/beach-landscape-sea-coast-water-nature.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                    </div>
                    <div className="row-span-2 row-start-3 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Paris</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-full  rounded-[20px]'
                            src={'/assets/landscape-cloud-sky-eiffel-tower-paris-monument.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        /></div>
                    <div className="col-span-2 row-start-3 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Thailand</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/pedestrian-person-woman-road-street-crowd.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        /></div>
                    <div className="row-span-2  col-start-4 row-start-3 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Venice</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-full  rounded-[20px]'
                            src={'/assets/road-street-town-building-alley-tourist-1295.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        /></div>
                    <div className="col-span-2 col-start-2 row-start-4 relative group">
                        <div className='h-full w-full absolute w-full slide-up-animation rounded-[20px] opacity-70'></div>
                        <div className='absolute bg-slate-700 opacity-40 top-0 w-full h-full z-20 rounded-[20px]'>
                        </div>
                        <span className='absolute z-30 font-bold text-2xl text-background bottom-8 left-4'>Findland</span>
                        <div className='p-2 rounded-lg bg-emerald-700 hover:bg-background hover:text-emerald-700 cursor-pointer text-background  
                         absolute z-30 opacity-0 right-8 font-semibold px-4 top-4 flip-animation transition-colors duration-300'>
                            <p className='flip-horizontal'>6 Tours</p>
                        </div>
                        <Image className=' object-cover w-full h-64  rounded-[20px]'
                            src={'/assets/travel-trip.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        /></div>
                </div>

            </div>
        </main >
    )
}

export default Destination