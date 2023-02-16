import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    

    input{
        width: 100%;
        height: 100px;
        border: 0;
        background-color: #212121;
        font-size: 75px;
        font-family: 'Roboto';
        padding: 0 15px;
        text-align: right;
    }

    
    @media screen and (max-width: 600px){
        height: 200px;

        input{
            height: 90%;
        }
    }
`