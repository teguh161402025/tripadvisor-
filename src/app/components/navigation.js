'use client'

import { React, useEffect, useState, } from 'react'
import Link from 'next/link'
import '../globals.css'
import { RiLoader2Fill, RiBarChartHorizontalLine, RiCloseLine } from "react-icons/ri";
const Navigation = () => {
    const [slideNav, setSlideNav] = useState(false);

    useEffect(() => {
        const isTop = () => {
            const navElement = document.getElementById('navigation');
            if (navElement) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 0) {
                        navElement.classList.add('bg-background');
                        navElement.classList.add('text-dark')
                        navElement.classList.add('shadow-md')
                        navElement.classList.remove('bg-transparent');
                        navElement.classList.remove('text-background')


                    } else {
                        navElement.classList.remove('bg-background');
                        navElement.classList.remove('text-dark')
                        navElement.classList.remove('shadow-md')
                        navElement.classList.add('bg-transparent');
                        navElement.classList.add('text-background')

                    }
                });
            }
        }

        isTop()
    }, [])

    return (
        <>
            <div id='navigation' className='fixed w-full z-50 text-background hidden lg:flex text-lg w-full px-24 transition-colors delay-200 ease-in-out justify-between px-12 conainer mx-auto'>
                <Link href="/"> <div className='p-4 font-semibold text-2xl flex'>
                    <span> tripadvisor.</span>
                    <RiLoader2Fill className='text-emerald-700' size={26} />
                </div> </Link>


                <ul className='flex flex-row '>
                    <Link href="/">  <li className=' border-green-700 cursor-pointer group p-4 '>Home
                        <div className='h-[2px] w-full  slide-animation-white'></div>
                    </li></Link>
                    <Link href="/Destinations">  <li className=' border-green-700 cursor-pointer group  p-4'>Destinations
                        <div className='h-[2px] w-full  slide-animation-white'></div>
                    </li></Link>
                    <Link href="/Tours">     <li className=' border-green-700 cursor-pointer group  p-4'>Tours
                        <div className='h-[2px] w-full  slide-animation-white'></div>
                    </li></Link>
                    <Link href="/About">  <li className=' border-green-700 cursor-pointer group  p-4'>About
                        <div className='h-[2px] w-full  slide-animation-white'></div>
                    </li></Link>
                    <li className=' border-green-700 cursor-pointer group  p-4'>Contact
                        <div className='h-[2px] w-full  slide-animation-white'></div>
                    </li>
                </ul>

            </div>

            <div className='fixed z-50 text-dark lg:hidden  text-lg w-full transition-colors delay-200 ease-in-out '>
                <div className='flex w-full bg-background relative z-50'>
                    <div className='p-4 font-semibold text-2xl  flex flex-row w-full justify-between'>
                        <Link href="/">   <div className='flex'>
                            <span> tripadvisor.</span>
                            <RiLoader2Fill className='text-emerald-700' size={26} />
                        </div></Link>
                        <div onClick={() => setSlideNav(!slideNav)} className={`${slideNav ? 'fade-in' : ''} `}>
                            {
                                slideNav ? <RiCloseLine size={30} /> :
                                    <RiBarChartHorizontalLine size={30} className='flip-horizontal' />

                            }


                        </div>


                    </div>
                </div>

                <div className={`${slideNav == true ? 'slidenav' : 'slidenavclose -translate-y-[100vh]'} bg-background z-30`} >
                    <ul className='flex flex-col'>
                        <Link href="/">  <li className=' border-green-700 cursor-pointer group p-4 '>Home
                            <div className='h-[2px] w-full  slide-animation-white'></div>
                        </li></Link>
                        <Link href="/Destinations">  <li className=' border-green-700 cursor-pointer group  p-4'>Destinations
                            <div className='h-[2px] w-full  slide-animation-white'></div>
                        </li></Link>
                        <Link href="/Tours">     <li className=' border-green-700 cursor-pointer group  p-4'>Tours
                            <div className='h-[2px] w-full  slide-animation-white'></div>
                        </li></Link>
                        <Link href="/About">  <li className=' border-green-700 cursor-pointer group  p-4'>About
                            <div className='h-[2px] w-full  slide-animation-white'></div>
                        </li></Link>
                        <li className=' border-green-700 cursor-pointer group  p-4'>Contact
                            <div className='h-[2px] w-full  slide-animation-white'></div>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Navigation