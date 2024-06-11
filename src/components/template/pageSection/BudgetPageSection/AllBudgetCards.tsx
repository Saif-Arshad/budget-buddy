"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useCurrentUser from "@/customHooks/useCurrentUser";
import { getBudget } from "@/store/features/GetBudget.Slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import BudgetCard from "@/components/template/cards/BudgetCard";
import BudgetSkeleton from "../../loadings/BudgetSkeleton";

function AllBudgetCards() {
  const { userEmail } = useCurrentUser();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { allBudget, isError, isLoading } = useSelector((state: any) => state.getBudget);
  const budget = useSelector((state: any) => state.budget);
  const deletebudget = useSelector((state: any) => state.deleteBudget);
  const newBudget = useSelector((state: any) => state.updateBudget);
  console.log(deletebudget, budget, newBudget);
  console.log(userEmail);
  useEffect(() => {
    if (userEmail) {
      dispatch(getBudget(userEmail));
    }
  }, [userEmail, budget, deletebudget, newBudget]);

  console.log("budget", allBudget,isError);

  const budgetArray = Array.isArray(allBudget?.budget) ? allBudget.budget : [];

  return (
    <>
      {isLoading ? (
       <BudgetSkeleton/>
      ) : isError ? (
         <div className=" flex items-center justify-center w-full min-h-[50vh]">
          Oops! It seems there was an issue loading the content.
        </div>
      
      ) : (
        <>
          {budgetArray.length > 0 ? (
            budgetArray
              .slice()
              .reverse()
              .map((budget: any, index: any) => (
                <BudgetCard key={index} items={budget} />
              ))
          ) : (
            <p>No budgets available.</p>
          )}
        </>
      )}
    </>
  );
}

export default AllBudgetCards;
