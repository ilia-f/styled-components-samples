import React from 'react';

import { Button, CyanButton, SLink, ButtonLink, ReversedButton } from '../componets/buttons.js';
import { Rotate } from '../componets/animation.js';
import { SForm, SInput, SSelect, STextarea, PasswordInput } from '../componets/inputs.js';
import { Title, SSpan, Wrapper, PageContent, PageHeader, PageInner, PageWrapper, SFlex } from '../componets/general.js';




export default function ComponentsPage() {

    return (
        <>
          <Title>Components</Title>
        
            <Button>Normal</Button>
            <Button primary>Primary</Button>

            <Button as={ReversedButton} >Reversed Button</Button>
            <CyanButton>Cyan Button</CyanButton>
            <Button as="a" href="/">
                Link with Button styles
            </Button>
            <CyanButton theme={{ borderWidth: "0" }} as="a" href="/">
                Link with Cyan Button styles
            </CyanButton>
            <ButtonLink to='#'>ButtonLink</ButtonLink>
            <SLink to='#'>SLink</SLink>
            <SInput placeholder="A small text input" />
            
            <SInput theme={{ radiusS: "40px" }} placeholder="A bigger text input" size="2em" />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" size="2em" />
            <Rotate><SSpan>&lt; 💅🏾 &gt;</SSpan></Rotate>
        </>
    );
}