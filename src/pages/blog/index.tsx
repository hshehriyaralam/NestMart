import { useState } from "react"
import { SelectDropdown } from "@/components/dropdown/select"
import { Link } from "react-router-dom"
import Vector from "/logo/Vector.png"
import { Search } from "lucide-react"
import BlogCard from "@/components/card/blogCard"
import { data } from "@/data/productCard"

// Pagination options
const paginationOptions = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
]

// Sorting options
const sortOptions = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
]

const Blog = () => {
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const [sortOrder, setSortOrder] = useState("asc")

  const handlePaginationChange = (value: string) => {
    setItemsPerPage(value)
    console.log("Items per page:", value)
  }

  const handleSortChange = (value: string) => {
    setSortOrder(value)
    console.log("Sort order:", value)
  }

  return (
   <div className="max-w-[95%] mx-auto">
  <h1 className="font-heading text-[22px] sm:text-[26px] md:text-[28px] p-4 sm:p-6">
    Blog & News
  </h1>

  <div>
    {/* Header */}
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center lg:justify-between px-4 sm:px-6 pb-4">
      
      {/* Left */}
      <div className="flex items-center gap-2">
        <img src={Vector} alt="Vector" className="w-5 h-5" />
        <h2 className="font-heading text-lg sm:text-xl">Recips Articles</h2>
      </div>

      {/* Right Controls */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        
        {/* Pagination */}
        <div className="flex items-center gap-2">
          <span className="font-lato text-sm text-gray-600">Show:</span>
          <SelectDropdown
            placeholder="10"
            options={paginationOptions}
            defaultValue="10"
            onChange={handlePaginationChange}
            className="w-[80px] sm:w-[100px]"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="font-lato text-sm text-gray-600">Sort:</span>
          <SelectDropdown
            placeholder="Sort by"
            options={sortOptions}
            defaultValue="ascending"
            onChange={handleSortChange}
            className="w-[120px] sm:w-[150px]"
          />
        </div>

        {/* Search */}
        <div className="border border-primary flex items-center gap-2 px-2 py-1.5 rounded-lg w-full sm:w-auto">
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-[140px] border-none outline-none px-1 font-lato"
          />
        </div>
      </div>
    </div>

    {/* Blog Grid */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      gap-6 
      mt-8 sm:mt-11
      px-4 sm:px-6
    ">
      {data.blogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  </div>
</div>

  )
}

export default Blog
