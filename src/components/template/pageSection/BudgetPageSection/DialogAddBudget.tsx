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
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import { BudgetYep } from "@/validations/Budget.validation";
import { Button } from "@/components/ui/button";
import AddNewBudget from "./AddNewBudget";
import { useFormik } from "formik";
import { useSelector } from 'react-redux'

function DialogAddBudget() {
    const currencySymbolls = useSelector((state:any) => state.currency)
    console.log(currencySymbolls)

  const submitHandler = (value: any) => {
    console.log(value);
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

  console.log(Formik);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <AddNewBudget />
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
              <div className="flex flex-col  gap-2">
                <label htmlFor="title" className=" font-semibold capitalize">
                  {Formik.errors.title ? (
                    <p className="text-red-600">{Formik.errors.title}</p>
                  ) : (
                    " Budget Title "
                  )}
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
              <div className="flex flex-col   gap-2">
                <label htmlFor="amount" className=" font-semibold capitalize">
                  {Formik.errors.amount ? (
                    <p className="text-red-600">{Formik.errors.amount}</p>
                  ) : (
                    " Budget Amount "
                  )}
                </label>
                <input
                  id="amount"
                  placeholder="eg 2000"
                  type="number"
                  onBlur={Formik.handleBlur}
                  value={Formik.values.amount}
                  onChange={Formik.handleChange}
                  className="text-sm py-2 outline-none border border-slate-300 px-5 rounded-md"
                />
              </div>
              <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>

          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </form>

          <DialogFooter>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogAddBudget;
