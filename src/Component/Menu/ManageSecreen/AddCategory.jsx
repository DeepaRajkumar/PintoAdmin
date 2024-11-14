import React, {useState} from 'react';
import Sidebar from '../../GeneralComponent/SideBar.jsx';
import Header from '../../GeneralComponent/HeaderBar.jsx'; 
import { useLocation } from 'react-router-dom';
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
  
    return ( 
        <div className='m-6'> 
              <h2 className="text-lg font-semibold"> Add Category</h2>
             <div className="p-6 border rounded-lg m-2">
        <div className="flex ">
        <div className="mb-6">
          <label className="block text-sm mb-2">Add category title</label>
          <input 
            type="text" 
            placeholder="Biryani" 
            className="border border-gray-300 rounded-lg px-3 py-2 w-64"
          />
        </div>
  
        <div className="mb-6 ml-8 ">
          <label className="block text-sm mb-2">Add sub category</label>
          <input 
            type="text" 
            placeholder="Type and click Enter to add" 
            className="border border-gray-300 rounded-lg px-3 py-2 w-96"
          />
        </div>
        </div>
       
  
        <div className="mb-6">
          <label className="block text-sm mb-2">Add Image</label>
          <div className="border border-dashed border-gray-300 rounded-lg p-8 w-64 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-blue-500">Choose image</span>
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
        <div className="flex flex-row items-end space-x-2">
  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
</div>
      </div>
        </div>
     
    );
  };
function AddCategory(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [showAddForm, setShowAddForm] = useState(false); 
    const location = useLocation();
    const categories = location.state?.categories || []; 
    console.log("asdfasdfsdfs,categories",categories)
    return(
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100"> 
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={showAddForm?"Menu":"Next"} 
        //  Clic={() => setShowAddForm(false)}
         /> 
         <div className="p-6">
          <div className="relative w-80 mb-8">
            <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300 rounded-lg px-2 py-1 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Search className="w-5 h-5 absolute left-3 top-2 text-gray-400" />
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Category</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Add category
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <div key={category.title} className="relative group">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <PenSquare className="w-4 h-4 text-gray-600 hover:text-gray-800" />
                  </div>
                  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md">
                    <img src={category.image} alt={category.title} className="w-16 h-16 object-cover mb-2" />
                    <span className="text-sm">{category.title}</span>
                  </div>
                </div>
              ))}
            </div> 
            {showAddForm?  
              
              <div className="overflow-auto">
                <AddCategoryForm />
              </div>
           
            
        :''}
          </div>
        </div>
     </div> 
     </div>
    )
  

}
export default AddCategory