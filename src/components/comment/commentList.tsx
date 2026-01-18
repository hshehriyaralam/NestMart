import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
    id: string;
    user: {
        name: string;
        avatar: string;
        avatarBg?: string;
    };
    time: string;
    content: string;
    likes: number;
}

const COMMENTS: Comment[] = [
    {
        id: '1',
        user: {
            name: 'Heart_beat',
            avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
            avatarBg: 'bg-teal-500',
        },
        time: '10min ago',
        content: 'An artist in every sense! Absolutely love his work.',
        likes: 255,
    },
    {
        id: '2',
        user: {
            name: 'Art_Lover',
            avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
            avatarBg: 'bg-purple-500',
        },
        time: '1h ago',
        content: 'The attention to detail is just incredible. I need more of this!',
        likes: 120,
    }
];

const CommentItem = ({ comment }: { comment: Comment }) => {
    return (
        <div className="flex gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
            <div className={`rounded-full flex items-center justify-center shrink-0 w-10 h-10 ${comment.user.avatarBg || 'bg-gray-200'}`}>
                <Avatar className="w-full h-full">
                    <AvatarImage src={comment.user.avatar} className="object-cover" />
                    <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold text-sm tracking-tight">{comment.user.name}</span>
                    <span className="text-gray-500 text-xs">{comment.time}</span>
                </div>

                <p className="text-gray-700 text-sm leading-snug font-lato">
                    {comment.content}
                </p>

                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-gray-500 group cursor-pointer hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs">{comment.likes}</span>
                    </div>
                    <button className="text-gray-500 text-xs font-semibold hover:text-primary transition-colors cursor-pointer">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

const CommentList = () => {
    return (
        <div className="w-full bg-white space-y-3">
            {COMMENTS.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;