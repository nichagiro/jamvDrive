'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import Image from 'next/image'
import PersonImage from '@/app/metaImagen.webp'
import { services } from '@/app/api/data'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  return (
    <section className='pt-10' id='trabaja-con-nosotros'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div {...bottomAnimation} className='lg:col-span-7 col-span-12'>
            <p className='sm:text-28 text-18 text-white'>
              Trabaja con <span className='text-primary'>nosotros</span>
            </p>

            <h2 className='sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium'>
              Entrega tus productos sin riesgos.
            </h2>

            <div className='grid md:grid-cols-2 gap-7 mt-11'>
              {
                services.map((service, index) => (
                  <div key={index} className='flex items-center gap-5'>
                    <div className='px-5 py-5 bg-light_grey/30 rounded-full'>
                      <Image
                        src={service.icon}
                        alt={`${service.text} icon`}
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <p className='text-24 text-muted'>{service.text}</p>
                  </div>
                ))
              }
            </div>
          </motion.div>

          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='2xl:-mr-40 mt-9 flex justify-center'>
              <Image
                src={PersonImage.src}
                alt='trabaja con nosotros jamvdrive'
                width={PersonImage.width}
                height={PersonImage.height}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
