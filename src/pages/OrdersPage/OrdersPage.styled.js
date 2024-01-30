import styled from "styled-components";
import { color } from "../../utils/constant/style-const";
import { device } from "../../utils/constant/style-const";
export const OrdersPageStyle = styled.div`
  height: inherit; 
  padding:20px;
`; 
export const OrderedList = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;
  @media ${device.tablet} {
    display:flex;
    flex-direction:row; 
    gap:2rem;
  }
`;
export const OrderedItem = styled.div`
display:flex;
justify-content:space-between; 
 
@media ${device.tablet} {

  flex-direction:column;
  gap:1rem; 
  
}

`;
export const OrderContianer = styled.div`
  display:flex; 
  flex-direction:column;
  border-radius: 15px 15px 0 0;
  border:1px solid ${color.green100};
  padding:1rem; 
  gap:1rem;
  margin-bottom:1rem;  
  background-color:${props=>props.theme.cardBackground};

 @media ${device.laptop} { 
  flex-direction:row; 
  justify-content: space-between; 
}
@media ${device.tablet} { 
  flex-direction:row; 
  justify-content: space-between; 
}
`;                      
