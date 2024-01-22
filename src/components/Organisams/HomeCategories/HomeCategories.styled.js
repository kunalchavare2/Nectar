import styled from "styled-components";

export const CategoryHeaders= styled.div`
display: flex;
justify-content: space-between; 
p {
    color:#53B175;
}
`;
export const Title = styled.div` font-size:24px;`;
export const CategoryProductList= styled.div`
gap: 1rem;
padding: 1rem;
overflow-x: scroll;
overflow-y: hidden;
display: flex;
flex-direction: row;
align-items: stretch;
flex-wrap: nowrap;
`;