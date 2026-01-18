import { Bold, Italic, Underline, Paperclip, Image as ImageIcon, Smile, AtSign } from "lucide-react";
import { useState } from "react";

const CommentForm = () => {
    const [comment, setComment] = useState("");

    const handleButtonClick = (action: string) => {
        console.log(`Action: ${action}`);
        // In a real rich-text editor, this would apply formatting
    };

    return (
        <div className="w-full h-[100px] bg-[#F5F5F5] rounded-xl p-4 border flex flex-col">
           
            {/* Text Input Area */}
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add comment..."
                className="w-full border-none outline-none
                 resize-none font-lato text-gray-700 min-h-[30px] 
                 placeholder:text-gray-400"
            />

            {/* Toolbar */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center  text-gray-500">
                    {/* Formatting Group */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => handleButtonClick("bold")}
                            className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                            title="Bold"
                        >
                            <Bold className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonClick("italic")}
                            className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                            title="Italic"
                        >
                            <Italic className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonClick("underline")}
                            className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                            title="Underline"
                        >
                            <Underline className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-1 rounded-full font-lato font-base transition-all shadow-sm active:scale-95"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CommentForm;