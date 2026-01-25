type SidebarProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ children, isOpen, onClose }: SidebarProps) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full transform overflow-y-auto bg-white p-5 shadow-lg transition duration-300 md:w-[50%] lg:w-[35%] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer p-2 font-bold text-black"
        >
          X
        </button>
        {children}
      </div>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  )
}

export default Sidebar
