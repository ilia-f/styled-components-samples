import React from 'react';
import { ButtonLink } from './buttons';
import { PageHeader, Nav } from './general';

export default function Header(props) {
    return (
        <PageHeader>
            <Nav>
                <ButtonLink exact={true} activeClassName='is-active' to="/">Home</ButtonLink>
                <ButtonLink activeClassName='is-active' to="/from-css">From css</ButtonLink>
                <ButtonLink activeClassName='is-active' to="/attrs">Attrs</ButtonLink>
                <ButtonLink activeClassName='is-active' to="/animation">Animation</ButtonLink>
                <ButtonLink activeClassName='is-active' to="/themes">Themes</ButtonLink>
            </Nav>
            {props.children}
        </PageHeader>
    );
}
