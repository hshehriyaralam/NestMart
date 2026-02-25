import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import React, { useState, useId } from "react";
import { useForm } from "react-hook-form";
import type { SignupFormData, SignUpFormProps } from "@/types/auth";

const SignUpForm = React.memo(
  ({ handleSignupSubmit, isLoading }: SignUpFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm<SignupFormData>();
    const fullNameId = useId();
    const passwordId = useId();
    const emailId = useId();
    const inputStyles =
      "pl-10 py-6 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all";
    return (
      <div>
        <form onSubmit={handleSubmit(handleSignupSubmit)} className="space-y-5">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label
              htmlFor={fullNameId}
              className="font-quicksand text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <Input
                id={fullNameId}
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className={inputStyles}
                placeholder="Enter your full name"
              />
            </div>
          </div>

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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={inputStyles}
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor={passwordId}
              className="font-quicksand text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <Input
                id={passwordId}
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Min 6 characters required",
                  },
                })}
                className={`${inputStyles} pr-12`}
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="checkbox"
              {...register("terms", {
                required: "You must accept terms",
              })}
            
              className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary/20
                      cursor-pointer"
              placeholder=""
            />
            <span className="font-quicksand text-xs text-gray-500">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-primary hover:underline font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline font-medium"
              >
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
                <span>Sending code...</span>
              </div>
            ) : (
              <>
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    );
  },
);

export default SignUpForm;
