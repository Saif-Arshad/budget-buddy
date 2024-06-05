"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS } from '../../../public/Assets';
import { useUser } from "@clerk/clerk-react";
import {UserButton} from '@clerk/nextjs'

function Header() {
  const { isSignedIn} = useUser();
  return (
   <div className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
  <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
    <div className="relative flex h-16 justify-between">
      <div className="flex flex-1 items-stretch justify-start">
        <Link className="flex flex-shrink-0 items-center" href="/">
          <Image
           className="block w-auto h-16"
           width={100}
           height={100}
           alt="budget buddy"
           src={ASSETS.icon} />
        </Link>
      </div>
      {
        isSignedIn ?
        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
        <Link className="text-gray-700 hover:text-indigo-700 text-sm font-medium" href="/dashboard">Dashboard</Link>

         <UserButton/>
      </div>

        :
        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
        <Link className="text-gray-700 hover:text-indigo-700 text-sm font-medium" href="/sign-in">Login</Link>
        <Link className="text-gray-800 bg-indigo-50 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm " href="/sign-up">Get Started
        </Link>
      </div>
      }

    </div>
  </div>
</div>

  )
}

export default Header
