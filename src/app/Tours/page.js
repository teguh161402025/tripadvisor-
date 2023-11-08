import React from 'react'
import Image from 'next/image'
import { RiStarFill, RiHeartFill } from "react-icons/ri";
function Tours() {
    return (
        <main className="overflow-x-hidden w-full overflow-hidden" >

            <div className='w-full min-h-[80vh]  fixed '>
                <div className='w-full min-h-screen fixed top-0 bg-slate-600 bg-emerald-800     bg-gradient-to-r to-slate-900 from-transparent opacity-80  z-20'>

                </div>
                <Image className='z-10 fadeOut object-cover '
                    src='/assets/man-landscape-wilderness-walking-person-mountain.jpg'
                    alt='Mountains'
                    layout='fill'
                    quality={100}
                />
            </div>
            <div className='min-h-[40vh] w-full bg-transparent top-0  relative '>
                <div className='flex xl:justify-start container mx-auto p-8  justify-center text-background w-full'>
                    <div className='lg:w-[45vw] mt-24  lg:px-36 lg:mr-8 w-full '>
                        <p className='tracking-wider text-3xl  xl:text-6xl leading-relaxed font-semibold lg:text-left'>
                            Popular Tours
                        </p>
                    </div>
                </div>
            </div>
            <div className=' w-full bg-background relative py-6 xl:px-32 border-b-[1px] border-b-slate-400'>

                <div className='space-y-8 container mx-auto '>

                    <span className='text-slate-400'>Home</span> <span className='text-emerald-700 ml-8'>Tours</span>
                </div>

            </div>
            <div className='bg-background relative min-h-screen lg:px-36 py-24'>
                <div className='text-center font-bold text-3xl lg:text-5xl pb-12'>
                    Our Best Tours lists
                </div>
                <div className='container mx-auto grid xl:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>

                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/architecture-structure-sky-building-palace-old.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer delay-200 ease-in-out'>Magic of Italy Tours</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Rome
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/banner-hiking.webp'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer delay-200 ease-in-out'>Discover Washington Alpine</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Washington
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/beach-landscape-sea-coast-water-nature-resort.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer
                                 delay-200 ease-in-out'>Discover Depth of Beach</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Greece
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/building-tower-castle-pink-cherry-blossom-temple.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer delay-200 ease-in-out'>Japan Modern and Traditional</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Osaka
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/road-street-town-building-alley-tourist-1295.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer delay-200 ease-in-out'>Magic of Venice</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Venice
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='md:w-96 w-70 flex flex-col rounded-xl border-[2px] border-slate-300 overflow-hidden relative group'>
                        <Image className=' object-cover w-full h-64 rounded-t-2xl border-[2px] scale-110 transform group-hover:scale-125 transition-transform duration-300'
                            src={'/assets/mountainous-landforms-mountain-body-of-water-natural-landscape-nature-wilderness.jpg'}
                            alt='Mountains'
                            width={1000}
                            height={900}
                            quality={100}
                        />
                        <div className='absolute z-30 bg-background rounded-full p-2 text-red-400 right-6 top-8 group-hover:bg-red-400 
                        group-hover:text-background transform transition-colors cursor-pointer delay-200 ease-in-out'>
                            <RiHeartFill size={20} /> </div>
                        <div className='bg-background justify-center w-full relative z-30 '>
                            <div className='space-y-6 p-4'>
                                <p className='text-center font-bold text-2xl text-dark hover:text-emerald-700 transition-colors cursor-pointer delay-200 ease-in-out'>Discover Swiszerland</p>

                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <span className='text-emerald-700 font-semibold text-lg'>$1666</span><span className='text-slate-500 text-sm'>/Per Person</span>
                                    </div>
                                    <div className='flex flex-row space-x-2 '>
                                        <div className='text-orange-500'> <RiStarFill size={18} /> </div> <p className='text-slate-500 text-sm'>4.5</p><p className='text-slate-500 text-sm'>Superb</p>
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='flex md:space-x-12 space-x-4 p-2 bg-green-100  text-dark rounded-md'>
                                        <div className='md:p-2'>
                                            3 Days
                                        </div>
                                        <div className='md:p-2'>
                                            12 people
                                        </div>
                                        <div className='md:p-2'>
                                            Swizerland
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </main >
    )
}

export default Tours