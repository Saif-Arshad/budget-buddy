/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import useCurrentUser from '@/customHooks/useCurrentUser';
function page() {
  const {userEmail,userName} = useCurrentUser()

  return (
      <>
    <div className="flex flex-col gap-
    5 min-h-screen min-w-screen  items-center justify-center sm:ml-64">
        <h1>Welcome {userName}</h1>
        <h1>{userEmail}</h1>
    </div>
      </>
  )
}

export default page
