import React from 'react';

import { Title, Flex } from '../componets/general.js';

import logo from '../logo.svg';

export default function Home() {
    return (
        <>
          <Title>Styled components</Title>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Flex>&lt; 💅🏾 &gt;</Flex>
        </>
    );
}