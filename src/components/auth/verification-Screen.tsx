import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { VerificationScreenProps } from "@/types/auth";



const VerificationScreen: React.FC<VerificationScreenProps> = ({
  formData,
  verificationCode,
  setVerificationCode,
  timer,
  canResend
}) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  /* HANDLE INPUT CHANGE */
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  /* HANDLE BACKSPACE */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  /* HANDLE PASTE */
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pasteData)) return;

    const updatedCode = pasteData.split("");
    setVerificationCode(updatedCode);

    inputsRef.current[pasteData.length - 1]?.focus();
  };

  const formattedTime = `${Math.floor(timer / 60)}:${String(
    timer % 60
  ).padStart(2, "0")}`;

  const handleVerify = () => {
    const finalCode = verificationCode.join("");
    console.log("OTP Submitted:", finalCode);
  };

  return (
    <div className="space-y-6 text-center">

      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold">Verify Your Email</h2>
        <p className="text-sm text-gray-500 mt-1">
          Code sent to {formData?.email}
        </p>
      </div>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3">
        {verificationCode.map((digit, index) => (
          <input
            placeholder="0"
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center border rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {/* Timer */}
      <div className="text-sm text-gray-500">
        {canResend ? (
          <button className="text-blue-600 font-medium">
            Resend Code
          </button>
        ) : (
          <span>Resend available in {formattedTime}</span>
        )}
      </div>

      {/* Verify Button */}
      <Button
        onClick={handleVerify}
        disabled={verificationCode.includes("")}
         className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white
                      font-quicksand font-semibold text-base shadow-lg shadow-primary/25
                      hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 
                      active:translate-y-0 transition-all duration-200
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none
                      flex items-center justify-center gap-2 group cursor-pointer"
      >
        Verify Account
      </Button>
    </div>
  );
};

export default VerificationScreen;