import React, {useState}from "react";
import CategoryName from "../../Atoms/categoryName/categoryName";
import Heading from '../../Atoms/Heading/Heading';
import {FilterCategories,RangeSlider,Filter} from './filter.styled';
// import MultiRangeSlider from "multi-range-slider-react";
const Filters = () => {
const categories = ["Beverages","Dairy & Eggs","Fresh Fruits & Vegetable","Meat & Fish","Bakery & Snacks","Cooking Oil & Ghee"];
const [minValue, set_minValue] = useState(1);
const [maxValue, set_maxValue] = useState(5);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
return (
    <Filter>
        <FilterCategories>
            <Heading type='large' label="Price"/>
            <RangeSlider
                min={0}
                max={6}
                step={0.5}
                minValue={minValue}
                maxValue={maxValue}        
                barLeftColor='red'
                barInnerColor='blue'
                barRightColor='green'
                thumbLeftColor='lime'
                thumbRightColor='lime'
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </FilterCategories>
        <FilterCategories>
            <Heading type='large' label="Categories"/>
            <div>{categories.map((elements) => (<CategoryName categoryName={elements}/>))}</div>
        </FilterCategories>  
    
    </Filter>
    
)
}
export default Filters;