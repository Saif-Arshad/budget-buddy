"use client"

import SearchPage from '@/components/template/pageSection/SearchPageSection/SearchPage'
import React from 'react'
function page({params}:any) {
    const {slug} = params

  return (
   <SearchPage search={slug}/>
  )
}

export default page