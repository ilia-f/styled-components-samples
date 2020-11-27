import styled, {css} from "styled-components";

const radiusS = '3px';
const radiusL = '6px';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1em;
    color: white;
    outline: none;
    border-radius: ${radiusL};
    border: 1px solid black;
    padding: 1em;
    margin: 1em;
    flex-grow: 2;
`;

export const Header2 = styled.h2`
    text-decoration: underline;
`;

export const Label = styled.label`
    color: black;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const inputStyles = css`
    border-radius: ${radiusS};
    border: 1px solid black;
    padding: 0.25em 1em;
    font: normal 400 16px/22px "Roboto", sans-serif;
    margin-top: 1em;
    outline: none;
    background: white;
    &::focus {
        background: lightgray;
    }
`;

export const Input = styled.input`${inputStyles}`;
export const Textarea = styled.textarea`${inputStyles}`;

export const Button = styled.button`
    font-size: 1em;
    margin-top: 1em;
    background: black;
    color: white;
    padding: 0.25em 1em;
    border: 1px solid black;
    border-radius: ${radiusS};
    display: block;
    &:hover {
        background: white;
        color: black;
    }
`;
