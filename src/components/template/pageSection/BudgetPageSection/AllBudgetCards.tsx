"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useCurrentUser from "@/customHooks/useCurrentUser";
import { getBudget } from "@/store/features/GetBudget.Slice";
import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import BudgetCard from "@/components/cards/BudgetCard";

function AllBudgetCards() {
  const { userEmail } = useCurrentUser();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { allBudget, isError, isLoading } = useSelector(
    (state: any) => state.getBudget
  );
  const all = useSelector((state: any) => state.getBudget);

  const {budget} = useSelector((state: any) => state.budget);
  const {deletebudget} = useSelector((state: any) => state.deleteBudget);
  const { newBudget} = useSelector((state: any) => state.updateBudget);
  console.log(deletebudget, budget,newBudget);
  console.log(userEmail);
  useEffect(() => {
    if (userEmail) {
      dispatch(getBudget(userEmail));
    }
  }, [userEmail, budget,deletebudget,newBudget]);
  console.log("budget", all);
  return (
    <>
      {isLoading ? (
        "Loading"
      ) : isError ? (
        "Error"
      ) : (
        <>
          {Array.from(allBudget.budget)
            .reverse()
            .map((budget: any, index: any) => (
              <BudgetCard key={index} items={budget} />
            ))}
        </>
      )}
    </>
  );
}

export default AllBudgetCards;
