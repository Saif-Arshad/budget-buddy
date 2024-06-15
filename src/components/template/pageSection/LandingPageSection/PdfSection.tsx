"use client";
import { motion } from "framer-motion";
import { ASSETS } from "../../../../../public/Assets";
import Image from "next/image";
import Link from "next/link";
import CreateAccount from "../../buttons/CreateAccount";
export function PdfSection() {
  return (
 <>
  <div className="w-full min-h-[38rem]  flex flex-col py-20 sm:py-32 md:py-0 md:flex-row ">
    <div className="w-full md:w-6/12 flex items-center justify-center">
    <div className="w-11/12 flex flex-col">

    <h1
    data-aos="fade-up"
         className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl text-black font-bold mt-11">
   Generate Your
   <span className=" mx-3 text-[#00ada8]">
   Budget
        </span>
   Report
        </h1>
      <p className="sm:text-lg mt-7">
      Stay on top of your finances with our easy-to-use PDF report feature. Whether you&rsquo;re tracking daily expenses, planning for a big purchase, or managing your monthly budget, our app provides you with detailed and visually appealing reports. With just a few clicks, you can generate a personalized PDF that outlines all your financial activities, helping you make informed decisions and achieve your financial goals. Download your report anytime, anywhere, and keep your budget in check effortlessly.
      </p>
      {/* <Link href={"/sign-up"}>
        <CreateAccount/>
      </Link> */}
    </div>
    </div>
    <div className="w-full md:w-6/12 flex flex-col  items-center justify-center">
      <Image
        src={ASSETS.pdf}
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
