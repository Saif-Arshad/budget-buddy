import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '../../../public/Assets';
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
   <footer className="w-full py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
        <div className='w-full flex items-center justify-center'>

    <Link href="/" >
            <span className="self-center flex items-center text-2xl font-bold whitespace-nowrap text-orange-500">
              <Image src={ASSETS.logo} alt="logo" height={120} width={220} className="object-cover" />
              </span>
            </Link>
        </div>
        <div className='border-b border-gray-200 mb-7'>

        </div>
      {/* <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
        <li><a href="#" className="text-gray-800 hover:text-gray-900">Pagedone</a></li>
        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Products</a></li>
        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Resources</a></li>
        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Blogs</a></li>
        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Support</a></li>
      </ul> */}
      <div className="flex space-x-10 justify-center items-center mb-14">
        <a href="https://twitter.com/saifurrehmanpro"  target='_blank' className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
          <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/saif-rehman-professional/" target='_blank' className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
        <FaLinkedin size={25} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086295243570" target='_blank' className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
          <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor" />
          </svg>
        </a>
        <a href="https://github.com/Saif-Arshad/" target='_blank' className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
        <FiGithub size={25} />
        </a>
      </div>
      <span className="text-lg text-gray-500 text-center block">©<a href="https://pagedone.io/">BudgetBuddy</a> 2024, All rights reserved.</span>
    </div>
  </div>
</footer>

  )
}

export default Footer
