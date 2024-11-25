import React, {useState,useEffect} from 'react';
import Sidebar from '../GeneralComponent/SideBar.jsx';
import Header from '../GeneralComponent/HeaderBar.jsx'; 
import { useNavigate } from 'react-router-dom';  
import ShowFlexWithoutImage from "../GeneralComponent/ShowFlexWithoutImage.jsx";
import axios from 'axios'
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
    PenSquare
  } from 'lucide-react'; 
  import Briyani from "../../assets/briyani.png" 
  import Spot from"../../assets/banner.jpg";
  import Phone from "../../assets/Phone.png";
  import Editpencil from "../../assets/Vector.png";
  import CategoryCard from '../GeneralComponent/CategoryCard.jsx';



function Menu(){ 
    const [isExpanded, setIsExpanded] = useState(true); 
    const [categories, setCategories] = useState([]); 
    const [cuisine, setCusine]  = useState([]);
    const [viewall,setViewAll] = useState(false) 
    const navigate = useNavigate(); 
    
    const getCategory = () => { 
      console.log("sadfsdds")
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
        axios.get('http://127.0.0.1:8000/menu/cuisine'
        )
        .then(function (response) {
          
          console.log("cusine cusine",response.data
          ); 
          setCusine(response.data) 
          console.log("deeeddd gwt",cusine); 
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
    
      const filters = ['All', 'Breakfast', 'Lunch', 'Snacks'];
    return (
        <div className="grid grid-cols-[auto,1fr] h-screen bg-gray-100">
        <Sidebar isExpanded ={isExpanded} setIsExpanded={setIsExpanded}/>  
        <div className=" overflow-auto window-scrollbar" >
         <Header name={"Menu"} />
     
        <div className="p-8" >
        <div className="relative w-80">
            <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-2 py-3 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg
            className="w-5 h-5 absolute left-3 top-4 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
            </svg> 
       </div>  
       {/* Category */}
       <div className="mb-8 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Category</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/manage-screen" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex flex-row gap-5">
              {viewall&&categories?.length>4? categories: categories?.slice(1, 5).map((category) => ( 
                <CategoryCard key={category.title} {...category} />
              ))}
              <CategoryCard add={true} isAdd={true} categories={categories} />
            </div>
          </div> 
          
             {/* Quick Filter */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Quick filter</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/quick-filter" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (  
                <ShowFlexWithoutImage key={filter} title={filter}  
                edit={true}/>

                
              ))}
              <ShowFlexWithoutImage isAdd={true}  
              click={()=>{navigate("/menu/home-screen/add-filter-form" , { state: { categories } });}}
              />
            </div>
          </div>
                {/* city spotlight */} 
                <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">City Spotlight</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/show-spot-light" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (  
                 <CategoryCard image={Spot} style="w-80 h-48"
                 imagestyle="w-80 h-48 p-2 border rounded-lg" />

                
              ))}
            <CategoryCard style="w-44 h-44 hover:border-orange-500 " isAdd={true} editImage={Editpencil} editName="customize" imagestyle="w-30 h-30 mb-2" />
            </div>
          </div> 

          {/* Popular dish */} 
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Popular Dish/You've tried</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/show-popular-dish" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (  
                 <CategoryCard image={"https://s3-alpha-sig.figma.com/img/389e/e771/110fb31952405db41223979d6127af9b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BtZRvVI0NQb~a42adX46-5rwx1z-Xb9VoZvCqVLwgOYL4eVv1ap2k5ytNr713y0ncWrmHa4rw7NQ-M-6A5KHnYbr4QTyik2kELRD-Tga-SwZ~xq-6CUxstHXmSYVPuR-aEpHflRXQ~mrRZkrXzCo8b9pbseRa9dus9ueIBouLLcxshNWAaxTthiJOlAyiWxDP65lChHPF3MP17o1wsU42ueA4U2QRtPqP4-rnm3yalGSgAQa7ovk5wSicYMcPO9mmNvelne~yRjovVjV9lpyQuj3TAy0OVMmWXO49hnljDuV8hYTWuQ2-HY14VDu7ZSUgy8GN-ZsCPmEnytDmFxOdQ__"} style="w-32 h-32 mb-3"
                 imagestyle="w-32 h-32 border rounded-lg " bottomtitle={"Food Name"} />

                
              ))}
            <CategoryCard style="w-32 h-32 hover:border-blue-500 " editImage={Phone} editName="Contact Support" isAdd={true} imagestyle="w-30 h-30 mb-2" />
            </div>
          </div> 
            {/* New Hotels */}
          <div className="mb-8 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">New Hotels/Top brands</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/manage-screen" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex flex-row gap-5">
              {viewall&&categories?.length>4? categories: categories?.slice(1, 5).map((category) => ( 
                <CategoryCard key={category.title} {...category}  image={"https://s3-alpha-sig.figma.com/img/3839/8472/ce732fb2bec3be996d4a4ca65a6adb6c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFyOtoxqrHtsxkCuGOT7lZL8nwnLFzKcQrMtjBxP0W-CYCg-w5RW779e~WQMXBbI30gZkD4SsWC7GDohJDdA~hpo-esSBAcnoXdyJrMMe6DwVLUMBeokB4gCAXdBF7js0RFe0elpjFXFMGQertZkZ6ipGxMI5aFOc~5ytFBqe3d~BoFmrXbEls0zLd9rOX5yp0LkOi0dgIaG2IhgFIDj1I7k8dCrD8MACu56RW290AMO4JSjSTRKIRV6vi9L4NYnqfgfwAavd7U0hj50t1c5Lduq3bSh6a2Ap5c-M5yH7S6B3RB1NlcAbnrq2s3-on~1qMT74VnJhmT9EAYGdjNcCQ__"} style="w-32 h-32 mb-3" imagestyle="w-24 h-24 ml-4" />
              ))}
              <CategoryCard add={true} isAdd={true} categories={categories} />
            </div>
          </div> 
          {/* Banquets in your city */} 
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Banquets in your city</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/quick-filter" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (  
                 <CategoryCard image={"https://s3-alpha-sig.figma.com/img/6696/19a7/5686c1513ff41728a69e68492304a92a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eRlZ1YweyoEeQAxX2RSoXxktf2Es8Xazb1ELPUbmmlEzX97rTyywxGHNuV9pYeUQqjeBzJtQ-natJphycX6bKgwpF3yZMYypokqrsVuJy4NONsiTlXS3d21Z0yNBAzqNNwub~8bLrAxH3aElmO11-LJ7tTbGx5d4iQhpKPBXK-PLsVoA070rDWUbrGQjKCjGH6IeKGShcEYqOCSfqdEKQf6razq4oztxtKyXOivPv0NW9ZLEwn5HCgUqgXQ8yjBnBT2nNxArPqz86u4w10SJkprGLdItrrzqyFNdqkXsrbYAubbMsEKlcsDwpj9TkjmEOfTvOKx6Gl079nwHbw3S3Q__"} style="w-52 h-40 "
                 imagestyle="w-52 h-40 border rounded-lg" textonimage={ <div class="absolute bottom-0 left-0 right-0 inset-0 bg-black bg-opacity-50 text-white p-4 space-y-2 border rounded-lg"> 
                 <div className="mt-20"> 
                 <h5 class="text-md font-bold">Food Pro - 2024</h5>
                  <p style={{fontSize:"10px"}}> Chennai Food Festival</p>
                  <div class="text-xs flex justify-between items-center">
                    <span style={{fontSize:"10px"}}>20 Aug 24 4pm - 10pm</span>
                    <span style={{fontSize:"10px"}}>Island Ground</span>
                  </div>
                   </div>
                
                </div>} />

                
              ))}
            <CategoryCard style="w-36 h-40 hover:border-orange-500 " isAdd={true} add={true} />
            </div> 
            {/* Quick filter-restuarant */} 
            <div className="mb-8 mt-4">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Quick filter- Restaurant</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/quick-filter" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (  
                <ShowFlexWithoutImage key={filter} title={filter}  
                edit={true}/>

                
              ))}
              <ShowFlexWithoutImage isAdd={true}  
              click={()=>{navigate("/menu/home-screen/add-filter-form" , { state: { categories } });}}
              />
            </div>
          </div>
          </div> 
          {/* Cuisine  */} 
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
            
              <h2 className="text-lg font-semibold">Cuisine</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home7788");navigate("/menu/home-screen/show-cuisine" , { state: { cuisine } });}} >View all</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {cuisine.map((cusine) => (  
                 <CategoryCard image={cusine.image} style="w-32 h-32 mb-3"
                 imagestyle="w-32 h-32 border rounded-lg" bottomtitle={cusine.name} />

                
              ))}
            <CategoryCard style="w-32 h-32 hover:border-orange-500 " add={true}  isAdd={true}  />
            </div>
          </div> 
          {/* Authentic style of cooking */} 
          <div className="mb-8 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Authentic style of cooking</h2>
              <button className="text-orange-500 text-sm" onClick={()=>{console.log("manage manage home");navigate("/menu/home-screen/manage-screen" , { state: { categories } });}} >View all</button>
            </div>
            <div className="flex flex-row gap-5">
              {viewall&&categories?.length>4? categories: categories?.slice(1, 4).map((category) => ( 
                <CategoryCard key={category.title} {...category} image={"https://s3-alpha-sig.figma.com/img/abb3/6a36/8d278810a265ae909336633450cf6af9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbJ31RiaAmVV7lOyZph1NcvQnJZojubGBs3zTUGZajgR139v7P7Ebg-VuVLWUqPpIrBBiZFHQqpyxUFTfXwrjh9MedqV3RJTgA3ADMzqJhWB31~RGQCRmyQF~57x5QhPpnXtd5HQruRNRdc3zACb6k9tQynfvlxLXm16Gwjkj08YTnpGncajF45ahuMVSIDdk3ftMPIjDRFqFEtGXkuW5X844fczMOSxdvh~B6IRnW2JdqZk3aTO3iq-2jeFHK-9QwoxrUs63VidBTox2Qb9vZLJW7B~C2J0V8IF2rhFHXRWHb7BwKiZ3gs0C9SZPJ6Pncw3IWRhgrVTJnKdyR8AFw__"}  style="w-56 h-50" imagestyle="w-56 h-28 border rounded-t-lg" 
                AdditonalText={
                   <div className="p-2"> <h5 className="text-sm bold">WOW MOMO's</h5>
                   <p style={{fontSize:"10px"}}>Authentic style of cooking and Delicious momos</p>
                   </div>
                }
                />
              ))}
              <CategoryCard add={true} isAdd={true} categories={categories} style={"w-56 h-42"}/>
            </div>
          </div> 
        </div>
        </div> 
        </div>
        )
}
export default Menu;