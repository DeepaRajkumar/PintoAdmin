import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import ShowFlexElements from '../../../GeneralComponent/ShowFlexElement.jsx';
import ShowFlexWithoutImage from '../../../GeneralComponent/ShowFlexWithoutImage.jsx'; 
import { useNavigate } from 'react-router-dom';  
import AddFilterForm from "./AddFilterForm.jsx"
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
  function ShowFilter(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [showAddForm, setShowAddForm] = useState(false); 
    const [categories, setCategories] = useState([]) 
    const [categoryname, setCategoryName] =useState('')
    const location = useLocation(); 
    
    const getCategory = () => {
      try {
        axios.get('https://demo-menu.onrender.com/category'
        )
        .then(function (response) {
          
          console.log("deeeddd gweeet",response.data.data
          ); 
          setCategories(response.data.data) 
          console.log("deeeddd gwt",categories); 
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (error) {
        console.log('error accured')
      }
    }
    useEffect(()=>{
      console.log("new items new itesm")
      getCategory()
    },[]) 
    const navigate = useNavigate(); 
    return(
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Back"}  
         click= {()=>{navigate("/menu/home-screen") }   }
         /> 
         <div className="p-6">
         
        
          <div>   
              <div className="relative mb-8"> 
              <h2 className="text-lg font-semibold">Quick Filter</h2> 
              <div className="flex justify-between items-center mb-4">
                <div>  
                <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300 rounded-lg px-2 mt-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
           <Search className="w-5 h-5  absolute left-3 top-10 text-gray-400" />

                    </div>
              <button 
                onClick={()=>{navigate("/menu/home-screen/add-filter-form" , { state: { categories } });}}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Add New Filter
              </button>
            </div>
            
          </div>
             <div className="mb-8">
            
            <div className="flex flex-wrap gap-5">
              {categories.map((category) => (
               <ShowFlexWithoutImage 
               key ={category.title}
               title={category.title}  
               setSub={(title)=>setCategoryName(title)} 
               edit = {true}
                />
              ))}
            </div >   
            {
                categoryname? 
                <div className="m-8">   
            <h2 className="text-lg font-semibold">Sub Categories in {categoryname}</h2>  
               <div className="border border-gray-200 rounded-lg">  
                <div className="flex flex-wrap gap-4  m-4"> 
                {categories.map((category) => (
               <ShowFlexElements 
               category={category}  
               topName={true}  
               style={"w-36 h-30"}
               />
              ))}
                  
                   </div>
               
                </div>
              </div>
                : ''
            }
            
            
          
            

          </div> 
            </div>
        
  
        </div>
     </div> 
     </div>
    )
  

}
export default ShowFilter;