'use client'

import Image from 'next/image'
import { features } from '@/app/api/data'
import { motion } from 'framer-motion'
import ManImage from "@/images/features/img-portfolio.webp"

const Features = () => {
  return (
    <section className='md:pt-48 sm:pt-28 pt-12' id='porque-elegirnos'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 items-center gap-20'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:-ml-32'
          >
            <Image
              src={ManImage.src}
              alt='porque jamv drive'
              width={ManImage.width}
              height={ManImage.height}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='sm:text-28 text-18 text-muted mb-4'>
              Beneficios <span className='text-primary'>Claves</span>
            </p>

            <h2 className='text-white sm:text-40 text-30 mb-4 font-medium'>
              ¿Por qué elegir <span className='text-primary'>Jamv Drive?</span>
            </h2>

            <p className='text-muted/60 text-18'>
              Somos una compañía que “transporta con propósito”, llevando el éxito tanto a sus
              clientes como a los clientes de estos. Facilitamos la gestión y ejecución de
              servicios de transporte mediante una atención personalizada.
            </p>

            <table className='w-full sm:w-[80%]'>
              <tbody>
                {
                  features.map((item, index) => (
                    <tr key={index} className='border-b border-dark_border/10'>
                      <td className='py-5'>
                        <div className='bg-primary/20 p-4 rounded-full w-fit'>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                        </div>
                      </td>

                      <td className='py-5'>
                        <h4 className='text-muted sm:text-28 text-22 ml-5'>
                          {item.title}
                        </h4>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
