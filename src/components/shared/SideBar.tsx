  'use client'
    // eslint-disable-next-line react-hooks/rules-of-hooks
  import React, { useState } from 'react';
  import { ASSETS } from '../../../public/Assets';
  import Link from 'next/link';
  import Image from 'next/image';
  import { TbLayoutDashboard } from "react-icons/tb";
  import { usePathname } from 'next/navigation';
  import { FaHandHoldingDollar } from "react-icons/fa6";
  // import { BsCurrencyDollar } from "react-icons/bs";
  import { CiSettings } from "react-icons/ci";
  import { CgLogOut } from "react-icons/cg";
  import { useClerk } from '@clerk/nextjs';
  function AdminSideBar() {
    
    const pathname = usePathname();
    const {signOut}  = useClerk();
      const navLinks=[
        {
          title:"Dashboard",
          icon:<TbLayoutDashboard size={25} />,
          link:"/dashboard"
              },
        {
          title:"Budgets",
          icon:<FaHandHoldingDollar size={25} />,
          link:"/dashboard/budget"
              },
        // {
        //   title:"Expenses",
        //   icon:<BsCurrencyDollar size={25} />,
        //   link:"/dashboard/expense"
        //       },
      ]




    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
      <>


        <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" fixed  inline-flex items-start  p-2 mt-2 ms-3 text-sm text-gray-500  rounded-lg sm:hidden h-9 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          {sidebarOpen && window.innerWidth <= 640 && ( 
          <button onClick={toggleSidebar} className="absolute top-0 right-0 p-2 mt-2 mr-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
          <Link href="/" >
            <span className="self-center ml-2 py-4 flex items-center text-2xl font-bold whitespace-nowrap text-orange-500">
              <Image src={ASSETS.logo} alt="logo" height={150} width={200} className="object-cover" />
              </span>
            </Link>
              <ul className="space-y-3 font-medium">
                {


  navLinks.map((item:any,index:number)=>(

    <li key={index}>
    <Link href={`${item.link}`} className={`flex gap-1 items-center p-2 text-gray-900 rounded-lg ${pathname== item.link ? "bg-gray-200": "even: hover:bg-gray-100 "}     group`}>
    <span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname== item.link ? "text-gray-900": "group-hover:text-gray-900"}   `}>
    {item.icon}
    </span>
      <span className="ms-3">{item.title}</span>
    </Link>
  </li>

  ))


                }
          
              </ul>
                <div  className="w-full h-3 border-b-2 border-slate-200 mt-14  ">

                </div>
              <ul className="space-y-3 font-medium">
              <li>
  <Link href="/dashboard/profile" className={`flex gap-1 mt-5 items-center p-2 text-gray-900 rounded-lg ${pathname === '/dashboard/profile' ? 'bg-gray-200' : 'even: hover:bg-gray-100'} group`}>
    <span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname === '/dashboard/profile' ? 'text-gray-900' : 'group-hover:text-gray-900'}`}>
      <CiSettings size={25} />
    </span>
    <span className="ms-3">Profile Setting</span>
  </Link>
</li>

              <li onClick={() => signOut({ redirectUrl: '/' })} className={` cursor-pointer flex rounded-md gap-1 items-center p-2 text-gray-900 rounded-lgeven: hover:bg-red-500 hover:text-white   group`}>
    <span className={`w-5 h-6 text-gray-500 transition duration-75  group-hover:text-white  `}>
    <CgLogOut size={25} />
    </span>
      <span className="ms-3 font-semibold">Logout</span>
  </li>
              </ul>

          </div>
        </aside>
      </>
    );
  }

  export default AdminSideBar;