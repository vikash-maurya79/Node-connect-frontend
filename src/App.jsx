
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from './LandingPage.jsx'
import AuthPage from './AuthPage.jsx'
import { AuthProvider } from '../context/authContext.jsx'
import { UserProvider } from '../context/userContext'
import { ProtectedRoute } from '../utils/ProtectedRoute.jsx'
import HomePage from './HomePage.jsx'
import { Toaster } from 'react-hot-toast'
import ForgotPasswordPage from './ForgotPasswordPage'
import ChatPage from './ChatPage'
import EditProfilePage from './EditProfilePage'


function App() {
  return (
    <>
      <Router>
        <Toaster position='top-center' />
        <AuthProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/forgot-password' element={<ForgotPasswordPage />}></Route>
              <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>}></Route>
              <Route path='/chat' element={<ChatPage />}></Route>
              <Route path='/edit-profile' element={<EditProfilePage />}></Route>
            </Routes>
          </UserProvider>
        </AuthProvider>

      </Router>
    </>



  )
}

export default App
