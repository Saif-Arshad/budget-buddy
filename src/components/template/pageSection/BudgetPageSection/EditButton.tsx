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
import toast from 'react-hot-toast';

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
    const submitHandler = (value: any, { resetForm }: any) => {
      const allValues = {...value,id}
      console.log(allValues);
      dispatch(updateBudget(allValues ));
      toast.success('Budget Updated SucessFully')

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
     <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white items-center gap-1 flex px-3 py-2 font-semibold rounded-lg">
   <FaRegEdit size={17}  /> Edit
</button>
     </DialogTrigger>
     <DialogContent className="sm:max-w-[425px]">
       <DialogHeader>
         <DialogTitle>Edit Budget</DialogTitle>
         <DialogDescription>
           Enter new title or amount to update your budget.
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
               Edit Budget
             </Button>
           </DialogClose>
         </div>
       </form>
     </DialogContent>
   </Dialog>
  )
}

export default EditButton
