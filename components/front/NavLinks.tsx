import Link from 'next/link';
import React from 'react'

export default function NavLinks() {
  const navbarLinks = [
      
    { name: "About", path: "/about" },
    { name: "Alumni Directory", path: "/alumni-directory" },
    { name: "Events", path: "/events" },
    { name: "Job Board", path: "/jobs" },
    // { name: "Alumni Stories", path: "/stories" },
    { name: "Contact", path: "/contact" },

  ];


  const optionalLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Support/Help", path: "/help" },
    { name: "Donate", path: "/donate" }
  ];
      
  return (
    <>
        {
                    navbarLinks.map((link,i)=>{
                        return  <Link key={i} href={link.path} title="" className=" font-medium text-gray-900 transition-all duration-200  text-base rounded focus:outline-none   hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {link.name} </Link>
                    })
                }
    </>
  )
}
