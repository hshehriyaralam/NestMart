import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react';

const Signup = () => {
  const [transition, setTransition] = useState(false);

  
useEffect(() => {
    const interval = setInterval(() => {
      setTransition(prev => !prev);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);


  return (

  <div className='w-full h-min-screen  ' >


    <div className='w-full h-full  flex  items-center justify-center  p-6  bg-white' >



    {/* Login Form */}
    <div  className='w-[40%] h-[533px]      p-4   ' >
      <div  className='p-6  '>
        {/* Logo */}
        <div className='w-[300px] mx-5' >
          <img src="/logo/Nest.svg" alt="" />
        </div>

        <div className=' p-6 flex flex-col gap-y-3 ' >
          <p  className='font-quicksand   text-secondary  text-sm '>Welcome to Nest!  </p>
          <h2 className='font-heading text-4xl' >Sign up</h2>
          
          <form  className='flex flex-col my-2'>
          <label htmlFor="fullName"  className='font-quicksand text-secondary my-1 mt-2'>Full Name</label>
          <input type="text"  placeholder='Enter Full Name' className='bg-[#F4FFF5] font-quicksand text-accent outline-none px-4 py-2  rounded' />

            <label htmlFor="email"  className='font-quicksand text-secondary my-1 mt-2'>Email</label>
          <input type="email"  placeholder='Enter Email' className='bg-[#F4FFF5] font-quicksand text-accent outline-none px-4 py-2  rounded' />

          
          <label htmlFor="email" className='font-quicksand text-secondary my-1 mt-4'>Password</label>
          <input type="password"  placeholder='Enter Password'  className='bg-[#F4FFF5] font-quicksand text-accent outline-none px-4 py-2 rounded ' />


          <Button  className='w-[150px]  rounded-full bg-primary  text-white
           font-quicksand mt-4 hover:bg-primary/70  cursor-pointer mx-auto '
           type='submit'
           >
            Sign In
          </Button>

          <p  className='font-quicksand  text-accent text-[14px] text-center mt-4'>
            I have an account?
             <a href="/auth/login" className="text-primary  font-semibold"> Login</a>
             </p>
          </form>

        </div>
      </div>
    </div>



    {/* Image Section */}
    <div className='w-[40%]'>
          <img
            src={transition ? "/loginTwo.webp" : "/loginOne.webp"}
            alt="login"
            className="transition-all duration-700 ease-in-out"
          />
        </div>



  </div>






    </div>
  )
}

export default Signup