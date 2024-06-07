"use client"

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateBudget } from "@/store/features/UpdateBudget.Slice";
import { FaRegEdit } from "react-icons/fa";

function EditButton(props:any) {
    const {id} = props
    console.log(id)
    const { budget} = useSelector(
      (state: any) => state.getBudget.allBudget
    );
    const cuurentUpdateBudget = budget.filter((item: any) => item._id === id);
    console.log(cuurentUpdateBudget)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    // const Budget = useSelector((state: any) => state.budget);
    // console.log(Budget);
    const submitHandler = (value: any, { resetForm }: any) => {
      const allValues = {...value,id}
      console.log(allValues);
      dispatch(updateBudget(allValues ));
      resetForm();
    };
  
    const Formik = useFormik({
        initialValues: {
          title: cuurentUpdateBudget[0].title,
          amount:  cuurentUpdateBudget[0].amount,
        },
        onSubmit: submitHandler,
      });
   
    
      console.log(Formik);
  return (

     <Dialog>
     <DialogTrigger asChild>
     <button>
   <FaRegEdit size={26} color='red' />
</button>
     </DialogTrigger>
     <DialogContent className="sm:max-w-[425px]">
       <DialogHeader>
         <DialogTitle>Edit Budget</DialogTitle>
         <DialogDescription>
           Enter the title and amount for your new budget.
         </DialogDescription>
       </DialogHeader>
       <form onSubmit={Formik.handleSubmit}>
         <div className="grid gap-4 py-4">
           <div className="flex flex-col gap-2">
             <label htmlFor="title" className="font-semibold capitalize">
               Budget Title
             </label>
             <input
               id="title"
               placeholder="eg House Rent"
               onBlur={Formik.handleBlur}
               value={Formik.values.title}
               onChange={Formik.handleChange}
               className="text-sm py-2 outline-none border border-slate-300 px-5 rounded-md"
             />
           </div>
           <div className="flex flex-col gap-2">
             <label htmlFor="amount" className="font-semibold capitalize">
               Budget Amount
             </label>
             <input
               id="amount"
               placeholder="eg 2000"
               type="number"
               onBlur={Formik.handleBlur}
               value={Formik.values.amount}
               onChange={Formik.handleChange}
               className="text-sm py-2 outline-none border cursor-pointer border-slate-300 px-5 rounded-md"
             />
           </div>
           {/* <svg className="h-2" viewBox="0 0 10 6">
 <polyline points="1 1 5 5 9 1"/>
</svg> */}
         </div>
         <div className="w-full flex justify-end mt-8">
           <DialogClose asChild>
             <Button
               type="submit"
               disabled={
                 Formik.errors.amount || Formik.errors.title ? true : false
               }
             >
               Create Budget
             </Button>
           </DialogClose>
         </div>
       </form>
     </DialogContent>
   </Dialog>
  )
}

export default EditButton
