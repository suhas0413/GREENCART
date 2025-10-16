import React, { useState } from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'

const Home = () => {
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  return (
    <div className='mt-10'> 
      <MainBanner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <Footer/>
      {showCartDrawer && <CartDrawer onClose={() => setShowCartDrawer(false)} />}
    </div>
  )
}

export default Home
