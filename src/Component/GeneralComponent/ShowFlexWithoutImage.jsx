import React, {useState,useEffect} from 'react';
import Sidebar from '../GeneralComponent/SideBar.jsx';
import Header from '../GeneralComponent/HeaderBar.jsx'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'
import { 
    Menu as MenuIcon,
    Search,
    PlusCircle,
    Home,
    ShoppingCart,
    Store,
    Truck,
    Settings,
    BarChart2,
    MessageSquare,
    HelpCircle,
    Bell,
    PenSquare
  } from 'lucide-react'; 
  import Briyani from "../../assets/briyani.png"  

  const ShowFlexWithoutImage = (props) =>{ 
    { 
        return(  
            <> 
            {
        props.isAdd? 
        <button className="flex items-center gap-2 px-8 py-3 border  border-dashed border-gray-300 rounded-lg text-orange-500 bg-white" onClick={props.click?()=>{props.click()}  : ''} >
        <PlusCircle className="w-4 h-4" />
        Add New 
      </button>
        
      : 
      
            <div className="relative group">
            <button key= {props.key?props.key : ''} className="px-8 py-3 bg-white border border-gray-200   rounded-lg hover:bg-gray-50  text-center">
              {props.title}
            </button>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">  
                {props.edit?   <PenSquare className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" onClick={()=>{props.setSub? props.setSub(props.title) : ''}} /> : 
                ''
    
                }
             
            </div>
          </div>
        

    }
            </>
            

)
  } }
  export default ShowFlexWithoutImage;