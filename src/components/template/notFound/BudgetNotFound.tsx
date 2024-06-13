import React from 'react'
import { ASSETS } from '../../../../public/Assets';
import Image from 'next/image';
function BudgetNotFound() {
  return (
    <div className="w-full my-8 flex flex-col justify-center items-center">
    <Image
      src={ASSETS.budget_not_found}
      alt="Not found"
      height={150}
      className=' object-cover'
      width={150}
    />
  <h3 className="text-lg capitalize text-[#226f6f]">No Existing Budget Found</h3>
  </div>
  )
}

export default BudgetNotFound
