"use client";
import React from 'react';
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { useSelector } from 'react-redux';
import StaticsSkeleton from '../../loadings/StaticsSkeleton';

function IncomeStatics() {
    const { allBudget, isLoading } = useSelector((state: any) => state.getBudget);
    console.log("🚀 ~ IncomeStatics ~ allBudget:", allBudget);
    const budgets = allBudget?.budget || [];
    const totalBudget = budgets.reduce((acc: number, budget: any) => acc + budget.amount, 0);
    const totalSpent = budgets.reduce((acc: number, budget: any) => {
        const budgetSpent = budget.expense.reduce((expenseAcc: number, expense: any) => expenseAcc + expense.amount, 0);
        return acc + budgetSpent;
    }, 0);
    const remainingAmount = totalBudget - totalSpent;
    const data = [
        {
            id: 1,
            name: "Total Budget Amount",
            amount: totalBudget,
            icon:<GrMoney size={22}/>,
        },
        {
            id: 2,
            name: "Total Spent Amount",
            amount: totalSpent,
            icon:<GiTakeMyMoney size={22}/>,

        },
        {
            id: 3,
            name: "Remaining Amount",
            amount: remainingAmount,
            icon:<GiReceiveMoney size={22}/>,

        }
    ];

    return (
        isLoading ? (
            <StaticsSkeleton/>
        ) : (
            <div className="w-11/12 flex items-center flex-wrap gap-5 my-10">
                {data.map((item:any, index:number) => (
                    <div className='bg-slate-50 h-36 w-72 rounded-md p-5' key={index}>
                            <span className='flex items-center justify-center bg-black shadow-lg text-white rounded-full w-11 h-11'>
                                {item.icon}
                            </span>
                        <h3 className='text-lg font-semibold text-gray-700 mt-1'>{item.name}</h3>
                        <h5 className='text-lg mt-1 sm:text-xl font-bold'>Rs. {item.amount}</h5>
                       
                    </div>
                ))}
            </div>
        )
    );
}

export default IncomeStatics;
