import React from 'react'
import { ASSETS } from '../../../../public/Assets';
import Image from 'next/image';
function ExpenseNotFound() {
  return (
    <div className="w-full flex flex-col gap-y-2 my-5 justify-center items-center">
    <Image src={ASSETS.budget_not_found} alt="Not found"
       height={150}
       className=' object-cover'
       width={150}
      />
    <h3 className="sm:text-lg text-[#226f6f] font-semibold">No Existing Expense Found </h3>
    <h1 className="text-lg sm:text-2xl mb-3 font-semibold">
    OOPS! No Expense Transactions in This Budget
    </h1>
</div>
  )
}

export default ExpenseNotFound
