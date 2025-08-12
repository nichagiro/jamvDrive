import React from "react";
import Spinner from "./Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined";
  isLoading?: boolean;
};

const baseClasses =
  "rounded-lg text-21 font-medium py-2 px-5 transition-colors duration-200 z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50";

const variants = {
  filled: "bg-primary border border-primary text-darkmode hover:bg-transparent hover:text-primary",
  outlined: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-darkmode",
};

export const Button: React.FC<ButtonProps> = ({ children, className, disabled, isLoading, variant = "filled", ...props }) => (
  <button
    {...props}
    className={`${baseClasses} ${variants[variant]} ${className}`}
    disabled={disabled || isLoading}
  >
    <div className="flex items-center justify-center gap-x-4">
      {children} {isLoading && <Spinner />}
    </div>
  </button>
);

export default Button;
