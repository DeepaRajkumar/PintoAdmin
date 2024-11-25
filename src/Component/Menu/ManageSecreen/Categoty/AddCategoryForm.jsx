import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import Group from "../../../../assets/Group.png" 
import { useNavigate } from 'react-router-dom';
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
  const [isExpanded, setIsExpanded] = useState(true); 
  const [selectedCuisineIds, setSelectedCuisineIds] = useState([]);
  const [cuisines, setCuisines] = useState([
    {id:1,title:"Italian"},
    {id:2,title:"Chinese"},
    {id:3,title:"Tibetan"},
    {id:4,title:"Multi cuisine"},
  ]);   
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
 
  const navigate = useNavigate();
  const toggleDropdown = () => setFormState((prev) => ({...prev,dropdownOpen:!prev.dropdownOpen})); 
  const handleAddCuisine = () => {
    if (newCuisine.trim() && !cuisines.includes(newCuisine)) {
      setCuisines((prev) => [...prev, newCuisine]);
      setNewCuisine("");
    }
  };
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
      console.log("sadfsdsds",selectedCuisineIds)
      e.preventDefault();
      const formData = new FormData(); 
      formData.append('category_title', formState.title); 
      formData.append('cuisine_ids',selectedCuisineIds)
      
      if(formState.image){formData.append('image', formState.image)}

    

      axios.post('http://127.0.0.1:8000/menu/category', formData, {
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
        setSelectedCuisineIds([])
       
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
  const handleRemoveItem = (index) => {
    const updatedData = [...foodData];
    updatedData.splice(index, 1);
    setFoodData(updatedData);
  };
  const handleCheckboxChange = (value,  key = "selectedCuisines") => { 
    console.log("uuuuu",value)
    setFormState((prev) => {
      const updatedSelectedCuisines =
        key === "selectedCuisines"
          ? prev.selectedCuisines.includes(value.title)
            ? prev.selectedCuisines.filter((item) => item !== value.title)
            : [...prev.selectedCuisines, value.title]
          : prev.selectedCuisines;
  
      // Update both states
     
  
      return {
        ...prev,
        selectedCuisines: updatedSelectedCuisines,
      };
    }); 
    setSelectedCuisineIds((prevIds) => {
      const isAlreadySelected = prevIds.includes(value.id);
      if (isAlreadySelected) {
        // Remove ID if it's already selected
        return prevIds.filter((itemId) => itemId !== value.id);
      } else {
        // Append ID if it's not already selected
        return [...prevIds, value.id];
      }
    });

    console.log("dddddd",selectedCuisineIds)
  };
  // Remove the selected image
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  }; 
  console.log("dddddd4444",selectedCuisineIds)
    return (  
      <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
      <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
      <div className=" overflow-auto window-scrollbar" >
       <Header name={"Back"}  
       click= {()=>{navigate("/menu/home-screen/manage-screen")}}
       /> 
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
                key={cuisine.id}
                className="flex items-center space-x-2 mb-1"
              >
                <input
                  type="checkbox"
                  checked={formState.selectedCuisines.includes(cuisine.title)}
                  onChange={() => handleCheckboxChange(cuisine)}
                />
                <label>{cuisine.title}</label>
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
          <label className="block text-sm mt-6 mb-4">Add Sub category</label>
          {/* <div className="grid grid-cols-4 gap-4">
            {subCategories.map((subCat) => (
              <div key={subCat.id} className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center">
                <PlusCircle className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm">{subCat.label}</span>
              </div>
            ))} 
          </div> */} 
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

  
  <button type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>Add Category</button> 
  <button type="reset" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
</div>
      </div> 
      </form>
        </div> 
        </div> 
        </div>
    );
  }; 
export default AddCategoryForm;