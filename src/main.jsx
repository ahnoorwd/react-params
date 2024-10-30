import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compononents/homee/Home.jsx';
import Header from './compononents/header/Header.jsx';
import About from './compononents/about/About.jsx';
import Contact from './compononents/contact/Contact.jsx';
import Users from './compononents/user/Users.jsx';
import UserDetails from './compononents/userdetails/UserDetails.jsx';
import Posts from './compononents/postss/Posts.jsx';
import Spost from './compononents/singlepost/Spost.jsx';
import Error from './compononents/errorpage/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/user",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'
        ),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },

      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },

      {
        path:'/user/:sUId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.sUId}`),
        element:<Spost></Spost>
      }
    
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
