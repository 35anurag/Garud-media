import React from 'react'
import Map from "../../../public/Nepal-map.png"
import Image from 'next/image'

const Ourpresence = () => {
  return (
    <div className='h-screen bg-[#0c182f]'>
        <div className='ml-[5rem] mr-[5rem] flex flex-row justify-between items-center pt-[3rem]'>
            <div className='flex flex-col items-center justify-center gap-[3rem] text-white'>
                <div className='flex flex-col justify-center gap-1'>
                <h1 className='text-[50px] font-semibold'>Our Presence on Nepal</h1>
                <p className='w-[40rem] font-medium text-[15px]'>Napkin operates with development and support centers spread across Nepal. Our headquarters is situated in Chandragiri, Kathmandu Nepal. </p>
                </div>
                <div className='flex flex-row items-center justify-center gap-4 mr-[4rem]'>
                    <p className='w-[6rem] h-[6rem] rounded-full border flex items-center justify-center'>Kathmandu</p>
                    <p className='w-[6rem] h-[6rem] rounded-full border flex items-center justify-center'>Pokhara</p>
                    <p className='w-[6rem] h-[6rem] rounded-full border flex items-center justify-center'>Jhapa</p>
                    <p className='w-[6rem] h-[6rem] rounded-full border flex items-center justify-center'>Chitwan</p>
                    <p className='w-[6rem] h-[6rem] rounded-full border flex items-center justify-center'>Butwal</p>
                </div>
            </div>
            <div className='h-[30rem] pt-[2rem]'>
                <p className='w-[10rem] h-[10rem] bg-white absolute mt-[5rem] rounded-full blur-[10rem]'></p>
                <Image src={Map} alt='Nepal' />
            </div>
        </div>

    </div>
  )
}

export default Ourpresence