import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AddTrackPage from './pages/AddTrackPage.jsx'
import AddAlbumPage from './pages/AddAlbumPage.jsx'
import AddArtistPage from './pages/AddArtistPage.jsx'
import EditTrackPage from './pages/EditTrackPage.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'
import EditArtistPage from './pages/EditArtistPage.jsx'
import SelectAlbumPage from './pages/SelectAlbumPage.jsx'
import AddTrackToArtistPage from './pages/AddTrackToArtistPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "add-track", element: <AddTrackPage /> },
      { path: "add-album", element: <AddAlbumPage /> },
      { path: "add-artist", element: <AddArtistPage /> },
      { path: "edit-track/:id", element: <EditTrackPage /> },
      { path: "artists", element: <ArtistsPage /> },
      { path: "artists/edit/:id", element: <EditArtistPage /> },
      { path: "albums/add/:artistId", element: <AddAlbumPage /> },
      { path: "artists/:artistId/add-track/select-album", element: <SelectAlbumPage /> },
      { path: "artists/:artistId/albums/:albumId/add-track", element: <AddTrackToArtistPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)