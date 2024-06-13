"use client";
import { motion } from "framer-motion";
import { ASSETS } from "../../../../../public/Assets";
import Image from "next/image";
import Link from "next/link";
import CreateAccount from "../../buttons/CreateAccount";
export function LandingPage() {
  return (
 <>
  <div className="w-full min-h-[38rem]  flex flex-col py-20 sm:py-32 md:py-0 md:flex-row ">
    <div className="w-full md:w-6/12 flex items-center justify-center">
    <div className="w-11/12 flex flex-col">

    <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
         className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl text-black font-bold mt-11">
      Easier 
        <span className=" mx-3 text-[#5D74F1]">
      Solution
        </span>
        <br />
       to Manage Your 
       <span className="text-[#5D74F1] mx-3">
       Finance
        </span>
        </motion.h1>
      <p className="sm:text-lg mt-7">
      Take control of your financial future with Budget Buddy, your ultimate tool for budgeting and expense tracking. Our platform is designed to simplify money management, helping you to stay on top of your spending and achieve your financial goals with ease.
      </p>
      <Link href={"/sign-up"}>
        <CreateAccount/>
      </Link>
    </div>
    </div>
    <div className="w-full md:w-6/12 flex flex-col  items-center justify-center">
      <Image
        src={ASSETS.hero_image}
        height={500}
        width={500}
        className="object-cover"
        alt="budget buddy"
      />

    </div>
  </div>
 
 </>
        
  )
}
