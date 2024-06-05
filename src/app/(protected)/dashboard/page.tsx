/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react'
import { useUser } from "@clerk/clerk-react";

function page() {
  const { isSignedIn, user} = useUser();
  let userName = "";
  let userEmail = "";
  if(user){
 userName= user.fullName || "No name found"
  userEmail = user.primaryEmailAddress?.emailAddress || "No email address found"
  console.log(userName,userEmail)
  console.log(user)
  }

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
