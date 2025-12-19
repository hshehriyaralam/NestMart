import Categories from '../navbar/categories'
import Navigation from '../navbar/navigation'

const Navbar = () => {
  return (
    <div>
      <div  className='hidden lg:block' >
      {/* first line   */}
      <Categories />
      {/* Second line  */}
      <Navigation />
      </div>

      {/* Mobile menu  */}
      
      
    </div>
  )
}

export default Navbar
