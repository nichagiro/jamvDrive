'use client'

import { motion } from 'framer-motion'

import cellImage from "@/images/hero/banner-image.webp"
import { rastreoPage } from '@/app/api/data'

import Button from '@/components/Common/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative py-5 overflow-hidden z-1' id='inicio'>
      <div className='container px-4 pt-28 lg:pt-36 pb-6'>
        <div className='grid grid-cols-12'>
          <motion.div {...leftAnimation} className='lg:col-span-5 col-span-12 lg:pt-12'>
            <div className="flex gap-6 items-center lg:justify-start justify-center">
              <div className="py-1.5 px-4 bg-primary/10 rounded-full border border-white/10">
                <span className="text-primary font-medium">Viaja seguro</span>
              </div>
            </div>

            <h1 className='font-medium text-54 lg:text-start text-center text-white mb-10'>
              Entregamos tus <span className='text-primary'>pedidos</span> en una {' '}
              <span className='text-primary'>promesa maxima de 24 horas</span>!
            </h1>

            <div className='flex items-center justify-center lg:justify-start gap-8'>
              <Button variant="filled" onClick={() => open(rastreoPage, "", "height=600,width=800, left=400,top=100")}>
                Rastrear pedido Dropi
              </Button>
            </div>
          </motion.div>

          <motion.div {...rightAnimation} className='col-span-7 lg:block hidden'>
            <Image
              src={cellImage.src}
              alt='Banner'
              width={cellImage.width}
              height={cellImage.height}
              className='float-end w-[350px]'
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1'></div>
    </section>
  )
}

export default Hero

const leftAnimation = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: 0.6 },
}

const rightAnimation = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  transition: { duration: 0.6 },
}