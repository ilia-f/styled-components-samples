
import styled, { keyframes } from 'styled-components';
import { color } from './variables';
import {ReactComponent as Logo} from '../logo.svg';

const { foreground, primary, primaryEf } = color;

const rotateCW = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg) }
`;

const rotateCCW = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg) }
`;

const bgMoving = keyframes`
  from {background-position: 0 0; }
  to {background-position: 100% 100%; }
`;

export const Rotate = styled.div`
    display: inline-block;
    animation: ${props => props.back ? rotateCCW : rotateCW} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

export const BgMoving = styled.div`
    & > div{
      background-size: 500% 500%;
      animation: ${bgMoving} 20s linear infinite;
      background-repeat: repeat;
    }
`
export const ReactLogo = styled(Logo)`
    g{
      fill: ${primary};
      &:hover{
        fill: ${primaryEf}
      }
    }
`

export const SvgMask = styled.div`
  display: inline-block;
  width:300px;
  height:300px;
  background: repeating-linear-gradient(${props => props.deg ? (props.deg + ',') : ''} ${foreground} ,${foreground} 10px, transparent 10px, transparent 20px) repeat;
  mask: url(${props => props.svg}) center no-repeat;
`;
