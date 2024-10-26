"use client";
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
// import { ModeToggle } from "@/components/ModeToggle";


// import { AppLogo } from "./AppLogo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="rounded-lg shadow  m-4" >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
         <div className="sm:flex sm:items-center sm:justify-between">
           <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            
            <span className="self-center  font-bold text-2xl whitespace-nowrap ">
              Trash Track
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Trash-Track™
          </a>
          . All Rights Reserved.
        </span>
      </div>
        
    </footer>
    // <footer className="bg-white rounded-lg shadow  m-4">
    //   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <a
    //         href="/"
    //         className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
    //       >
            
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap ">
    //           Trash Track
    //         </span>
    //       </a>
    //       <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
    //         <li>
    //           <a href="#" className="hover:underline me-4 md:me-6">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline me-4 md:me-6">
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline me-4 md:me-6">
    //             Licensing
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    //     <span className="block text-sm text-gray-500 sm:text-center ">
    //       © 2023{" "}
    //       <a href="/" className="hover:underline">
    //         Flowbite™
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>

    // w-full flex gap-4 justify-between items-center px-6 py-4  fixed bg-gradient-to-b from-transparent  to-white backdrop-blur-md shadow-md dark:to-gray-800
  );
}
