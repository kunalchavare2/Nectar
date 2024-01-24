import React from "react";
import { useState,useEffect } from "react";
import Heading from "../../Atoms/Heading/Heading";
import Text from "../../Atoms/Text/Text";
import {
  CarouselContianer,
  CarouselImage,
  CarouselContent,
  CarouselButtons,
} from "./HomeCarousel.styled"; 
import Button from "../../Atoms/Button/Button";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
const HomeCarousel = () => {
  const [currrentImg, setCurrentImg] = useState(0);
  const carouselData = [
    {
      imgUrl: require('../../../assets/images/carouselimages/Fruits.jpg') ,
      heading: (
        <Heading type={"large"} tcolor={"#fff"} label={"Fresh Vegetables"} />
      ),
      subheading: (
        <Text type={"large"} label={"Get Up to 50% OFFF"} tcolor="#53B175" />
      ),
    },
    {
      imgUrl:  require('../../../assets/images/carouselimages/pulses.jpg'),
      heading: <Heading type={"large"} tcolor={"#fff"} label={"Pulses"} />,
      subheading: (
        <Text type={"large"} label={"Get Up to 40% OFFF"} tcolor="#53B175" />
      ),
    },
    {
      imgUrl:  require('../../../assets/images/carouselimages/Pulses1.jpg'),
      heading: <Heading type={"large"} tcolor={"#fff"} label={"Pulses"} />,
      subheading: (
        <Text type={"large"} label={"Get Up to 40% OFFF"} tcolor="#53B175" />
      ),
    },
    {
      imgUrl:  require('../../../assets/images/carouselimages/Meats.jpg') ,
      heading: <Heading type={"large"} tcolor={"#fff"} label={"Fresh Meat"} />,
      subheading: (
        <Text type={"large"} label={"Get Up to 50% OFFF"} tcolor="#53B175" />
      ),
    }, 
  ];
  const prev = () => {
    setCurrentImg(
      (prevImg) => (prevImg - 1 + carouselData.length) % carouselData.length
    );
  };
  const next = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % carouselData.length);
  }; 
  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 2000);  

    return () => {
      clearInterval(intervalId);
    };
  }, [currrentImg]);
  return (
    <>
      <CarouselContianer>
        <CarouselImage><img src={carouselData[currrentImg].imgUrl}/></CarouselImage>
        <CarouselContent>
          {carouselData[currrentImg].heading}
          {carouselData[currrentImg].subheading}
        </CarouselContent>

        <CarouselButtons>
          <Button icon={<FaChevronLeft />} onClick={prev}/> 
          <Button icon={<FaChevronRight />} onClick={next}/> 
        </CarouselButtons>
      </CarouselContianer>
    </>
  );
};
export default HomeCarousel;
