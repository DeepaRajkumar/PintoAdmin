import React from 'react';
import { PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'; 

function OrderStats(props) { 
    
  return ( 
   
 
    <div
    key={props.index}
    className={`border-2 ${props.border} rounded-lg  py-2 w-[150px] text-center bg-white`}
  >
    <div className={`text-3xl font-bold ${props.color}`}>{props.value}</div>
    <div className="font-bold mt-4 mb-2 text-base text-gray-800">{props.label}</div>
    {props.subLabel ? (
      <div className="text-xs font-medium text-gray-600 font-sans">{props.subLabel}</div>
    ) : (
      <div className="text-xs font-medium text-gray-600 font-sans ">{props.status}</div>
    )} 
    <div className="flex justify-center mt-2 space-x-2 text-gray-400">
    <PhoneIcon className="w-4 h-4 my-1 " />
    <span>25</span>
    <DevicePhoneMobileIcon className="w-4 h-4 my-1" />
    <span>25</span>
  </div>
  </div>
    
    
  );
}

export default OrderStats;