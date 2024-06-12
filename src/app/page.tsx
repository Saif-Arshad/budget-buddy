"use client"
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { LandingPage } from "@/components/template/pageSection/LandingPageSection/LandingPage";



export default function Home() {

  
  return (
    
    <>
<Header/>
<LandingPage/>
<div className="flex flex-col gap-5 min-h-[30vh] min-w-screen  items-center justify-center">
  <h1>Hello World</h1>

</div>
<Footer/>

    </>
  );
}
