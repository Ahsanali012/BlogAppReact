import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import SingleBlog from './Pages/Blogs/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>

      },
      {
        path:"/blogs/:id",
        element:<SingleBlog/>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
