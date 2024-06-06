"use client"

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
function BudgetCard(props:any) {

  const currencySymbols = useSelector((state: any) => state.currency.items);
    const {items} = props 
  console.log(props)
  console.log(currencySymbols)
  const currencySymbol = currencySymbols.find((item: any) => item.currency_name === items.currency)?.currency_symbol || '';

  return (
    <Link href={`/dashboard/budget/${items._id}`}>
    <div className="w-72 h-44 rounded-lg py-2 px-4 bg-slate-50 flex flex-col  cursor-pointer transition-all  shadow-md">
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
    </Link>
  )
}

export default BudgetCard
