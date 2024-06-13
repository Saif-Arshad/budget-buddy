"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../loadings/Spinner';
import DoudhnutChart from './DoughnutChart';
import BarChart from './LineChart';
import { ASSETS } from '../../../../../public/Assets';
import Image from 'next/image';
import BudgetNotFound from '../../notFound/BudgetNotFound';
function Charts() {
    
    const { isLoading,allBudget } = useSelector((state:any) => state.getBudget); 

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center w-full min-h-[50vh]">
                    <Spinner />
                </div>
            ) :
            allBudget?.budget==0 ?
            (
              <BudgetNotFound/>
            )
            :
            (
                <>

                    <h1 className='text-2xl md:text-4xl font-bold my-7'>Budget Analytics</h1>
                <div className='flex flex-col md:flex-row flex-wrap my-9'>
                    <BarChart />
                    <DoudhnutChart/>
                </div>
            </>
            )}
        </>
    )
}

export default Charts
