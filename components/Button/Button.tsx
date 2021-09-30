import React, { ReactNode } from "react";
import "./Button.css";

type Prop = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button: React.VFC<Prop> = ({
  primary = false,
  backgroundColor,
  size = "medium",
  children,
  startIcon,
  endIcon,
  ...props
}) => (
  <button
    type="button"
    className={`Button Button--${size} ${
      primary ? "Button--primary" : "Button--secondary"
    }`}
    style={backgroundColor && { backgroundColor }}
    {...props}
  >
    {startIcon ? <span className="Button-startIcon">{startIcon}</span> : null}
    <span className="Button-body">{children}</span>
    {endIcon ? <span className="Button-endIcon">{endIcon}</span> : null}
  </button>
);

export default Button;
