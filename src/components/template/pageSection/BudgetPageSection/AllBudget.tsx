"use client"

import React from 'react';
import DialogAddBudget from './DialogAddBudget';
import AllBudgetCards from './AllBudgetCards';

function AllBudget() {
  return (
    <div className="w-full flex items-center justify-center">
        <div className='w-11/12'>
            <h1 className="text-3xl capitalize sm:text-4xl font-bold">
           Budgets</h1>
    <div className="flex mt-10 sm:mt-5 justify-center sm:justify-end w-11/12">
        <DialogAddBudget/>
        </div>
    <div className="flex mt-12 gap-x-4 gap-y-6 flex-wrap w-full">
        <AllBudgetCards/>
        </div>
        </div>
    </div>
  );
}

export default AllBudget;
