"use client"

import AddExpense from '@/components/template/pageSection/DetailBudgetPageSection/AddExpense'
import React from 'react'

function page(slug:any) {
    const detailedId = slug.params.id
    return (
      <AddExpense id={detailedId}/>
  )
}

export default page
