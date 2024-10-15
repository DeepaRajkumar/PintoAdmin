import React, { useState } from 'react';
// import OrderDetail  from "../../Component/Orders/OrderDetails"; 
import '../../css/Tabel.css'
const Table = (props) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Open modal with detailed order information
  const openOrderModal = (order) => {
    setSelectedOrder(order);
  };

  // Close modal
  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-4 my-8 w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className=" border rounded-lg">
          <thead>
            <tr className="bg-blue-500">
              {props.headers.map((heading) => (
                <th
                  key={heading}
                  className="py-2 text-center text-sm font-medium text-gray-600 bg-sky-50 bg-blue-50"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{props.data}</tbody>
        </table>
        {props?.modelclickable && selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] lg:w-[70%] xl:w-[60%] max-w-6xl p-6">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>

              {/* Render the modal component dynamically */}
              {props.modelName && React.createElement(props.modelName)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
