/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react'
import useCurrentUser from '@/customHooks/useCurrentUser'
import PdfGenerator from './PdfGenerator';
function ReportPage() {
    const {userEmail} = useCurrentUser();
  return (
    <div className='w-full flex items-center justify-center py-32'>
    <div className='w-11/12'>
            hey{userEmail}
            <PdfGenerator/>
    </div>
    </div>
  )
}

export default ReportPage
