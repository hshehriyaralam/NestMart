import GoogleButton from "@/components/ui/googleButton";
import { Link } from "react-router";
import { ArrowRight} from "lucide-react";
import {  useEffect,  useState } from "react";
import SignUpForm from "@/components/auth/signup-form";
import VerificationScreen from "@/components/auth/verification-Screen";

const Signup = () => {
 
    const [step, setStep] = useState<'signup' | 'verification'>('signup');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);

  /* TIMER */
  useEffect(() => {
    if (step !== "verification") return;

    setTimer(120);
    setCanResend(false);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  /* SIGNUP SUBMIT */
  const handleSignupSubmit = async (data: any) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormData(data);
      setStep("verification");
    }, 1500);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
        {/* Centered Form Container */}
        <div className="w-full max-w-xl">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8 lg:p-10">
            
            {/* Logo - Always visible */}
            <div className="flex justify-center mb-6">
              <div className="w-[180px]">
                <img src="/logo/Nest.svg" alt="Nest" className="w-full" />
              </div>
            </div>

            {/* Conditional Rendering based on step */}
            {step === 'signup' ? (
              /* ========== STEP 1: SIGNUP FORM ========== */
              <>
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Create Account
                  </h1>
                  <p className="font-quicksand text-gray-500">
                    Join us today! Fill in your details to get started
                  </p>
                </div>

                {/* Sign Up Form */}
              <SignUpForm 
              handleSignupSubmit={handleSignupSubmit}
               isLoading={isLoading} />
              </>
            ) : (
              /* ========== STEP 2: VERIFICATION CODE FORM ========== */
             <VerificationScreen
          formData={formData}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          timer={timer}
          canResend={canResend}
        />
            )}

            {/* Divider - Only show in signup step */}
            {step === 'signup' && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;