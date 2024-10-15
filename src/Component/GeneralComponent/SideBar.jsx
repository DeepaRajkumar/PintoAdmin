import { Squares2X2Icon, DocumentTextIcon,BuildingStorefrontIcon,LifebuoyIcon,FireIcon,ChartBarSquareIcon,ChartBarIcon,SpeakerWaveIcon,MapIcon,ChatBubbleLeftRightIcon,UserGroupIcon } from '@heroicons/react/24/outline'; // Import icons
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // For dropdown arrows
import { useState } from 'react'; 
import "../../css/sideBar.css"

function SideBar() {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMerchantOpen, setIsMerchantOpen] = useState(false); 
  const [isDeliveryOpen, setDeliveryOpne] = useState(false) 
  const [isMenu, setMenu] = useState(false)


  return (
    <div className="p-6 w-64 bg-[#000033]  min-h-screen text-white">
      {/* Logo and App Name */}
      <div className="mb-6 flex items-center">
        <img src="/logo.png" alt="Pinto Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-white font-bold text-lg uppercase font-serif header-space">PINTO</h1>
      </div>

      {/* Sidebar Navigation */}
      <nav className="space-y-4">
        {/* Dashboard */}
        <div className="flex items-center mb-4">
          <Squares2X2Icon className="h-5 w-5 mr-3" />
          <span>Dashboard</span>
        </div>

        {/* Orders Section */}
        <div>
          <div 
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setIsOrdersOpen(!isOrdersOpen)}
          >
            <div className="flex items-center">
              <DocumentTextIcon className="h-5 w-5 mr-3" />
              <span>Orders</span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 transform ${isOrdersOpen ? 'rotate-180' : ''}`} />
          </div>
          {isOrdersOpen && (
            <ul className="ml-8 space-y-2">
              <li>Phone orders</li>
              <li>Order history</li>
              <li>Manage order</li>
            </ul>
          )}
        </div>

        {/* Merchant Section */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setIsMerchantOpen(!isMerchantOpen)}
          >
            <div className="flex items-center">
              <BuildingStorefrontIcon className="h-5 w-5 mr-3" />
              <span>Merchant</span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 transform ${isMerchantOpen ? 'rotate-180' : ''}`} />
          </div>
          {isMerchantOpen && (
            <ul className="ml-8 space-y-2">
              <li>Delivery partner</li>
              <li>Menu</li>
            </ul>
          )}
        </div>
         {/* Delivery partner */} 
         <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setDeliveryOpne(!isDeliveryOpen)}
          >
            <div className="flex items-center">
              <MapIcon className="h-5 w-5 mr-3" />
              <span>Delivery partner</span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 transform ${isMerchantOpen ? 'rotate-180' : ''}`} />
          </div>
          {isDeliveryOpen && (
            <ul className="ml-8 space-y-2">
              <li>Salaried</li>
              <li>Delivery based</li> 
              <li>Onboarding</li>
            </ul>
          )}
        </div> 
        {/*  Menu */} 
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setMenu(!isMenu)}
          >
            <div className="flex items-center">
              <FireIcon className="h-5 w-5 mr-3" />
              <span>Menu</span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 transform ${isMerchantOpen ? 'rotate-180' : ''}`} />
          </div>
         
        </div>
        {/* Analytics & Report */}
        <div className="flex items-center mb-4">
          <ChartBarSquareIcon className="h-5 w-5 mr-3" />
          <span>Analytics & Report</span>
        </div> 
        <div className="flex items-center mb-4">
          <SpeakerWaveIcon className="h-5 w-5 mr-3" />
          <span>Marketing</span>
        </div> 
        <div className="flex items-center mb-4">
          <ChartBarIcon className="h-5 w-5 mr-3" />
          <span>Finance</span>
        </div> 
        <div className="flex items-center mb-4">
          <UserGroupIcon className="h-5 w-5 mr-3" />
          <span>Staffs</span>
        </div> 
        <div className="flex items-center mb-4">

          <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3" />
          <span>Chat & Suppport</span>
        </div>
      </nav> 
      <div className="flex  mt-20 mb-4 w-full">
                                <div className=" flex items-center mb-4"> 
                                <LifebuoyIcon className="h-5 w-5 mr-3" />
                                    <span>Help Center</span>
                                    
                                </div>
                            </div>
    </div>
  
  
  );
}

export default SideBar;
