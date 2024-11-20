import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import { useNavigate } from 'react-router-dom';  
import Group from "../../../../assets/Group.png" 
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
 
const AddFilterForm = () => { 
  const [isExpanded, setIsExpanded] = useState(true);
  const [formState, setFormState] = useState({
    title: "",
    image: null,
    
  
    imagePreview: null, 
   
  });
 

    
  const [foodData, setFoodData] = useState([
    { category: 'Chicken', image: 'https://s3-alpha-sig.figma.com/img/6098/fff6/7dcb319919603d8def17d8cb2c597605?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGicRm5NDOw0TIYSFVRdmxASqvL76Zsbe~2glKhAawrH5ABm1p1H5Bza-dnCcwgxlNrfH2yyKmDYJgjzsvyl1yfFw23Bg6t1dk95sUgZ60qz-Nm3bfVEfz8sGCyVYq3NJMs~RR2SU08KCese2uf6-uH-prQ5XfmYZtD5AhMWZkulYzMrbedU16IadPbNWpIWPSApjEI2NQ0o07Okx62Tqeg-zfjKSOZKBYFAYFkQCskvzsaqGhuhynMJOnCLwtEnv8nOxgSK~FsgvIfF8Kc8CHcrDlHbAb7YJ1zMlRN4PS3uMoLmR~2L28rOGXL3ky1oQzRWNfbeMaiw3s6wPK2q6g__' },
    { category: 'Mutton', image: 'https://s3-alpha-sig.figma.com/img/637a/7548/2b43f6ceeeccddc70b7cb5b8629052c3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wol5CzLCDCnHlWv2RdEHpybGp4T3T5Noqp95ngtjluPNifu3eD8tDMIyJFUxxYsDiXu18s9NFVn2-nlDNeNZecGrHPgvCqs-aV8KNjtG8SiPwjOlsqT7vgWNJa1WXcNDsBCvkFftxSxID-u4JIgl6Sq1jaXUosucr4zzVNl8~P5YzKJ1d8MZcSQhVaPqa~smnJdNfu2Kg0klbsdyergcaEghLnBcz9uk180xoeTot19kALYXVDQYkXv-a84obCjnz-Rvvg1O1D0laH-GCZXYgjuyJG-89LBUaQVUODsv7kMJ4kfPoe58hidyHNkwOKO7Zk8gHSYEWk6-rFtFXRtDtQ__' },
    { category: 'Paneer', image: 'paneer.jpg' },
    { category: 'Mushroom', image: 'mushroom.jpg' },
    { category: 'Fish', image: 'fish.jpg' },
    { category: 'Prawn', image: 'prawn.jpg' },
    { category: 'Veg', image: 'veg.jpg' },
    { category: 'Beef', image: 'beef.jpg' },
  ]); 
    
    const handleSubmit=(e)=>{  
      e.preventDefault();
      const formData = new FormData(); 
      formData.append('title', formState.title); 
      
      if(formState.image){formData.append('image', formState.image)}

    

      axios.post('https://demo-menu.onrender.com/create/category', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response);  
        setFormState({
          title: "",
          subCategory: "",
          selectedCuisines: [],
          dropdownOpen: false,
          imagePreview: null,
        });
       
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
    const navigate = useNavigate(); 
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
 
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };
    return (  
      <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Back"}  
         click= {()=>{navigate("/menu/home-screen/quick-filter") }   }
         /> 
        <div className='m-6'> 
              <h2 className="text-lg font-semibold"> Add New Quick Filter </h2> 
              <form onSubmit={handleSubmit}>
             <div className="p-6 border rounded-lg m-2">
        <div className="flex ">
        <div className="mb-6">
          <label className="block text-sm mb-2">Filter Title</label> 
          
          <input 
             id ="title"
            type="text" 
            placeholder="Biryani" 
            className="border border-gray-300 rounded-lg px-3 py-2 w-54" 
            values = {formState.title}
             onChange={(e)=> setFormState((prevState) => ({ ...prevState, title: e.target.value }))
            }
          />
        </div>
  
        <div className="mb-6 ml-8 ">
          <label className="block text-sm mb-2">Add sub category</label>
          <input 
            type="text" 
            placeholder="Enter to add" 
            className="border border-gray-300 rounded-lg px-3 py-2 w-56"
          />
        </div> 
        </div>
       

  
        <div>
          <label className="block text-sm mb-4">Selected Sub category</label>
          <div className="grid grid-cols-4 gap-4">
          {foodData.map((item, index) => (
        <div
          key={index}
          
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
        >  
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="ml-2"><img src={Group} /></span>
            <span className="ml-2">{item.category}</span>
            <span className="ml-2" onClick={()=>handleRemoveItem(index)}>x</span>
        </div>
          <img src={item.image} alt={item.category} className="border w-44 h-40"/>
          
        </div>
      ))}
          </div>
        </div> 
        <div className="flex flex-row items-end space-x-4 m-8">

  
  <button type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>ADD QUICK FILTER</button> 
  <button type="reset" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
</div>
      </div> 
      </form>
        </div> 
      </div> 
      </div>
    );
  }; 
export default AddFilterForm;