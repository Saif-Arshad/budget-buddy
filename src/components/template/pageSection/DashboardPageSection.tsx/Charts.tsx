"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../../loadings/Spinner';
import DoudhnutChart from './DoughnutChart';
import BarChart from './LineChart';
function Charts() {
    
    const { isLoading } = useSelector((state:any) => state.getBudget); 

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center w-full min-h-[50vh]">
                    <Spinner />
                </div>
            ) : (
                <>

                    <h1 className='text-2xl md:text-4xl font-bold my-7'>Analytics</h1>
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
