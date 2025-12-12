import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AddTrackPage from './pages/AddTrackPage.jsx'
import AddAlbumPage from './pages/AddAlbumPage.jsx'
import AddArtistPage from './pages/AddArtistPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "add-track", element: <AddTrackPage /> },
      { path: "add-album", element: <AddAlbumPage /> },
      { path: "add-artist", element: <AddArtistPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
