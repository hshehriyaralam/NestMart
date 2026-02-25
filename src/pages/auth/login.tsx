
import LoginForm from "@/components/auth/login-form";

const Login = () => {


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
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
