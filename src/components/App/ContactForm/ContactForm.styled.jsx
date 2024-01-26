import styled from "@emotion/styled";

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 20px;
`

export const FormInputStyle = styled.input`
    height: 42px;
    font-size: 16px;
    outline: none;
    border: 1px solid #435674;
    border-radius: 10px;
    transition: border-color .3s linear;
    padding: 0 20px;

    &:is(:hover, :focus) {
        border-color: #137e60
    }
`

export const FormInput = styled.input`
    height: 42px;
    font-size: 16px;
    outline: none;
    border: 1px solid #435674;
    border-radius: 10px;
    transition: border-color .3s linear;
    padding: 0 20px;

    &:is(:hover, :focus) {
        border-color: #137e60
    }
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const FormButton = styled.button`
    height: 42px;
    border: none;
    border-radius: 10px;
    color: #fafafa;
    text-transform: uppercase;
    background-color: #137e60;
    cursor: pointer;
    transition: border-color .3s linear;
`

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;