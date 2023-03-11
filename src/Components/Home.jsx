import React from 'react'
import Right from '../imgs/Right.jpg'
import Left from '../imgs/Left.png'





export default function Home() {
  return (
    <div class="mt-4">
        <div class="bg-white t-0 py-2 px-4 border-2 rounded hover:bg-indigo-700 hover:text-white float-right">
        <button >Customize</button>
        </div>
        <div class="flex">
            <div class="flex-col mt-2 px-4">
            <h6 class="text-sm font-bold">Support and help the creative community</h6> 
           <h1 class="font-bold text-6xl mt-2 mb-2">We are <br/>Creative80</h1>
           <p class="not-italic mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo.</p>
           <button class="bg-blue-500 mt-8 py-2.5 px-6 rounded text-white hover:bg-black">READ ARTICLE
           </button>
           <div class="bg-blue-200 w-auto h-max">
           <img src={Left} class="mt-8" alt="" />
           </div>
            </div>
           <div class="overflow-clip">
            <img src={Right} class="w-max h-auto py-4 px-8 box rounded"  alt="" />
           </div>
        </div>
        <div class="bg-white flex py-4 items-center justify-between px-4 border-2 sm:py-2.5 rounded border-bg-white">
            <div class="">
            <h2>Subscribe to our Newsletter</h2>
            <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div class="ml-9">
              <button class="bg-red-500 py-2 px-4 rounded ml-3 text-white hover:bg-black">SUBSCRIBE</button>
            </div>
        </div>
       
        
        
    </div>
  )
}
