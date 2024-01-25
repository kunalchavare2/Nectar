import React from "react";
import PropTypes from "prop-types";
import {
  StyledCard,
  Horizon,
  HorizonImage,
  HorizonText,
  Card,
  CardText,
  CardImage,
} from "./Category.styled";
// products Category component
const Category = ({
  imgSrc,
  text,
  isCard = true,
  backgroundColor,
  HandleClick,
  ...props
}) => {
  return (
    <StyledCard isCard={isCard} onClick={() => HandleClick(text)} {...props}>
      {isCard ? (
        <> 
        {/* if value of iscard is true it returns the card styles */}
          <Card backgroundColor={backgroundColor}>
            <CardImage src={imgSrc} alt="Category Image" />
            <CardText>{text}</CardText>
          </Card>
        </>
      ) : (
        <>
         {/* if value of iscard is false it returns the horizontal card styles */}
          <Horizon backgroundColor={backgroundColor} {...props}>
            <HorizonImage src={imgSrc} alt="Category Image" />
            <HorizonText>{text}</HorizonText>
          </Horizon>
        </>
      )}
    </StyledCard>
  );
};

Category.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCard: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
Category.defaultProps = {
  isCard: true, //default value of iscard is set to true
  backgroundColor: "#B7DFF5", //default value of background color of card is set to #B7DFF5
};
export default Category;
