import React from "react";
import "./Button.css";

type Prop = {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Prop> = ({
  primary = false,
  backgroundColor,
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary ? "Button--primary" : "Button--secondary";
  return (
    <button
      type="button"
      className={["Button", `Button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
