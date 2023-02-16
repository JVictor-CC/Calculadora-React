import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #000;
    background-color: ${({bgColor}) => bgColor};
    color: #000;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    flex: 1;

    &:hover{
        opacity: 0.6;
    }

    &:active{
        opacity: 1;
    }

    @media screen and (max-width: 600px){
        height: 100%;
    }
`