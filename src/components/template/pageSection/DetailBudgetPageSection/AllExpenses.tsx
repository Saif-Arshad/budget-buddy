import React, { useEffect ,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import ExpenseButton from "./ExpenseButton";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getExpense } from "@/store/features/GetExpense.Slice";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";


function AllExpenses({ id }: any) {
  const [deleteItem,setDeleteItem]=useState<any>("")
  const {expense} = useSelector((state: any) => state.addExpense);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const deleteExpense=async ( )=>{
    try{
    const deleteRes = await fetch(`/api/expense/${id}`, {
        method: "DELETE",
    })
    const response = await deleteRes.json()
    setDeleteItem(response)
    toast.success("Expesne Deleted SucessFully ")

    console.log("🚀 ~ deleteExpense ~ response:", deleteItem)
  }
  catch(e:any){
    console.log(e)
    toast.error("Error in deleting Expense")
  }
}
  useEffect(() => {
    dispatch(getExpense(id));
  }, [expense,deleteItem]);
    const {allExpense,isLoading,isError} = useSelector((state: any) => state.FetchExpense);
    console.log("🚀 ~ AllExpenses ~ allExpense:", allExpense)
  const currencySymbols = useSelector((state: any) => state.currency.items);
  console.log("🚀 ~ AllExpenses ~ currencySymbols:", currencySymbols)
  const currencySymbol =
    currencySymbols.find(
      (item: any) => item.currency_name === allExpense?.expenses[0]?.budget.currency
    )?.currency_symbol || "";
  console.log("🚀 ~ AllExpenses ~ currencySymbol:", currencySymbol);
  const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };
 
  return isLoading ?
    ("loading")
    : isError ?
    ("error") :
  (
    <div className="w-full h-full gap-3 mt-8 flex-wrap flex items-center justify-center">
      <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-center sm:justify-between w-full text-xl gap-y-3 my-1 font-semibold">
        <h1 className="capitalize flex flex-col">
          <span className="text-3xl md:text-5xl font-bold">
            {allExpense.expenses[0]?.budget.title}
          </span>
          <span className=" font-normal md:text-lg mt-3">
            Total {allExpense.expenses?.length}{" "}
            Expense
          </span>
          <span className=" font-normal md:text-lg mt-3 gap-x-1">
            Budget : 
            <span className="font-semibold ml-2">
          {allExpense.expenses[0]?.budget.amount}
          {currencySymbol[0]?  currencySymbol[0] : "$"}
            </span>
          </span>

        </h1>
        <ExpenseButton id={id} />
         
      </div>


            <div className="w-11/12 mt-14">
              {
             allExpense.expenses.slice().reverse().map((item:any,index:number) => {
                  return(
                    <div key={index} className="flex items-center justify-between my-4">
                      <h2 className="text-xl font-semibold capitalize">{item.title}</h2>
                      <h2 className="text-lg font-semibold gap-1"> {item.amount}{currencySymbol[0]?  currencySymbol[0] : "$"}</h2>
                      <h3>{formatDate(item.createdAt)}</h3>
                      <button onClick={deleteExpense} className="bg-red-600 hover:bg-red-500 transition-all text-white  items-center gap-1 flex px-3 py-2 font-semibold rounded-lg">

<MdOutlineDelete size={17}  />
</button>
                    </div>
                  )
                })
              }
            </div>

    </div>
  ) 
}

export default AllExpenses;
