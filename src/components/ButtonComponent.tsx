import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  primary: boolean;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ButtonComponent: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
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
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
