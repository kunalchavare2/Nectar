import styled  from 'styled-components';
export const  Horizon = styled.div` 
width: 248.187px;
height: 105px;
flex-shrink: 0;
border-radius: 18px;
background: ${props => props.backgroundColor };
display: flex; 
align-items: center;
justify-content: space-evenly;
border:1px solid black;
`;
export const  HorizonImage = styled.img` 
width: 71.898px;
height: 71.898px; 
`;
export const  HorizonText = styled.div` 
color: #3E423F; 
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal; 
text-transform:capitalize; 
`;
export const  Card = styled.div`  
width: 174.5px;
height: 189.106px;
flex-shrink: 0;
border-radius: 18px;  
display: flex; 
background: ${props => props.backgroundColor };
flex-direction:column;
align-items: center;
justify-content: space-evenly;
border:1px solid black;
`;
export const  CardText = styled.div` 
color: #181725;
text-align: center; 
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 137.5% */
letter-spacing: 0.1px; 
text-transform:capitalize; 
`;
export const  CardImage = styled.img` 
width: 102.126px;
height: 67.924px;
flex-shrink: 0;
`;
export const  StyledCard = styled.div` 
display: flex;  
 
`;
 
 