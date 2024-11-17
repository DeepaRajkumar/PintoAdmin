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
 
const AddCategoryForm = () => { 
   
  const [formState, setFormState] = useState({
    title: "",
    image: null,
    selectedCuisines: [],
    dropdownOpen: false,
    imagePreview: null, 
   
  });
  
  const [newCuisine,setNewCuisine] = useState('')
  const [cuisines, setCuisines] = useState([
    "Italian",
    "Chinese",
    "Tibetan",
    "Multi cuisine",
  ]);   
  
 
  
  const toggleDropdown = () => setFormState((prev) => ({...prev,dropdownOpen:!prev.dropdownOpen})); 
  const handleAddCuisine = () => {
    if (newCuisine.trim() && !cuisines.includes(newCuisine)) {
      setCuisines((prev) => [...prev, newCuisine]);
      setNewCuisine("");
    }
  };
  
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
      // Handle image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    console.log("lllllll",file)
    if (file) { 
      setFormState((prev) => ({ ...prev,image:file, imagePreview:URL.createObjectURL(file)

      }))
      
     
    }
  }; 
 
  const handleCheckboxChange = (value,key = "selectedCuisines") => { 
    setFormState((prev) => {  
      if (key === "selectedCuisines") {
        return {
          ...prev,
          selectedCuisines: prev.selectedCuisines.includes(value)
            ? prev.selectedCuisines.filter((item) => item !== value)
            : [...prev.selectedCuisines, value],
        };
      }

    });
  };
  // Remove the selected image
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };
    return ( 
        <div className='m-6'> 
              <h2 className="text-lg font-semibold"> Add Category</h2> 
              <form onSubmit={handleSubmit}>
             <div className="p-6 border rounded-lg m-2">
        <div className="flex ">
        <div className="mb-6">
          <label className="block text-sm mb-2">Add category title</label>
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
        <div className="mb-6 ml-12 ">
          <label className="block text-sm mb-2 w-40">Select Cuisine</label> 
         
       <div className="flex border rounded px-2 py-1 justify-between  bg-white cursor-pointer">
          <div
       
       
      >
        {formState.selectedCuisines.length > 0
          ? formState.selectedCuisines[0]
          : "Select Cuisine"} 
           
      </div>  
      <div>
      <ChevronDownIcon
       onClick={toggleDropdown}
          className={`h-4 w-4 transform transition-transform m-2 duration-200 ${
            formState.dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div> 
      </div>
      {formState.dropdownOpen && (
        <div className="absolute z-10 border bg-white shadow-lg mt-1 w-40 rounded">
          <div className="p-2">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine}
                className="flex items-center space-x-2 mb-1"
              >
                <input
                  type="checkbox"
                  checked={formState.selectedCuisines.includes(cuisine)}
                  onChange={() => handleCheckboxChange(cuisine)}
                />
                <label>{cuisine}</label>
              </div>
            ))}
            <hr className="my-2" />
            
            <input
    type="text"
    className=" w-36  "
    placeholder="Add new cuisine"
    value={newCuisine}
    onChange={(e) => setNewCuisine(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleAddCuisine(); // Call the add function on Enter key
      }
    }}
  />
            
          </div>
        </div>
      )}
        </div> 
        </div>
       
  
        <div className="border border-dashed border-gray-300 rounded-lg p-8 w-64 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
      {/* Upload icon */} 
      <input
        type="file"
        id="Choose image"
        name="Choose image"
        onChange={handleFileChange}
        accept="image/png"
        style={{display: "none"}} // Hides the file input
      /> 
      {
        !formState.image ? <Upload className="w-8 h-8 text-gray-400 mb-2" onClick={()=>{document.getElementById('Choose image').click()}}/> :''
      }
     
      
      {/* File input */}
    

      {/* Preview the image if it's uploaded */}
      {formState.imagePreview ? (
        <div className="flex flex-col items-center">
          <img
            src={formState.imagePreview}
            alt="Preview"
            className="w-32 h-32 object-fit rounded-lg mb-2"
          />
          <button
            onClick={handleRemoveImage}
            className="bg-red-500 text-white px-4 py-1 rounded-lg"
          >
            Remove Image
          </button>
        </div>
      ) : (
        <span className="text-sm text-gray-500">No image selected</span>
      )}
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
export default AddCategoryForm;