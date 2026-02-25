export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};


export type SignupFormData = {
  fullName: string;
  email: string;
  password: string;
  terms: boolean;
};



export type SignUpFormProps = {
  handleSignupSubmit: (data: SignupFormData) => void;
  isLoading: boolean;
};


export type VerificationScreenProps = {
  formData: {
    email: string;
  };
  verificationCode: string[];
  setVerificationCode: React.Dispatch<React.SetStateAction<string[]>>;
  timer: number;
  canResend: boolean;
};