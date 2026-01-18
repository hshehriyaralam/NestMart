import { useParams } from 'react-router-dom'
import BDETAIL from "../../../public/products/blog-thumbnail.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CommentForm from '@/components/comment/commentForm'
import CommentList from '@/components/comment/commentList'
import { Heart, Share2 } from 'lucide-react'
const BlogDetails = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <div className='border w-[95%] mx-auto'>
        <div>
          <div className='border'>
            <p>Recipe</p>
            <h2>Best smartwatch 2022: the top wearables
              you can buy today</h2>
          </div>
          <div>
            <img src={BDETAIL} alt="blog" />
          </div>
          <div>
            {/* Author */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="profile"
                  />
                  <AvatarFallback className="text-xs">
                    DA
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-lato font-bold"> Daniyal Ali</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground font-lato">2 months Ago</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground font-lato">2 min read</span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Share2 className='w-5 h-5' />
                <Heart className='w-5 h-5' />
              </div>

            </div>
          </div>
          {/* content */}
          <div>
            {/* DESCRIPTION */}
            <div className="border border-gray-300 rounded-lg  p-6">

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
            <div className='py-2 space-y-4'>
              {/* comment */}
              <h2 className='font-heading text-[20px] '>Comments</h2>
              <CommentList />
              <h2 className='font-heading text-[20px] '>Leave a Comment</h2>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails