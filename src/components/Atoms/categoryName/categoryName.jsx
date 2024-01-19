import React from "react";
import { InputBlock,Input,Label } from "./categoryName.styled";
const CategoryName = ({categoryName}) => {
    return (
        <>
           <InputBlock>
                <Input type="checkbox" id="categoryName" name="categoryName" />
                <Label for="categoryName">{categoryName}</Label>
           </InputBlock>
        </>
    )
    
}
export default CategoryName;

