"use client"

import React from 'react';
import useCurrentUser from '@/customHooks/useCurrentUser'
import DialogAddBudget from './DialogAddBudget';

function AllBudget() {
  const {userName} = useCurrentUser()
  return (
    <div className="w-full flex items-center justify-center">
        <div className='w-11/12'>
            <h1 className="text-3xl capitalize sm:text-4xl font-bold">
           {userName ? userName+"'s" : "My"} budget</h1>
    <div className="flex mt-12 flex-wrap w-11/12 md:w-10/12">
        <DialogAddBudget/>
        </div>
        </div>
    </div>
  );
}

export default AllBudget;
