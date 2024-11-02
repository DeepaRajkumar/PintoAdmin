import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Squares2X2Icon,
  DocumentTextIcon,
  BuildingStorefrontIcon,
  LifebuoyIcon,
  FireIcon,
  ChartBarSquareIcon,
  ChartBarIcon,
  SpeakerWaveIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import "../../css/SideBar.css" 
import Logo from "../../assets/logo.png"
const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    orders: false,
    merchant: false,
    delivery: false,
    menu: false
  });
  const location = useLocation();

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const MenuItem = ({ icon: Icon, text, to, submenu, menuKey }) => {
    const hasSubmenu = submenu && submenu.length > 0;
    
    return (
      <div className="mb-4">
        <div 
          className={`flex items-center justify-between cursor-pointer hover:bg-[#000044] rounded-lg p-2 ${
            location.pathname === to ? 'bg-[#000044]' : ''
          }`}
          onClick={() => hasSubmenu ? toggleMenu(menuKey) : null}
        >
          <div className="flex items-center min-w-0">
            <Icon className="h-5 w-5 min-w-[20px]" />
            {isExpanded && (
              <span className="ml-3 truncate">
                {to ? <Link to={to}>{text}</Link> : text}
              </span>
            )}
          </div>
          {hasSubmenu && isExpanded && (
            <ChevronDownIcon 
              className={`h-4 w-4 transform transition-transform duration-200 ${
                openMenus[menuKey] ? 'rotate-180' : ''
              }`} 
            />
          )}
        </div>
        {hasSubmenu && isExpanded && openMenus[menuKey] && (
          <ul className="ml-8 mt-2 space-y-2">
            {submenu.map((item, index) => (
              <li 
                key={index}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {item.to ? (
                  <Link to={item.to}>{item.text}</Link>
                ) : item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const menuItems = [
    { 
      icon: Squares2X2Icon, 
      text: "Dashboard", 
      to: "/" 
    },
    {
      icon: DocumentTextIcon,
      text: "Orders",
      menuKey: "orders",
      submenu: [
        { text: "Manage order", to: "/orders" },
        { text: "Phone orders" },
        { text: "Order history" }
      ]
    },
    {
      icon: BuildingStorefrontIcon,
      text: "Merchant",
      menuKey: "merchant",
      submenu: [
        { text: "Delivery partner" },
        { text: "Menu" }
      ]
    },
    {
      icon: MapIcon,
      text: "Delivery partner",
      menuKey: "delivery",
      submenu: [
        { text: "Salaried" },
        { text: "Delivery based" },
        { text: "Onboarding" }
      ]
    },
    { 
      icon: FireIcon, 
      text: "Menu",
      menuKey: "menu"
    },
    { 
      icon: ChartBarSquareIcon, 
      text: "Analytics & Report" 
    },
    { 
      icon: SpeakerWaveIcon, 
      text: "Marketing" 
    },
    { 
      icon: ChartBarIcon, 
      text: "Finance" 
    },
    { 
      icon: UserGroupIcon, 
      text: "Staffs" 
    },
    { 
      icon: ChatBubbleLeftRightIcon, 
      text: "Chat & Support" 
    }
  ];

  return (
    <div 
      className={`p-6 ${
        isExpanded ? 'w-64' : 'w-20'
      } bg-[#000033] min-h-screen text-white transition-all duration-300`}
    >
      <div 
        className="mb-6 ml-2 flex items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img 
          src={Logo} 
          alt="Pinto Logo" 
          className="h-5 w-5" 
        />
        {isExpanded && (
          <h1 className="ml-2 font-bold text-lg uppercase font-serif tracking-[0.5em]">
            PINTO
          </h1>
        )}
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>

      <div className="mt-12">
        <MenuItem 
          icon={LifebuoyIcon} 
          text="Help Center" 
        />
      </div>
    </div>
  );
};

export default SideBar;
