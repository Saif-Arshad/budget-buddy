"usse client"

import React from 'react'
import { ExpenseYep } from "@/validations/Expense.validation";
import { Button } from "@/components/ui/button";
import {createExpense} from '@/store/features/AddExpense.Slice'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
function AddExpense(props:any) {
    const {id} = props
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const addExpense = useSelector((state: any) => state.addExpense);
  console.log(addExpense)
    const submitHandler = (value: any, { resetForm }: any) => {
      const allValues = { ...value, budgetId: id };
      console.log(value);
      dispatch(createExpense(allValues));
      resetForm();
    };
  
    const Formik = useFormik({
      initialValues: {
        title: "",
        amount: "",
      },
      validationSchema: ExpenseYep,
      onSubmit: submitHandler,
    });
    return (
    <div>
        hey{id}
        <div className='w-full md:w-6/12 lg:w-4/12 border border-slate-200 rounded-md py-4 px-2'>
          
        <form onSubmit={Formik.handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold capitalize">
                  Expense Title
                </label>
                <input
                  id="title"
                  placeholder="eg Rent"
                  onBlur={Formik.handleBlur}
                  value={Formik.values.title}
                  onChange={Formik.handleChange}
                  className="text-sm py-2 outline-none border border-slate-300 px-5 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="font-semibold capitalize">
                  Expense Amount
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
            
      
            </div>
            <div className="w-full flex justify-end mt-8">
                <Button
                  type="submit"
                  disabled={
                    Formik.errors.amount || Formik.errors.title ? true : false
                  }
                >
                  Create Expense
                </Button>
            </div>
          </form> 
    </div>
    </div>
  )
}

export default AddExpense
