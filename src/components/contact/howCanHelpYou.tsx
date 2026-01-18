

const HowCanHelpYou = () => {
    const details = [
        {
            id: 1, 
            title: "01. Visit Feedback",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            textColor : "#253D4E"
        },
         {
            id: 2, 
            title: "02. Employer Services",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            textColor : "#253D4E"
        },
         {
            id: 3, 
            title: "03. Billing Inquiries",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            textColor : "#3BB77E"
        },
         {
            id: 4, 
            title: "04.General Inquiries",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            textColor : "#253D4E"
        },

    ]
  return (
    <div  className='w-full p-6  flex items-center justify-center' >
        {/* How can help you  */}
        <div  className="w-[40%]  flex flex-col gap-y-4 p-4  ">
            <p  className='text-primary text-2xl  font-quicksand  font-bold  ' >How can help you </p>
            <h2  className="font-heading  text-5xl  max-w-md ">Let us know how we can help you</h2>
            <p  className="text-accent font-lato  text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p  className="text-accent font-lato  text-base mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        {/* Details */}
        <div  className=" w-[60%]  grid grid-cols-2  h-[300px] mt-20  " >

            {details.map((detail) => (
                <div  key={detail.id} className="w-[350px] h-[120px]  flex flex-col  gap-y-2  " >
                <h2 className={`font-heading text-lg `} style={{color: detail.textColor}}>{detail.title}</h2>
                <p className="text-accent font-lato text-[14px] max-w-[300px] " >{detail.description}</p>
            </div>
            ))}

           
        </div>
    </div>
  )
}

export default HowCanHelpYou
