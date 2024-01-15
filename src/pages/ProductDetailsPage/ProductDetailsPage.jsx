import React, { useState } from "react";
import Button from "../../components/Atoms/Button/Button";
import Heading from "../../components/Atoms/Heading/Heading";
import Subheading from "../../components/Atoms/Subheading/Subheading";
import Eggbasket from '../../../src/assets/images/Egg-basket.png';
import { FaMinus, FaPlus } from "react-icons/fa6";
import {Quantity ,Price,ProductImage,ProductHeadingfav,ProductCountPrice,ProductDetailPage,ProductCount,ProductDescription,RegHeart,Heart,ProductHeading,Category} from './ProductDetailspage.styled';

const  ProductDetailsPage = ({productName,productDetails,price,itemCategory}) => {
    const [quantity,setQuantity] =useState(1);
    const [inFavourite, setInFavourite] = useState(false)
    const count= (sign) => {     
        // if quantity = 
        setQuantity(sign === "plus" ? quantity+1 : quantity-1);
    }
    const favicon = () => {
        setInFavourite(inFavourite ? false : true)
    }
    return (
        <ProductDetailPage>
            <ProductImage src={Eggbasket} alt="eggbasket" />
            <ProductHeadingfav>
                <ProductHeading>
                    <Heading type ="large" label={productName}/>
                    <Subheading type="medium" label="1kg,Price"/>
                </ProductHeading>
                {inFavourite ? <Heart onClick={favicon}/>:<RegHeart onClick={favicon} colorValue="#7a7a7a"/>}
            </ProductHeadingfav> 
            <Category>{itemCategory}</Category>
            <ProductCountPrice>
                <ProductCount>
                    <Button
                        icon={<FaMinus />}
                        transparent={true}
                        onClick={()=>count("minus")}>
                    </Button>
                    <Quantity>{quantity}</Quantity>
                    <Button
                        icon={<FaPlus />}
                        transparent={false}
                        onClick={()=>count("plus")} >
                    </Button>
                </ProductCount>
                <Price>${price}</Price>
            </ProductCountPrice>
            <ProductDescription> 
                <Heading type ="small" label="Product Details"/>
                <Subheading type="small" label={productDetails}/>
            </ProductDescription>
        </ProductDetailPage>
        
    );
}
export default ProductDetailsPage;