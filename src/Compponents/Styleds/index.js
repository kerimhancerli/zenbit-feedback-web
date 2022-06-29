import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   font-size: 18px;
 `
export const Form = styled.form`
    width: 557px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`;
export const Input = styled.input`
    background-color: #FFFFFF;
    border: 1px solid #DCDCDC;
    padding: 30px 46px;
    color: #2D2D2D;
    border-radius: 10px;
`;

export const Textarea = styled.textarea`
    background-color: #FFFFFF;
    border: 1px solid #DCDCDC;
    padding: 30px 46px;
    resize: none;
    border-radius: 10px;
    color: #2D2D2D;
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #3E3E3E;
`;

export const Button = styled.button`
    color: white;
    background-color: #FAD34F;
    border-radius: 500px;
    padding: 27px 52px;
    border: none;
`;