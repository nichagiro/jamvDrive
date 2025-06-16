'use client'

import HeaderLink from '../Header/Navigation/HeaderLink'
import Logo from '../../Common/Logo'

import { headerData } from '../Header/Navigation/menuData'
import { useEffect, useState } from 'react'
import MobileView from './MobileView'
import Link from 'next/link'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [current, setCurrent] = useState('Inicio');

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${sticky ? ' shadow-lg bg-darkmode lg:pt-5' : 'shadow-none lg:pt-14'}`}>
      <div className='lg:py-0 py-2'>
        <div className={`container px-4 flex items-center justify-between`}>
          <Link href="/#inicio" as="/#inicio">
            <Logo priority />
          </Link>

          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            {
              headerData.map((item, index) => (
                <div onClick={() => setCurrent(item.label)} key={index}>
                  <HeaderLink item={item} current={current === item.label} />
                </div>
              ))
            }
          </nav>

          <div className='flex items-center gap-4 px-4'>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-white mt-1.5'></span>
            </button>
          </div>
        </div>

        {navbarOpen && <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />}
        <MobileView navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      </div>
    </header>
  )
}

export default Header
