import Link from 'next/link'
import React from 'react'
import { cn } from "@/utils/cn"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ASSETS } from '../../../../../public/Assets';
export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <motion.span
        initial={{
          backgroundSize: "0% 100%",
        }}
        animate={{
          backgroundSize: "100% 100%",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          `relative inline-block px-1 mx-0.5 rounded-lg bg-gradient-to-r from-indigo-200 to-purple-200 py-1`,
          // `relative inline-block px-1 mx-0.5 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-#5D74F1 dark:to-purple-500`,
          className
        )}
      >
        {children}
      </motion.span>
    );
  };
function AboutSection() {
  return (
    <div className='w-full flex items-center justify-center'>



      <div className='w-11/12 '>
  <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 relative text-center">
    <div className=" p-1 w-80 mx-auto rounded-full flex items-center justify-between mb-4">
      <span className="font-inter font-medium text-lg  md:text-xl text-[#3e9996] ml-3">Your Personal Finance Manager</span>
     
    </div>
    <h1 className="max-w-3xl mx-auto font-manrope font-bold text-2xl sm:text-4xl text-gray-900 mb-5 md:text-5xl ">
    Manage Your Money Wisely
    <br />
    with Budget Buddy
    </h1>
    {/* <h1 className="max-w-3xl mx-auto font-manrope font-bold text-2xl sm:text-4xl text-gray-900 mb-5 md:text-5xl "> */}
    {/* <Image
  src={ASSETS.chart}
  width={800}
  height={800}
  alt='Breif overview'
/> */}

{/* <Highlight> */}
{/* </Highlight> */}
    {/* </h1> */}
    {/* <p className="max-w-xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-3">
    Track your expenses in real-time and categorize them for better visibility. Avoid overspending by keeping a close eye on where your money goes and make smarter financial decisions.


    </p> */}
    <Link href="/sign-up" className="w-full md:w-auto my-4 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-[#00ada8] shadow-xs hover:bg-[#39908d] transition-all duration-500">
      Join Us
      <svg className="ml-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </div>

    </div>
    </div>
  )
}

export default AboutSection

   