import React, {useState} from 'react';
import Sidebar from '../GeneralComponent/SideBar.jsx';
import Tail from '../GeneralComponent/HeaderBar.jsx';
import OrderStats from '../GeneralComponent/RoundedStatus.jsx';
import Search from './Search.jsx';
import Table from '../GeneralComponent/Tabel.jsx';
import OrderDetail from './OrderDetails.jsx'; 

function PhoneOrder() { 


const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  "On the way": "bg-orange-100 text-orange-700",
  Processing: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};
const orders = [
  {
    date: "12/09/2024 15:00 hr",
    orderId: "#123456",
    type: "Call",
    restaurant: "Zaitoon",
    phone: "9988776655",
    menu: "Chicken burger, Pizza, Coke",
    status: "On the way",
    amount: "₹750 UPI",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  },
  {
    date: "12/09/2024 15:00 hr",
    orderId: "#123456",
    type: "Chat",
    restaurant: "Thalapakkatti",
    phone: "9988776655",
    menu: "Chicken burger, Pizza, Coke",
    status: "Delivered",
    amount: "₹750 NET BANKING",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  },
  {
    date: "12/09/2024 15:00 hr",
    orderId: "#123456",
    type: "Chat",
    restaurant: "Thalapakkatti",
    phone: "9988776655",
    menu: "Chicken burger, Pizza, Coke",
    status: "Delivered",
    amount: "₹750 NET BANKING",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  },
  {
    date: "12/09/2024 15:00 hr",
    orderId: "#123456",
    type: "Chat",
    restaurant: "Thalapakkatti",
    phone: "9988776655",
    menu: "Chicken burger, Pizza, Coke",
    status: "Delivered",
    amount: "₹750 NET BANKING",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  },
  {
    date: "12/09/2024 15:00 hr",
    orderId: "#123456",
    type: "Chat",
    restaurant: "Thalapakkatti",
    phone: "9988776655",
    menu: "Chicken burger, Pizza, Coke",
    status: "Processing",
    amount: "₹750 NET BANKING",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  }



  
  // Add more orders here...
];
const orderssingle = 
    { 
        name: "customer names",
      id: "#123456",
      restaurant: "Zaitoon Multi Cuisine",
      date: "12/09/2024",
      time: "09:00 pm",
      status: "On the way",
      paymentMethod: "UPI",
      items: [
        { name: "Chicken biryani boneless", price: "₹249", quantity: 1 },
        { name: "Mayonese 50gm", price: "₹29", quantity: 2 },
      ],
      total: "₹340",
      deliveryPartner: {
        name: "Rajesh Kumar",
        phone: "9988776655",
        liveLocation: "#67867",
      },
      deliveryAddress: "2nd Street, Indira Nagar, Tambaram, Chennai - 06",
      customer: {
        name: "Ajay Kumar",
        phone: "9988776655",
        email: "ajay123@gmail.com",
      },
    }
const headers = [
  "Date | Time",
  "Order ID",
  "Order By",
  "Menu",
  "Customer",
  "Phone",
  "Amount",
  "Status",
  "Partner ID",
  "Customer"
] 
const [selectedOrder, setSelectedOrder] = useState(null);

// Open modal with detailed order information
const openOrderModal = (order) => { 
  console.log("deepa34444")
  setSelectedOrder(order);
};

// Close modal
const closeModal = () => {
  setSelectedOrder(null);
}; 


const data = orders.map((order, index) => (
  <tr
    key={index}
    className={`${
      index % 2 === 0 ? "bg-gray-50" : "bg-white"
    } hover:bg-gray-200 w-12`}
    onClick={ () => {console.log("deepa"),openOrderModal(orderssingle)}}
  >
    <td className=" px-3 py-4  text-sm text-gray-800">{order.date}</td>
    <td className="  px-3 py-4 text-sm text-gray-800">{order.orderId}</td>
    <td className=" px-3 py-4 text-sm text-gray-800">
      {order.type === "Call" ? (
        <span role="img" aria-label="phone">
          📞
        </span>
      ) : (
        <span role="img" aria-label="chat">
          💬
        </span>
      )}
    </td>
    <td className="px-3 py-4 text-sm text-gray-800">
      {order.restaurant}
    </td>
    <td className="px-3 py-4 text-sm text-gray-800">{order.phone}</td>
    <td className="px-3 py-4 text-sm text-gray-800">{order.menu.slice(0, 25) + "..."}</td>
    <td className="px-3 py-4 text-sm">
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}
      >
        {order.status}
      </span>
    </td>
    <td className="px-3 py-4 text-sm text-gray-800">{order.amount}</td>
    <td className="px-3 py-4 text-sm text-gray-800">{order.partnerId}</td>
    <td className="px-3 py-4 text-sm text-gray-800">{order.customer}</td>
  </tr>
)) 





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
    <div className="flex  bg-gray-100 ">
      <Sidebar />
      <div >
        <Tail name={"Orders"} />
        <div className="">
          <div className="p-4">
            <div className="flex space-x-12 mb-2">
              {stats.map((stat, index) => (
                <OrderStats
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
            <Search />
            <div className=" overflow-x-auto" >
              <Table 
              headers={headers}
              data={data} 
              />
            </div> 
            {
  selectedOrder && (
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
         {console.log("deeoaosdfasdo")}
        {/* Render the modal component dynamically */}
        <OrderDetail/>
      </div>
    </div>
  )
}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneOrder;