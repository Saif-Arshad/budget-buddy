/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react'
import PdfGenerator from './PdfGenerator';
import Overview from './Overview';
function ReportPage() {
  return (
    <div className='w-full flex items-center justify-center py-32'>
    <div className='w-11/12'>
            <PdfGenerator/>
            <Overview/>
    </div>
    </div>
  )
}

export default ReportPage
