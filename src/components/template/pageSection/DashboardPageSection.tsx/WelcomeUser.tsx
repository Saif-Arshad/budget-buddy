"use client"

import React from 'react'
import useCurrentUser from '@/customHooks/useCurrentUser';
import CurrentDate from './CurrentDate';
import Greeting from './Greeting';


function WelcomeUser() {
    const {userEmail,userName} = useCurrentUser()
  // if()
    return (
    <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold my-6 ">

      <CurrentDate/>
        </h1>
      <h2 className='text-xl md:text-3xl font-semibold  '>
        {/* //@ts-ignore */}
      {userName !== "No name found" ? userName+ " " : "Hi "}
   <Greeting/>	
      </h2>
      <h5 className='text-sm md:text-lg '>
      Lets Manage your Money
      </h5>
    </div>
  )
}

export default WelcomeUser
