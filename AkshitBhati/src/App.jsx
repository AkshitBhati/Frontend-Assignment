import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AuthNavbar from './Components/Nav-Auth/NavAuth'
import LandingNavbar from './Components/Navbar/LandingNavbar'
import SignIn from './Components/SignIn/SignIn'

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
      </Routes>
    </Router>
  )
}

export default App
