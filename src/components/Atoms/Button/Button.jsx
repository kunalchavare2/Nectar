import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./button.styled";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  CartIcon,
  label,
  transparent,
  backgroundColor,
  ...props
}) => {
  // const CartIconClass = CartIcon ? `storybook-button--${CartIcon}` : '';
  const isIconButton = Boolean(CartIcon);
  return (
    <StyledButton
      type="button"
      className={[
        "storybook-button",
        isIconButton && "storybook-button--icon",
      ].join(" ")}
      transparent={transparent}
      backgroundColor={backgroundColor}
      small={props.small || isIconButton}
      {...props}
    >
      {isIconButton ? CartIcon : label}
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  small: PropTypes.bool,
};

Button.defaultProps = {
  transparent: false,
  backgroundColor: "#53B175", // Set a default background color
  small: false,
};

export default Button;
