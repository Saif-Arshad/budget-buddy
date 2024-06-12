"use client";
import { UserButton } from "@clerk/nextjs";
import React,{useState} from "react";
import SearchInput from "../template/SearchInput";
import { IoIosSearch } from "react-icons/io";

function DashboardNavBar() {
  const [searchClick,setSearchClick] = useState(false)
   return (
    <>
    <nav className="fixed top-0 z-20 min-w-full bg-white shadow-md  pr-6 justify-end sm:py-4 py-2 flex">
      <span className='w-11/12 md:w-12/12 flex justify-end sm:justify-center md:justify-start lg:justify-center gap-x-5'>
    <span className="hidden md:flex">
    <SearchInput/>
    </span>
    <span className="md:hidden flex">
      <button onClick={()=>setSearchClick(!searchClick)} className="bg-black text-white flex items-center justify-center p-2 rounded-full">
        <IoIosSearch size={18}/>
      </button>
    </span>
      <UserButton />
      </span>
    </nav>

    <div className={` min-w-full md:hidden fixed top-[57px] sm:top-[75px] sm:px-3  ${!searchClick ? "hidden" : "flex" } items-center justify-center sm:justify-start`}>
    <SearchInput/>
    </div>


    </>
  );
}

export default DashboardNavBar;
