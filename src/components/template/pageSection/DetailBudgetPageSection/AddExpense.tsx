"use client"
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import AllExpenses from './AllExpenses';
function AddExpense(props:any) {
    const {id} = props

    return (
    <div className='w-full flex items-center pt-24 justify-center'>
    <div className='w-11/12'>
    <div className="w-full flex  justify-start my-3">
      <Link href={`/dashboard/budget`} >
     <button className="bg-[#167c7c] hover:bg-[#0f5050] transition-all text-white items-center gap-1 flex px-3 py-2 font-semibold rounded-lg">

     <IoIosArrowBack size={17} />
    Go Back
    </button>
    </Link>
    </div>
      
    <AllExpenses id={id}/>
    </div>
    </div>
  )
}

export default AddExpense
