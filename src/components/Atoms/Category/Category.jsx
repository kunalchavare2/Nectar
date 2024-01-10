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

const Category = ({ imgSrc, text, isCard, backgroundColor, onClick }) => {
  const HandleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledCard isCard={isCard} onClick={HandleClick}>
      {isCard ? (
        <>
          <Card backgroundColor={backgroundColor}>
            <CardImage src={imgSrc} alt="Category Image" />
            <CardText>{text}</CardText>
          </Card>
        </>
      ) : (
        <>
          <Horizon backgroundColor={backgroundColor}>
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
  isCard: true,
  backgroundColor: "#B7DFF5",
};
export default Category;
