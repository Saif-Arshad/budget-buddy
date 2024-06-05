import React from 'react'
import { GoPlus } from "react-icons/go";
function AddNewBudget() {
  return (
    
    <div className="w-72 h-44 rounded-lg bg-slate-100 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-slate-200">
      
      <GoPlus size={28} />
      <span className='text-lg font-semibold'>
      Create New Budget</span>

    </div>
  )
}

export default AddNewBudget
