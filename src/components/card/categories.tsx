
const CategoriesCard = () => {

    const categoriesData = [
        {
            id: 1,
            image: "/categoriesCard/category-1.png",
            title: "Milks & Dairies",
            itemCount: 3
        },
        {
            id: 2,
            image: "/categoriesCard/category-2.png",
            title: "Clothing",
            itemCount: 4
        },
        {
            id: 3,
            image: "/categoriesCard/category-3.png",
            title: "Pet Foods",
            itemCount: 5
        },
        {
            id: 4,
            image: "/categoriesCard/category-4.png",
            title: "Baking material",
            itemCount: 8
        },
        {
            id: 5,
            image: "/categoriesCard/category-5.png",
            title: "Fresh Fruit",
            itemCount: 10
        },

    ]
    return (
        <div className='w-full rounded-xl  p-5 border border-[#ECECEC] flex flex-col gap-y-2 items-start    ' >
            <h2 className='font-heading text-[21px] mx-2'>Category</h2>
            <div className=' flex flex-col gap-y-3 items-center  w-full p-2  ' >
                {categoriesData.map((category) => (
                    <div key={category.id} className="w-full flex items-center justify-between  border border-[#ECECEC]  p-3  rounded-lg  py-2.5  cursor-pointer"  >
                        <img src={category.image} className="w-8" />
                        <p className=" text-sm  font-heading " >{category.title}</p>
                        <div className="w-5 h-5 rounded-full bg-[#BCE3C9]   flex items-center justify-center text-gray-700">
                            <p className="text-[9px] font-lato  font-medium " >{category.itemCount}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CategoriesCard
