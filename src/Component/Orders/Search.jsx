import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@heroicons/react/24/outline'

const DashboardFilters = () => {
  const [selectedDate, setSelectedDate] = useState('2024-09-20');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex  justify-between ml-6 py-4 px-2 ">
      {/* All Restaurants Dropdown */} 
      <div className="relative pr-28">
        <input
          type="text"
          placeholder="Search Order Id,Hotel,Phone"
          className="border border-gray-300 rounded-md px-1 py-1 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <svg
          className="w-4 h-4 absolute left-3 top-3 text-gray-400"
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

       <div  className="flex justify-between gap-3">
      {/* Search Bar */}
      {/* <div className="relative">
       
      <button className="border border-red-800 text-red-800 rounded-lg px-4 py-1 hover:bg-red-100">
      Create Custom Order
    </button>
      </div> */}

      {/* Live Orders Dropdown */}
      <div className="relative inline-block">
        <select className="border border-sky-400 bg-sky-50 text-blue-600 rounded-md px-1 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <option>Live Orders</option>
          <option>Completed Orders</option>
          <option>Cancelled Orders</option>
        </select>
      </div>

      {/* Filter Button */}
      <button className="border border-gray-400 rounded-md px-2 flex items-center space-x-1 bg-white focus:outline-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.293.707l-2 2A1 1 0 019 21v-8.586l-6.707-6.707A1 1 0 012 6V4z"
          ></path>
        </svg>
        <span>Filter</span>
      </button>

      {/* Date Picker */}
      <div className="relative">
      <div className="border border-gray-300 rounded-lg px-1 py-1 flex items-center  bg-white space-x-2 cursor-pointer">
        <CalendarIcon className="w-5 h-5 text-gray-500" />
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          isClearable
          placeholderText="Date range"
          className="pr-5  focus:outline-none text-gray-600"
        />
      </div>
      </div> 
      </div>
    </div>
  );
};

export default DashboardFilters;
