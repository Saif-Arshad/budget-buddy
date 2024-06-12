"use client"
import React from 'react'
import { UserProfile } from "@clerk/nextjs";
function page() {
  return (
    <div className='h-full w-full py-32 flex items-center justify-center'>
      <UserProfile path="/dashboard/profile" />
    </div>
  )
}

export default page
