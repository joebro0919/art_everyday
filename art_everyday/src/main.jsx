import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favorites from './Favorites.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement: <div>404 Not Found</div>
    },
    {
      path:'/favorites',
      element:<Favorites/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
