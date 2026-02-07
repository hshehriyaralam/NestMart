import {  ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

/* ================= TYPES ================= */

type CategoryNode = {
  id: number
  image?: string
  name: string
  slug: string
  productsAvailable?: boolean
  children?: CategoryNode[]
}

/* ================= DATA ================= */

const categoriesData: CategoryNode[] = [
  {
    id: 1,
    image: "/categoriesCard/category-1.png",
    name: "Household & Laundry",
    slug: "household-laundry",
    children: [
      {
        id: 11,
        name: "Home Essentials",
        slug: "home-essentials",
        children: [
          {
            id: 111,
            name: "Insecticides",
            slug: "insecticides",
            productsAvailable: true
          },
          {
            id: 112,
            name: "Air Fresheners",
            slug: "air-fresheners",
            productsAvailable: true
          },
          {
            id: 113,
            name: "Towels & Tissues",
            slug: "towels-and-tissues",
            productsAvailable: true
          },
          {
            id: 114,
            name: "Home Decor",
            slug: "home-decor",
            productsAvailable: true
          },
           {
            id: 115,
            name: "Home Accessories",
            slug: "home-accessories",
            productsAvailable: true
          },
           {
            id: 116,
            name: "Badsheets & Curtains",
            slug: "badsheets-curtains",
            productsAvailable: true
          },
           {
            id: 117,
            name: "Tools & Solutions",
            slug: "tools-solutions",
            productsAvailable: true
          },
          {
            id: 118,
            name: "Mats & Rugs",
            slug: "mats-rugs",
            productsAvailable: true
          }
        ]
      },
      {
        id: 12,
        name: "Toilet & Surface Cleaners",
        slug: "toilet-surface-cleaners",
        children: [],
        productsAvailable: true
      },
      {
        id: 13,
        name: "Dishwashing",
        slug: "dishwashing",
        children: [
          {
            id: 131,
            name: "Powder, Soap & Liquids",
            slug: "powder-soap-liquids",
            productsAvailable: true
          },
          {
            id: 132,
            name: "Scrubbers & Brushes",
            slug: "scrubbers-brushes",
            productsAvailable: true
          }
        ]
      },
      {
        id: 14,
        name: "Laundry",
        slug: "laundry",
        children: [
          {
            id: 141,
            name: "Washing Powder",
            slug: "washing-powder",
            productsAvailable: true
          },
          {
            id: 142,
            name: "Liquid Detergent",
            slug: "liquid-detergent",
            productsAvailable: true
          }
        ]
      }
    ]
  },

  {
    id: 2,
    image: "/categoriesCard/category-2.png",
    name: "Desserts & Baking",
    slug: "desserts-baking",
    children: [
      {
        id: 21,
        name: "Traditional",
        slug: "traditional",
        children: [],
        productsAvailable: true
      },
      {
        id: 22,
        name: "Jelly & Custards",
        slug: "jelly-custards",
        children: [],
        productsAvailable: true
      },
      {
        id: 23,
        name: "Cakes & Toppings",
        slug: "cakes-toppings",
        children: [],
        productsAvailable: true
      },
      {
        id: 24,
        name: "Baking Essentials",
        slug: "baking-essentials",
        children: [],
        productsAvailable: true
      }
    ]
  },

    {
    id: 3,
    image: "/categoriesCard/category-3.png",
    name: "Toys",
    slug: "desserts-baking",
    children: [
      {
        id: 31,
        name: "Flash Cards",
        slug: "traditional",
        children: [],
        productsAvailable: true
      },
    ]
  },

    {
    id: 4,
    image: "/categoriesCard/category-4.png",
    name: "Grocery",
    slug: "grocery",
     children: [
      {
        id: 41,
        name: "Foot Staples",
        slug: "foot-staples",
        children: [
          {
            id: 411,
            name: "Soups & Crackers", 
            slug: "soups-crackers",
            productsAvailable: true
          },
          {
            id: 412,
            name: "Air Fresheners",
            slug: "air-fresheners",
            productsAvailable: true
          },
          {
            id: 413,
            name: "Towels & Tissues",
            slug: "towels-and-tissues",
            productsAvailable: true
          },
          {
            id: 414,
            name: "Home Decor",
            slug: "home-decor",
            productsAvailable: true
          },
           {
            id: 415,
            name: "Home Accessories",
            slug: "home-accessories",
            productsAvailable: true
          },
           {
            id: 416,
            name: "Badsheets & Curtains",
            slug: "badsheets-curtains",
            productsAvailable: true
          },
           {
            id: 417,
            name: "Tools & Solutions",
            slug: "tools-solutions",
            productsAvailable: true
          },
          {
            id: 418,
            name: "Mats & Rugs",
            slug: "mats-rugs",
            productsAvailable: true
          }
        ]
      },
      {
        id: 12,
        name: "Toilet & Surface Cleaners",
        slug: "toilet-surface-cleaners",
        children: [],
        productsAvailable: true
      },
      {
        id: 13,
        name: "Dishwashing",
        slug: "dishwashing",
        children: [
          {
            id: 131,
            name: "Powder, Soap & Liquids",
            slug: "powder-soap-liquids",
            productsAvailable: true
          },
          {
            id: 132,
            name: "Scrubbers & Brushes",
            slug: "scrubbers-brushes",
            productsAvailable: true
          }
        ]
      },
      {
        id: 14,
        name: "Laundry",
        slug: "laundry",
        children: [
          {
            id: 141,
            name: "Washing Powder",
            slug: "washing-powder",
            productsAvailable: true
          },
          {
            id: 142,
            name: "Liquid Detergent",
            slug: "liquid-detergent",
            productsAvailable: true
          }
        ]
      }
    ]
  },

     {
    id: 5,
    image: "/categoriesCard/category-5.png",
    name: "Frozen Food",
    slug: "frozen-food",
    children: [
      {
        id: 51,
        name: "Ready Meals & Snacks",
        slug: "ready-meals-snacks",
        children: [],
        productsAvailable: true
      },
      {
        id: 52,
        name: "Parathas &  Breads",
        slug: "parathas-breads",
        children: [],
        productsAvailable: true
      },
    ]
  },


     {
    id: 6,
    image: "/categoriesCard/category-3.png",
    name: "Fresh Product",
    slug: "fresh-product",
    children: [
      {
        id: 61,
        name: "Fresh Meats & Poultry",
        slug: "fresh-meats-poultry",
        children: [],
        productsAvailable: true
      },
      {
        id: 62,
        name: "Fruits",
        slug: "fruits",
        children: [],
        productsAvailable: true
      },
       {
        id: 63,
        name: "Vegetables",
        slug: "vegetables",
        children: [],
        productsAvailable: true
      },
    ]
  },
     {
    id: 7,
    image: "/categoriesCard/category-2.png",
    name: "Ramadan Packages",
    slug: "ramadan-packages",
    children: []
  },
     {
    id: 8,
    image: "/categoriesCard/category-1.png",
    name: "Nest Masala",
    slug: "nest-masala",
    children: []
  },
   {
    id: 9,
    image: "/categoriesCard/category-4.png",
    name: "Lotions & Powders",
    slug: "lotions-powders",
    children: []
  },
    {
    id: 10,
    image: "/categoriesCard/category-3.png",
    name: "Newborns & Infants",
    slug: "newborns-infants",
    children: []
  },
   {
    id: 12,
    image: "/categoriesCard/category-2.png",
    name: "Body Luxuries",
    slug: "body-luxuries",
    children: []
  },


]


/* ================= COMPONENT ================= */

const CategoriesCard = () => {
 const CategoryItem = ({ category }: { category: CategoryNode }) => {
  const [activeChild, setActiveChild] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const hasChildren = category.children && category.children.length > 0
  


  const Content = (
    <div
      className={`w-full flex items-center justify-between border border-[#ECECEC] p-3 rounded-lg py-3 cursor-pointer bg-white 
        ${open ? "text-primary" : "text-[#253D4E]"}`}
    >
      <div className="flex items-center gap-x-2  ">
        {category.image && <img src={category.image} className="w-7" />}
        <p
          className={`text-[15px]  ${
              open ? 'font-quicksand font-bold  hover:text-primary ' : 'font-heading '
            }  `}
        >
          {category.name}
        </p>
      </div>

      {hasChildren && (
        
        <div className="w-5 h-5 flex items-center justify-center  ">
          <ChevronRight
            className={`w-8 transition-colors ${
              open ? "text-primary" : "text-secondary"
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
      absolute top-1 left-65
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
              px-4 py-3
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
                absolute top-2 left-56
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
