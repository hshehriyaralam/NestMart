import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { closeCart } from '../../redux/sidebar/sidebarSlice';
import {
    Sheet,
    SheetContent,
    SheetTitle,
} from "@/components/ui/sheet";

const CartSidebar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.sidebar.isCartOpen);

    const onClose = () => {
        dispatch(closeCart());
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                className="top-[122px] h-[calc(100vh-122px)] w-full max-w-md p-0 flex flex-col border-none shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] gap-0"
                side="right"
            >
                {/* --- Header --- */}
                <div className="px-7 py-6 flex items-center justify-between border-b border-gray-100 flex-shrink-0 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                    <div>
                        <SheetTitle className="text-xl font-bold text-gray-900 tracking-tight font-quicksand">
                            Shopping Cart
                        </SheetTitle>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-0.5 font-lato">
                            1 Item in your bag
                        </p>
                    </div>
                    <div>
                        <button
                        onClick={onClose}
                        className='hover:bg-gray-200 hover:rounded-full transition-all p-1'
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                
                </div>

                {/* --- Cart Items (Scrollable Content Area) --- */}
                <div className="flex-1 overflow-y-auto px-7 py-8 space-y-8 scroll-smooth font-lato bg-white">
                    {/* Mocked scrollable items for verification */}
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-5 group transition-all duration-300">
                            {/* Product Image */}
                            <div className="w-28 h-28 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 p-2 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="https://placehold.co/100x100/png?text=Fire+Pit"
                                    alt="Product"
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 flex flex-col py-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-primary transition-colors duration-200 font-quicksand">
                                        Fire Pit Surround {i + 1}
                                    </h3>
                                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Stainless Steel / Large</p>

                                <div className="flex items-center justify-between mt-auto pt-4">
                                    {/* Quantity Pill */}
                                    <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-1.5 py-1 shadow-sm">
                                        <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white text-gray-400 hover:text-gray-900 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="mx-3 text-gray-900 font-semibold text-sm w-4 text-center">1</span>
                                        <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white text-gray-400 hover:text-gray-900 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <span className="font-extrabold text-xl text-gray-900">$339.99</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Footer (Pinned at Bottom) --- */}
                <div className="bg-white px-6 py-5 border-t border-gray-50 space-y-4 flex-shrink-0 font-lato">

                    {/* Totals Grid */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-500 font-medium text-sm">
                            <span>Subtotal</span>
                            <span className="text-gray-900 font-bold">$1,699.95</span>
                        </div>
                        <div className="flex justify-between text-gray-500 font-medium text-sm">
                            <span>Shipping</span>
                            <span className="text-primary font-bold">Free</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                            <span className="text-base font-bold text-gray-900 font-quicksand">Total</span>
                            <div className="text-right">
                                <span className="text-xl font-extrabold text-gray-900">$1,699.95</span>
                                <p className="text-[9px] text-gray-400 uppercase tracking-wider mt-0.5 font-medium">Inclusive of taxes</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                        <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-bold text-base hover:bg-primary transition-all duration-300 shadow-md shadow-gray-100 hover:shadow-primary/10 active:scale-[0.98] font-quicksand">
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full bg-transparent text-gray-500 py-2 rounded-xl font-bold text-xs hover:text-gray-900 transition-all duration-200"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartSidebar;
