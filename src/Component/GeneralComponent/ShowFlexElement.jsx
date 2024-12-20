import React,{useState} from "react";
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
    PenSquare,
    Upload,
    ChevronLeft
  } from 'lucide-react'; 
 const ShowFlexElements = (props)=>{   
     console.log("newdfasdfasdf",props)
    return( 
        <div key={props?.category_id} onClick={()=>{props.setSub?props.setSub() : ''}}>  
            {props.topName&&
                  <span className="text-sm mb-4">{props. title}</span>
            } 
       
             <div key={props?.category?.category_id} className= {`${props.style?props.style: "w-40 h-40"}  relative group  bg-white border border-gray-200 rounded-lg hover:shadow-md`}>
        <div className="absolute  top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"> 
            { props?.edit&&
                  <PenSquare className="w-4 h-4 text-gray-600 hover:text-gray-800"  onClick={()=>{props?.onEdit? props.onEdit() : ''}} />
            }
        
        </div>
        <div className="flex flex-col h-full items-center p-4 "> 
          
          <div className="grid place-item-center object-fit " >  
          <img src={props.category.image} alt={props. title} />
            </div>
          
          {props.bottomName&&
               <span className="text-sm absolute bottom-2">{props. title}</span>
          }
          
        </div>
      </div>
        </div>
       
    )
    

} 
export default ShowFlexElements;