import React, { useState } from 'react';
// import OrderDetail  from "../../Component/Orders/OrderDetails"; 
import '../../css/Tabel.css'
const Table = ({ headers = [], data = [], itemsPerPage = 10, modelName, modelclickable }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [perPage, setPerPage] = useState(itemsPerPage);
  
  // Ensure data is an array
  const tableData = Array.isArray(data) ? data : [];
  
  // Calculate pagination values
  const totalItems = tableData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);
  
  // Get current page data
  const currentData = tableData.slice(startIndex, endIndex);
  
  const closeModal = () => {
    setSelectedOrder(null);
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full overflow-x-scroll thin-scrollbar">
        <table className="table-auto w-full">
          <thead className="sticky top-0 border border-gray-300">
            <tr className="bg-[#F1F5F9]">
              {headers.map((heading, index) => (
                <th
                  key={heading || index}
                  className="px-3 py-4 text-left text-sm font-medium text-gray-600 uppercase bg-sky-50 bg-blue-50 flex-grow"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{currentData}</tbody>
        </table>
        
        {modelclickable && selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] lg:w-[70%] xl:w-[60%] max-w-6xl p-6">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
              {modelName && React.createElement(modelName)}
            </div>
          </div>
        )} 

      </div>

    
          {/* Pagination Controls */}
          {totalItems > 0 && (
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Showing</span>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <span className="text-sm text-gray-700">of {totalItems}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            >
              Prev
            </button>
            
            {getPageNumbers().map(number => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === number
                    ? 'bg-blue-500 text-white'
                    : 'border hover:bg-gray-50'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
