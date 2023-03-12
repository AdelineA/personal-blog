import React from 'react'
import { NavLink } from 'react-router-dom'
import Right from '../imgs/Right.jpg'
import Left from '../imgs/Left.png'
import Logo from '../imgs/Logo.jpg'
import Design from '../imgs/Design.jpg'
import Adverts from '../imgs/Adverts.jpg'
import Photograph from '../imgs/Photograph.jpg'
import Fime from '../imgs/Fime.jpg'
import Ade from '../imgs/Ade.jpeg'
import Photo from '../imgs/Photo.jpg'
import Play from '../imgs/Play.png'



export default function Home() {
  return (
    <div class="mt-4">
        <div class="bg-white t-0 py-2 px-4 border-2 rounded hover:bg-indigo-700 hover:text-white float-right">
        <button >Customize</button>
        </div>
        <div class="flex">
            <div class="flex-col mt-4 ml-4 px-4">
            <h6 class="text-sm font-bold">Support and help the creative community</h6> 
           <h1 class="font-bold text-6xl mt-2 mb-2">We are <br/>Creative80</h1>
           <p class="not-italic mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo.</p>
           <button class="bg-blue-500 mt-8 py-2.5 px-6 rounded text-white hover:bg-black">READ ARTICLE
           </button>
           <div class="bg-blue-100 w-auto h-screen">
           <img src={Left} class="mt-8" alt="" />
           </div>
            </div>
            <div class="overflow-clip">
            <img src={Right} class="w-max h-auto py-4 px-8 box rounded"  alt="" />
           </div>
        </div>
        <div class="bg-blue-100 mt-4 ">
          <div class="bg-white flex py-2.5 px-4 mt-4 h-max items-center justify-between ml-24 mr-10 border-4 sm:py-2.5 rounded border-bg-white">
            <div class="text-xl flex-col mb-16">
            <h2 class="font-bold mt-6">Subscribe to our Newsletter</h2>
            <p class="mt-3 text-sm">Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div class="flex flex-wrap mb-16 mt-6 ">
              <input type="email" id="email" class="bg-white border-2 border-gray-900 text-gray-900 text-sm rounded-lg w-80 p-2.5 dark:placeholder-gray-400 " placeholder="Email address" required/>
              <button class="bg-blue-600 py-2 px-4 rounded ml-3 text-white hover:bg-black">SUBSCRIBE</button>
            </div>
        </div>
        </div>
        
        <section class="bg-white mt-24">
          <div class="items-center justify-center ">
            <img src={Logo} class="ml-36 py-1.5 px-2.5 border-2" alt="" />
          </div>
          <h1 class="text-4xl text-center justify-center font-bold mt-32">Popular Categories </h1>
          <div class=" ml-2 flex flex-wrap  mt-12">
            <div class="w-72 h-full ml-4 p-2 bg-white border border-gray-200 ">
              <img src={Design} class="" alt="" />
              <h2 class="text-xl font-bold items-center text-center">Design</h2>
            </div>
            <div class="w-72 h-full ml-4 p-2 bg-white border border-gray-200 rounded ">
              <img src={Adverts}  alt="" />
              <h2 class="text-xl font-bold items-center text-center">Advertising</h2>
            </div>
            <div class="w-80 h-full ml-4 p-2 bg-white border border-gray-200 rounded ">
              <img src={Photograph}  alt="" />
              <h2 class="text-xl font-bold items-center text-center">Photograph</h2>
            </div>
            <div class="w-72 h-full ml-4 p-2 bg-white border border-gray-200 rounded">
              <img src={Fime}  alt="" />
              <h2 class="text-xl font-bold items-center text-center" >Filme</h2>
            </div>

          </div>
          <div class="text-base text-center justify-center justify-items-center mt-6">
            <button class="bg-blue-600 py-2 px-4 rounded text-white hover:bg-black">EXPLORE THEM ALL</button>
            <h1 class="text-3xl font-bold mt-32">The Creative80 Room Podcast</h1>
          </div>
          <div class="flex ml-16 mt-6">
            <div class="w-max py-2 px-4 bg-white shadow-lg rounded-lg my-20">
              <div class="flex flex-wrap">
                <h1 class="text-blue-700 text-xl justify-start ">Jennifer<br/>Oliver</h1>
                <img src={Ade} class="w-20 h-20 ml-16 justify-end object-cover rounded-l-xl border-2 border-indigo-500"alt="" />
              </div>
              <div class="flex-col">
                <p>Episode 48</p>
                <p class="mt-4 text-black font-bold text-lg">Jennifer Oliver talks about<br/>magna aliqua
                 ut enim ad<br/>minim veniam quis nostrud</p>
                 <img src={Play} class="mt-4 mb-4 hover:bg-black" alt="" />
              </div>
            </div>
            <div class="w-max ml-4 py-2 px-4 bg-white shadow-lg rounded-lg my-20">
              <div class="flex flex-wrap">
                <h1 class="text-blue-700 text-xl justify-start ">Jennifer<br/>Oliver</h1>
                <img src={Ade} class="w-20 h-20 ml-16 justify-end object-cover rounded-l-xl border-2 border-indigo-500"alt="" />
              </div>
              <div class="flex-col">
                <p>Episode 49</p>
                <p class="mt-4 text-black font-bold text-lg">Jennifer Oliver talks about<br/>magna aliqua
                 ut enim ad<br/>minim veniam quis nostrud</p>
                 <img src={Play} class="mt-4 mb-4 hover:bg-black" alt="" />
              </div>
            </div>
            <div class="w-max ml-4 py-2 px-4 bg-white shadow-lg rounded-lg my-20">
              <div class="flex flex-wrap">
                <h1 class="text-blue-700 text-xl justify-start ">Jennifer<br/>Oliver</h1>
                <img src={Ade} class="w-20 h-20 ml-16 justify-end object-cover rounded-l-xl border-2 border-indigo-500"alt="" />
              </div>
              <div class="flex-col">
                <p>Episode 50</p>
                <p class="mt-4 text-black font-bold text-lg">Jennifer Oliver talks about<br/>magna aliqua
                 ut enim ad<br/>minim veniam quis nostrud</p>
                 <img src={Play} class="mt-6 mb-12 hover:bg-black" alt="" />
              </div>
            </div>
            <div>
              <img src={Photo} class="ml-8 w-3/4 mt-20 h-3/4 my-20 py-2 px-4 rounded-lg shadow-lg" alt="" />
            </div>
          </div>
        </section>
        <footer class="bg-indigo-100 mt-10 py-4 px-8 rounded">
        <nav class="bg-white border-bg-white py-2 px-4 sm:py-2.5 ">
            <div class="container flex flex-wrap items-center justify-between mt-8 mx-auto">

               <NavLink to="#" class="block py-2 pl-3 pr-4  hover:text-indigo-700 rounded">
                    Design
                </NavLink>

                <NavLink to="#" class="block py-2 pl-3 pr-4  hover:text-indigo-700 rounded">
                    Film
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded">
                    Advertising
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded">
                    Photography
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded">
                    Digital
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded ">
                    Podcast
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded ">
                About
                </NavLink>
                <NavLink to="#"class="block py-2 pl-3 pr-4 hover:text-indigo-700 rounded ">
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
        <div class="text-center justify-center mt-10">
          <h3 class="text-lg font-bold mb-7">Sign up to receive email updates, fresh news and <br/>more!</h3>
          <input type="email" id="email" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-80 p-2.5 dark:placeholder-gray-400 " placeholder="Email address" required/>
          <button class="bg-blue-600 py-2 px-4 rounded ml-3 text-white hover:bg-black">SUBSCRIBE</button>
        </div>
        <div class="text-center items-center justify-center mt-6 px-4 py-2 mb-6">Copyright © 2023 Creative Blog | Powered by Creative Blog</div>
        </footer>   

    </div>
  )
}
