import React from "react";
import PropTypes from "prop-types";
import { StyledButton, CheckoutContainer, PriceSpan } from "./button.styled";
/**
 * All Buttons for user interaction
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
  /*based on value of disable is true or false the onclick happens*/ 
  const handlleClick = (ev) => {
    if (!disabled && onClick) {
      onClick(ev);
    }
  };
  return (
    <StyledButton
      type="button"
      className={[
        "storybook-button",
        `${isIconButton && "storybook-button--icon"}`,
      ].join(" ")}
      $transparent={transparent}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      onClick={handlleClick}
      {...props}
    >
       {/* prints the  + button and - button i.e icon buttons  */}
      {isIconButton ? icon : null} 
       {/* prints the button with label and price */}
      {label && price && (
        <CheckoutContainer>
          <span>{label}</span>
          <PriceSpan>{price}</PriceSpan>
        </CheckoutContainer>
      )}
      {/* prints the label button only */}
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
  // backgroundColor: "#53B175", // Set a default background color
  disabled: false,
  onClick: undefined,
  price: null,
};

export default Button;
