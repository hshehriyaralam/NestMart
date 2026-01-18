interface BlogCardProps {
    data: {
        id: number
        image: string
        category: string
        title: string
        date: string
        views: string
        readTime: string
    }
}

const BlogCard = ({ data }: BlogCardProps) => {
    return (
        <div className=" gap-2 p-4 ">
            <img src={data.image} alt={data.title} className="w-full rounde-lg" />

            <div className="flex flex-col items-center text-center p-2">
                <p className="font-heading-1_0 text-sm text-lightGray ">{data.category}</p>
                <h2 className="font-heading text-xl font-semibold mb-2 w-[305px]">{data.title}</h2>
                <div className="flex items-center justify-center gap-3 text-accent">
                    <div className="font-lato text-[12px]">{data.date}</div>
                    <div className="font-lato text-[12px]">{data.views}</div>
                    <div className="font-lato text-[12px]">{data.readTime}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard