"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import BudgetCard from '../../cards/BudgetCard';
import Spinner from '@/components/template/loadings/Spinner'; 
import { ASSETS } from '../../../../../public/Assets';
import Image from 'next/image';
import BudgetNotFound from '../../notFound/BudgetNotFound';
function SearchPage({ search }: any) {
  const { allBudget, isLoading } = useSelector((state: any) => state.getBudget);
  
  const filteredBudget = allBudget?.budget?.filter((budget: any) => 
    budget.title.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <>
      {isLoading ? (
        <div className="flex items-center pt-32  justify-center w-full min-h-[50vh]">
          <Spinner />
        </div>
      ) : 
      filteredBudget.length==0 ? (
        <div className="flex items-center pt-32  justify-center w-full min-h-[50vh]">
           <BudgetNotFound/>
        </div>
      
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
