import React from 'react'
import Image from 'next/image'

import Napkin from "../../../public/About.png"

const Toppage = () => {
  return (
    <div className='bg-[#00194d] h-screen'>
        <div className='ml-[5rem] mr-[5rem] py-[3rem] flex flex-row items-center justify-between'>
            <div className='flex flex-col gap-1 items-center w-[37rem] text-white'>
                <h1 className='text-[35px]  font-bold'>About Us</h1>
                <p className='text-[15px] font-medium'>Napkin Private Limited is the national wide napkin manufacture and distributor company established in 2012 AD by the domain experts 
                    from Retail, Business, technology, digital sector, sustainability to improve the quality of life by supplying best quality paper.
                </p>
            </div>
            <div className='h-[30rem]'><Image className='w-[25rem] h-auto mt-[3rem]' src={Napkin} alt='image' /></div>
        </div>
    </div>
  )
}

export default Toppage