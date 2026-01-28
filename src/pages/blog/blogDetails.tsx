  import { useParams } from 'react-router-dom'
  import BDETAIL from "../../../public/products/blog-thumbnail.png"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import CommentForm from '@/components/comment/commentForm'
  import CommentList from '@/components/comment/commentList'
  import { Heart, Share2 } from 'lucide-react'
  import TopSelling from '@/components/card/topSelling'

  const BlogDetails = () => {
    const { id } = useParams()
    console.log(id)
    return (

      <div className="w-[95%] mx-auto">
  <div>
    <div className="w-full lg:w-[90%] mx-auto">

      {/* Header */}
      <div className="p-4">
        <p className="font-heading-1_0 text-[14px] lg:text-[16px] text-primary">
          Recipe
        </p>

        <h2 className="
          font-heading
          text-[24px] sm:text-[28px] lg:text-[35px]
          w-full lg:w-[880px]
        ">
          Best smartwatch 2022: the top wearables you can buy today
        </h2>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[1052px]">
        <img
          src={BDETAIL}
          alt="blog"
          className="p-4 w-full object-cover"
        />
      </div>

      {/* Author */}
      <div className="w-full lg:w-[1052px]">
        <div className="
          flex flex-col sm:flex-row
          sm:items-center sm:justify-between
          gap-4 p-4
        ">
          <div className="flex items-center gap-3 flex-wrap">
            <Avatar className="size-10">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              <AvatarFallback className="text-xs">DA</AvatarFallback>
            </Avatar>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-lato font-bold">Daniyal Ali</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">2 months Ago</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">2 min read</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Share2 className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="
      w-full
      flex flex-col lg:flex-row
      px-4 lg:px-12
    ">
      {/* Main Content */}
      <div className="w-full lg:w-[75%] p-2">
        <div>
          <p className="font-lato text-accent text-[14px] lg:text-[16px] py-2">
             Spluttered narrowly yikes left moth in yikes bowed this that
                grizzly much hello on spoon-fed that alas rethought much decently
                richly and wow against the frequent fluidly at formidable
                acceptably flapped besides and much circa far over the bucolically
                hey precarious goldfinch mastodon goodness gnashed a jellyfish and
                one however because.
          </p>

          <h2 className="font-heading text-[20px] lg:text-[24px]">
            Packaging & Delivery
          </h2>

          <p className="font-lato text-accent text-[14px] lg:text-[16px] py-2">
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

          <h2 className="font-heading text-[20px] lg:text-[24px]">
            Suggested Use
          </h2>

          <p className="font-lato text-accent text-[14px] lg:text-[16px] py-2">
            Refrigeration not necessary.<br />
                  Stir before serving
          </p>

          <h2 className="font-heading text-[20px] lg:text-[24px]">
            Other Ingredients
          </h2>

          <p className="font-lato text-accent text-[14px] lg:text-[16px] py-2">
            This butter was produced using a LTG (Low Temperature Grinding) process
                  Organic raw pecans, organic raw cashews.
                  Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy
          </p>

          <h2 className="font-heading text-[20px] lg:text-[24px]">
            Warnings
          </h2>

          <p className="font-lato text-accent text-[14px] lg:text-[16px] py-2">
            Oil separation occurs naturally. May contain pieces of shell.
          </p>
        </div>

        {/* Comments */}
        <div className="py-4 space-y-4">
          <h2 className="font-heading text-[20px] lg:text-[22px]">
            Comments
          </h2>
          <CommentList />
          <h2 className="font-heading text-[20px] lg:text-[22px]">
            Leave a Comment
          </h2>
          <CommentForm />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[25%] p-2">
        <TopSelling />
      </div>
    </div>
  </div>
</div>


    )
  }

  export default BlogDetails