import { Outlet } from 'react-router-dom'; // Importante: Outlet
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      
      <main className="main-content">
        {/* Aquí se cargará HomePage o AddTrackPage según la URL */}
        <Outlet />
      </main>
    </div>
  )
}

export default App;