import { Facebook, FacebookIcon, InstagramIcon, TwitterIcon, X, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-black z-50 w-full text-white p-4 flex md:flex-row items-center  flex-col justify-between  flex-wrap md:text-start tex'>
        <div className="flex  items-center w-full md:w-[30%]">
        <p>Enhancing Daily Productivity</p>
        
        </div>
        <div className="flex gap-4 md:w-[40%]">
            <Link href='mailto:comedev23@gmail.com'>Email:amirdo@gmail.com</Link>
            <Link href='tel:+256758275700'>Phone: (+256) 755808472</Link>
            
        </div>
        <div className="flex  justify-end items-end md:w-[30%]">
            
            <div className="flex gap-2 ">
            <a href="#" className="text-blue-400 border-[1px]  hover:text-blue-400   hover:bg-red-900   p-2 rounded-full dark:hover:text-white ms-5">
                  <FacebookIcon className='border-1 h-4 w-4 border-white'/>
                   
              </a>
              <a href="#" className="text-red-400 border-[1px]   hover:bg-red-900   p-2 rounded-full dark:hover:text-white ms-5">
                   <InstagramIcon className='h-4 w-4'/>
                
              </a>
              <a href="#" className="text-white border-[1px] hover:bg-red-900 text-[12px]   p-2 rounded-full dark:hover:text-white ms-5">
                   <X className='h-4 w-4'/>
              </a>
              <a href="#" className="text-red-600 border-[1px]   hover:bg-red-900 text-[12px]   p-2 rounded-full dark:hover:text-white ms-5">
                   <YoutubeIcon className='h-4 w-4'/>
              </a>
              
            </div>
        </div>
    </div>
  )
}
