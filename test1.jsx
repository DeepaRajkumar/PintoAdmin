import React, { useState, useEffect, useRef } from "react";

const Table = ({ headers, data, modelName, modelclickable }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const tableRef = useRef(null);
  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      if (tableRef.current) {
        const windowHeight = window.innerHeight;
        const tableTop = tableRef.current.getBoundingClientRect().top;
        const newHeight = windowHeight - tableTop - 20; // 20px for bottom margin
        setTableHeight(`${newHeight}px`);
      }
    };

    updateTableHeight();
    window.addEventListener('resize', updateTableHeight);

    return () => window.removeEventListener('resize', updateTableHeight);
  }, []);

  const openOrderModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-4 my-8 w-full overflow-hidden" ref={tableRef}>
      <div className="overflow-x-auto" style={{ height: tableHeight }}>
        <table className="w-full border rounded-lg">
          <thead>
            <tr className="bg-blue-500">
              {headers.map((heading) => (
                <th
                  key={heading}
                  className="py-2 text-center text-sm font-medium text-gray-600 bg-sky-50 bg-blue-50 w-12"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data}</tbody>
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
    </div>
  );
};

export default Table;