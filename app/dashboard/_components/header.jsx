"use client"

import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="hidden md:flex p-4 justify-between bg-secondary shadow-md">
      <div className='flex flext-inline  '>
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-700 shadow-md ">
        <FontAwesomeIcon icon={faRobot} className="text-xl" />
      </div>
      <h2 className='text-blue-700 text-3xl font-medium pl-2 '>CareerCraft</h2>
      </div>
      
      <ul className="flex gap-12 pt-2">
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard' ? 'text-primary font-bold' : ''}`}>Dashboard</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">Questions</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">Upgrade</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">How it works?</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
