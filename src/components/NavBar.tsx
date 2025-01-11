'use client'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { DATA } from '@/data/data';
import ButtonCallToAction from './ButtonCallToAction';
import IconLogo from './IconLogo';
import Link from 'next/link';

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`w-full ${isScrolled ? 'md:fixed md:top-0 md:left-0 md:right-0 md:bg-background md:shadow-lg md:animate-slideDown' : 'md:absolute md:bg-transparent'} transition-all duration-300 z-50`}>
      {/* Barra de navegación */}
      <div className="flex justify-between items-center px-6 py-3 max-w-[1240px] mx-auto">
        <IconLogo scale={0.3} />
        {/* Icono del menú hamburguesa en dispositivos móviles */}
        <RxHamburgerMenu
          className="text-3xl cursor-pointer md:hidden"
          onClick={toggleSidebar} // Alterna el estado del sidebar
        />
        {/* Enlaces de navegación en pantallas grandes */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link scroll={true} href={`/${DATA.header.navigation.home.href}`} className="text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.home.label}</Link>
          <Link scroll={true} href={`/${DATA.header.navigation.services.href}`} className="text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.services.label}</Link>
          <Link scroll={true} href={`/${DATA.header.navigation.methodology.href}`} className="text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.methodology.label}</Link>
          <Link scroll={true} href={`/${DATA.header.navigation.projects.href}`} className="text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.projects.label}</Link>
          <Link scroll={true} href={`/${DATA.header.navigation.testimonials.href}`} className="text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.testimonials.label}</Link>
          <Link scroll={true} href={`/${DATA.header.navigation.contactUs.href}`} className="hidden md:block lg:hidden text-sm lg:text-base hover:text-blue-500">{DATA.header.navigation.contactUs.label}</Link>
        </div>
        <div className='hidden lg:block'>
          <ButtonCallToAction href={`/${DATA.header.navigation.contactUs.href}`} text={DATA.header.navigation.contactUs.label} />
        </div>
      </div>



      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-background transform max-w-[320px] ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Aquí puedes agregar los enlaces del sidebar */}
        <ul className="space-y-6 p-6">
          <li>
            <Link scroll={true} href={`/${DATA.header.navigation.home.href}`} className="hover:text-blue-500">{DATA.header.navigation.home.label}</Link>
          </li>
          <li>
            <Link scroll={true} href={`/${DATA.header.navigation.services.href}`} className="hover:text-blue-500">{DATA.header.navigation.services.label}</Link>
          </li>
          <li>
            <Link scroll={true} href={`/${DATA.header.navigation.methodology.href}`} className="hover:text-blue-500">{DATA.header.navigation.methodology.label}</Link>
          </li>
          <li>
            <Link scroll={true} href={`/${DATA.header.navigation.projects.href}`} className="hover:text-blue-500">{DATA.header.navigation.projects.label}</Link>
          </li>
          <li>
            <Link scroll={true} href={`/${DATA.header.navigation.testimonials.href}`} className="hover:text-blue-500">{DATA.header.navigation.testimonials.label}</Link>
          </li>
          <li>
            <ButtonCallToAction href={`/${DATA.header.navigation.contactUs.href}`} text={DATA.header.navigation.contactUs.label} className="mx-auto mt-6" />
          </li>
        </ul>
      </div>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar} // Cierra el sidebar cuando se hace clic fuera
        />
      )}
    </div>
  )
}
