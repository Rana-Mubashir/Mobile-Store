import React from 'react'
import Navbar from '../components/Navbar'

function NavbarPage() {
    const navbarLi=['Blog','Give Feedback','Track my order','My account']
  return (
    <div className="sticky top-0" >
      <Navbar navItems={navbarLi} />
    </div>
  )
}

export default NavbarPage
