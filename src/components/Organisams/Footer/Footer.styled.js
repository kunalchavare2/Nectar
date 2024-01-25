import styled from 'styled-components';
import { device } from '../../../utils/constant/style-const';
export const  FooterContainer =styled.div `
    display:grid;
    padding:1rem 5%;
    gap:2rem; 
    grid-template-columns:1fr 1fr;
    @media ${device.tablet} {
        grid-template-columns:2fr 1fr 1fr;
      }
      @media ${device.laptop} {
        grid-template-columns:3fr 1fr 1fr 3fr;
        
    }
`;
export const  LogoBlock =styled.div ` 
grid-column:1/3;
    display:flex;
    flex-direction:column;
  gap:1rem;
    @media ${device.tablet} {
        grid-column:unset;
      }
      @media ${device.laptop} {
        grid-column:unset;
        
    }

`; 
export const  FooterContent =styled.div `
    font-size:14px;
    line-height:1.25;
`;
export const  SocialConnect =styled.div `
    display:flex;
    gap:2rem;
`;
export const  FooterLinks =styled.div ` 
 
    display:flex;
    flex-direction:column;
    gap:1rem;  
    align-items:baseline;
    p{
        font-size:16px;
        font-weight:400;
        color:#000;
    }
    h3 {
        font-size:18px;
        font-weight:700;
        padding-bottom: 1rem;
    }
    .link {
        flex-direction:row;
    }
`;
export const  SubscribeContainer =styled.div `
grid-column:1/3;
  display:flex;
  flex-direction:column;
  justify-content:space-between; 
  @media ${device.tablet} {
    grid-column:1/4;
  }
  @media ${device.laptop} {
    grid-column:unset;
    
}
  P {
    font-size:14px;
    font-weight:400;
    padding:10px 0;
    span {
        text-decoration:underline; 
    }
}
`;
export const  Content =styled.div `
    font-size:26px;
    font-weight:600;
p {
    padding:1rem 0;
    font-size:16px;
    font-weight:400;
}
`;
export const  Subscribe =styled.div `
    border-radius: 20px;
    background-color: grey; 
    align-items:center;
    display:flex;  
   max-width:250px;
    padding: 10px;
    position:relative;
    
input {
    border:none; 
    background:transparent; 
}
.input-icon{
    position:absolute;
} 

::placeholder{
    color:#fff;
    position:absolute;
    left:15%;
}
button {
    background-color:black;
    color:white;
    padding:10px;
    left:70%;
    border-radius:20px;
    position:absolute;
} 
`;
export const  CopyRights =styled.div ` 
    display:flex;
    padding:1rem 5%;
    gap:2rem;
    border-top:1px solid grey;
    flex-direction: column;
    
    @media ${device.tablet} { 
        flex-direction: row;
        justify-content:space-between; 
      }
`;
export const  PrivacyLinks =styled.div `
    display:flex;
    gap:2rem; 
    flex-wrap:wrap;
 p {
    font-size:16px;
    font-weight:500;
 }
`;