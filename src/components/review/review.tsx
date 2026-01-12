import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Rating } from "@/components/ui/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Review {
    id: string;
    rating: number;
    title: string;
    content: string;
    author: {
        name: string;
        avatar?: string;
    };
    date: string;
    verified?: boolean;
}

const DEFAULT_REVIEWS: Review[] = [
    {
        id: "1",
        rating: 5,
        title: "Exceeded my expectations",
        content:
            "I was a bit skeptical at first, but this product really delivered. The quality is outstanding and it arrived faster than expected. Would definitely recommend to anyone on the fence.",
        author: {
            name: "Sarah M.",
            avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        date: "Dec 10, 2024",
        verified: true,
    },
    {
        id: "2",
        rating: 4,
        title: "Great value for money",
        content:
            "Solid product overall. Does exactly what it's supposed to do. Took off one star because the packaging could be better, but the product itself is great.",
        author: {
            name: "James R.",
            avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        },
        date: "Dec 8, 2024",
        verified: true,
    },
    {
        id: "3",
        rating: 5,
        title: "Perfect for everyday use",
        content:
            "I've been using this daily for a month now and it still looks and works like new. The build quality is impressive at this price point. Already bought one for my sister.",
        author: {
            name: "Emily K.",
            avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        },
        date: "Dec 5, 2024",
        verified: true,
    },

];

interface Reviews1Props {
    reviews?: Review[];
    title?: string;
    className?: string;
}

const Reviews1 = ({
    reviews = DEFAULT_REVIEWS,
    title = "Customer Reviews",
    className,
}: Reviews1Props) => {
    const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    return (
        <section className={cn("p-4 border border-gray-300 rounded-lg", className)}>
            <div className="container max-w-3xl">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold font-quicksand tracking-tight md:text-3xl">
                        {title}
                    </h2>
                    <div className="mt-2 flex items-center gap-3">
                        <Rating rate={averageRating} className="[&_svg]:size-5" />
                        <span className="text-sm text-muted-foreground font-lato">
                            {averageRating.toFixed(1)} out of 5 · {reviews.length} reviews
                        </span>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-0">
                    {reviews.map((review, index) => (
                        <div key={review.id}>
                            {index > 0 && <Separator className="my-2" />}
                            <div className="space-y-3">
                                {/* Rating & Title */}
                                <div>
                                    <Rating rate={review.rating} className="[&_svg]:size-4" />
                                </div>

                                {/* Content */}
                                <p className="text-sm leading-relaxed font-lato">
                                    {review.content}
                                </p>

                                {/* Author */}
                                <div className="flex items-center ">
                                    <Avatar className="size-8">
                                        <AvatarImage
                                            src={review.author.avatar}
                                            alt={review.author.name}
                                        />
                                        <AvatarFallback className="text-xs">
                                            {review.author.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-lato">{review.author.name}</span>
                                        {review.verified && (
                                            <span className="flex items-center gap-1 text-emerald-600">
                                                <BadgeCheck className="size-4" />
                                                <span className="text-xs">Verified Purchase</span>
                                            </span>
                                        )}
                                        <span className="text-muted-foreground">·</span>
                                        <span className="text-muted-foreground font-lato">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Reviews1 };

