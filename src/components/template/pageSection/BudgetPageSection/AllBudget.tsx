"use client"

import React from 'react';
import DialogAddBudget from './DialogAddBudget';
import AllBudgetCards from './AllBudgetCards';

function AllBudget() {
  return (
    <div className="w-full flex items-center justify-center">
        <div className='w-11/12'>
            <h1 className="text-3xl capitalize sm:text-4xl font-bold">
           All budget</h1>
    <div className="flex mt-12 gap-x-4 gap-y-6 flex-wrap w-11/12">
        <DialogAddBudget/>
        <AllBudgetCards/>
        </div>
        </div>
    </div>
  );
}

export default AllBudget;
