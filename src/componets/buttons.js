import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {color, vars} from './variables';

const { foreground, foregroundEf, background, backgroundEf, primary, primaryEf } = color;
const { radiusS, borderWidth } = vars;

export const Button = styled.button.attrs(props => ({
    size: props.large ? '0.5em 2em' : '0.25em 1em',
}))`
    background: ${(props) => (props.primary ? primary : background)};
    outline: none;
    color: ${(props) => (props.primary ? foregroundEf : foreground)};
    font-size: 1em;
    padding: ${props => props.size};
    border: ${borderWidth} solid ${(props) => (props.primary ? foregroundEf : foreground)};
    border-radius: ${radiusS};
    display: block;
    text-decoration: none;

    &:hover {
        background: ${(props) => (props.primary ? primaryEf : backgroundEf)};
        color: ${foreground};
    }

    &.is-active {
        background: ${primary};
        &:hover {
            background: ${primaryEf};
        }
    }
`;

export const ButtonLink = Button.withComponent(NavLink);

export const Link = styled(NavLink)`
    color: ${foreground};
    font-weight: bold;
    margin: 5px 10px;
    &:hover {
        text-decoration:none;
        color: ${foregroundEf};
    }
`;

