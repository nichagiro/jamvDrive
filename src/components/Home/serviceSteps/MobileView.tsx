import { serviceSteps } from '@/app/api/data'
import Image from 'next/image'
import React from 'react'

const MobileView = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-8 lg:hidden'>
      {
        serviceSteps.map((item, index) => (
          <div key={index} className='flex items-center gap-6'>
            <div className='bg-light_grey/45 p-6 rounded-full'>
              <Image
                src={item.icon}
                alt={item.title}
                width={44}
                height={44}
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

export default MobileView