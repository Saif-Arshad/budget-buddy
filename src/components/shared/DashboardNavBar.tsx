"use client"
import {UserButton} from '@clerk/nextjs'

import React from 'react'

function DashboardNavBar() {
  return (
  <nav className="fixed top-0 z-20 min-w-full bg-white shadow-md  pr-6 py-3 justify-end sm:py-5 flex">
    <span className='w-2/4 flex justify-center'>

<UserButton/> 
    </span>
    </nav>
  )
}

export default DashboardNavBar
