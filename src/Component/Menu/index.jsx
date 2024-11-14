import React, {useState} from 'react';
import Sidebar from '../GeneralComponent/SideBar.jsx';
import Header from '../GeneralComponent/HeaderBar.jsx'; 
import { useNavigate } from 'react-router-dom';
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
const CategoryCard = ({ image, title, isAdd = false ,categories=[]}) => { 
    const navigate = useNavigate();
    if (isAdd) {
      return (
        <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/manage-screen" , { state: { categories } });}}>
          <PlusCircle className="w-12 h-12 text-orange-500 mb-2" />
          <span className="text-sm text-orange-500">Add New</span>
        </div>
      );
    }
  
    return (
        <div className="relative flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 group">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <PenSquare className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </div> 
        <img src={image} alt={title} className="w-32 h-32 object-cover mb-2" />
        <span className="text-sm">{title}</span>
      </div>
    );
  }; 
  const FilterButton = ({ title, isAdd = false }) => {
    if (isAdd) {
      return (
        <button className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-orange-500 bg-white">
          <PlusCircle className="w-4 h-4" />
          Add New
        </button>
      );
    }
  
    return (
      <div className="relative group">
        <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 w-32 h-32 text-center">
          {title}
        </button>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <PenSquare className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    );
  };

function Menu(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const categories = [
        { title: 'Chicken',image:`${Briyani}` },
        { title: 'Burger' ,image:`${Briyani}` },
        { title: 'Pizza',image:`${Briyani}` },
        { title: 'Chinese' ,image:`${Briyani}`},
      ]; 
      const filters = ['All', 'Breakfast', 'Lunch', 'Snacks'];
    return (
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100">
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Menu"} />
     
        <div className="p-4" >
        <div className="relative w-80">
            <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg
            className="w-5 h-5 absolute left-3 top-2 text-gray-400"
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
       <div className="mb-8 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Category</h2>
              <button className="text-orange-500 text-sm">View all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
              <CategoryCard isAdd={true} categories={categories} />
            </div>
          </div> 

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Quick filter</h2>
              <button className="text-orange-500 text-sm">View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (
                 <FilterButton key={filter} title={filter} />
              ))}
              <FilterButton isAdd={true} />
            </div>
          </div>

        </div>
        </div> 
        </div>
        )
}
export default Menu;