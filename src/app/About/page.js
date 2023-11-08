'use client'
import React from 'react'
import Image from 'next/image'
import Percent from '../components/percent'
import { RiLoader2Fill } from "react-icons/ri";
function About() {


    return (
        <main className="overflow-x-hidden w-full overflow-hidden" >

            <div className='w-full min-h-screen  fixed '>
                <div className='w-full min-h-screen fixed top-0 bg-slate-600 bg-emerald-800     bg-gradient-to-r to-slate-900 from-transparent opacity-80  z-20'>

                </div>
                <Image className='z-10 fadeOut object-cover'
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
                            About Us
                        </p>
                    </div>
                </div>
            </div>
            <div className=' w-full bg-background relative py-6 px-32 border-b-[1px] border-b-slate-400'>
                <div className='space-y-8 container mx-auto '>
                    <span className='text-slate-400'>Home</span> <span className='text-emerald-700 ml-8'>About</span>
                </div>

            </div>
            <div className='bg-background relative xl:min-h-screen lg:px-36 lg:py-24 py-12 px-12'>

                <div className='w-full container mx-auto'>
                    <div className='lg:flex flex-row w-full lg:space-x-12'>
                        <div className='grid grid-cols-2 gap-2 gap-y-12  auto-cols-max xl:w-1/2 '>
                            <Image className='object-cover h-[120%] rounded-tr-[35%] rounded-bl-[35%] '
                                src={'/assets/person-people-girl-woman-camera-photography.jpg'}
                                alt='Mountains'
                                width={600}
                                height={600}
                                quality={100}
                            />

                            <Image className='object-cover h-[120%] rounded-tl-[35%] rounded-br-[35%]'
                                src={'/assets/building-tower-castle-pink-cherry-blossom-temple.jpg'}
                                alt='Mountains'
                                width={800}
                                height={800}
                                quality={100}
                            />

                            <Image className='object-cover h-[120%] rounded-tl-[35%] rounded-br-[35%]'
                                src={'/assets/beach-landscape-sea-coast-water-nature-resort.jpg'}
                                alt='Mountains'
                                width={600}
                                height={600}
                                quality={100}
                            />
                            <Image className='object-cover h-[120%] rounded-tr-[35%] rounded-bl-[35%]'
                                src={'/assets/banner-hiking.webp'}
                                alt='Mountains'
                                width={600}
                                height={600}
                                quality={100}
                            />

                        </div>

                        <div className='text-dark lg:w-1/2  leading-loose tracking-wider xl:space-y-12 space-y-2 py-12 '>
                            <p className='font-bold xl:text-3xl '>Discover Your Next Adventure with TripAdvisor!</p>
                            <p className='xl:text-md text-sm'>Trip Advisor is more than just a travel platform; its your trusted companion on your journey of exploration.
                                With a mission to empower travelers to plan their perfect trips, we provide a wealth of resources, insights, and
                                reviews to help you make informed decisions.</p>
                            <div>

                                <p className='font-bold xl:text-xl'>Best Services</p>
                                <div className='flex flex-row w-[60%] ' >
                                    <div className='h-2 progress'></div> <div>60%</div>

                                </div>


                                <div className="progress-bar w-full bg-slate-200 h-4 rounded-xl">
                                    <div className='w-[60%]'>
                                        <div className="progress  bg-green-700 h-4 rounded-xl" ></div>
                                    </div>

                                </div>
                            </div>

                            <div>

                                <p className='font-bold xl:text-xl'>Tour Agents</p>
                                <div className='flex flex-row w-[40%]' >
                                    <div className=' h-2 progress'></div> <div>40%</div>

                                </div>


                                <div className="progress-bar w-full bg-slate-200 h-4 rounded-xl">
                                    <div className='w-[40%]'>
                                        <div className="progress  bg-green-700 h-4 rounded-xl" ></div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>



            </div>
            <div className=' w-full bg-background relative  mt-96'>
                <div className='container mx-auto bg-background lg:px-24 lg:flex justify-center'>

                    <div className='text-center text-background xl:w-2/3 lg:p-4 lg:-translate-y-80 -translate-y-64 space-y-12'>
                        <div className='flex w-full justify-center'>
                            <p className='lg:text-3xl  text-center'> tripadvisor.</p>
                            <RiLoader2Fill className='text-emerald-700' size={26} />
                        </div>
                        <div className='lg:text-4xl font-bold text-xl'>
                            tripadvisor is a World Leading
                            Online Tour Travel Platform
                        </div>

                        <div className='bg-background rounded-xl flex justify-between  shadow-xl'>
                            <div className='lg:p-12 p-4 space-y-4'>
                                <div className='text-emerald-700 font-semibold text-xl'><Percent target={600} duration={200} /></div>
                                <div className='text-dark font-bold lg:text-xl'>Total Download</div>
                            </div>
                            <div className='lg:p-12 p-4 space-y-4'>
                                <div className='text-emerald-700 font-semibold text-xl'><Percent target={500} duration={200} /></div>
                                <div className='text-dark font-bold lf:text-xl'>Happy People</div>
                            </div>
                            <div className='lg:p-12 p-4 space-y-4'>
                                <div className='text-emerald-700 font-semibold text-xl'><Percent target={80} duration={200} /></div>
                                <div className='text-dark font-bold lf:text-xl'>Our Volunteers</div>
                            </div>

                        </div>

                    </div>



                </div>
                <div className='bg-emerald-700  relative text-background -translate-y-44'>
                    <div className='container mx-auto relative '>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="260" preserveAspectRatio="none" viewBox="0 0 1440 560">
                            <g clip-path="url(&quot;#SvgjsClipPath1190&quot;)" fill="none">
                                <rect width="1440" height="560" x="0" y="0" fill="rgba(4, 120, 87, 1)"></rect>
                                <circle r="93.335" cx="-81.92" cy="77.89" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="93.335" cx="386.39" cy="374.94" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="93.335" cx="766.89" cy="804.99" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="169.98" cx="1320.06" cy="495.05" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="139.91" cx="1246.64" cy="468.45" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="116.06" cx="1349.4" cy="281.8" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="92.005" cx="1382.95" cy="491.05" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="76.97" cx="1058" cy="416.25" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="149.405" cx="1155.46" cy="39.7" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="139.525" cx="1354.81" cy="147.32" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="66.545" cx="1252.97" cy="131.7" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="142.545" cx="513.21" cy="373.73" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="118.5" cx="1305.68" cy="16.59" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="174.445" cx="251.96" cy="257.18" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="68.97" cx="19.15" cy="172.63" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="56.01" cx="231.9" cy="69.19" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="184.47" cx="636.33" cy="222.63" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="102.53" cx="864.52" cy="189.57" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="150.9" cx="360.26" cy="505.7" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="76.315" cx="538.8" cy="282.39" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="97.11" cx="1285.72" cy="392.3" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="164.51" cx="1321.09" cy="462.19" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="84.265" cx="764.77" cy="333.55" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="165.995" cx="810.94" cy="227.9" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="121.485" cx="523.35" cy="44.84" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="175.74" cx="317.16" cy="197" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="121.47" cx="322.65" cy="487.11" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="164.38" cx="1408.25" cy="472.87" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="47.15" cx="43.26" cy="466.68" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="61.48" cx="351.44" cy="261.89" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="106.255" cx="270.23" cy="556.87" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="75.97" cx="609.67" cy="341.41" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="172.5" cx="1114.16" cy="166.57" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="79.5" cx="1097.24" cy="502.52" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="112.98" cx="496.06" cy="176.7" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="108.03" cx="150.66" cy="25.17" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="157.375" cx="208.24" cy="307.74" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="72.985" cx="400.41" cy="539.75" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="129.495" cx="689.9" cy="355.62" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="109.905" cx="170.39" cy="142.14" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="154.76" cx="253.79" cy="321.41" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="70.36" cx="401.52" cy="70.44" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="181.77" cx="870.31" cy="454.52" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="84.78" cx="467.56" cy="479.37" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="129.22" cx="1388.06" cy="169.75" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="179.72" cx="1427.54" cy="53.97" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="167" cx="392.14" cy="303.13" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="93.2" cx="1339.15" cy="486.1" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="84.075" cx="1006.33" cy="420.76" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="129.595" cx="522.49" cy="302.37" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="71.86" cx="1200.46" cy="67.15" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="104.75" cx="1201.91" cy="215.54" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                                <circle r="106.69" cx="276.98" cy="411.09" stroke="#046b4e" stroke-opacity="1" stroke-width="2"></circle>
                            </g>
                            <defs>
                                <clipPath id="SvgjsClipPath1190">
                                    <rect width="1440" height="560" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='absolute top-0 lg:p-24 xl:p-24 p-4 lg:py-0 w-full '>
                            <div className='lg:flex lg:justify-around justify-between space-y-12 lg:space-y-0'>
                                <p className='text-4xl font-bold'>Ready for an unforgetable trip?</p>
                                <div className='p-4 pz-8 rounded-lg text-emerald-700 bg-background text-2xl text-center font-semibold relative hover:bg-dark hover:text-background transition-colors delay-200 ease-in-out cursor-pointer'>
                                    <div>BOOK NOW</div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </main >
    )
}

export default About