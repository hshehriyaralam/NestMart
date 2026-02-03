import OurPerformance from "@/components/about/ourPerformance"
import OurTeam from "@/components/about/ourTeam"
import WelcomeToNest from "@/components/about/welcomeToNest"
import WhatWeProvide from "@/components/about/whatWeProvide"
import FooterBanner from "@/components/commons/footerBanner"


const About = () => {
  return (
    <div className="w-full min-h-screen" >
      <div className="w-[95%] lg:p-6  p-3 mx-auto  flex flex-col items-center justify-center  gap-6">
      <WelcomeToNest />
      <WhatWeProvide />
      <OurPerformance />
      <OurTeam />
      </div>
    </div>
  )
}

export default About
