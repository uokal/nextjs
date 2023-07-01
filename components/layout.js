import MobileNav from './MobileNav'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}

      
      {/* mobile navigation icons as like android */}
      <MobileNav />
    </>
  )
}

export default Layout
