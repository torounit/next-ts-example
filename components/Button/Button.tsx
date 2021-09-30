import React from "react";
import styles from "./Button.module.css";

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
  const mode = primary ? styles.primary : styles.secondary;
  const sizeMode = styles[`${size}`];
  return (
    <button
      type="button"
      className={[styles.button, mode, sizeMode].join(" ")}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
