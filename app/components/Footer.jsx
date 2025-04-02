import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6'/>kulkarni.hri@northeastern.edu
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Created by Hrishikesh Kulkarni</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://hrishineu.github.io">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/hrishikesh-kulkarni-neu/">LinkedIn</a></li>
                <li><a target='_blank' href="https://leetcode.com/u/hrishi153/">Leetcode</a></li>
                <li><a target='_blank' href="https://www.instagram.com/_hrishikesh___/">Instagram</a></li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
