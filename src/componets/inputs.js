import styled, { css } from 'styled-components';
import {color, vars} from './variables';

const { primary, foreground, background, backgroundEf } = color;
const { radiusS, borderWidth } = vars;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 1em;

`;

export const Label = styled.label.attrs(props => ({
  direction: props.horizontal ? 'row' : 'column',
  justifyContent: props.horizontal ? 'space-between' : 'left',
}))`
   color: ${foreground};
   margin: 1em 0;
   display: flex;
   flex-direction: ${props => props.direction};
   justify-content: ${props => props.justifyContent};
`;

const inputStyles = css`
    font: normal 400 16px/22px "Roboto", sans-serif;
    border: ${borderWidth} solid ${(props) => (props.primary ? props.theme.primaryEf : props.theme.foreground)};
    border-radius: ${radiusS};
    margin: ${(props) => props.size} 0;
    padding: ${(props) => props.size || '10px'};
    outline: none;
    background: ${background};
    &:focus {
        background: ${backgroundEf};
    }
`;

export const Input = styled.input.attrs(() => ({
  minlength: '3'
}))`${inputStyles}`;

export const Textarea = styled.textarea.attrs(props => ({
  rows: props.large ? '10' : '3',
}))`
    ${inputStyles}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${foreground};
  stroke-width: 2px;
`;

const CheckboxInner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? primary : background)};
  border-radius: 3px;
  transition: all 150ms;
  border: ${borderWidth} solid ${(props) => (props.checked ? primary : foreground)};
  border-radius: ${radiusS};
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <CheckboxInner checked={checked} >
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
      </CheckboxInner>
    </CheckboxContainer>
)
