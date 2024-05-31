"use client"
import {UserButton} from '@clerk/nextjs'

import React from 'react'

function DashboardNavBar() {
  return (
  <nav className=" min-w-full flex items-center justify-end pr-6 py-3 sm:py-5">
<UserButton/> 
    </nav>
  )
}

export default DashboardNavBar
