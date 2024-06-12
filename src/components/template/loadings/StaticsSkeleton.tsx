import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


function StaticsSkeleton() {
  return (
        <div className="w-11/12 flex items-center flex-wrap gap-5 my-10">
                    <div className='bg-slate-50 h-36 w-72 rounded-md p-5 '>
                    <Skeleton className="rounded-full w-16 h-16" />
                      
                    <Skeleton className="w-48 h-3  mt-2" />
                    <Skeleton className="w-24 h-3  mt-3" />
                  
                       
                    </div>
                    <div className='bg-slate-50 h-36 w-72 rounded-md p-5 '>
                    <Skeleton className="rounded-full w-16 h-16" />
                      
                    <Skeleton className="w-48 h-3  mt-2" />
                    <Skeleton className="w-24 h-3  mt-3" />
                  
                       
                    </div>
                    <div className='bg-slate-50 h-36 w-72 rounded-md p-5 '>
                    <Skeleton className="rounded-full w-16 h-16" />
                      
                    <Skeleton className="w-48 h-3  mt-2" />
                    <Skeleton className="w-24 h-3  mt-3" />
                  
                       
                    </div>
                
            </div>
      
      )
}

export default StaticsSkeleton
