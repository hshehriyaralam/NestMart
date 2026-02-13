import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full h-full flex items-center justify-center p-6">

        {/* Main Form Card */}
        <div className="w-full max-w-[500px] border border-gray-200 rounded-2xl shadow-xl bg-white overflow-hidden">
          {/* Decorative Header Gradient */}
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
          
          <div className="p-8 md:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-[180px]">
                <img src="/logo/Nest.svg" alt="Nest" className="w-full" />
              </div>
            </div>

            <div className="text-center mb-8">
              {!isSubmitted ? (
                <>
                  <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-3">
                    Forgot Password?
                  </h2>
                  <p className="font-quicksand text-gray-500 text-sm md:text-base max-w-[300px] mx-auto">
                    No worries! Enter your email address and we'll send you a password reset link.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-3">
                    Check Your Email
                  </h2>
                  <p className="font-quicksand text-gray-500 text-sm md:text-base">
                    We've sent a password reset link to
                  </p>
                  <p className="font-quicksand font-semibold text-primary mt-1">
                    {email}
                  </p>
                </>
              )}
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-quicksand text-sm font-medium text-gray-700 block"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your registered email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 py-6 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Reset Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white
                    font-quicksand font-semibold text-base hover:shadow-lg hover:shadow-primary/30 
                    hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 
                    disabled:cursor-not-allowed disabled:hover:transform-none cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>

                {/* Help Text */}
                <p className="font-quicksand text-xs text-gray-400 text-center mt-4">
                  We'll send you an email with instructions to reset your password.
                </p>
              </form>
            ) : (
              <div className="space-y-6">
                {/* Success State Actions */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 ">
                  <p className="font-quicksand text-sm text-blue-800 text-center">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    variant="outline"
                    className="w-full py-6 rounded-xl border-2 border-primary/20 text-primary 
                      font-quicksand font-semibold hover:bg-primary/5 hover:border-primary/30 
                      transition-all duration-200  cursor-pointer"
                  >
                    Try Another Email
                  </Button>

                  <a
                    href="/auth/login"
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-gray-50 to-white 
                      border border-gray-200 text-gray-700 font-quicksand font-semibold 
                      hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 
                      text-center flex items-center justify-center gap-2 group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Login
                  </a>
                </div>

                <div className="flex justify-center mt-4">
                  <p className="font-quicksand text-sm text-gray-500">
                    Remember your password?{" "}
                    <a
                      href="/auth/login"
                      className="text-primary font-semibold hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Additional Links - Only show in initial state */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-quicksand text-sm text-gray-500 text-center">
                  Remember your password?{" "}
                  <a
                    href="/auth/login"
                    className="text-primary font-semibold hover:underline"
                  >
                    Login here
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p className="font-quicksand text-xs text-gray-400">
            Need help?{" "}
            <a href="/support" className="text-primary hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;