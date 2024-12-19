import React, {useState,useEffect} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Header from '../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { 
  Plus,
} from 'lucide-react'; 
  function MerchantIem(){
    const [isExpanded, setIsExpanded] = useState(true);  

    return(
        <>
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100">
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Menu"} />
         <div className="p-8" >
            {/* Search input box */} 
            
            <div > 
            <div className="flex justify-between"> 
              <div>
              <input
            type="text"
            placeholder="Search Restaurant name,id,menu item"
            className="border border-gray-300 rounded-lg px-2 py-3 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg
            className="w-5 h-5 absolute left-3 top-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
            </svg>  

            </div>
             <div>
             <button className="flex items-center gap-2 px-8 py-3 border  text-white border border-orange-300 rounded-lg bg-orange-600"  >
             <Plus className="w-4 h-4  text-white" />
             Add New 
             </button>
             </div> 
             </div> 
          
       </div>
          </div>
         </div>
         </div>
        </>

    )
  }
  export default MerchantIem;