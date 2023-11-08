import React from 'react'
import { RiInstagramLine, RiFacebookBoxFill, RiLinkedinBoxFill, RiGithubFill, RiMapPin2Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='relative bg-slate-200 z-10 '>
            <div className='container mx-auto lg:p-12 p-4'>
                <div className='flex lg:flex-row flex-col w-full'>
                    <div className='lg:w-1/3 space-y-6'>
                        <span className='text-xl font-semibold'> About tripadvisor</span>
                        <p>Trip Advisor is more than just a travel platform; its your trusted companion on your journey of exploration.
                            With a mission to empower travelers to plan their perfect trips,
                            we provide a wealth of resources, insights, and reviews to help you make informed decisions.</p>

                        <p className='font-semibold text-xl space-y-6 '>Contact</p>
                        <div className='flex space-x-4'>
                            <div className='p-2 bg-emerald-700 rounded-full'>
                                <RiInstagramLine className='text-background' size={28} />
                            </div>
                            <div className='p-2 bg-emerald-700 rounded-full'>
                                <RiFacebookBoxFill className='text-background' size={28} />
                            </div>
                            <div className='p-2 bg-emerald-700 rounded-full'>
                                <RiLinkedinBoxFill className='text-background' size={28} />
                            </div>
                            <div className='p-2 bg-emerald-700 rounded-full'>
                                <RiGithubFill className='text-background' size={28} />
                            </div>


                        </div>
                    </div>
                    <div className='md:flex justify-between w-ful xl:space-x-24 lg:space-x-8'>
                        <div className='lg:ml-44 mt-12 lg:mt-0'>
                            <span className='text-lg font-semibold '>Links</span>
                            <ul className='space-y-6'>
                                <li className='mt-6'>About Us</li>
                                <li>Community Blog</li>
                                <li>Reward</li>
                                <li>Work with Us</li>
                                <li>Meet the Team</li>
                            </ul>
                        </div>
                        <div className='mt-12 lg:mt-0'>
                            <span className='text-lg font-semibold '>Explore</span>
                            <ul className='space-y-6'>
                                <li className='mt-6'>Account</li>
                                <li>Legal</li>
                                <li>Contact</li>
                                <li>Affilitate Program</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>


                    <div className='mt-12 lg:mt-0 xl:flex lg:justify-end lg:w-1/4'>
                        <div>
                            <span className='text-lg font-semibold '>Author</span>
                            <ul className='space-y-6'>

                                <li className='flex space-x-2 lg:space-x-4 mt-6'><RiMailFill size={24} className='text-emerald-700 hidden md:block' /><span>teguhkiranaberutu@gmail.com</span></li>
                                <li className='flex space-x-2 lg:space-x-4'><RiPhoneFill size={24} className='text-emerald-700' /><span>+62 88261441557</span></li>
                                <li className='flex space-x-2 lg:space-x-4'><RiMailFill size={24} className='text-emerald-700' /><span>Medan, Sumatera Utara</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full bg-emerald-700 p-2 text-center text-background
            '>

                Trpadvisor @ All Copyright 2023
            </div>
        </div>
    )
}

export default Footer