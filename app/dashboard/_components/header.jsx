"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Header = () => {   // Changed component name to uppercase

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [path])   // Added path to dependency array

  return (
    <div className='hidden md:flex p-4 justify-between bg-secondary shadow-md'>
      <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
      <ul className='flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
        <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Questions</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header  // Updated export
