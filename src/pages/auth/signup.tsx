import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleButton from "@/components/ui/googleButton";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
        {/* Centered Form Container */}
        <div className="w-full max-w-xl">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8 lg:p-10">
            
            {/* Logo - Centered */}
            <div className="flex justify-center mb-6">
              <div className="w-[180px]">
                <img src="/logo/Nest.svg" alt="Nest" className="w-full" />
              </div>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Create Account
              </h2>
              <p className="font-quicksand text-gray-500">
                Join us today! Fill in your details to get started
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="font-quicksand text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-quicksand text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="font-quicksand text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
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

              {/* Terms & Conditions */}
              <div className="flex items-center gap-2 mt-2">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary/20"
                  required
                />
                <span className="font-quicksand text-xs text-gray-500">
                  I agree to the{' '}
                  <a href="/terms" className="text-primary hover:underline font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </a>
                </span>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white
                  font-quicksand font-semibold text-base shadow-lg shadow-primary/25
                  hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 
                  active:translate-y-0 transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none
                  flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign Up</span>
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
                    OR SIGN UP WITH
                  </span>
                </div>
              </div>

              {/* Google Button */}
              <div className="flex justify-center">
                <GoogleButton
                  onclick={() => console.log("Google Sign Up")}
                />
              </div>

              {/* Login Link */}
              <p className="font-quicksand text-gray-500 text-sm text-center mt-6">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-primary font-semibold hover:text-primary/70 hover:underline transition-all inline-flex items-center gap-1 group"
                >
                  Login
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

export default Signup;