import styled from "styled-components";
export const CarouselContianer = styled.div` 
width:100%;
position:relative;
max-width:100%;
max-height:500px;
overflow:hidden;
`;
 
export const CarouselImage = styled.div` 
width:100%;
position:relative;
img{
    width:100%; 
    height:100%;
    display:block;
    margin:0 auto;
    object-fit:contain;
}
 
`;
export const CarouselContent = styled.div` 
text-align:center; 
position:absolute;
text-align:center;
top:50%; 
left:30%;
div{
    font-size:4.25rem;
}
`;
 
export const CarouselButtons = styled.div`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
   
`;

 
 
  