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
    <div className=" max-w-[95%] mx-auto ">
      <h1 className="font-heading text-[28px] p-6">Blog & News</h1>
      {/* Recipe Header */}
      
      <div>
        <div className="flex items-center justify-between px-6 pb-4">
          <div className="flex items-center gap-2">
            <img src={Vector} alt="Vector" className="w-5 h-5" />
            <h2 className="font-heading text-xl"> Recips Articles </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Pagination */}
            <div className="flex items-center gap-2">
              <span className="font-lato text-sm text-gray-600">Show:</span>
              <SelectDropdown
                placeholder="10"
                options={paginationOptions}
                defaultValue="10"
                onChange={handlePaginationChange}
                className="w-[100px]"
              />
            </div>

            {/* Sort Order */}
            <div className="flex items-center gap-2">
              <span className="font-lato text-gray-600">Sort:</span>
              <SelectDropdown
                placeholder="Sort by"
                options={sortOptions}
                defaultValue="ascending"
                onChange={handleSortChange}
                className="w-[150px]"
              />
            </div>

            <div className="border border-primary flex items-center gap-2 px-2  py-1.5 rounded-lg">
              <div>
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none px-1 font-lato placeholder:font-lato"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 mt-11 ">
          {data.blogs.map((blog) => (
              <BlogCard
                data={blog}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
