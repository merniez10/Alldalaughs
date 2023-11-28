import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Random from './pages/Random.jsx'
import Favorites from './pages/Favorites.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Random />,
      },
      {
        path: '/Favorites',
        element: <Favorites />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
