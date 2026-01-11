import React from "react";
interface CartButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "red" | "blue" | "darkgreen";
  size?: "auto" | "sm" | "mdmin" | "md"  | "lg" | "xl" | "full";
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const CartButton:React.FC<CartButtonProps> = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  size = "auto",
  onClick,
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-green-100 text-primary hover:bg-green-200",
    red: "bg-red-100 text-red-600 hover:bg-red-200",
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    darkgreen:"bg-primary text-white hover:bg-green-700"
    
  };

  const sizes = {
    auto: "",
    sm: "w-22",
    mdmin:"w-28",
    md: "w-32",
    lg: "w-40",
    xl: "w-48",
    full: "w-full",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-1
        
        font-medium text-sm
        rounded-lg
        transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        `}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default CartButton;
