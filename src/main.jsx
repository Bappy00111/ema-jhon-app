import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import addedProductLoaded from './AddedProductLoad.js';
import Shop from './components/Shop.jsx';
import Home from './components/Home.jsx';
import OrderReview from './components/OrderReview.jsx';
import Login from './components/Login.jsx';



const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
   {
    path:'/',
    element:<Shop></Shop>
   },
   {
    path:'/orderReview',
    element:<OrderReview></OrderReview>,
    loader:addedProductLoaded
   },
   {
    path:'/login',
    element: <Login></Login>   
  }
   
  ]
  
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
