import styled, { css } from "styled-components";

const HeadingTypes = styled.div`
    color:${(props)=>props.textcolor};
    font-size:${props=>{
        switch (props.size) {
            case 'small':
                return "1rem";
                break;
            case 'medium':
                return "1.125rem";
                break;
            case 'large':
                return "1.5rem";
                break;
            default:
                return props.size;
                break;
        }
    }}
    
`;
export default HeadingTypes;
