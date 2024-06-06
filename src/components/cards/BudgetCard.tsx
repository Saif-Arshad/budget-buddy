"use client"

import React from 'react'
import Link from 'next/link'
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import DeleteButton from '../template/pageSection/BudgetPageSection/DeleteButton';

function BudgetCard(props:any) {

  const currencySymbols = useSelector((state: any) => state.currency.items);
    const {items} = props 
  console.log(props)
  console.log(currencySymbols)
  const currencySymbol = currencySymbols.find((item: any) => item.currency_name === items.currency)?.currency_symbol || '';

  return (
    // <Link href={`/dashboard/budget/${items._id}`}>
    <div className="w-72 h-44 rounded-lg py-2 px-4 bg-slate-50 flex flex-col  cursor-pointer transition-all  shadow-md">
    <div className="flex flex-row items-center justify-end pr-4 gap-x-4">
  
   <button>
   <FaRegEdit size={26} color='red' />
</button>
<DeleteButton id={items._id} />  

    </div>

      <h1 className='text-xl capitalize font-semibold'>
        {items.title}
      </h1>
      <h1 className='text-xl capitalize font-semibold'>
        {items.amount}
        {
          currencySymbol

        }
      </h1>


    </div>
    // </Link>
  )
}

export default BudgetCard
