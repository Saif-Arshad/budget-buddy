"use client"

import React from 'react';
import DialogAddBudget from './DialogAddBudget';
import AllBudgetCards from './AllBudgetCards';

function AllBudget() {
  return (
    <div className="w-full flex items-center pt-24 justify-center">
        <div className='w-11/12'>
            <h1 className="text-3xl capitalize sm:text-4xl font-bold">
          All Budgets</h1>
    <div className="flex mt-10 sm:mt-5 justify-center sm:justify-end w-11/12">
        <DialogAddBudget/>
        </div>
    <div className="flex mt-12 gap-6 flex-wrap w-full items-center ">
        <AllBudgetCards/>
        </div>
        </div>
    </div>
  );
}

export default AllBudget;
