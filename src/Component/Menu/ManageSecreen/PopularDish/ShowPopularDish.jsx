import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react'; 
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import ShowFlexElements from '../../../GeneralComponent/ShowFlexElement.jsx';
import CategoryCard from '../../../GeneralComponent/CategoryCard.jsx'; 
import { useNavigate } from 'react-router-dom';  
import Spot from"../../../../assets/banner.jpg" 
import { 
    Menu as MenuIcon,
    Search,
    PlusCircle,
    Home,
    ShoppingCart,
    Store,
    Truck,
    Settings,
    BarChart2,
    MessageSquare,
    HelpCircle,
    Bell,
    PenSquare,
    Upload,
    ChevronLeft
  } from 'lucide-react'; 
  function ShowPopularDish(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [categories, setCategories] = useState([]) 
    const [categoryName, setCategoryName]=useState('')
    const navigate = useNavigate();
    const getCategory = () => {
        try {
          axios.get('https://demo-menu.onrender.com/category'
          )
          .then(function (response) {
            
            console.log("deeeddd gweeet",response.data.data
            ); 
            setCategories(response.data.data) 
            console.log("deeeddd gwt",categories); 
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
          console.log('error accured')
        }
      } 
      useEffect(()=>{
        console.log("new items new itesm")
        getCategory()
      },[]) 
      const [foodData, setFoodData] = useState([
        { category: 'Chicken mom\'s', image: 'https://s3-alpha-sig.figma.com/img/9eb8/c66a/1edb0c0f7495dd86912e60b3ebf719f8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qszuyh-BbJNW8Q4HwISoSQUjCZrNevSbjBEn5bS3wZ9Nz1MfiW~mdyQWSS2umehkHXsYpa-~Ts1nK9VpG35HoZW8ytu-qbj6aG5GdWNxTh5mlZkqdMOXGsbzGTMoI9kPC3joNAv3KamS26-hhoR5MAW9C5oEkXnlUKkjOsP7MPElBM9KZKu5UqbE1D~rtomo~PfvknPmeTAJ-IFCXBOvkZq1jyWyzVczvMSp0DpDq7W4u7jUZe3iudP8cMFvGkobC84ngb2eBnjmpKHOtqCXTOVOk819Ou9fgi9OQ5vjs7Gqb7CH1UmuWdl~grDmyJTt2j8S3MbicjbD11ORAO9RmQ__', price: 249, totalOrders: 1.2 },
        { category: 'Chicken biryani', image: 'https://s3-alpha-sig.figma.com/img/389e/e771/110fb31952405db41223979d6127af9b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BtZRvVI0NQb~a42adX46-5rwx1z-Xb9VoZvCqVLwgOYL4eVv1ap2k5ytNr713y0ncWrmHa4rw7NQ-M-6A5KHnYbr4QTyik2kELRD-Tga-SwZ~xq-6CUxstHXmSYVPuR-aEpHflRXQ~mrRZkrXzCo8b9pbseRa9dus9ueIBouLLcxshNWAaxTthiJOlAyiWxDP65lChHPF3MP17o1wsU42ueA4U2QRtPqP4-rnm3yalGSgAQa7ovk5wSicYMcPO9mmNvelne~yRjovVjV9lpyQuj3TAy0OVMmWXO49hnljDuV8hYTWuQ2-HY14VDu7ZSUgy8GN-ZsCPmEnytDmFxOdQ__', price: 249, totalOrders: 1.2 },
        { category: 'Shawarma', image: 'https://s3-alpha-sig.figma.com/img/9eb8/c66a/1edb0c0f7495dd86912e60b3ebf719f8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qszuyh-BbJNW8Q4HwISoSQUjCZrNevSbjBEn5bS3wZ9Nz1MfiW~mdyQWSS2umehkHXsYpa-~Ts1nK9VpG35HoZW8ytu-qbj6aG5GdWNxTh5mlZkqdMOXGsbzGTMoI9kPC3joNAv3KamS26-hhoR5MAW9C5oEkXnlUKkjOsP7MPElBM9KZKu5UqbE1D~rtomo~PfvknPmeTAJ-IFCXBOvkZq1jyWyzVczvMSp0DpDq7W4u7jUZe3iudP8cMFvGkobC84ngb2eBnjmpKHOtqCXTOVOk819Ou9fgi9OQ5vjs7Gqb7CH1UmuWdl~grDmyJTt2j8S3MbicjbD11ORAO9RmQ__', price: 240, totalOrders: 1.2 },
        { category: 'Paratha', image: 'https://s3-alpha-sig.figma.com/img/9eb8/c66a/1edb0c0f7495dd86912e60b3ebf719f8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qszuyh-BbJNW8Q4HwISoSQUjCZrNevSbjBEn5bS3wZ9Nz1MfiW~mdyQWSS2umehkHXsYpa-~Ts1nK9VpG35HoZW8ytu-qbj6aG5GdWNxTh5mlZkqdMOXGsbzGTMoI9kPC3joNAv3KamS26-hhoR5MAW9C5oEkXnlUKkjOsP7MPElBM9KZKu5UqbE1D~rtomo~PfvknPmeTAJ-IFCXBOvkZq1jyWyzVczvMSp0DpDq7W4u7jUZe3iudP8cMFvGkobC84ngb2eBnjmpKHOtqCXTOVOk819Ou9fgi9OQ5vjs7Gqb7CH1UmuWdl~grDmyJTt2j8S3MbicjbD11ORAO9RmQ__', price: 249, totalOrders: 1.2 },
      ]);
     
      const handleDragStart = (event, index) => {
        event.dataTransfer.setData('index', index);
      };
     
      const handleDragOver = (event) => {
        event.preventDefault();
      }; 
      const handleDrop = (event, targetIndex) => {
        event.preventDefault();
        const sourceIndex = event.dataTransfer.getData('index');
        const updatedData = [...foodData];
        [updatedData[sourceIndex], updatedData[targetIndex]] = [updatedData[targetIndex], updatedData[sourceIndex]];
        setFoodData(updatedData);
      };
     
      const handleRemoveItem = (index) => {
        const updatedData = [...foodData];
        updatedData.splice(index, 1);
        setFoodData(updatedData);
      };
    return( 
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Back"}  
         click= {()=>{navigate("/menu/home-screen") }   }
         />   
          <div className="m-4">
            
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-lg font-semibold">Popular Dish</h2> 
             <button 
               onClick={()=>{navigate("/menu/home-screen/add-filter-form" , { state: { categories } });}}
               className="px-4 py-2 border border-blue-500 rounded-lg text-blue-600"
             >
               
              Contact Support
             </button>
           </div> 
           <div className="mb-4"> 
               <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300  rounded-lg px-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
              <Search className="w-5 h-5 absolute left-[233px] top-[145px] text-gray-400" />
               </div> 
               <div className="grid grid-cols-2 gap-4">
     {foodData.map((item, index) => (
       <div
         key={index}
         className="border rounded-md p-4"
         draggable
         onDragStart={(event) => handleDragStart(event, index)}
         onDragOver={handleDragOver}
         onDrop={(event) => handleDrop(event, index)}
       >
         <div className="flex items-center justify-between">
           <div className="flex items-center">
             <img src={item.image} alt={item.category} className="w-24 h-24 mr-2" />
             <span>{item.category}</span>
           </div>
           <span className="cursor-pointer" onClick={() => handleRemoveItem(index)}>x</span>
         </div>
         <div className="mt-2 flex justify-between items-center">
           <span>Rs. {item.price}</span>
           <span>Total orders: {item.totalOrders}k</span>
         </div>
       </div>
     ))}
   </div>
          </div>
         </div> 
         </div>
         )
  } 
  export default ShowPopularDish;