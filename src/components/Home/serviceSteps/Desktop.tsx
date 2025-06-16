import React from 'react'
import Image from 'next/image'

import { serviceSteps } from '@/app/api/data'
import CellImage from '@/images/serviceSteps/img-timeline.webp'

const Desktop = () => {
  return (
    <div className='lg:block hidden relative'>
      <Image
        src={CellImage.src}
        alt='servicios jamdrive delivery'
        width={CellImage.width}
        height={CellImage.height}
        className='w-80% mx-auto'
      />
      
      {
        serviceSteps.map((item, index) => (
          <div key={index} className={`absolute w-72 flex items-center gap-6 ${item.className} ${index % 2 !== 0 ? "" : "flex-row-reverse"}`}>
            <div className='bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full'>
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className='w-28'
              />
            </div>

            <div className='text-start'>
              <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
              <p className='text-muted/60 text-18'>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Desktop