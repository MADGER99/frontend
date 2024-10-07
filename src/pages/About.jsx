import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Aliquid harum quo quia sit consectetur doloribus, quae, tenetur ullam nostrum natus inventore magni fuga odit voluptatibus quisquam! Officia ea fugit adipisci?</p>
            <p>Exercitationem dolor, corrupti quibusdam distinctio cumque nisi porro dolores. Magnam, accusantium? Iste suscipit laudantium eius quas enim recusandae. Optio dolor animi dicta.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Tempore ipsa asperiores corrupti harum molestias illum provident modi praesentium quae officiis voluptatibus nihil esse eligendi laboriosam nesciunt, vitae facilis eaque laudantium.</p>
          </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qualiy Assurance:</b>
          <p className='text-gray-600'>Veritatis architecto obcaecati officiis? Eveniet sapiente corrupti similique necessitatibus quibusdam dignissimos obcaecati est maxime, quam, eum eaque dolorem provident numquam itaque rerum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Veritatis architecto obcaecati officiis? Eveniet sapiente corrupti similique necessitatibus quibusdam dignissimos obcaecati est maxime, quam, eum eaque dolorem provident numquam itaque rerum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Veritatis architecto obcaecati officiis? Eveniet sapiente corrupti similique necessitatibus quibusdam dignissimos obcaecati est maxime, quam, eum eaque dolorem provident numquam itaque rerum!</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
