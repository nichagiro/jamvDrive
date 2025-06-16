'use client'

import { motion } from 'framer-motion'
import MobileView from './MobileView'
import Desktop from './Desktop'

const ServiceSteps = () => {
  return (
    <section className='md:pt-40 pt-9' id='nuestro-servicio'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='text-muted sm:text-28 text-18 mb-9'>
              Tu pedido, en buenas <span className='text-primary'>manos</span>
            </p>

            <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
              Desde la recogida hasta la entrega, te acompañamos en cada etapa.
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >

            <Desktop />
            <MobileView />

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSteps
