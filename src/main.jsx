import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './Components/Home/Home'
import { AboutUs } from './Components/AboutUs/AboutUs'
import { ContactUS } from './Components/ContactUS/ContactUS'
import { Facilities } from './Components/Facilities/Facilities'
import { Installation } from './Components/Facilities/Installation'
import { Transportation } from './Components/Facilities/Transportation'
import { Infrastructure } from './Components/InfraStructure/Infrastructure'
import { Enquiry } from './Components/Enquiry/Enquiry'
import { Products } from './Components/Products/Products'
import { DewatringPumps } from './Components/Products/DewatringPumps'
import { NonClogPumps } from './Components/Products/NonClogPumps'
import { SewagePumps } from './Components/Products/SewagePumps'
import './index.css'


const router=createBrowserRouter([
  {
  path:"/",
  element:<Layout />,
  children:[
    {index:true , element:<Home /> },
    {path:"about" , element:<AboutUs />},
    {path:"contact" , element:<ContactUS />},
    {path:"infrastructure" , element:<Infrastructure />},
    {path:"enquiry" , element:<Enquiry />},
    {path:"facilities",
      element:<Facilities />,
      children:[
        {path:"installation",element:<Installation />},
        {path:"transportation",element:<Transportation />}
      ]
    },
    {path:"products",
      element:<Products />,
      children:[
        {path:"dewateringpumps",element:<DewatringPumps />},
        {path:"nonclogpumps",element:<NonClogPumps />},
        {path:"sewagepumps",element:<SewagePumps />},
      ]
    }
  ]
}])

createRoot(document.getElementById('root')).render(


  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
