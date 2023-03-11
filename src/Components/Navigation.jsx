import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Navigation() {
  return (
    <header class="flex flex-col bg-white border-bg-white px-2 sm:px-4 py-2.5 rounded">
        <div class="bg-white border-gray-300 ml-9 px-2 sm:px-4 py-2.5 rounded text-xl items-center font-semibold ">
        THE CREATIVE80 ROOM 
        </div> 
        <nav class="bg-white border-bg-white py-2 px-4 sm:py-2.5 border-2 ">
            <div class="container flex flex-wrap items-center justify-between mt-8 mx-auto">

               <NavLink to="#" class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                
                    Design
                </NavLink>

                <NavLink to="#" class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                    Film
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                    Advertising
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                    Photography
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                    Digital
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                    Podcast
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                About
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 rounded hover:text-indigo-700">
                Contact
                </NavLink>
                <div class="flex flex-wrap float-right">
                    <NavLink>
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </NavLink>
                    <button class="bg-red-500 py-2 px-4 rounded ml-3 text-white hover:bg-black">SUBSCRIBE</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

