import React, { useState } from 'react'



export default function About() {
    const [showMore,setShowMore] = useState(false)
    const {text} = ""
  return (
    <div class="ml-30 mr-30 px-10">
        <p>You start with your passion and knowledge. 
            Then choose a promising topic with the help <br/>
            of our Marketplace Insights tool.<br/>
           The way that you teach — what you bring to it
        </p>
        <p><br/>
            {showMore? text:"You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge.You start with your passion and knowledge. You start with your passion and knowledge. You start with your passion and knowledge. "}
        <button onClick={()=>setShowMore(!showMore)} class="bg-blue-500 mt-8 py-2.5 px-6 rounded text-white hover:bg-black">
            {showMore? "showMore" :"ShowLess"}
        </button>
        </p>
        <div class="flex flex-wrap justify-between mt-12">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">


                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">

            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">

            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>


        </div>
        

    </div>
  )
}
