import styled, { css } from "styled-components";

const SubHeadingTypes = styled.div`
    color:${(props)=>props.textcolor};
    font-size:${props=>{
        switch (props.size) {
            case 'small':
                return "0.81rem";
                break;
            case 'medium':
                return "1rem";
                break;
            case 'large':
                return "1.25rem";
                break;
            default:
                return props.size;
                break;
        }
    }}
    
`;
export default SubHeadingTypes;
