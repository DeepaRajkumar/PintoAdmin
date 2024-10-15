import { BellIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Import notification and settings icons
import { useState } from 'react';

const HeaderBar = (props) => {
  const today = new Date(); // Get the current date
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);
  return ( 
  
    <div className="flex justify-between items-cente bg-white">
      {/* Left Side: Orders Section */}
      <div className="  p-4 ">
      <h1 className='text-lg font-medium'>{props.name}</h1>  
      </div>

      {/* Right Side: Date, Notification, Settings, User Image */}
      <div className="flex items-center space-x-6 ">
        <span className="mr-4 font-bold text-gray-600" >{formattedDate}</span>
        <BellIcon className="h-6 w-6  cursor-pointer" />
        <Cog8ToothIcon className="h-6 w-6 cursor-pointer" />
        <div className="mr-2"> <div className="w-8 h-8  rounded-full overflow-hidden border mr-4 ">
          <img
            src="/path/to/user-image.jpg" // Replace with the actual path to the user image
            alt="User"
            className="w-full h-full object-cover"
          />
        </div> 
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
