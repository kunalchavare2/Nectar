import React from "react";
import PropTypes from "prop-types";
import { StyledButton, CheckoutContainer, PriceSpan } from "./button.styled";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  icon,
  label,
  disabled,
  onClick,
  price,
  transparent,
  backgroundColor,
  ...props
}) => {
  const isIconButton = Boolean(icon);
  const handlleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <StyledButton
      type="button"
      className={[
        "storybook-button",
        `${isIconButton && "storybook-button--icon"}`,
      ].join(" ")}
      transparent={transparent}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={handlleClick}
      {...props}
    >
      {isIconButton ? icon : null}
      {label && price && (
        <CheckoutContainer>
          <span>{label}</span>
          <PriceSpan>{price}</PriceSpan>
        </CheckoutContainer>
      )}
      {label && !price && !isIconButton && label}
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  transparent: false,
  backgroundColor: "#53B175", // Set a default background color
  disabled: false,
  onClick: undefined,
  price: null,
};

export default Button;
