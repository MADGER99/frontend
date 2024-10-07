import React from 'react'
import { Link } from 'react-router-dom'
import Logos from './Logos'
import { FaYoutube , FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <Link to={'/'}>
                <Logos/>
            </Link>
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore nostrum amet blanditiis similique nobis doloremque maxime iusto esse pariatur est, nemo adipisci reprehenderit a, voluptatibus numquam sint ab minima!
            </p>
            <hr />
            
            <div className='flex gap-8'>
                <Link >
                    <FaFacebook className='w-[40px] h-[40px]'/>
                </Link>
                <Link>
                    <FaInstagram className='w-[40px] h-[40px]'/>  
                </Link>
                <Link>
                    <FaYoutube className='w-[40px] h-[40px]'/>
                </Link>
              
            </div>
            
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+66-89-498-9898</li>
                <li>madkingx3x@gmail.com</li>
            </ul>
        </div>
    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ MADGER - All Right Reserved.</p>
    </div>
      
    </div>
  )
}

export default Footer
