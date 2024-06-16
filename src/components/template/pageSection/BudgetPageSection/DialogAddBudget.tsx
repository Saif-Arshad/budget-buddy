"use client";

import React, { useState } from "react";
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
import { BudgetYep } from "@/validations/Budget.validation";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createBudget } from "@/store/features/AddBudget.Slice";
import useCurrentUser from "@/customHooks/useCurrentUser";
import CreateBudget from "../../buttons/CreateBudget";
import toast from "react-hot-toast";

function DialogAddBudget() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { userEmail } = useCurrentUser();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const currencySymbols = useSelector((state: any) => state.currency.items);
  const Budget = useSelector((state: any) => state.budget);
  const submitHandler = (value: any, { resetForm }: any) => {
    const allValues = { ...value, userEmail };
    dispatch(createBudget(allValues));
    resetForm();
    toast.success("Budget Created SucessFully")
  };

  const Formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      currency: "",
    },
    validationSchema: BudgetYep,
    onSubmit: submitHandler,
  });

  const handleSelectChange = (value: any) => {
    setSelectedCurrency(value);
    Formik.setFieldValue("currency", value);
  };


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button>
          <CreateBudget/>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Budget</DialogTitle>
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
              <select
                className="w-full p-2 cursor-pointer outline-none border border-slate-300 px-5 rounded-md"
                onChange={(e) => handleSelectChange(e.target.value)}
                value={selectedCurrency}
              >
                <option value="" disabled>
                  Select Currency
                </option>
                {currencySymbols.map((item: any, index: number) => (
                  <option value={item.currency_name} key={index}>
                    {item.currency_symbol}
                  </option>
                ))}
              </select>
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
    </>
  );
}

export default DialogAddBudget;
