import React from 'react'

const Team = () => {
  return (
    <div className='bg-[#00194d] '>
        <div className='ml-[5rem] mr-[5rem] flex flex-row items-center justify-center h-screen'>
            <div className='flex flex-col gap-1 items-center text-white'>
                <h1 className='text-[55px] font-bold'>Meet Our Team</h1>
                <p className='text-[19px] font-medium text-center'>Our diverse team embodies expertise, dedication, and creativity, driving innovation                </p>
            </div>
        </div>
        <p className='w-[50rem] h-[50rem] border border-white border-opacity-60 rounded-full absolute top-0 left-[14.5rem]'></p>
        {/* <p className='w-[30rem] h-[20rem] border border-white rounded-[80rem] absolute top-[5rem] left-[14.5rem]'></p> */}

        {/* <p className='w-[60rem] h-[60rem] border border-white rounded-full absolute -top-[6rem] left-[12rem]'></p> */}
    </div>
  )
}

export default Team