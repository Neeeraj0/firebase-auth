import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register.jsx';
import toast, { Toaster } from 'react-hot-toast';
import VerifyPhone from './components/auth/VerifyPhone.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import { UserProvider } from './context/UserContext.jsx';


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Router>
        <Routes>
          <Route path="/login" element={<App />} />
          <Route path="/" element={<Register />} />
          <Route path='/verify-phone' element={<VerifyPhone />} />
          <Route path='/home' element={<Dashboard />} />
        </Routes>
        <Toaster />
    </Router>
  </UserProvider>
)
