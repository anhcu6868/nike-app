import { BiMoon, BiSun } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import NewArrivalsSection from './components/NewArrivalsSection'
import ShoeDetail from './components/ShoeDetail'
import Sidebar from './components/Sidebar'
import { SHOE_LIST } from './constants'
import Cart from './components/Cart'

type CartItem = {
  product: (typeof SHOE_LIST)[number]
  qty: number
  size: number
}

const App = () => {
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  console.log(cartItems)

  // Get value of isDarkMode from localStorage
  useEffect(() => {
    if (localStorage.getItem('isDarkMode') === 'true') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  // DarkMode Handler
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem(
      'isDarkMode',
      document.documentElement.classList.contains('dark') ? 'true' : 'false',
    )
  }

  // AddToCart Handler
  const addToCart = (
    product: (typeof SHOE_LIST)[number],
    qty: number | null,
    size: number | null,
  ) => {
    if (qty !== null && size !== null) {
      const updatedCartItems = [...cartItems]
      const existingItemIndex = updatedCartItems.findIndex(
        (item) => item.product.id === product.id,
      )

      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex] = {
          product,
          qty,
          size,
        }
      } else {
        updatedCartItems.push({ product, qty, size })
      }

      setCartItems(updatedCartItems)
    }
  }

  return (
    <div className="animate-fadeIn dark:bg-night p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar onClose={() => setSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart cartItems={cartItems} />
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
