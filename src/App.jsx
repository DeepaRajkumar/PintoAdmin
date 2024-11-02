 
import Orders from './Component/Orders'
import {
  RouterProvider
} from "react-router-dom";  
import router from "./Router"
function App() {
  
  return (
    <>
      {/* <div className="min-h-screen  bg-gray-100" >
         <Orders></Orders>
    </div> */} 
    <RouterProvider router={router} />
    </>
  )
}

export default App
