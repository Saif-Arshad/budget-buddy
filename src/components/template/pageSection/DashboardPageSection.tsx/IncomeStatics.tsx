"use client";
import React from 'react';
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { useSelector } from 'react-redux';

function IncomeStatics() {
    const { allBudget, isLoading } = useSelector((state: any) => state.getBudget);
    console.log("🚀 ~ IncomeStatics ~ allBudget:", allBudget);

    // Extract the budget array from the allBudget object
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
            name: "Total Budget",
            amount: totalBudget,
            icon:<GrMoney size={25}/>,
        },
        {
            id: 2,
            name: "Total Spent",
            amount: totalSpent,
            icon:<GiTakeMyMoney size={25}/>,

        },
        {
            id: 3,
            name: "Remaining Amount",
            amount: remainingAmount,
            icon:<GiReceiveMoney size={25}/>,

        }
    ];

    return (
        isLoading ? (
            <h2>Loading</h2>
        ) : (
            <div className="w-11/12 flex items-center flex-wrap gap-5 my-5">
                {data.map((item:any, index:number) => (
                    <div className='bg-slate-50 h-32 w-72 rounded-md p-3' key={index}>
                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                        <div className='w-full flex items-center mt-3 justify-between'>
                            <h5 className='text-lg sm:text-xl font-bold'>Rs {item.amount}</h5>
                            <span className='flex items-center justify-center bg-slate-950 text-white rounded-full p-3'>
                                {item.icon}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}

export default IncomeStatics;
