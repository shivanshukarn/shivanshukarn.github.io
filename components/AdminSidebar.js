"use client"
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { IoMdCodeWorking } from 'react-icons/io'
import { MdMiscellaneousServices, MdPermContactCalendar } from 'react-icons/md'
import { FaBlog } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { ImCancelCircle } from 'react-icons/im'


const AdminSidebar = () => {
   const [adminNavbar, setAdminNavbar] = useState(false);
   const handleClick = () => {
      setAdminNavbar(!adminNavbar);
   };
   const tdate = new Date();
   const pathname = usePathname()

   const IsAdminNavbarVisible = () => {
      const excludedPaths = ['/', '/about', '/portfolio', '/services', '/contact', '/admin/auth/login'];
      return !excludedPaths.includes(pathname);
   }
   const isAdminNavbarVisible = IsAdminNavbarVisible();

   return (
      <>
         {isAdminNavbarVisible && <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 absolute right-4 top-4" onClick={handleClick}>
            <HiOutlineMenuAlt1 className='w-6 h-6' />
         </button>}

         {isAdminNavbarVisible && <aside id="admin-sidebar" className={`fixed top-0 left-0 h-screen bg-gray-800 z-40 ease-in duration-300 w-[72vw] md:w-1/5 ${adminNavbar ? 'md:translate-x-0 -translate-x-0' : 'md:translate-x-0 -translate-x-full'}`} aria-label="AdminSidebar">

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600 absolute right-3" onClick={handleClick}>
               <ImCancelCircle className='w-6 h-6' />
            </button>

            <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto md:m-0">
               <div className='md:mt-12'>
                  <div className="flex flex-col items-center md:mb-5 mb-0 mt-36 md:mt-0">
                     <Image width={100} height={0} src="/profile.jpg" className="mr-3 mb-4 rounded-full cursor-pointer" alt="Shivanshu Karn" />
                     <span className="self-center text-xl font-semibold whitespace-nowrap text-white cursor-pointer">Admin Dashboard</span>
                  </div>
                  <ul className="space-y-2 mt-10 md:mt-0">
                     <li>
                        <Link href="/admin/dashboard" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/admin/dashboard' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <AiFillHome className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">Home</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/about" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/about' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <BsFillInfoCircleFill className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">About</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/portfolio" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/portfolio' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <IoMdCodeWorking className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">Portfolio</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/services" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/services' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <MdMiscellaneousServices className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">Services</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/contact' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <MdPermContactCalendar className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">Contact</span>
                        </Link>
                     </li>
                     {/* <li>
                        <Link href="/blog" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${pathname == '/blog' ? 'bg-gray-700' : ''}`} onClick={handleClick}>
                           <FaBlog className='ml-3 text-gray-400' />
                           <span className="flex-1 ml-2 whitespace-nowrap">Blog</span>
                        </Link>
                     </li> */}
                  </ul>
               </div>
               <div className="text-center mt-auto md:mt-0 cursor-pointer">
                  © {tdate.getFullYear()} Shivanshu Karn
               </div>
            </div>
         </aside>}
      </>
   )
}

export default AdminSidebar