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
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <h1>Hello World</h1>
                    <BarChart />
                    <DoudhnutChart/>
                </div>
            )}
        </>
    )
}

export default Charts
