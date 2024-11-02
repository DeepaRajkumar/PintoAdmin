import { BellIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Import notification and settings icons
import { useState } from 'react';
import Logo from "../../assets/logo.png"

const HeaderBar = (props) => {
  const today = new Date(); // Get the current date
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);
  return ( 
  
    <div className="flex justify-between items-center bg-white  p-4  overflow-hidden sticky top-0">
    {/* Left Side: Logo and Orders Text */}
    <div className="flex items-center">
     
      <h1 className="text-lg font-medium">{props.name}</h1>
    </div>
  
    {/* Right Side: Date, Notification, Settings, User Image */}
    <div className="flex items-center gap-4">
      <span className="text-gray-600">{formattedDate}</span>
      <BellIcon className="ml-4 h-6 w-6 text-gray-600  cursor-pointer" />
      <Cog8ToothIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
      <div className="w-6 h-6 rounded-full overflow-hidden border">
        <img
          src="/path/to/user-image.jpg" // Replace with the actual path to the user image
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  
  );
};

export default HeaderBar;
