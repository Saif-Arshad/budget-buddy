import React from 'react'
import WelcomeUser from './WelcomeUser'
import IncomeStatics from './IncomeStatics'
import Charts from './Charts'
function Dashboard() {
  return (
   <div className='pt-28 w-full flex items-center justify-center '>
   <div className='w-11/12 flex flex-col'>

   <WelcomeUser/>
   <IncomeStatics/>
   <Charts/>
  
   </div>
   </div>
  )
}

export default Dashboard
