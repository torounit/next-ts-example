import "./Button.css";
import React from "react";

type Prop = {
  primary: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Prop> = ({
  primary,
  backgroundColor,
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
