import React, {useState} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Tail from '../../GeneralComponent/HeaderBar.jsx';
import OrderStats from '../../GeneralComponent/RoundedStatus.jsx';
import Search from '../Search.jsx';
import Table from '../../GeneralComponent/Tabel.jsx';
import OrderDetail from '../OrderDetails.jsx'; 
import PhoneOrderForm from './PhoneOrderForm.jsx';
function PhoneOrder() { 
  const [isExpanded, setIsExpanded] = useState(true);












  const stats = [
    { label: 'Live Orders', value: '50', change: '10% Increased', color: 'text-blue-600', border: 'border-blue-300' },
    { label: 'Completed', value: '1.5k', change: '10% Decreased', color: 'text-green-600', border: 'border-green-300' },
    { label: 'Cancelled', value: '05', change: '10% Decreased', color: 'text-red-600', border: 'border-red-300' },
    {
      id: 4,
      value: '10',
      label: 'Delayed',
      change: '10% Decreased',
      color: 'text-red-800',
      border: 'border-red-800',
      iconColor: 'text-purple-500'
    },
    { label: 'Total Orders', value: '1052', subLabel: '01 - 07 Sep,24', color: 'text-indigo-600', border: 'border-indigo-300' },
    { label: 'Order Ratio', value: '20', change: '10% Decreased', color: 'text-pink-600', border: 'border-pink-300' },
  ];
 
  return (
    <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100 ">
      <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="overflow-auto" >
        <Tail name={"Phone Order"} />
        
          <div className="p-4">
            <div className="flex justify-between  gap-6 mt-2 mb-5 ">
              {stats.map((stat, index) => (
                <OrderStats 
                isExpanded={isExpanded}
                  border={stat.border}
                  key={index}
                  color={stat.color}
                  value={stat.value}
                  label={stat.label}
                  subLabel={stat.subLabel}
                  status={stat.change}
                />
              ))}
            </div>
            <PhoneOrderForm />
           
           
          </div>
        
      </div>
    </div>
  );
}

export default PhoneOrder;