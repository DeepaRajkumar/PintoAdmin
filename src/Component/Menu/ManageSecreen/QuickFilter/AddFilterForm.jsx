import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
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
   
  const [formState, setFormState] = useState({
    title: "",
    image: null,
    
  
    imagePreview: null, 
   
  });
 

  
    const subCategories = [
      { id: 'chicken', label: 'Chicken' },
      { id: 'mutton', label: 'Mutton' },
      { id: 'paneer', label: 'Paneer' },
      { id: 'mushroom', label: 'Mushroom' },
      { id: 'fish', label: 'Fish' },
      { id: 'prawn', label: 'Prawn' },
      { id: 'veg', label: 'Veg' },
      { id: 'beef', label: 'Beef' }
    ]; 
    
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
     
 
 
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };
    return ( 
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
            {subCategories.map((subCat) => (
              <div key={subCat.id} className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center">
                <PlusCircle className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm">{subCat.label}</span>
              </div>
            ))}
          </div>
        </div> 
        <div className="flex flex-row items-end space-x-4 m-8">

  
  <button type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>Add Category</button> 
  <button type="reset" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
</div>
      </div> 
      </form>
        </div> 
     
    );
  }; 
export default AddFilterForm;