"use client"

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import IncomeStatics from '../DashboardPageSection.tsx/IncomeStatics';
import { IoIosArrowForward } from "react-icons/io";

function Overview() {
  const [data, setData] = useState([]);
  const { allBudget } = useSelector((state: any) => state.getBudget);
  
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };
  
  function formatCurrency(amount: any) {
    var formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedAmount;
  }
  
  useEffect(() => {
    if (allBudget?.budget) {
      setData(allBudget.budget);
    }
  }, [allBudget]);

  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold">Overview</h1>
      <IncomeStatics />
      <h1 className="text-2xl md:text-5xl font-bold">Budget Details</h1>

      {data.map((item: any, index: number) => (
        <div key={index} className='w-full my-4 mt-9'>
          <div className='w-full flex flex-col gap-y-3 my-3'>
            <h2 className='capitalize md:text-lg font-semibold'>Budget Title: <span className="font-bold md:text-xl"> {item.title} </span></h2>
            <h2 className='capitalize md:text-lg font-semibold'>Budget Amount: <span className="font-bold md:text-xl"> {formatCurrency(item.amount)} </span></h2>
          </div>

          { item.expense.length>0 &&
          <>
        <div key={index} className='w-full my-6 flex items-center font-semibold'>
        <IoIosArrowForward size={20}/>
      <h1 className="">All Expenses </h1>
          </div>
          <div className="grid grid-cols-3 bg-[#F1F5F9] p-2">
            <p className="font-bold">
            Expense Title</p>
            <p className="font-bold">Date</p>
            <p className="font-bold">Amount</p>
          </div>
          </>
}
          {item.expense.length === 0 ? (
            <h2>No Expense Found in this budget</h2>
          ) : (
            item.expense.map((expenseItem: any, expIndex: number) => (
              <div key={expIndex} className="grid grid-cols-3 bg-white sm:p-2">
                <p className="capitalize">{expenseItem.title}</p>
                <p>{formatDate(expenseItem.createdAt)}</p>
                <p>{formatCurrency(expenseItem.amount)}</p>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default Overview;