import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
    rate: number;
    max?: number;
    className?: string;
}

export const Rating = ({ rate, max = 5, className }: RatingProps) => {
    return (
        <div className={cn("flex items-center gap-0.5", className)}>
            {Array.from({ length: max }).map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        "size-4",
                        i < Math.floor(rate)
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-transparent text-gray-300"
                    )}
                />
            ))}
        </div>
    );
};
