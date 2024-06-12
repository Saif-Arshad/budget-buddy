//  import React from "react";
//  import { useSelector } from "react-redux";
//  import ExpenseButton from "./ExpenseButton";

//  import ExpenseTable from "./ExpenseTable";
//  import Spinner from "../../loadings/Spinner";

//  function AllExpenses({ id }: any) {
 
 
//    const currencySymbols = useSelector((state: any) => state.currency.items);



//    const { allBudget, isError, isLoading } = useSelector((state: any) => state.getBudget);
//    console.log("🚀 ~ AllExpenses ~ allBudget:", allBudget)
//    const currentBudget[0] = allBudget?.budget?.filter((item: any) => item.id === id); 
//    console.log("🚀 ~ AllExpenses ~ currentBudget[0]:", currentBudget[0])

//     const currencySymbol =
//     currencySymbols.filter(
//         (item: any) => item.currency_name === allExpense?.expenses && allExpense?.expenses[0]?.budget.currency
//         )?.currency_symbol;



//     let totalExpense = 0;
//     allExpense?.expenses && allExpense?.expenses.forEach((item:any) => {
//       totalExpense += item.amount;
//     })
//     const totalBudget = allExpense?.expenses && allExpense?.expenses[0]?.budget.amount;
//     const remainingAmount = totalBudget - totalExpense;
//    return (
//    {
//      isLoading ? 
//      (
//      <div className=" flex items-center justify-center w-full min-h-[50vh]">
//          <Spinner/>
//        </div>
//      )
//      :
//      isError ?
//      (
//      <div className=" flex items-center justify-center w-full min-h-[50vh]">
//          Oops! It seems there was an issue loading the content.
//        </div>
//       ) :
//  (
//    <h1>Hello</h1>
//  ) 
//  }
//       <div className="w-full h-full gap-3  mt-8 flex-wrap flex items-center justify-center">
//      {
//       allExpense.expenses && allExpense.expenses.length>0 ?
//       <>
      
//     {/* <ExpenseTable id={id} symbol={"$"} /> */}
//     </>

//      }
     
   

             
//               </div>

//    ) 
//  }

//  export default AllExpenses;

"use client"

import React, { useEffect,} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpense } from '@/store/features/GetExpense.Slice';

import ExpenseButton from "./ExpenseButton";
import ExpenseTable from "./ExpenseTable";
import { ThunkDispatch } from '@reduxjs/toolkit';
import Spinner from "../../loadings/Spinner";

function AllExpenses({ id }: any) {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
 
  const currencySymbols = useSelector((state: any) => state.currency.items);
  const {allExpense,isLoading,isError} = useSelector((state: any) => state.FetchExpense);
  const { expense } = useSelector((state: any) => state.addExpense);
  console.log("🚀 ~ AllExpenses ~ expense:", expense)
  const { deleteExpense} = useSelector((state: any) => state.deleteExpense);
  useEffect(() => {
    dispatch(getExpense(id));
}, [expense, deleteExpense,id]);

  console.log("🚀 ~ AllExpenses ~ isError:", isError)
  console.log("🚀 ~ AllExpenses ~ allExpense:", allExpense)
  const { allBudget} = useSelector((state: any) => state.getBudget);
  console.log("🚀 ~ AllExpenses ~ allBudget:", allBudget);
  const currentBudget = allBudget?.budget?.filter((item: any) => item._id === id); 
  console.log("🚀 ~ AllExpenses ~ currentBudget[0]:", currentBudget);
  // const loadnig =  allExpense?.expenses && isLoading
  let totalExpense = 0;

  allExpense?.expenses && allExpense?.expenses.forEach((item:any) => {
    totalExpense += item.amount;
  })
  const symbol =
  currencySymbols.find((item: any) => item.currency_name === currentBudget&& currentBudget[0]?.currency)
    ?.currency_symbol || "";
    const remainingAmount = currentBudget&&  currentBudget[0]?.amount - totalExpense;
   
  return (
    isLoading ? (
      <div className="flex items-center justify-center w-full min-h-[50vh]">
        <Spinner />
      </div>
    ) :
    // currentBudget[0][0].length==0 ? (
    //   <div className="flex items-center justify-center w-full min-h-[50vh]">
    //     <Spinner />
    //   </div>
    // ) :
     isError ? (
      <div className="flex items-center justify-center w-full min-h-[50vh]">
        Oops! It seems there was an issue loading the content.
      </div>
    ) : (
      <div>

      <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-center sm:justify-between w-full text-xl gap-y-3 mt-7 my-1 font-semibold">
   <h1 className="capitalize flex flex-col">
     <span className="text-3xl md:text-5xl font-bold">
     {currentBudget[0]?.title}
   </span>
   <span className=" font-normal md:text-lg mt-3">
   Total {allExpense?.expenses?.length}{" "}
   Expense
   </span>
   <span className=" font-normal md:text-lg mt-3 gap-x-1">
    Budget : 
     <span className="font-semibold ml-2">
   {currentBudget[0]?.amount}
   {symbol[0]? symbol[0]  : "$"}

     </span>
   </span>
   <span className=" font-normal md:text-lg mt-3 gap-x-1">
     Total Spend : 
     <span className="font-semibold ml-2">
   {totalExpense}
   {symbol[0]? symbol[0]  : "$"}

     </span>
   </span>
   <span className=" font-normal md:text-lg mt-3 gap-x-1">
     Remaining Amount : 
     <span className="font-semibold ml-2">
   {remainingAmount}
   {symbol[0]? symbol[0]  : "$"}
     </span>
   </span>

 </h1>
 <ExpenseButton id={id} remaining={remainingAmount}/>
     
 </div>
 <ExpenseTable id={id} symbol={symbol}/>
 </div>

    )
  );
}

export default AllExpenses;