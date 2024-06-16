import React from 'react'
import ModelsPage from './pages/ModelsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import AccessoriesBarPage from './pages/AccessoriesBarPage'
import AccessoriesCardPage from './pages/AccessoriesCardPage'
import NewArrivalsPage from './pages/NewArrivalsPage'
import Footer from './components/Footer'
import NavbarPage from './pages/NavbarPage'
import Hero from './components/Hero'
function App() {
  return (
    <div>
      <NavbarPage />
      <Hero />
      <ModelsPage />
      <AccessoriesBarPage />
      <AccessoriesCardPage />
      <NewArrivalsPage />
      <TestimonialsPage />
      <Footer />
    </div>
  )
}
export default App
