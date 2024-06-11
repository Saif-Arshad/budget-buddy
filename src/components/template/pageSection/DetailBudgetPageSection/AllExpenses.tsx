import React, { useEffect ,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import ExpenseButton from "./ExpenseButton";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getExpense } from "@/store/features/GetExpense.Slice";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Spinner from "../../loadings/Spinner";


function AllExpenses({ id }: any) {
  const [deleteItem,setDeleteItem]=useState<any>("")
  const {expense} = useSelector((state: any) => state.addExpense);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const deleteExpense=async (id:any)=>{
    try{
    const deleteRes = await fetch(`/api/expense/${id}`, {
        method: "DELETE",
    })
    const response = await deleteRes.json()
    console.log("🚀 ~ deleteExpense ~ response:", response)
    setDeleteItem(response)
    toast.success("Expense Deleted SucessFully ")

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
  const currencySymbol =
    currencySymbols.find(
      (item: any) => item.currency_name === allExpense?.expenses && allExpense?.expenses[0].budget.currency
    )?.currency_symbol || "";
  const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };
  let totalExpense = 0;
  allExpense?.expenses && allExpense?.expenses.forEach((item:any) => {
    totalExpense += item.amount;
  })
  const totalBudget = allExpense?.expenses && allExpense?.expenses[0].budget.amount;
  const remainingAmount = totalBudget - totalExpense;
  return isLoading ?
    (
      <div className=" flex items-center justify-center w-full min-h-[50vh]">
        <Spinner/>
      </div>

    )
    : isError ?
    (  <div className=" flex items-center justify-center w-full min-h-[50vh]">
        Oops! It seems there was an issue loading the content.
      </div>
    ) 
    :
    allExpense[0].error ?
    (
    <div className=" flex items-center justify-center w-full min-h-[50vh]">
    Oops! there is some error.
  </div>
    )
    :
(

    <div className="w-full h-full gap-3  mt-8 flex-wrap flex items-center justify-center">
   {
    allExpense.expenses && allExpense.expenses.length>0 ?
    <>
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
      {totalBudget}
      {currencySymbol[0]?  currencySymbol[0] : "$"}
        </span>
      </span>
      <span className=" font-normal md:text-lg mt-3 gap-x-1">
        Total Spend : 
        <span className="font-semibold ml-2">
      {totalExpense}
      {currencySymbol[0]?  currencySymbol[0] : "$"}
        </span>
      </span>
      <span className=" font-normal md:text-lg mt-3 gap-x-1">
        Remaining Amount : 
        <span className="font-semibold ml-2">
      {remainingAmount}
      {currencySymbol[0]?  currencySymbol[0] : "$"}
        </span>
      </span>

    </h1>
    <ExpenseButton id={id} remaining={remainingAmount} />
     
  </div>
    <div className="w-11/12 mt-14">
    <div className="grid grid-cols-4 bg-[#F1F5F9] p-2">
      <p className="font-bold">Name</p>
      <p className="font-bold">Amount</p>
      <p className="font-bold">Date</p>
      <p className="font-bold">Delete</p>
    </div>
 {   allExpense.expenses?.slice().reverse().map((item:any,index:number) => {
  return(
      <div key={index} className="grid grid-cols-4 bg-white p-2">
        <p className="capitalize">{item.title}</p>
        <p> {item.amount}{currencySymbol[0]?  currencySymbol[0] : "$"}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>
        <button onClick={()=>deleteExpense(item._id)} className="bg-red-600 hover:bg-red-500 transition-all text-white  items-center gap-1 flex px-3 py-2 font-semibold rounded-lg">

<MdOutlineDelete size={17}  />
</button>
        </p>
      </div>
 )})}
  </div>
  </>
  :
  <>
  <div className="w-full flex justify-end">

  <ExpenseButton id={id}  remaining={remainingAmount}/>
  </div>
   <h1 className="text-2xl font-semibold">No Expense Available Please Add </h1> 
  </>
   }
     
   

             
            </div>

  ) 
}

export default AllExpenses;
