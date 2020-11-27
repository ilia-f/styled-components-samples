import styled from 'styled-components';
import {color, vars} from './variables';
import { Button, ButtonLink } from './buttons';

const { foreground, background, backgroundEf, primaryEf } = color;
const { radiusL } = vars;

export const Flex = styled.div.attrs(props=>({
    direction: props.vertical ? 'column' : 'row',
}))`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    max-width: 100%;
    flex-wrap: wrap;

    & > *{
        margin: ${props => (props.vertical ? '1em 0' : '0 1em')};
    }
`;

export const Span = styled.div`
    color: ${foreground};
`;

export const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${backgroundEf};
    border-radius: ${radiusL};
    
    ${Button},
    ${ButtonLink} {
      margin: 1em
    }
`;

export const PageWrapper = styled.div`
    font: normal 400 16px/22px "Roboto", sans-serif;
    min-height: 100vh;
    background: ${background};
    overflow: hidden;
`;
export const PageInner = styled.div`
    padding: 20px;
`;

export const PageContent = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${primaryEf};
    margin: 2em 0 1em;
`;

export const Nav = styled.nav`
    display: flex;
    
`;