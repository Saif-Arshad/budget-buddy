"use client";

import React from "react";
import { ExpenseYep } from "@/validations/Expense.validation";
import { Button } from "@/components/ui/button";
import { createExpense } from "@/store/features/AddExpense.Slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { FaPlus } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
function ExpenseButton(props: any) {
  const { id, remaining } = props;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const addExpense = useSelector((state: any) => state.addExpense);
  const submitHandler = (value: any, { resetForm }: any) => {
    const allValues = { ...value, budgetId: id };
    if (value?.amount > remaining) {
      toast.error("Amount cannot be greater than remaining amount");
      return;
    }
    dispatch(createExpense(allValues));
    toast.success("Expense Added SucessFully");
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
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm bg-[#167c7c] hover:bg-[#0f5050] transition-all text-white items-center h-11 gap-1 flex px-3 py-2 font-semibold rounded-lg">
          <FaPlus size={17} />
          Add New Expense
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Enter the title and amount for your Expense.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={Formik.handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold capitalize">
                Expense Title
              </label>
              <input
                id="title"
                placeholder="eg Car Rent"
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
            <DialogClose asChild>
              <Button
                type="submit"
                disabled={
                  Formik.errors.amount || Formik.errors.title ? true : false
                }
              >
                Add Expense
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ExpenseButton;
