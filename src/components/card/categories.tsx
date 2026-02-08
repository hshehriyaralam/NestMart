import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link, useLocation, matchPath } from "react-router-dom"
import { publicRoutes, privateRoutes } from "@/routes"

import { type CategoryNode, categoriesData } from "@/data/categories.data"


/* ================= COMPONENT ================= */

const CategoriesCard = () => {
  const location = useLocation();

  // Check all routes to find which one matches current path
  const allRoutes = [...publicRoutes, ...privateRoutes];
  const currentRoute = allRoutes.find(route =>
    matchPath(route.path, location.pathname)
  );
  // Only show if route has showCategories: true
  if (!currentRoute?.showCategories) {
    return null;
  }

  const CategoryItem = ({ category }: { category: CategoryNode }) => {
    const [activeChild, setActiveChild] = useState<number | null>(null)
    const [open, setOpen] = useState(false)
    const hasChildren = category.children && category.children.length > 0

    const Content = (
      <div
        className={`w-[full] flex items-center justify-between
           border border-[#ECECEC] p-3 rounded-lg py-3 cursor-pointer bg-white 


        ${open ? "text-primary" : "text-[#253D4E]"}`}
      >
        <div className="flex items-center gap-x-2  ">
          {category.image && <img src={category.image} className="w-7" />}
          <p
            className={`text-[15px]  ${open ? 'font-quicksand font-bold  hover:text-primary ' : 'font-heading '
              }  `}
          >
            {category.name}
          </p>
        </div>

        {hasChildren && (

          <div className="w-5 h-5 flex items-center justify-center">
            <ChevronRight
              className={`w-8 transition-colors ${open ? "text-primary" : "text-secondary"
                }`}
            />
          </div>
        )}
      </div>
    )

    return (
      <div
        className="relative w-full"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* CLICK ONLY IF LAST NODE */}
        {category.productsAvailable ? (
          <Link to={`/category/${category.slug}`}>{Content}</Link>
        ) : (
          Content
        )}


        {hasChildren && open && (
          <div
            className="
      absolute top-2 left-65
      w-58
      bg-white
      shadow-xl
      py-2
      z-40
    "
          >
            {category.children!.map((child) => {
              const childHasNestedChildren =
                Array.isArray(child.children) && child.children.length > 0

              return (
                <div
                  key={child.id}
                  className="relative"
                  onMouseEnter={() => childHasNestedChildren && setActiveChild(child.id)}
                  onMouseLeave={() => setActiveChild(null)}
                >
                  {/* CHILD ITEM */}
                  <div
                    className="
              flex items-center justify-between
              px-4 py-2
              cursor-pointer
              text-[14px]
              text-secondary
              font-medium
              font-quicksand
              hover:text-primary
              hover:bg-gray-100
              transition-all duration-200 ease-in-out
              z-40
              
            
            "
                  >
                    {/* <span>{child.name}</span> */}
                    <Link to={`/category/${child.slug}?parent=${category.slug}`}>{child.name}</Link>
                    {childHasNestedChildren && <ChevronRight className="w-4" />}
                  </div>

                  {/* GRANDCHILD PANEL */}
                  {childHasNestedChildren && activeChild === child.id && (
                    <div
                      className="
                absolute top-1 left-58
                w-58
                bg-white
                shadow-xl
                py-2
                z-50
                transition-all duration-200 ease-in-out
                
              "
                    >
                      {child.children!.map((grandChild) => (
                        <div
                          key={grandChild.id}
                          className="
                    px-4 py-2
                    text-[14px]
                    cursor-pointer
                    font-quicksand
                    font-medium
                    text-secondary
                    hover:text-primary
                    hover:bg-gray-100
                
                  "
                        >
                          <Link to={`/category/${grandChild.slug}?parent=${category.slug}&child=${child.slug}`}>{grandChild.name}</Link>

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}










      </div>
    )
  }



  return (
    <div className="w-full rounded-xl p-4 border border-[#ECECEC] flex flex-col gap-y-2 items-start">
      <h2 className="font-heading text-[22px] mx-2">Category</h2>

      <div className="flex flex-col gap-y-3 items-center w-full p-2 z-50 ">
        {categoriesData.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default CategoriesCard
