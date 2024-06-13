'use client';

import React, { useEffect,} from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { ThunkDispatch } from '@reduxjs/toolkit';
import Spinner from '../../loadings/Spinner';
import { ASSETS } from '../../../../../public/Assets';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteExpense } from '@/store/features/DeleteExpense.Slice';
import ExpenseNotFound from '../../notFound/ExpenseNotFound';

function ExpenseTable(props: any) {
    const { symbol, id } = props;

    const { allExpense, isLoading, isError } = useSelector((state: any) => state.FetchExpense);
    console.log('🚀 ~ AllExpenses ~ allExpense:', allExpense);

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const deleteExpenses = async (id: any) => {
       dispatch(deleteExpense(id))
       toast.success("Expense Deleted SucessFully")
    };

  

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = date.getUTCFullYear();
        return `${day}/${month}/${year}`;
    };



    if (isError) {
        return (
            <div className="flex items-center justify-center w-full min-h-[50vh]">
                Oops! It seems there was an issue loading the content.
            </div>
        );
    }

    if (allExpense.error) {
        return (
            <div className="flex items-center justify-center w-full min-h-[50vh]">
                {allExpense.error.message}
            </div>
        );
    }

    return (
        <>
     
            {allExpense.expenses?.length === 0 ? (
              <ExpenseNotFound/>
            )
        :
        <div className="w-11/12 mt-14">
        <div className="grid grid-cols-4 bg-[#F1F5F9] p-2">
            <p className="font-bold">Name</p>
            <p className="font-bold ">Amount</p>
            <p className="font-bold hidden sm:block">Date</p>
            <p className="font-bold">Delete</p>
        </div>
        {allExpense.expenses?.slice().reverse().map((item: any, index: number) => (
            <div key={index} className="grid grid-cols-4 bg-white sm:p-2">
                <p className="capitalize">{item.title}</p>
                <p>{item.amount}{symbol ? symbol[0] : '$'}</p>
                <p className='hidden sm:block'>{formatDate(item.createdAt)}</p>
                <p>
                    <button
                        onClick={() => deleteExpenses(item._id)}
                        className="bg-red-600 hover:bg-red-500 transition-all text-white items-center gap-1 flex px-3 py-2 font-semibold rounded-lg"
                    >
                        <MdOutlineDelete size={17} />
                    </button>
                </p>
            </div>
        ))}
    </div>
        }
        </>
    );
}

export default ExpenseTable;
