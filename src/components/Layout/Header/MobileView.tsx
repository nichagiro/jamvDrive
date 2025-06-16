import Logo from '@/components/Common/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { headerData } from './Navigation/menuData'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

interface MobileViewProps {
  setNavbarOpen: (open: boolean) => void;
  navbarOpen: boolean;
}

const MobileView = ({ setNavbarOpen, navbarOpen }: MobileViewProps) => {
  return (
    <div className={`${baseeClass} ${navbarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='flex items-center justify-between p-4'>
        <h2 className='text-lg font-bold text-midnight_text dark:text-midnight_text'>
          <Logo />
        </h2>

        <Icon
          icon="mingcute:close-fill"
          className='text-white text-xl absolute top-0 right-0 mr-8 mt-8 dark:invert'
          onClick={() => setNavbarOpen(false)}
          aria-label='Close menu Modal'
        />
      </div>

      <nav className='flex flex-col items-start p-4'>
        {
          headerData.map((item, index) => (
            <div key={index} onClick={() => setNavbarOpen(false)}>
              <MobileHeaderLink item={item} />
            </div>
          ))
        }
      </nav>
    </div>
  )
}

export default MobileView

const baseeClass = `lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs z-50`