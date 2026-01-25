import { useState } from 'react'
import Nav from './components/Nav'
import NewArrivalsSection from './components/NewArrivalsSection'
import ShoeDetail from './components/ShoeDetail'
import Sidebar from './components/Sidebar'
import { SHOE_LIST } from './constants'
import CartItem from './components/CartItem'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar onClose={() => setSidebarOpen(false)} isOpen={isSidebarOpen}>
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  )
}

export default App
