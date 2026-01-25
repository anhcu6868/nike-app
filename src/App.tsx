import { useState } from 'react'
import Nav from './components/Nav'
import NewArrivalsSection from './components/NewArrivalsSection'
import ShoeDetail from './components/ShoeDetail'
import Sidebar from './components/Sidebar'
import { SHOE_LIST } from './constants'
import Cart from './components/Cart'

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  }
})
const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar onClose={() => setSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  )
}

export default App
