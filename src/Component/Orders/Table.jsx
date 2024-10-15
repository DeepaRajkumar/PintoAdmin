import React,{useState} from "react";
import OrderDetail  from "./OrderDetails"; 
// import '../../css/table.css'
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
    status: "Prcossing",
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
    status: "Cancelled",
    amount: "₹750 NET BANKING",
    partnerId: "#123456",
    customer: "Ajay Kumar",
  },
  
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
    // More orders here...
  
const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  "On the way": "bg-orange-100 text-orange-700",
  Processing: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

const Table = () => { 

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
    <div className="container mx-4 my-8 w-[97%] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="  table-auto border rounded-lg">
          <thead>
            <tr className="bg-blue-500">
              {[
                "Date | Time",
                "Order ID",
                "Type",
                "Restaurant",
                "Phone",
                "Menu",
                "Status",
                "Amount",
                "Partner ID",
                "Customer",
              ].map((heading) => (
                <th
                  key={heading}
                  className=" py-2 text-center text-sm font-medium text-gray-600 bg-sky-50 bg-blue-50 w-12"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 w-12`}
                onClick={() => openOrderModal(orderssingle)}
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
                <td className="px-3 py-4 text-sm text-gray-800">{order.menu.slice(0, 10) + "..."}</td>
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
            ))}
          </tbody>
        </table> 
        {selectedOrder && (
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

         {/* Order Detail Component */}
         <OrderDetail />
       </div>
     </div>
        )}
     

      </div>
    </div>
  );
};

export default Table;
