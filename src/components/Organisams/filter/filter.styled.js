import styled from "styled-components";
import MultiRangeSlider from "multi-range-slider-react";
export const FilterCategories = styled.div`
    width:90%;    
    display:flex;
    flex-direction: column;
    gap:10px;
    
`;
export const RangeSlider = styled(MultiRangeSlider)`
width:100%;
max-width:400px;
margin-top:20px;
`

export const Filter = styled.div`
display:flex;
flex-direction:column;
gap:30px;
background:#F2F3F2;
max-width:500px;
padding:20px;
`;