import Link from 'next/link'
import Logo from '../../Common/Logo'

import { Icon } from '@iconify/react'
import { socials } from '@/app/api/data'

const Footer = () => {
  return (
    <footer className='py-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          <Logo />

          <div className='flex gap-6'>
            {
              socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target='_blank'
                >
                  <Icon
                    icon={social.icon}
                    width='24'
                    height='24'
                    className={'text-white hover:text-primary'}
                  />
                </Link>
              ))
            }
          </div>

        </div>

        <div className='text-center'>
          <h3 className='text-white text-24 font-medium sm:mt-20 mt-12'>
            {new Date().getFullYear()} © Todos los derechos reservados JamvDrive
          </h3>

          <Link
            className='text-white text-24 font-medium sm:mt-20 mt-12 hover:text-primary'
            target='_blank'
            href="https://overweb.com.co/"
          >
            Desarrollado por overweb
          </Link>
        </div>
      </div>

    </footer >
  )
}

export default Footer
