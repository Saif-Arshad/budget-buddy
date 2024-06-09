"use client"

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import DeleteButton from '../pageSection/BudgetPageSection/DeleteButton';
import { FaArrowRight } from "react-icons/fa6";
import EditButton from '../pageSection/BudgetPageSection/EditButton';

function BudgetCard(props:any) {

  const currencySymbols = useSelector((state: any) => state.currency.items);
    const {items} = props 
  console.log(props)
  console.log(currencySymbols)
  const currencySymbol = currencySymbols.find((item: any) => item.currency_name === items.currency)?.currency_symbol || '';

  return (
    <div className="w-full md:w-5/12 xl:4/12 min-h-44 rounded-lg py-2 px-4 bg-slate-50 flex flex-col transition-all  shadow-sm">
    <div className="flex flex-row items-center justify-end space-x-4 my-3">
  
<EditButton  id={items._id}/>
<DeleteButton id={items._id} />  


    </div>
    <div className='flex flex-row flex-wrap justify-between w-full text-xl gap-y-3 my-1 font-semibold'>

      <h1 className='capitalize flex flex-col'>
      <span> {items.title}</span>
      <span className="text-sm font-normal"> {items.expense.length} Expense</span>
      </h1>
      <h1 className='gap-x-1'>
        {
          currencySymbol ? currencySymbol : "$"

        }
        {items.amount}
      </h1>
    </div>
<div className="w-full flex justify-end my-3 mt-7">
      <Link href={`/dashboard/budget/${items._id}`} >
     <button className="text-sm bg-gray-600 hover:bg-gray-500 transition-all text-white items-center gap-2 flex px-3 py-2 font-semibold rounded-lg">

    Detail
    <FaArrowRight size={14} />
    </button>
    </Link>
    </div>
    </div>
  )
}

export default BudgetCard
