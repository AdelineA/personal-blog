import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'



export default function Navigation() {
  return (
    <header class=" header flex flex-col bg-white border-bg-white px-2 sm:px-4 py-2.5 rounded border-2 w-full">
        <div class="bg-white border-gray-300 px-4 sm:px-4 py-2.5">
          <h1 class="text-xl items-center justify-center text-center font-semibold "> THE CREATIVE80 ROOM</h1> 
        </div> 
        <nav class="bg-white border-bg-white py-2  sm:py-2.5 ">
            <div class="container flex gap-5 mt-8 nav">

               <NavLink to="#" class="block py-2 hover:text-indigo-700 rounded">
                    Design
                </NavLink>

                <NavLink to="#" class="block py-2   hover:text-indigo-700 rounded">
                    Film
                </NavLink>
                <NavLink to="#"class="block py-2 hover:text-indigo-700 rounded">
                    Advertising
                </NavLink>
                <NavLink to="#"class="block py-2  hover:text-indigo-700 rounded">
                    Photography
                </NavLink>
                <NavLink to="#"class="block py-2  hover:text-indigo-700 rounded">
                    Digital
                </NavLink>
                <NavLink to="#"class="block py-2  hover:text-indigo-700 rounded ">
                    Podcast
                </NavLink>
                <NavLink to="#"class="block py-2  hover:text-indigo-700 rounded ">
                About
                </NavLink>
                <NavLink to="#"class="block py-2 hover:text-indigo-700 rounded ">
                Contact
                </NavLink>
                <div class="flex ml-auto">
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

