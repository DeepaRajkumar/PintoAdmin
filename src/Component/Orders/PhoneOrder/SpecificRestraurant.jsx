import React, {useState} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Tail from '../../GeneralComponent/HeaderBar.jsx'; 
import Rest from "../../../assets/briyani.png"
import {MagnifyingGlassIcon as SearchIcon,ClockIcon } from '@heroicons/react/24/outline'; 
import { useNavigate } from 'react-router-dom';
function SpecificRestaurant() { 
  const [isExpanded, setIsExpanded] = useState(true); 
  return(

    <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100 ">
    <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded} />
    <div className="overflow-auto window-scrollbar" >
      <Tail name={"Phone Order"} /> 

      </div> 
      </div>
  )
}
export default SpecificRestaurant;

// Restaurant Menu Component
// Preview
// Code

// import React, { useState } from 'react';
// import { ChevronLeft, Search, Clock, Star, ShoppingCart } from 'lucide-react';

// const RestaurantMenu = () => {
//   const [cart, setCart] = useState([]);
  
//   const categories = [
//     "Biryani", "Parotta", "Chicken 65", "Mutton", "Food item", "Food item", "Food item"
//   ];

//   const menuItems = [
//     {
//       id: 1,
//       name: "Chicken biryani",
//       rating: 4.8,
//       time: "40-45 mins",
//       price: 299,
//       isVeg: false,
//       image: "/api/placeholder/300/200"
//     },
//     {
//       id: 2,
//       name: "Chicken biryani",
//       rating: 4.8,
//       time: "40-45 mins",
//       price: 299,
//       isVeg: false,
//       image: "/api/placeholder/300/200"
//     },
//     {
//       id: 3,
//       name: "Chicken biryani",
//       rating: 4.8,
//       time: "40-45 mins",
//       price: 299,
//       isVeg: false,
//       image: "/api/placeholder/300/200"
//     },
//     {
//       id: 4,
//       name: "Chicken biryani",
//       rating: 4.8,
//       time: "40-45 mins",
//       price: 299,
//       isVeg: false,
//       image: "/api/placeholder/300/200"
//     }
//   ];

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-red-600 p-4 text-white">
//         <div className="flex items-center gap-4 mb-4">
//           <button className="bg-white text-black px-3 py-1 rounded-md">
//             <ChevronLeft className="h-4 w-4" />
//             Back
//           </button>
//           <img src="/api/placeholder/40/40" alt="Chinese Wok" className="h-10" />
//           <h1 className="text-2xl font-bold">CHINESE WOK</h1>
//         </div>
        
//         <div className="flex gap-4 items-center">
//           <div className="flex-1">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search Restaurant..."
//                 className="w-full pl-10 pr-4 py-2 rounded-md text-gray-800"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>
//           <input
//             type="text"
//             placeholder="Restaurant Id"
//             className="w-40 px-4 py-2 rounded-md text-gray-800"
//           />
//           <button className="bg-blue-600 px-4 py-2 rounded-md">
//             View Menu
//           </button>
//         </div>
//       </div>

//       {/* Menu Section */}
//       <div className="max-w-7xl mx-auto p-4">
//         {/* Menu Tabs */}
//         <div className="flex gap-4 mb-6">
//           <button className="px-4 py-2 text-green-600 border-b-2 border-green-600">
//             Menu
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2">
//             <div className="w-4 h-4 rounded-full border-2 border-green-600"></div>
//             Veg
//           </button>
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search food item..."
//               className="w-full pl-10 pr-4 py-2 rounded-md border"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-3">Category</h2>
//           <div className="flex flex-wrap gap-3">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className="px-4 py-2 rounded-full border hover:bg-gray-100"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Menu Items Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {menuItems.map((item) => (
//             <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="px-3 py-1 rounded border border-red-600 text-red-600 hover:bg-red-50"
//                   >
//                     ADD
//                   </button>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <Star className="h-4 w-4 fill-current text-yellow-400" />
//                     {item.rating}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4" />
//                     {item.time}
//                   </div>
//                 </div>
//                 <div className="mt-2">₹{item.price}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Button */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-4 right-4 left-4 max-w-7xl mx-auto">
//           <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
//             <ShoppingCart className="h-5 w-5" />
//             View Cart ({cart.length} items)
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RestaurantMenu;