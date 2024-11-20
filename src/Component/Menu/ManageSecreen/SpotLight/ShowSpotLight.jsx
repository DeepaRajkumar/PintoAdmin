import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import ShowFlexElements from '../../../GeneralComponent/ShowFlexElement.jsx';
import CategoryCard from '../../../GeneralComponent/CategoryCard.jsx'; 
import { useNavigate } from 'react-router-dom';  
import Spot from"../../../../assets/banner.jpg" 
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
  function ShowSpotLight(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [categories, setCategories] = useState([]) 
    const [categoryName, setCategoryName]=useState('') 
    const navigate = useNavigate();
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
            
             <div className="flex justify-between items-center mb-4">
             <h2 className="text-lg font-semibold">City spotlight</h2> 
             <button 
               onClick={()=>{navigate("/menu/home-screen/add-filter-form" , { state: { categories } });}}
               className="px-4 py-2 border border-blue-500 rounded-lg text-blue-600"
             >
               
              Contact Support
             </button>
           </div> 
          
           
         </div>
            <div className="mb-8">
           
           <div className="flex flex-wrap gap-5">
             {categories.map((category) => (
              
              <CategoryCard image={Spot} key ={category.title}  style="w-44 h-44"
                 imagestyle="w-44 h-44 p-2" />
             ))}
           </div >   
           
           
           
         
           

         </div>  
         <div className="mb-8"> 
         <div className="flex justify-between mb-8">
         <h2 className="text-lg font-semibold">Customize Items</h2>  
             <p >Edit</p>
             </div>
        
         <div className="border rounded-lg p-4"> 
            
            <p className="mt-4">Add Sub Category</p>
              <div>  
                  <input
                    type="text"
                    placeholder="Search here"
                    className="border border-gray-300 rounded-lg px-2 mt-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                   <Search className="w-5 h-5  absolute left-3 top-100 text-gray-400" />

                </div> 
                <p className="mt-4">Items in the Spotlight</p> 
                {
                 <div className="my-8">   
                  
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
           

            }
        
         </div>

         </div>
           </div>
       
 
       </div>
         </div> 
         </div> 



    )

  } 
  export default ShowSpotLight;
