import styled from "styled-components";

export const CategoryHeaders= styled.div`
display: flex;
justify-content: space-between; 
padding:1rem;
p {
    color:#53B175;
    font-size: 16px;
}
`; 
export const CategoryProductList= styled.div`
gap: 1rem;
padding: 1rem;  
overflow-x: scroll; 
display: flex;
flex-direction: row; 
-ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
 
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryGroceryList= styled.div`
gap: 1rem;
padding: 1rem;
overflow-x: scroll; 
display: flex;
flex-direction: row; 
-ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
 
  &::-webkit-scrollbar {
    display: none;
  }`

;