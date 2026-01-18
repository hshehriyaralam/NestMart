import { Button } from "../ui/button"


const OurTeam = () => {
  const teamMembers = [
    {
      id : 1,
      image : '/about/teamOne.webp',
      name : 'H. Merinda',
      position : 'CEO & Co-Founder',
    },
      {
      id : 2,
      image : '/about/teamTwo.webp',
      name : 'Dilan Specter',
      position : 'Head Engineer',
    },
  ]
  return (
    <div  className="w-[90%]  ">
      <h2   className="font-heading  text-3xl text-center mt-2 ">Our Team</h2>

      <div  className="flex  mt-10">
        {/* Text Section */}
        <div className="w-[33%] flex flex-col gap-y-4    " >
           <p  className='font-quicksand text-primary text-md font-bold mt-6'>Our Team</p>
                <h2  className=' font-heading text-3xl font-bold max-w-xs '>Meet Our Expert Team</h2>
            <p  className='font-lato font-medium  text-sm text-accent ' >
               Our team makes every shopping experience better by working together to deliver fresh products and daily essentials with care and dedication, ensuring that every customer enjoys smooth and reliable service every day.
            </p>
            <p   className='font-lato font-medium  text-sm text-accent mt-1 ' >Our team focuses on saving your time and delivering quality at the best prices, so you can always enjoy a smooth and stress-free shopping experience every day.</p>

        <Button  className="w-fit bg-primary text-white hover:bg-primary/90 mt-4  cursor-pointer ">
          View All Members
        </Button>
        </div>

      

        {/* Image Section */}
        <div  className="w-[67%]  p-4   flex justify-center  gap-x-3 "> 
          {teamMembers.map((member) => (
            <div  className="relative ">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
            />
            <div className="w-[230px] h-[100px]  bg-white rounded-xl realtive  flex flex-col items-center justify-center gap-y-1 relative left-10 bottom-14 " >
              <h2  className="font-heading text-md" >{member.name}</h2>
              <p  className="font-lato text-accent  text-medium text-sm ">{member.position}</p>
              <div  className="flex justify-center items-center gap-x-3">
                <img src="/about/fb.svg" alt="facebook" />
                <img src="/about/x.svg" alt="twitter" />
                <img src="/about/insta.svg" alt="Instagram" />
                <img src="/about/yt.svg" alt="youtube" />
              </div>
            </div>
          </div>
          ))}

        

          
        </div>
      </div>
    </div>
  )
}

export default OurTeam