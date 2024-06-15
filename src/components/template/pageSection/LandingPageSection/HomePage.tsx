"use client"

import React,{useEffect} from 'react'
import { LandingPage } from './LandingPage'
import AboutSection from './AboutSection'
import { Report } from './ReportSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PdfSection } from './PdfSection'

function HomePage() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <>
    <LandingPage/>
   <Report/>
   <PdfSection/>
   <AboutSection/>
    </>
  )
}

export default HomePage
