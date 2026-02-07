import { Star, Heart, Share2, ShoppingCart } from "lucide-react";
import ProductImage from "/products/product-image.png";
import PD1 from "/products/thumbnail-3.png";
import CartButton from "@/components/button/cartButton";
import { Reviews1 } from "@/components/review/review";

const ProductDetails = () => {

  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full  p-6  flex flex-col gap-y-3">
        {/* Product Image and Details */}
        <div className="w-full flex">
          <div className="w-[500px] h-[430px] p-4 ">
            <img
              src={ProductImage}
              className=" w-full h-full border border-gray-300 rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col  w-4xl p-6 ">
            <div>
              <h2 className="font-heading text-[40px] max-w-xl mb-3">
                Seeds of Change
                Organic Quinoa, Brown
              </h2>
              <div className="flex  items-center mb-3">
                <Star className=" text-white fill-yellow-500 w-8 h-6 " />
                <span className="font-lato font-regular text-accent text-[14px] ">
                  (4.0) reviews
                </span>
              </div>

              <div className="flex items-center gap-x-2 mb-4">
                <p className="font-heading-1_0 text-4xl text-primary">$25</p>
                <p className="font-heading-1_0 text-lightGray text-2xl line-through ">
                  $32
                </p>
              </div>
              <p className="max-w-xl font-lato text-accent font-medium mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
            </div>
            {/* add to card */}
            <div className="flex items-center w-full gap-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border-2 border-primary rounded-lg w-[90px] h-[50px] px-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 text-primary"
                // onClick={decrement}
                >
                  <svg width="12" height="12" fill="none">
                    <path
                      d="M2 6h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  className="w-8 text-center border-none outline-none bg-transparent"

                // readOnly
                />
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 text-primary"
                // onClick={increment}
                >
                  <svg width="12" height="12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Add to Cart Button */}
              <CartButton
                size="lg"
                variant="darkgreen"
                icon={<ShoppingCart size={18} />}
                className="py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2"
              >
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
        <div className="flex items-center justify-start gap-x-16 b">
          <div className="flex item-center gap-4 p-4 ">
            <img src={PD1} alt="img1" className="w-[80px] h-[80px] " />
            <img src={PD1} alt="img2" className="w-[80px] h-[80px]" />
            <img src={PD1} alt="img3" className="w-[80px] h-[80px]" />
            <img src={PD1} alt="img4" className="w-[80px] h-[80px]" />
          </div>
          <div className=" flex gap-4">
            <div className=" p-2">
              <p className="font-lato font-medium text-accent text-[14px]">
                Type: <span className="text-primary font-lato">Organic</span>
              </p>
              <p className="font-lato font-medium text-accent text-[14px] ">
                MFG:{" "}
                <span className="text-primary font-lato">Jun 2 2025</span>
              </p>
              <p className="font-lato font-medium text-accent text-[14px]">
                LIFE: <span className="text-primary font-lato">7 days</span>
              </p>
            </div>
            <div className="p-2">
              <p className="font-lato font-medium text-accent text-[14px]">
                Tags: <span className="text-primary font-lato">7 days</span>
              </p>
              <p className="font-lato font-medium text-accent text-[14px]">
                STOCK:{" "}
                <span className="text-primary font-lato">
                  8 items in stock
                </span>
              </p>
            </div>
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
