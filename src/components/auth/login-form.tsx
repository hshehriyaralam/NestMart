import React, { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleButton from "@/components/ui/googleButton";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import type { LoginFormData } from "@/types/auth";

const LoginForm = React.memo(() => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const emailId = useId();
  const passwordId = useId();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Form Data:", data);

    // Later you can integrate API here
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor={emailId}
            className="font-quicksand text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />

            <Input
              id={emailId}
              type="email"
              placeholder="Enter your email"
              className="pl-10 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>

        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor={passwordId}
              className="font-quicksand text-sm font-semibold text-gray-700"
            >
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
              id={passwordId}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pl-10 pr-12 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer"
              {...register("rememberMe")}
            />
            <span className="font-quicksand text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              Remember me
            </span>
          </label>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white
          font-quicksand font-semibold text-base shadow-lg shadow-primary/25
          hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 
          active:translate-y-0 transition-all duration-200
          disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none
          flex items-center justify-center gap-2 group cursor-pointer"
        >
          {isSubmitting ? (
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
          <GoogleButton onclick={() => console.log("Google Sign In")} />
        </div>

        {/* Sign Up Link */}
        <p className="font-quicksand text-gray-500 text-sm text-center">
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
  );
});

export default LoginForm;