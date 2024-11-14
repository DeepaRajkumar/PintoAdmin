import React, {useState,useEffect} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Tail from '../../GeneralComponent/HeaderBar.jsx';  
import { ChevronLeft, Search, Clock, Star, ShoppingCart,Home } from 'lucide-react';
import { HomeIcon } from '@heroicons/react/24/solid';
import Rest from "../../../assets/briyani.png"
import {MagnifyingGlassIcon as SearchIcon,ClockIcon } from '@heroicons/react/24/outline'; 
import { useNavigate } from 'react-router-dom'; 

function SpecificRestaurant() { 

  const menuItemslist = [
    {
      id: 1,
      name: "Chicken biryani",
      rating: 4.8,
      time: "40-45 mins",
      price: 299,
      isVeg: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4CaraJr6aLYYgzhup-CflYDoyXL-r5Fgvg&s",
      item:0
    },
    {
      id: 2,
      name: "Chicken biryani",
      rating: 4.8,
      time: "40-45 mins",
      price: 299,
      isVeg: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4CaraJr6aLYYgzhup-CflYDoyXL-r5Fgvg&s",
      item:0
   
    },
    {
      id: 3,
      name: "Chicken biryani",
      rating: 4.8,
      time: "40-45 mins",
      price: 299,
      isVeg: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4CaraJr6aLYYgzhup-CflYDoyXL-r5Fgvg&s",
      item:0
    },
   
    {
      id: 4,
      name: "Chicken biryani",
      rating: 4.8,
      time: "40-45 mins",
      price: 299,
      isVeg: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4CaraJr6aLYYgzhup-CflYDoyXL-r5Fgvg&s",
      item:0
    },
    
  ];  
  const [isExpanded, setIsExpanded] = useState(true); 
  const [cart, setCart] = useState([]); 
  const [value, setValue] = useState(50);
  const [isVeg, setIsVeg] = useState(false);  
  const [totalcount,setTotalCount] =useState(0)
  const [menuItems,setMenuItems] = useState(menuItemslist)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleToggle = () => {
    setIsVeg(!isVeg);
  }; 

  const categories = [
    "Biryani", "Parotta", "Chicken 65", "Mutton", "Food item", "Food item", "Food item"
  ]; 
  const updateTotalCount = (updatedMenuItems) => {
    const newTotalCount = updatedMenuItems.reduce((count, item) => count + item.item, 0);
    setTotalCount(newTotalCount);
  };
  const addToCart = (index) => {
    setMenuItems((prevItems) =>
      prevItems.map((menu, i) => {
        if (i === index) {
          const updatedMenu = { ...menu, item: menu.item + 1 };
          updateTotalCount([...prevItems.slice(0, i), updatedMenu, ...prevItems.slice(i + 1)]);
          return updatedMenu;
        }
        return menu;
      })
    );
  }
  const decrement = (index) => {  
    setMenuItems(prevItem=> prevItem.map((menu,i)=> i === index ? { ...menu, item: (menu.item || 0) - 1 } : menu)) 
  
  };  
  const increment = (index) => {  
    setMenuItems(prevItem=> prevItem.map((menu,i)=> i === index ? { ...menu, item: (menu.item || 0) + 1 } : menu)) 
  
  };  

  return(

    <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100 ">
    <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded} />
    <div className="overflow-auto window-scrollbar" >
      <Tail name={"Phone Order"} /> 
          {/* Header */}
      <div className=" h-52 text-white"  style={{
    backgroundImage: "url('https://img.lovepik.com/desgin_photo/45013/8450_detail.jpg!odetail650')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    
        <div className="flex items-center gap-4 p-4">
        <button className="bg-white text-black px-3 py-1 rounded-md"  onClick={()=>{ navigate("/orders/phone-orders/restaurant-list")}}>
            Back
          </button>
        
        </div>
        
        <div className="flex gap-4 items-center pl-4 pt-24">      
            <div className="relative">
              <input
                type="text"
                placeholder="Search Restaurant"
                className="w-80 pl-10 pr-4 py-2 rounded-md text-gray-800"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>        
          <input
            type="text"
            placeholder="Restaurant Id"
            className="w-40 px-4 py-2 rounded-md text-black-500 placeholder-blue-500"
          />
        
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Menu Tabs */}
        <div className="flex gap-4 mb-6 "> 
          <div className="flex justify-between border-b-2 w-96">
          <div className="flex border-b-2 border-orange-600">
          <Home className="mt-3 h-5 w-5 text-orange-600" /> 
          <button className="px-4 py-2 text-orange-600 ">
            Menu
          </button> 
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isVeg}
                onChange={handleToggle}
              />
              <div className="w-6 h-3 bg-gray-200 rounded-full peer 
                            peer-checked:bg-green-500 peer-checked:border-green-500
                            transition-all duration-200">
                <div className={`absolute top-0.5 left-0.5 w-2 h-2 rounded-full
                               bg-white shadow-md transform transition-transform duration-200
                               ${isVeg ? 'translate-x-3' : 'translate-x-0'}`}>
                </div>
              </div>
            </label>
            <span className={`font-semibold ${isVeg ? 'text-green-500' : 'text-gray-500'}`}>
              {isVeg ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
          </div>
          
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search food item..."
              className="w-64 pl-10 pr-4 py-2 bg-gray-100 border-b-2"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white border hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item,index) => ( 
            
            <div key={item?.id} className=" overflow-hidden">  
            {console.log("deeeeee",item)}
            <div className="relative">
            <img
                src={item?.image}
                alt={item?.name}
                className="w-full h-48 object-cover  rounded-lg"
              /> 
              {
                item?.item > 0 ?  
                <div className="absolute top-36 flex items-center gap-4">
                <button
                  onClick={decrement(index)}
                  className="w-10 h-10 rounded-lg bg-red-500 text-white font-bold text-xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                >
                  -
                </button>
                
                <span className="text-2xl font-semibold min-w-[3rem] text-center">
                  {item?.item}
                </span>
                
                <button
                  onClick={increment(index)}
                  className="w-10 h-10 rounded-lg bg-green-500 text-white font-bold text-xl hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  +
                </button>
              </div>
                
               
          
                : 
                <button
                onClick={() => addToCart(index)}
                className="px-3 absolute top-36 left-48 py-1 rounded border border-green-600  bg-white"
              >
                ADD
              </button>
              }
            
            </div>
             
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{item?.name}</h3>
                  
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    {item?.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-green-500" />
                    {item?.time}
                  </div>
                </div>
                <div className="mt-2">₹{item?.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 left-4 max-w-7xl mx-auto">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            View Cart ({cart.length} items)
          </button>
        </div>
      )}
      </div> 
      </div>
  )
}
export default SpecificRestaurant;



