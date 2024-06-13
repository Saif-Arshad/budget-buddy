"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import BudgetCard from '../../cards/BudgetCard';
import Spinner from '@/components/template/loadings/Spinner'; // Adjust the import path as needed
import { ASSETS } from '../../../../../public/Assets';
import Image from 'next/image';
import BudgetNotFound from '../../notFound/BudgetNotFound';
function SearchPage({ search }: any) {
  const { allBudget, isLoading } = useSelector((state: any) => state.getBudget);
  console.log("🚀 ~ page ~ allBudget:", allBudget);
  
  const filteredBudget = allBudget?.budget?.filter((budget: any) => 
    budget.title.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log("🚀 ~ SearchPage ~ filteredBudget:", filteredBudget);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-[50vh]">
          <Spinner />
        </div>
      ) : 
      filteredBudget.length==0 ? (
       <BudgetNotFound/>
      )
      :
      (
        <div className='w-full pt-32 flex items-center justify-center'>
          <div className='w-11/12 items-center flex gap-5 flex-wrap'>
            {filteredBudget?.map((budget: any, index: number) => (
              <BudgetCard key={index} items={budget} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchPage;
