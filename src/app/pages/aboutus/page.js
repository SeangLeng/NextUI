import React from 'react'

export default function Aboutus() {
  return (
    <div className="flex flex-col justify-center items-center lg:pageLayout md:pageLayout px-3 py-[20%]">
      <div className="text-blue-800 lg:text-5xl md:text-4xl text-2xl  text-center font-bold capitalize self-stretch whitespace-nowrap -mr-5">
        About K-QuickSight
      </div>
      <div className='w-lg:w-1/2 md:w-1/2'>
        <div className="text-zinc-600  text-base font-medium text-center mt-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>
    </div>
  )
}
