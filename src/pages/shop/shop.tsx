import BreadcrumbLinkDemo from "@/components/commons/BreadcrumbLinkDemo"
import BGIMAGE from "../../../public/background-images/light-green-veg.jpg"
import { SelectDropdown } from "@/components/dropdown/select"
import Vector from "/logo/Vector.png"
import { Heart, Search, Share2, ShoppingCart, Star } from "lucide-react"
import CartButton from "@/components/button/cartButton"
import ProductImage from "../../../public/products/product-image.png";
import TopSelling from "@/components/card/topSelling"
import TrendingProduct from "@/components/card/trendingProduct"
import RecentlyAdded from "@/components/card/recentlyAdded"
import TopRated from "@/components/card/topRated"


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
const Shop = () => {
    return (
        <div className='w-[95%] mx-auto p-4'>
            <div>
                {/* //header */}
                <div style={{
                    backgroundImage: `url(${BGIMAGE})`,
                    width: "100%",
                    height: "130px ",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    className='w-full flex  flex-col justify-center p-6 rounded-lg '>
                    <h2 className='font-heading text-[24px]'>Snack</h2>
                    <BreadcrumbLinkDemo />
                </div>
                <div className="w-full  flex gap-4 " >
                   
                    {/* all content*/}
                    <div className="w-full ">
                        <div className="flex items-center justify-between px-4 pb-2 mt-6 w-full ">
                            <div className="flex items-center gap-2">
                                <img src={Vector} alt="Vector" className="w-5 h-5" />
                                <h2 className="text-lg font-lato"> we found two items for you! </h2>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Pagination */}
                                <div className="flex items-center gap-2">
                                    <span className="font-lato text-sm text-gray-600">Show:</span>
                                    <SelectDropdown
                                        placeholder="10"
                                        options={paginationOptions}
                                        defaultValue="10"
                                        // onChange={handlePaginationChange}
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
                                        // onChange={handleSortChange}
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
                        {/* PRODUCTS */}
                        <div className=" w-full">
                            <div className="w-full flex">
                                <div className="w-[340px] h-[240px] p-4 ">
                                    <img
                                        src={ProductImage}
                                        className=" w-full h-full border border-gray-300 rounded-xl"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col w-full  p-6 ">
                                    <div>
                                        <h2 className="font-heading text-[15px] max-w-xl mb-1">
                                            Seeds of Change
                                            Organic Quinoa, Brown
                                        </h2>
                                        <div className="flex  items-center ">
                                            <Star className=" text-white fill-yellow-500 w-8 h-6 " />
                                            <span className="font-lato font-regular text-accent text-[14px] ">
                                                (4.0) reviews
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-x-2 mb-2">
                                            <p className="font-heading-1_0 text-sm text-primary">$25</p>
                                            <p className="font-heading-1_0 text-lightGray text-lg line-through ">
                                                $32
                                            </p>
                                        </div>
                                        <p className="max-w-xl font-lato text-accent text-sm font-medium mb-2 ">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aliquam rem officia, corrupti reiciendis minima nisi modi,
                                            quasi, odio minus dolore impedit fuga eum eligendi.
                                        </p>
                                    </div>
                                    {/* add to card */}
                                    <div className="flex items-center w-full gap-x-4">


                                        {/* Add to Cart Button */}
                                        <CartButton
                                            size="mdw"
                                            variant="darkgreen"
                                            icon={<ShoppingCart size={14} />}
                                            className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center "
                                        >
                                            Add to cart
                                        </CartButton>


                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-[340px] h-[240px] p-4 ">
                                    <img
                                        src={ProductImage}
                                        className=" w-full h-full border border-gray-300 rounded-xl"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col w-full  p-6 ">
                                    <div>
                                        <h2 className="font-heading text-[15px] max-w-xl mb-1">
                                            Seeds of Change
                                            Organic Quinoa, Brown
                                        </h2>
                                        <div className="flex  items-center ">
                                            <Star className=" text-white fill-yellow-500 w-8 h-6 " />
                                            <span className="font-lato font-regular text-accent text-[14px] ">
                                                (4.0) reviews
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-x-2 mb-2">
                                            <p className="font-heading-1_0 text-sm text-primary">$25</p>
                                            <p className="font-heading-1_0 text-lightGray text-lg line-through ">
                                                $32
                                            </p>
                                        </div>
                                        <p className="max-w-xl font-lato text-accent text-sm font-medium mb-2 ">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aliquam rem officia, corrupti reiciendis minima nisi modi,
                                            quasi, odio minus dolore impedit fuga eum eligendi.
                                        </p>
                                    </div>
                                    {/* add to card */}
                                    <div className="flex items-center w-full gap-x-4">


                                        {/* Add to Cart Button */}
                                        <CartButton
                                            size="mdw"
                                            variant="darkgreen"
                                            icon={<ShoppingCart size={14} />}
                                            className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center "
                                        >
                                            Add to cart
                                        </CartButton>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* right side */}
                    <div className="w-[30%] h-full ">
                        <TopSelling />
                        <TrendingProduct />
                        <RecentlyAdded />
                        <TopRated />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop