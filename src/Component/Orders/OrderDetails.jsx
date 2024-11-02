import React from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid' 

function OrderDetail (){  
  console.log("deeepadfds")
    return(
   <div className="container w-auto">
      {/* Header: Restaurant Information */}
      <div className="flex justify-between items-start border-b pb-2 ">
        <div>
          <h1 className="text-xl font-semibold">
            Zaitoon Multi Cuisine Restaurant, #12345
          </h1>
          <p className="text-sm text-gray-500">
            2nd Street, Indira Nagar, Tambaram, Chennai - 06
          </p>
        </div>
        <div className="text-right pr-5 mt-2">
          <p className="text-sm text-gray-700 font-semibold">
            9944556677 | 9944556677
          </p>
          <p className="text-sm text-gray-500">Timings: 10:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Order Information */}
    

      {/* Order Items and Customer Instructions */}
      <div className="flex space-x-6">
        {/* Items Section */} 
      
        <div className="w-1/2">
          <div  className="border  rounded-lg"> 
          <div   className="p-4 mb-2">
            <div > 
             <div  className="flex justify-between" > 
                <div>
                    <p className="text-lg font-semibold">
                        Order Id: <span className="text-blue-600">#12345</span>
                    </p>
                
                </div>
                  

                <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-600 border border-green-600 text-white rounded-md text-[10px]">
                        Paid
                    </span>
                    <span className="px-2 py-1 bg-orange-100 border border-orange-500 text-orange-500 rounded-md text-[10px]">
                        On the way
                    </span>
                    <button className="flex justify-between px-2 py-1 bg-sky-100 border border-sky-500   text-sky-500 rounded-lg text-[10px]">
                        Action 
                        <ChevronDownIcon className="w-2 h-2 ml-2 mt-1" />
                    </button>
               </div> 

            </div>
            
            
            <p className="text-sm text-gray-500">
                Ordered on 12/09/2024, 09:00 pm
            </p>
            </div>
            
          </div> 
          <hr />  
          
          <div className="px-4 pb-2 mb-2">
          <table className="w-full ">
              <thead>
                <tr >
                  <th className="text-left py-2 w-3/5">Item</th>
                  <th className="text-left py-1 w-1/5">Price</th>
                  <th className="text-left py-2 w-1/5">Review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-gray-700">
                    Chicken biryani boneless, serves 1-2
                  </td>
                  <td className="py-1">₹249</td>
                  <td className="py-2 text-yellow-500">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700">Mayonese 50gm</td>
                  <td className="py-2">₹29</td>
                  <td className="py-2 text-yellow-500">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700">
                    Chicken biryani boneless, serves 1-2
                  </td>
                  <td className="py-2">₹249</td>
                  <td className="py-2 text-yellow-500">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700">Mayonese 50gm</td>
                  <td className="py-2">₹29</td>
                  <td className="py-2 text-yellow-500">★★★★★</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-gray-500">Customer Instructions</div>
          </div>
           
          </div>
        </div>

        {/* Delivery Information Section */}
        
        <div className="w-1/2">
          <div className="border  rounded-lg"> 
            <div className="flex justify-between  p-2 ">
               <div>
               <h3 className="font-semibold mb-2">Delivery Address</h3>
                <p className="text-gray-700">2nd Street, Indira Nagar, Tambaram, Chennai - 06</p>
                <a href="#" className="text-blue-600 text-sm">Show in map</a>

               </div>
                 <div className="text-right">
                 <h3 className="font-semibold mb-2" >Ajay Kumar</h3>
            <p className="text-gray-700">9988776655</p>
            <p className="text-gray-500 text-sm">ajay123@gmail.com</p>
                 </div>
            </div>
            
          <hr/>
                <div className="p-2 ">
             <h3 className="font-semibold">Delivery Partner</h3> 
             <tabel>
                <tbody>
                   <tr className="gap-2"> 
                   <td className="py-1 "><p >#12321</p></td>
                    <td className="py-1">  <p className=" text-gray-700">Rajesh Kumar</p></td> 
                    <td className="py-1 "> <p className=" text-green-600 font-bold text-xm">Online</p></td>
                    <td className="py-1 pl-4 text-yellow-500 ">★★★★★</td>
                   </tr> 
                   <tr className= "gap-2">
                   <td className="py-1 w-1/4"><p ></p></td>
                    <td className="py-1 w-2/4">  <p className=" text-gray-700">9988776655</p></td> 
                    <td colSpan="2" className="  py-1 "> <p className=" text-blue-600 font-medium text-[14px]">Live Location</p></td>
                   </tr> 
                   <tr className= "gap-2">
                   <td className="py-1 w-1/4"><p ></p></td>
                    <td className="py-1 w-2/4">  <p className=" text-gray-700">9988776655</p></td> 
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
             </tabel>
             </div>
        

             
             <hr/>
             <div className="flex justify-between p-2 ">
                    <div className= "w-1/2">
                    <h3 className="font-semibold text-gray-500 mb-2">Order Value</h3> 
                    <table>
                        <tbody>
                            <tr className=" py-8">
                                <td className =" py-2 text-[12px]">Sub total</td> 
                                <td className ="py-2 font-bold text-[12px] text-right">₹249</td>
                            </tr> 
                            <tr className=" py-8">
                                <td className="py-2 text-[12px]">Shipping fee</td>
                                <td className ="py-2 font-bold text-[12px] text-right">₹51</td>
                            </tr> 
                            <tr className=" py-8">
                                <td className="py-2 text-[12px]">Delivery fee</td>
                                <td className ="py-2 font-bold text-[12px] text-right">₹0</td>
                            </tr> 
                            <tr className=" py-8">
                                <td className=" py-2 text-[12px]">Tax</td>
                                <td className =" py-2 font-bold text-[12px] text-right">₹40</td>
                            </tr> 
                            <tr className=" py-8">
                                <td className=" py-2 font-bold text-[12px]">Total</td>
                                <td className =" py-2 font-bold text-[12px] text-right">₹340</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                    <div>
                    <h3 className="font-semibold text-gray-500 mt-4  mb-2">Payment Detail</h3>
                    <p className="text-gray-700 text-[12px]">UPI ID: RAJKUMAR@OKAXIS</p>
                    <p className="text-gray-500 text-[12px]">12/09/2024 12:09 pm</p>
                    <p className="text-green-600 font-semibold text-[12px]">Payment Successful</p>  
                    </div>
                 </div>
             
           

            
                 
                    
          </div>


         
        </div>
      </div>
    </div>
    )
} 

export default OrderDetail;