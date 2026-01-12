const BlogCard = () => {
    return (
        <div className="w-[368px] my-11 p-4">
            <img src="/products/1407.png" alt="b1" className="w-full rounde-lg" />
            
            <div className="flex flex-col items-center text-center p-2">
                <p className="font-heading-1_0 text-sm text-lightGray ">Side Dish</p>
                <h2 className="font-heading text-xl font-semibold mb-2 w-[305px]">The Intermediate Guide to
                    Healthy Food</h2>
                <div className="flex items-center justify-center gap-3 text-accent">
                    <div className="font-lato text-[12px]">25 April 2022</div>
                    <div className="font-lato text-[12px]">126k Views</div>
                    <div className="font-lato text-[12px]">4 mins read</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard