import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.css'

import App from './App.jsx'
import HomePage from './Pages/HomePage.jsx'
import AddTrackPage from './Pages/AddTrackPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",       
        element: <HomePage />,
      },
      {
        path: "add-track", 
        element: <AddTrackPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
