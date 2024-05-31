"use client"


import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import {UserButton} from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn, user} = useUser();

  if(isSignedIn){

    console.log(user)
  }
  return (
    
    <>
<div className="flex flex-col gap-5 min-h-screen min-w-screen  items-center justify-center">
  <h1>Hello World</h1>
  <UserButton/>
  <Link href="/sign-up" >
  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign Up</button>
  </Link>
  <Link href="/sign-in" >
  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Log In</button>
  </Link>
</div>

    </>
  );
}
