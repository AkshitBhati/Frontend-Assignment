import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AuthNavbar from './Components/AuthNav/NavAuth'
import LandingNavbar from './Components/LandingNav/LandingNavbar'
import SignIn from './Components/SignIn/SignIn'
import Signup from './Components/Signup/Signup'

const App = () => {
  // STATE FOR CONDITIONAL RENDERING OF NAVBAR
  const [currentPage, setCurrentPage] = useState("landing")

  return (
    <Router>
      {/*navigation bars in Route components */}
      <Routes>
        <Route path="/" element={<LandingNavbar />} />
        <Route path="/auth/*" element={<AuthNavbar />} />
      </Routes>

      {/*Routes for conditional rendering */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
