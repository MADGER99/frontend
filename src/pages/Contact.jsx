import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>99/9 หมู่ที่ 99 ถ. ซุปเปอร์ไฮเวย์ เชียงใหม่-ลำปาง  <br />อำเภอเมืองเชียงใหม่ เชียงใหม่ 50000 </p>
          <p className='text-gray-500'>Tel: (+66)99-999-9999 <br /> Email:madkingx3x@Gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at MADGER</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-sm'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
