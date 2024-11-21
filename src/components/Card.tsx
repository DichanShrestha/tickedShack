import Image from 'next/image';
import React from 'react'

export default function Card({
    url,
    title,
    time,
    price
}: {
    url: string;
    time: string;
    price: string;
    title: string;
}) {  
  return (
    <div className='md:w-[399px] md:h-[566px] w-[350px] h-[520px] flex flex-col gap-6'>
      <div className='md:w-[399px] md:h-[399px] w-[350px] h-[520px]'>
        <Image 
        src={url}
        height={399}
        width={399}
        alt='img'
        className='rounded-[13px]'
        />
      </div>
      <div className='flex flex-col gap-6 items-center 2xl:items-start'>
        <h3 className='text-4xl font-bold'>{title}</h3>
        <p className='text-[21px]'>{time}</p>
        <p className='text-[23px]'>TICKETS FROM {price}</p>
      </div>
    </div>
  )
}
