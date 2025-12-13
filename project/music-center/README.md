# Music Center - Technical User Manual

In this manual you will find concise instructions to set up and interact with the Music Center application.

## Getting Started

The application consists of a Node.js/Express backend and a React/Vite frontend. You will need to run them in separate terminal sessions.

### Backend Setup
Navigate to the `backend` directory and start the server:

```bash
cd backend
npm run server
```
*Runs on `http://localhost:3000`*

### Frontend Setup
Navigate to the `frontend` directory and start the development server:

```bash
cd frontend
npm run dev
```
*Accessible at `http://localhost:5173`*

## API Reference

All API endpoints are prefixed with `/api`.

### Artists
*   **GET** `/api/artists` - Retrieve all artists.
*   **POST** `/api/artists` - Create a new artist.
*   **GET** `/api/artists/:id` - Retrieve a specific artist.
*   **PUT** `/api/artists/:id` - Update an artist.
*   **DELETE** `/api/artists/:id` - Remove an artist.

### Albums
*   **GET** `/api/albums` - Retrieve all albums.
*   **POST** `/api/albums` - Create a new album.
*   **GET** `/api/albums/:id` - Retrieve a specific album.
*   **PUT** `/api/albums/:id` - Update an album.
*   **DELETE** `/api/albums/:id` - Remove an album.

### Tracks
*   **GET** `/api/tracks` - Retrieve all tracks.
*   **POST** `/api/tracks` - Create a new track.
*   **GET** `/api/tracks/:id` - Retrieve a specific track.
*   **PUT** `/api/tracks/:id` - Update a track.
*   **DELETE** `/api/tracks/:id` - Remove a track.

Start using the API by sending requests to `http://localhost:3000/api/<resource>`.

The Frontend consumes the API through the `services` directory. It employs the `axios` library for HTTP requests.
As you use the web application, you'll be triggering functions that format the data and call the methods defined by the mentioned services.