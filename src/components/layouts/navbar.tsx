import SearchBarCategories from "../navbar/serachbar-categories"

const Navbar = () => {
  return (
    <div className="sticky top-10 z-[100] bg-white">
      <div className='hidden lg:block ' >
        {/* first line   */}
        <SearchBarCategories />

      </div>

      {/* Mobile menu  */}


    </div>
  )
}

export default Navbar
