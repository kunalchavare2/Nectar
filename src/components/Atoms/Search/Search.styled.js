import styled, { css } from "styled-components";
export const Search = styled.div`
    background-color:#F2F3F2;
    padding:15px;
    display:inline-flex;
    border-radius:15px;
    align-items:center;
    position:relative;
    width:85%;
`;
export const Inputbar = styled.input`
    border:none;
    outline:none;
    background-color: transparent;
    padding:5px;
    &::placeholder {
        font-size:0.875rem;
        color:#7C7C7C;
    }
`;
export const Button  = styled.button`
    position:absolute;
    right:10px;
    border:none;
    padding:0px;
`;
