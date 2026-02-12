import { Star, Heart, Share2, ShoppingCart, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import CartButton from "@/components/button/cartButton";
import { Reviews1 } from "@/components/review/review";
import { useParams } from "react-router-dom";
import { data } from "@/data/productCard";
import CommentForm from "@/components/comment/commentForm";

const ProductDetails = () => {
  // get the url routes
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { slug } = useParams()
  const product = data.products.find((pro: any) => pro.slug === slug);
  // handle Increment

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const currentIndex = product?.pimages.indexOf(selectedImg || product?.pimages[0]) ?? 0;

  const handleNext = () => {
    if (!product?.pimages) return;
    const nextIndex = (currentIndex + 1) % product.pimages.length;
    setSelectedImg(product.pimages[nextIndex]);
  };

  const handlePrev = () => {
    if (!product?.pimages) return;
    const prevIndex = (currentIndex - 1 + product.pimages.length) % product.pimages.length;
    setSelectedImg(product.pimages[prevIndex]);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full  p-6  flex flex-col gap-y-3">
        {/* Product Image and Details */}
        <div className="w-full flex">
          <div className="w-[450px] h-[450px] p-4 relative group">
            {/* parent images */}
            <img
              src={selectedImg || product?.pimages[0]}
              className=" w-full h-full border border-gray-300 rounded-xl object-cover"
              alt={product?.name}
            />
            {/* navigation chevrons */}
            <div className="absolute bottom-10 right-10 flex gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col  w-4xl p-6 ">
            <div>
              <h2 className="font-heading text-[40px] max-w-xl mb-3">
                {product?.name}
              </h2>
              <div className="flex  items-center mb-3">
                <Star className=" text-white fill-yellow-500 w-8 h-6 " />
                <span className="font-lato font-regular text-accent text-[14px] ">
                  {product?.rating} reviews
                </span>
              </div>

              <div className="flex items-center gap-x-2 mb-4">
                <p className="font-heading-1_0 text-4xl text-primary">${product?.price}</p>
                <p className="font-heading-1_0 text-lightGray text-2xl line-through ">
                  ${product?.originalPrice}
                </p>
              </div>
              <p className="max-w-xl font-lato text-accent font-medium mb-4 ">
                {product?.description}
              </p>
            </div>
            {/* add to card */}
            <div className="flex items-center w-full gap-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl w-[110px] h-[55px] px-1 shadow-sm">
                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>

                <input
                  type="number"
                  className="w-8 text-center border-none outline-none bg-transparent font-heading text-lg font-bold text-[#253D4E] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={quantity}
                  readOnly
                />

                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  onClick={handleIncrement}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <CartButton
                size="lg"
                variant="darkgreen"
                icon={<ShoppingCart size={18} />}
                className="py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2">
                Add to cart
              </CartButton>

              {/* Heart Button */}
              <button className="flex items-center justify-center border border-gray-300 rounded-lg h-11 w-11 bg-white hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-500" />
              </button>

              {/* Shuffle/Share Button */}
              <button className="flex items-center justify-center border border-gray-300 rounded-lg h-11 w-11 bg-white hover:bg-gray-100">
                <Share2 className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        {/* swap image */}
        <div className="flex items-center justify-start ">
          <div className="flex item-center gap-4  ">
            {product?.pimages.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`product-thumb-${index}`}
                className={`w-[110px] h-[120px] cursor-pointer border-2 rounded-lg transition-all ${selectedImg === img || (!selectedImg && index === 0) ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>

        </div>
        {/* DESCRIPTION */}
        <div className="border border-gray-300 rounded-lg  p-6">
          {/* button */}
          <div className="flex items-center gap-3 ">
            <button className="border border-gray-200 text-primary rounded-full px-5 py-2 font-heading-1_0 text-[14px] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.05)]">
              Description
            </button>
            <button className=" border border-gray-200 text-primary rounded-full px-5 py-2 font-heading-1_0 text-[14px] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.05)]">
              Review
            </button>
          </div>
          {/* description */}
          <p className="font-lato text-accent text-[16px] font-medium leading-normal py-2 mt-2">
            Spluttered narrowly yikes left moth in yikes bowed this that
            grizzly much hello on spoon-fed that alas rethought much decently
            richly and wow against the frequent fluidly at formidable
            acceptably flapped besides and much circa far over the bucolically
            hey precarious goldfinch mastodon goodness gnashed a jellyfish and
            one however because.
          </p>
          <h2 className="font-heading text-[24px]">Packaging & Delivery</h2>
          <p className="font-lato text-accent text-[16px] font-medium leading-normal py-2">
            Scallop or far crud plain remarkably far by thus far iguana lewd
            precociously and and less rattlesnake contrary caustic wow this
            near alas and next and pled the yikes articulate about as less
            cackled dalmatian in much less well jeering for the thanks blindly
            sentimental whimpered less across objectively fanciful grimaced
            wildly some wow and rose jeepers outgrew lugubrious luridly
            irrationally attractively dachshund. Scallop or far crud plain
            remarkably far by thus far iguana lewd precociously and and less
            rattlesnake contrary caustic wow this near alas and next and pled
            the yikes articulate about as less cackled dalmatian in much less
            well jeering for the thanks blindly sentimental whimpered less
            across objectively fanciful grimaced wildly some wow and rose
            jeepers outgrew lugubrious luridly irrationally attractively
            dachshund.
          </p>
          <h2 className="font-heading text-[24px] ">Suggested Use</h2>
          <div>
            <p className="font-lato text-accent text-[16px] font-medium leading-normal py-2">
              Refrigeration not necessary.<br />
              Stir before serving
            </p>
          </div>
          <h2 className="font-heading text-[24px] ">Other Ingredients</h2>
          <div>
            <p className="font-lato text-accent text-[16px] font-medium leading-normal py-2">This butter was produced using a LTG (Low Temperature Grinding) process
              Organic raw pecans, organic raw cashews.
              Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy
            </p>
          </div>
          <h2 className="font-heading text-[24px] ">Warnings</h2>
          <div>
            <p className="font-lato text-accent text-[16px] font-medium leading-normal py-2">Oil separation occurs naturally. May contain pieces of shell.</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Reviews1 />
      </div>
      <div className="p-4
      ">
        <CommentForm  />

      </div>

      {/* <div>
        <BlogCard/>
      </div> */}
      {/* Related products */}
      <div className="p-4">
        {/* <h2 className="font-heading text-[22px] mb-4 mt-8">Related Products</h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-1">
        {data.products.slice(0, 4).map((p: Product) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div> */}
      </div>

    </div>

  );
};
export default ProductDetails;
