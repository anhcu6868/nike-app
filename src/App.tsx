import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'
import { useEffect, useState } from 'react'
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
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  // Get the value from local storage on component mount
  useEffect(() => {
    if (localStorage.getItem('isDarkMode') === 'true') {
      window.document.documentElement.classList.add('dark')
    }
  }, [])
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark')
    // Save to local storage
    if (window.document.documentElement.classList.contains('dark')) {
      localStorage.setItem('isDarkMode', 'true')
    } else {
      localStorage.setItem('isDarkMode', 'false')
    }
  }
  return (
    <div className="animate-fadeIn dark:bg-night p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar onClose={() => setSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      {/* Darkmode */}
      <div className="fixed right-4 bottom-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night-50 cursor-pointer rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  )
}

export default App
