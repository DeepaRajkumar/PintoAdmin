import React, {useState} from 'react';
import Sidebar from '../../../GeneralComponent/SideBar.jsx';
import Header from '../../../GeneralComponent/HeaderBar.jsx'; 
import axios from 'axios'
import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import { useNavigate } from 'react-router-dom'; 
import ShowFlexElements from '../../../GeneralComponent/ShowFlexElement.jsx';
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
 
  const Modal = ({ isOpen, onClose,modalData }) => {   
    const [formState, setFormState] = useState({
      id:modalData?.id || "",
      title: modalData?.title || "",
      image: modalData?.image || null,
      imagePreview: null, 
     
    }); 
    const handleFileChange = (e) => {
      const file = e.target.files[0]; 
      console.log("lllllll",file)
      if (file) { 
        setFormState((prev) => ({ ...prev,image:file, imagePreview:URL.createObjectURL(file)
  
        }))
        
       
      }
    };
    const handleSubmit=(e)=>{  
      e.preventDefault();
      const formData = new FormData(); 
      formData.append('cuisine_title', formState.title); 
      
      if(formState.image){formData.append('image', formState.image)}

       let type = modalData? "patch" : "post" 
       let url = modalData? `http://127.0.0.1:8000/menu/cuisine/${formData.id}` : "http://127.0.0.1:8000/menu/cuisine" 

      axios[type](`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response);  
        setFormState({
          title: "",
          image:'',
          imagePreview: null,
        });
       
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
    const handleRemoveImage = () => {
      setFormState((prevState) => ({ ...prevState, image: null,imagePreview:null}))
    };  
    const handleReset = () => {
      setFormState({
        ...formState,
        image: null,
        imagePreview: null, // Clear the image preview
      });
    }
    if (!isOpen) return null; // Don't render modal if isOpen is false
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white p-4 rounded-lg w-1/2 h-100">  
        <button
                  onClick={onClose}
                  className="absolute top-1 right-2 text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              {modalData?  <h2 className="text-lg font-semibold mb-4">Add New Cuisine</h2> 
              
            : <h2 className="text-lg font-semibold mb-4">Edit Cuisine</h2> 
            }
          <h2 className="text-lg font-semibold mb-4">Add New Cuisine</h2> 
          <div className="mb-6 ml-8 "> 
            <form onSubmit={handleSubmit}>
              <div>
              <label className="block text-sm mb-2">Add cuisine title</label>
          <input 
            type="text" 
            placeholder="Enter to add" 
            className="border border-gray-300 rounded-lg px-3 py-2 w-56"
          />   
          <div className="mt-4">

          <label className="my-4">Add Image</label>
<div className="border border-dashed border-gray-300 rounded-lg p-8 w-64 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 mt-4">
      {/* Upload icon */}  
      
      <input
        type="file"
        id="Choose image"
        name="Choose image"
        onChange={handleFileChange}
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
        <span className="text-sm text-blue-500">Choose Image</span>
      )}
    </div> 
          </div>

    <div className="flex flex-row items-end space-x-4 m-8">

  
<button type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>Done</button> 
<button type="reset" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg" onClick={handleReset}>Cancel</button>
</div>
              </div>
            </form>
          
                
        </div> 
         
        </div>
      </div>
    );
  };
  

function ShowCategory(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [showAddForm, setShowAddForm] = useState(false); 
    const [cuisine, setCuisine] = useState([]) 
    const [categoryName, setCategoryName]=useState('') 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [modalData, setModalData] = useState([]);
    const location = useLocation(); 
    const navigate = useNavigate(); 
   
 
    const getCategory = () => {
      try {
        axios.get('http://127.0.0.1:8000/menu/cuisine'
        )
        .then(function (response) {
          
          console.log("deeeddd gweeet",response.data
          ); 
          setCuisine(response.data) 
          console.log("deeeddd gwt",cuisine); 
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


    const handleEdit = async (cuisineId) => { 
      console.log("categgggg",cuisineId)
      try {
        const data = await fetchCuisineDetails(cuisineId); // API call to fetch cuisine details
        setModalData(data);
        setIsModalOpen(true); // Open the modal
      } catch (error) {
        console.error("Error fetching cuisine details:", error);
      } 
     
    }; 
   
    console.log("categgggg",cuisine)
    
    return(
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Back"}  
         click= {()=>navigate("/menu/home-screen" , { state: { cuisine } })}
         /> 
         <div className="p-6">
         
         
          <div>   
              <div className="relative mb-8"> 
              <h2 className="text-lg font-semibold">Cuisine</h2> 
              <div className="flex justify-between items-center">
               <div> 
               <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300 mt-2 rounded-lg px-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
           <Search className="w-5 h-5 absolute left-3 top-10 text-gray-400" />
               </div>
             <button 
               onClick={() => setIsModalOpen(true)}
               className="px-4 py-2 bg-green-600 text-white rounded-lg"
             >
               Add new cuisine
             </button>
           </div>
            
          </div>
             <div className="mb-8">
           
            <div className="flex flex-wrap gap-5">
              {cuisine.map((cuisine) => (
               <ShowFlexElements 
               category={cuisine}  
               bottomName={true}
               edit={true} 
               setSub={()=>{handleEdit(cuisine.id)}} />
              ))}
            </div >   

            {categoryName? 
                 <div className="my-8">   
                 <h2 className="text-lg font-semibold">Sub Categories in {categoryName} </h2>  
                    <div className="border border-gray-200 rounded-lg">  
                     <div className="flex flex-wrap gap-4  m-4"> 
                     {cuisine.map((cuisine) => (
                    <ShowFlexElements 
                    category={cuisine}  
                    topName={true} 
                    style={"w-36 h-30"}
                    />
                   ))}
                       
                        </div>
                    
                     </div>
                   </div>
            : ''

            }
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} edit={modalData} />
            

          </div> 
            </div>
        

        </div>
     </div> 
     </div>
    )
  

}
export default ShowCategory
