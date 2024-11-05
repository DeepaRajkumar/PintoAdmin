import React, {useState} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Tail from '../../GeneralComponent/HeaderBar.jsx'; 
import Rest from "../../../assets/briyani.png"
import {MagnifyingGlassIcon as SearchIcon,ClockIcon } from '@heroicons/react/24/outline'; 
import { useNavigate } from 'react-router-dom';
function RestaurantList() { 
  const [isExpanded, setIsExpanded] = useState(true); 
  const navigate = useNavigate();
  const restaurants = [
    {
      id: 1,
      name: 'Sangeetha Hotel',
      rating: 4.8,
      deliveryTime: '40-45 mins',
      cuisines: ['Southindian', 'Chinese', 'Tibetan', 'North Indian'],
      imageUrl: Rest
    },
    // Duplicate entries as shown in the image
  ].concat(Array(7).fill({
    id: 1,
    name: 'Sangeetha Hotel',
    rating: 4.8,
    deliveryTime: '40-45 mins',
    cuisines: ['Southindian', 'Chinese', 'Tibetan', 'North Indian'],
    imageUrl: Rest
  }));
  return (
    <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100 ">
      <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="overflow-auto window-scrollbar" >
        <Tail name={"Phone Order"} />
       
          <div className="p-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border rounded-lg" onClick={()=>{ navigate("/orders/phone-orders")}}>Back</button>
            <button className="px-4 py-2 text-sm text-white bg-[#030714] rounded-lg">Restaurant</button>
          </div>
          <div className="my-6">
          <h2 className="text-lg font-medium mb-3">New Order</h2>
          <div className="flex gap-3">
           
              <div className="relative w-72">
                <SearchIcon className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Restaurant Name or Id "
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
           
            
            <button className="px-6 py-1 text-white bg-[#004680] rounded-md">
              View 
            </button>
          </div>
        </div>

        <h2 className="text-lg font-medium">Top restaurants in Coimbatore</h2>
            {/* Restaurant Grid */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className=" overflow-hidden " onClick={()=>{ navigate("/orders/phone-orders/specific-restaurant")}}>
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="border rounded-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{restaurant.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{restaurant.rating}</span>
                  </div>
                  <span className="text-gray-500"><ClockIcon className='w-4 h-4 text-green-500'/></span>
                  <span className="text-gray-500">{restaurant.deliveryTime}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {restaurant.cuisines.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Showing: 08 of 20</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-md text-sm">Prev</button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-md text-sm ${
                  page === 1 ? 'bg-blue-600 text-white' : 'border'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 border rounded-md text-sm">Next</button>
          </div>
        </div>
      </div>
          </div>
        
      </div>
    </div>
  );
}

export default RestaurantList