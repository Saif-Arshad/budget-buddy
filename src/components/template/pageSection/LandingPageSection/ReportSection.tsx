"use client";
import { ASSETS } from "../../../../../public/Assets";
import Image from "next/image";
export function Report() {
  return (
 <>
  <div className="w-full min-h-[30rem] flex flex-col-reverse py-3  md:flex-row ">
    <div className="w-full md:w-6/12 flex flex-col  items-center justify-center">
      <Image
        src={ASSETS.expense_image}
        height={500}
        width={500}
        className="object-cover"
        alt="budget buddy"
      />

    </div>
    <div className="w-full md:w-6/12 flex items-center justify-center">
    <div className="w-11/12 flex flex-col">

    <h1 data-aos="zoom-in-up"  
         className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl text-black font-bold mt-11">
     Insightful Expense 
   <span className=" mx-3 text-[#00ada8]">
     
     Tracking
     </span>  
        </h1>
      <p className="sm:text-lg mt-7">
      Understand your spending habits with our detailed reports and analytics. Gain valuable insights into your financial behavior and identify areas where you can save more effectively. Visualize your expenses with easy-to-read charts and graphs, and track your progress over time. Make informed financial decisions with personalized recommendations tailored to your spending patterns.
      </p>
     
    </div>
    </div>
  </div>
 
 </>
        
  )
}
