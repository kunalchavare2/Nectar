import styled from 'styled-components';
export const  FooterContainer =styled.div `
    display:flex;
    justify-content:space-between;  
    padding:1rem 5%;
`;
export const  LogoBlock =styled.div `
    width:20%; 
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
`; 
export const  FooterContent =styled.div `
    font-size:14px;
`;
export const  SocialConnect =styled.div `
    display:flex;
    gap:2rem;
`;
export const  FooterLinks =styled.div ` 
    display:flex;
    flex-direction:column;
    gap:1rem; 
    width:15%;
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
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width: 35%; 
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
    justify-content:space-between;
    padding-left:1rem;
    width:60%;
input {
    border:none; 
    background:transparent;
}
::placeholder{
    color:#fff;
}
button {
    background-color:black;
    color:white;
    padding:10px;
    border-radius:20px;
} 
`;
export const  CopyRights =styled.div ` 
    display:flex;
    padding:1rem 5%;
    border-top:1px solid grey;
    justify-content:space-between; 
`;
export const  PrivacyLinks =styled.div `
    display:flex;
    gap:2rem;
 p {
    font-size:16px;
    font-weight:500;
 }
`;