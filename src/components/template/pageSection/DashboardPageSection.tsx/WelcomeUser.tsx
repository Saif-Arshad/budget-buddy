"use client"

import React from 'react'
import useCurrentUser from '@/customHooks/useCurrentUser';
import CurrentDate from './CurrentDate';
import Greeting from './Greeting';


function WelcomeUser() {
    const {userName} = useCurrentUser()
    return (
    <div>
      <h2 className='text-xl md:text-3xl font-bold capitalize '>
        {/* //@ts-ignore */}

    {userName&& userName!=="No name found" ?
    <>
       <Greeting/>	
      { " "}
    {userName}
    </>
    :
    <>
    Hi,
       <Greeting/>	
    
    </>}




      </h2>
      <h5 className='text-sm md:text-lg '>
      Take control of your finances with Budget Buddy - Let&rsquo;s manage your money together!
      </h5>
    </div>
  )
}

export default WelcomeUser
