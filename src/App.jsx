import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from "./AppLayout";
import LandingPage from './pages/LandingPage/LandingPage'
import { RouterProvider } from 'react-router'
import AboutUs from './pages/AboutUsPage/AboutUs';
import Cart from './pages/CartPage/Cart';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ContactUs from './pages/ContactUsPage/ContactUs';
import Checkout from './pages/CheckoutPage/Checkout';
import SubCategoryPage from './pages/SubCategoryPage/SubCategory';
import UserDashBoard from './pages/UserDashBoardPage/UserDashBoard';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      <Route index element={<LandingPage/>} />
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path="cart" element={<Cart/>} />
      <Route path="category/:cat" element={<CategoryPage/>} />
      <Route path="subcategory/:subcat" element={<SubCategoryPage/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="dashboard" element={<UserDashBoard/>} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
