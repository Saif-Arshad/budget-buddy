import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
function BudgetSkeleton() {
  return (
    <div className="flex mt-12 gap-6 flex-wrap w-full items-center ">

    <div className='w-full lg:w-5/12 xl:4/12 min-h-44 bg-slate-50 rounded-lg py-2 px-4  flex flex-col transition-all  shadow-sm'>
      <div className="flex flex-row items-center justify-end space-x-4 my-3">
      <Skeleton className=" h-10 w-20" />
      <Skeleton className=" h-10 w-20" />
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full text-xl gap-y-3 my-1 font-semibold">
        <h1 className="capitalize flex flex-col">
      <Skeleton className=" h-7 w-48 rounded-xl" />
          <span className="text-sm font-normal mt-4">
      <Skeleton className=" h-5 w-20 rounded-xl" />
          </span>
        </h1>
        <h1 className="gap-x-1">
      <Skeleton className=" h-8 w-16 rounded-xl" />
        </h1>
      </div>
      <div className='w-full'>
    <div className='w-full flex items-center justify-between flex-wrap my-4'>
      <Skeleton className=" h-3 w-24 " />
      <Skeleton className=" h-3 w-24 " />

    </div>
      <Skeleton className=" h-3 w-full rounded-xl" />
    
      </div>
      <div className='w-full flex items-center justify-end mt-5 mb-2'>
      <Skeleton className=" h-10 w-13" />

    </div>
    </div>
    <div className='w-full lg:w-5/12 xl:4/12 min-h-44 rounded-lg bg-slate-50 py-2 px-4  flex flex-col transition-all  shadow-sm'>
      <div className="flex flex-row items-center justify-end space-x-4 my-3">
      <Skeleton className=" h-10 w-20" />
      <Skeleton className=" h-10 w-20" />
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full text-xl gap-y-3 my-1 font-semibold">
        <h1 className="capitalize flex flex-col">
      <Skeleton className=" h-7 w-48 rounded-xl" />
          <span className="text-sm font-normal mt-4">
      <Skeleton className=" h-5 w-20 rounded-xl" />
          </span>
        </h1>
        <h1 className="gap-x-1">
      <Skeleton className=" h-8 w-16 rounded-xl" />
        </h1>
      </div>
      <div className='w-full'>
    <div className='w-full flex items-center justify-between flex-wrap my-4'>
      <Skeleton className=" h-3 w-24 " />
      <Skeleton className=" h-3 w-24 " />

    </div>
      <Skeleton className=" h-3 w-full rounded-xl" />
    
      </div>
      <div className='w-full flex items-center justify-end mt-5 mb-2'>
      <Skeleton className=" h-10 w-13" />

    </div>
    </div>

    </div>
  )
}

export default BudgetSkeleton
