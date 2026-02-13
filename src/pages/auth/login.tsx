// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import GoogleButton from "@/components/ui/googleButton";
// import { Link } from "react-router";

// const Login = () => {

//   return (
//     <div className="w-full h-min-screen  ">
//       <div className="w-full h-full  flex  items-center justify-center  p-6  bg-white">
//         {/* Login Form */}
//         <div className="w-[50%] border border-gray-200  rounded-xl  p-8  ">
//           <div className="p-6">
//             {/* Logo */}
//             <div className="w-[200px] mx-10">
//               <img src="/logo/Nest.svg" alt="" />
//             </div>

//             <div className="flex flex-col gap-y-3  justify-center items-center  p-4 ">
//               <div className=" p-4">
//                 <h2 className="font-heading text-4xl ">Login</h2>

//                 <form className="flex flex-col my-2  w-[400px]   ">
//                   <label
//                     htmlFor="email"
//                     className="font-quicksand text-secondary my-1 mt-2"
//                   >
//                     Email
//                   </label>
//                   <Input placeholder="Enter Your Email" />

//                   <label
//                     htmlFor="email"
//                     className="font-quicksand text-secondary my-1 mt-4"
//                   >
//                     Password
//                   </label>
//                   <Input placeholder="Enter Your Password" />

//                   <Link to="/auth/forget-password" className="font-quicksand text-primary text-sm mt-2 relative left-70 hover:underline cursor-pointer ">Forgot password?</Link>

//                   <Button
//                     className="w-[200px]  rounded-full bg-primary  text-white
//            font-quicksand mt-4 hover:bg-primary/70  cursor-pointer mx-auto "
//                     type="submit"
//                   >
//                     Login
//                   </Button>

//                   <p className="font-quicksand  text-accent text-[14px] text-center mt-4">
//                     I don't have an account?
//                     <a
//                       href="/auth/signup"
//                       className="text-primary  font-semibold"
//                     >
//                       {" "}
//                       Sign up
//                     </a>
//                   </p>
//                   <div className="flex justify-center mt-4">
//                     <GoogleButton
//                       onclick={() => console.log("Google Sign In")}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleButton from "@/components/ui/googleButton";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 ">
      <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
        {/* Main Container with Split Layout */}
        <div className="w-full max-w-6xl  mx-auto flex flex-col lg:flex-row items-center justify-center">
          {/* Right Side - Login Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8 lg:p-10 ">

                           {/* Logo - Centered */}
            <div className="flex justify-center mb-6">
              <div className="w-[180px]">
                <img src="/logo/Nest.svg" alt="Nest" className="w-full" />
              </div>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Login
              </h2>
              <p className="font-quicksand text-gray-500">
                Please enter your details to sign in
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-quicksand text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-quicksand text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <Link 
                    to="/auth/forget-password" 
                    className="font-quicksand text-sm text-primary hover:text-primary/70 font-medium hover:underline transition-all"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Device Trust (Optional) */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20" />
                  <span className="font-quicksand text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white
                  font-quicksand font-semibold text-base shadow-lg shadow-primary/25
                  hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 
                  active:translate-y-0 transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none
                  flex items-center justify-center gap-2 group  cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  <>
                    <span>Login</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-white text-gray-400 font-quicksand">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              {/* Google Button */}
              <div className="flex justify-center">
                <GoogleButton
                  onclick={() => console.log("Google Sign In")}
                />
              </div>

              {/* Sign Up Link */}
              <p className="font-quicksand text-gray-500 text-sm text-center ">
                Don't have an account?{" "}
                <Link
                  to="/auth/signup"
                  className="text-primary font-semibold hover:text-primary/70 hover:underline transition-all inline-flex items-center gap-1 group"
                >
                  Sign up
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
